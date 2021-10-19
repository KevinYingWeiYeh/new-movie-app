import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { AppStyles } from "./App.styles";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPlayingPressed: true,
      isOffLine: false,
      modalVisible: false,
      dataSource: null,
      playingPage: 1,
      upcomingPage: 1,
      playingTotalPage: null,
      upcomingTotalPage: null,
      item: {},
    };
    this.pressTable = this.pressTable.bind(this);
    this.pageChange = this.pageChange.bind(this);
    this.pressRow = this.pressRow.bind(this);
    this.pressClose = this.pressClose.bind(this);
  }

  componentDidMount() {
    this.genresFetch();
    this.movieFetch();
  }

  genresFetch() {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=cc79bee81cab976b941237e667cd8bdd&language=en-U";
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        let genres = {};
        genres = responseJson.genres.reduce((a, e) => {
          a[e.id] = e.name;
          return a;
        }, {});
        this.setState({ genres: genres });
      })
      .catch(() => this.setState({ isOffLine: true })); // Display no internet when fetching goes wrong
  }

  movieFetch() {
    var page = this.state.isPlayingPressed
      ? this.state.playingPage
      : this.state.upcomingPage;
    var url = this.state.isPlayingPressed
      ? "https://api.themoviedb.org/3/movie/now_playing?api_key=cc79bee81cab976b941237e667cd8bdd&language=en-US&page="
      : "https://api.themoviedb.org/3/movie/upcoming?api_key=cc79bee81cab976b941237e667cd8bdd&language=en-US&page=";
    return fetch(url + page)
      .then((response) => response.json())
      .then((responseJson) => {
        if (!this.state.playingTotalPage && this.state.isPlayingPressed) {
          this.setState({
            isLoading: false,
            dataSource: responseJson.results,
            playingTotalPage: responseJson.total_pages,
          });
        } else if (
          !this.state.upcomingTotalPage &&
          !this.state.isPlayingPressed
        ) {
          this.setState({
            isLoading: false,
            dataSource: responseJson.results,
            upcomingTotalPage: responseJson.total_pages,
          });
        } else {
          this.setState({
            isLoading: false,
            dataSource: responseJson.results,
          });
        }
      })
      .catch(() => this.setState({ isOffLine: true })); // Display no internet when fetching goes wrong
  }

  pressTable(key) {
    if (key === this.state.isPlayingPressed) {
      this.setState({ isPlayingPressed: !this.state.isPlayingPressed }, () =>
        this.movieFetch()
      );
    }
  }

  pressRow(item) {
    this.setState({ item: item });
  }

  pressClose(e) {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  pageChange(state) {
    if (this.state.isPlayingPressed) {
      if (
        this.state.playingPage < this.state.playingTotalPage &&
        state === "Last"
      ) {
        this.setState({ playingPage: ++this.state.playingPage }, () =>
          this.movieFetch()
        );
      } else if (this.state.playingPage > 1 && state === "Next") {
        this.setState({ playingPage: --this.state.playingPage }, () =>
          this.movieFetch()
        );
      }
    } else {
      if (
        this.state.upcomingPage < this.state.upcomingTotalPage &&
        state === "Last"
      ) {
        this.setState({ upcomingPage: ++this.state.upcomingPage }, () =>
          this.movieFetch()
        );
      } else if (this.state.upcomingPage > 1 && state === "Next") {
        this.setState({ upcomingPage: --this.state.upcomingPage }, () =>
          this.movieFetch()
        );
      }
    }
  }

  render() {
    if (this.state.isOffLine) {
      return (
        <View style={AppStyles.noInternet}>
          <Text> Unable to connect internet </Text>
        </View>
      );
    }
    if (this.state.isLoading) {
      return (
        <View style={AppStyles.loading}>
          <ActivityIndicator size="large" animating={true} />
        </View>
      );
    }

    return (
      <SafeAreaView style={AppStyles.container}>
        {this.state.modalVisible ? (
          <View style={AppStyles.postContainer}>
            <TouchableHighlight
              style={AppStyles.button}
              underlayColor="#ddd"
              onPress={this.pressClose}
            >
              <Text style={AppStyles.buttonText}>Close</Text>
            </TouchableHighlight>
            <View style={AppStyles.detailInfo}>
              <Image
                source={{
                  uri:
                    "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
                    this.state.item?.poster_path,
                }}
                style={AppStyles.detailImage}
                resizeMode={"stretch"}
              />
              <View style={AppStyles.overviewContainer}>
                <Text style={AppStyles.titleHeadLine}>
                  {this.state.item.title}
                </Text>
                <Text style={AppStyles.titleText}>
                  Voter Rate:{" "}
                  {this.item?.vote_average === 0
                    ? "TBA"
                    : this.state.item?.vote_average}
                </Text>
                <Text style={AppStyles.titleText}>
                  Release Date: {this.state.item.release_date}
                </Text>
              </View>
            </View>
            <View>
              <Text style={AppStyles.overviewTitle}>OverView:</Text>
              <Text style={AppStyles.feedText}>{this.state.item.overview}</Text>
            </View>
            {/* Fallout the empty space between to the content */}
            <View style={{ flex: 1 }} />
          </View>
        ) : (
          <>
            <View style={AppStyles.homePageContainer}>
              <TouchableHighlight
                style={
                  !this.state.isPlayingPressed
                    ? AppStyles.tableActive
                    : AppStyles.table
                }
                onPress={this.pressTable.bind(this, false)}
                underlayColor="#ddd"
              >
                <Text
                  style={
                    !this.state.isPlayingPressed
                      ? AppStyles.tableTextActive
                      : AppStyles.tableText
                  }
                >
                  Now Playing
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={
                  this.state.isPlayingPressed
                    ? AppStyles.tableActive
                    : AppStyles.table
                }
                onPress={this.pressTable.bind(this, true)}
                underlayColor="#ddd"
              >
                <Text
                  style={
                    this.state.isPlayingPressed
                      ? AppStyles.tableTextActive
                      : AppStyles.tableText
                  }
                >
                  Upcoming Movies
                </Text>
              </TouchableHighlight>
            </View>
            <FlatList
              style={{ marginTop: 10 }}
              data={this.state.dataSource}
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight
                    key={item.key}
                    underlayColor="#ddd"
                    onPress={() => {
                      this.setState({ item });
                      this.pressClose();
                    }}
                  >
                    <View style={AppStyles.feed}>
                      <Image
                        source={{
                          uri:
                            "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
                            item.poster_path,
                        }}
                        style={{ height: 60, width: 60 }}
                      />
                      <View style={AppStyles.genreDetailContainer}>
                        <Text style={AppStyles.feedText}> {item.title} </Text>
                        <Text style={AppStyles.genre}> {item.genre} </Text>
                      </View>
                      <View>
                        <Text>{Math.round(item.popularity)}</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                );
              }}
            />
            <View style={AppStyles.paginationContainer}>
              <TouchableHighlight
                style={AppStyles.button}
                onPress={this.pageChange.bind(this, "Next")}
                underlayColor="#ddd"
              >
                <Text style={AppStyles.buttonText}>LastPage</Text>
              </TouchableHighlight>
              <Text style={AppStyles.page}>
                {this.state.isPlayingPressed ? (
                  <Text>
                    {" "}
                    Page: {this.state.playingPage} /{" "}
                    {this.state.playingTotalPage}
                  </Text>
                ) : (
                  <Text>
                    {" "}
                    Page: {this.state.upcomingPage} /{" "}
                    {this.state.upcomingTotalPage}
                  </Text>
                )}
              </Text>
              <TouchableHighlight
                style={AppStyles.button}
                onPress={this.pageChange.bind(this, "Last")}
                underlayColor="#ddd"
              >
                <Text style={AppStyles.buttonText}>NextPage</Text>
              </TouchableHighlight>
            </View>
          </>
        )}
      </SafeAreaView>
    );
  }
}
