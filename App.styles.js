import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  tableActive: {
    width: "50%",
    height: 50,
    backgroundColor: "#48BBEC",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  table: {
    width: "50%",
    height: 50,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    borderColor: "#48BBEC",
    borderWidth: 1,
  },
  tableTextActive: {
    fontSize: 18,
    color: "#FFF",
    alignSelf: "center",
  },
  tableText: {
    fontSize: 18,
    color: "#48BBEC",
    alignSelf: "center",
    fontWeight: "700",
  },
  feed: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D7D7D7",
    borderBottomWidth: 1,
  },
  feedText: {
    fontSize: 18,
    color: "#000",
    padding: 5,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  button: {
    backgroundColor: "#48BBEC",
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    borderRadius: 30,
    margin: 5,
  },
  buttonText: {
    alignSelf: "stretch",
    fontSize: 18,
    color: "#FFF",
    padding: 10,
    alignItems: "stretch",
    textAlign: "center",
  },
  page: {
    alignSelf: "center",
    fontSize: 15,
    padding: 5,
    textAlign: "center",
    width: "100%",
  },
  genre: {
    fontSize: 13,
    color: "#999",
  },
  titleHeadLine: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    padding: 10,
    textAlign: "center",
  },
  titleText: {
    fontSize: 18,
    color: "#000",
    padding: 5,
    textAlign: "center",
  },
  noInternet: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  loading: { flex: 1, justifyContent: "center" },
  postContainer: {
    marginTop: 10,
    flex: 1,
    width: "100%",
    maxWidth: 800,
    justifyContent: "center",
  },
  detailInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#EEE",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
  },
  detailImage: { height: 300, width: "50%" },
  overviewContainer: {
    backgroundColor: "#EEE",
    width: "50%",
    justifyContent: "space-evenly",
  },
  overviewTitle: {
    fontSize: 22,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  homePageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: 50,
  },
  genreDetailContainer: { paddingLeft: 5, width: "70%" },
  paginationContainer: {
    display: "flex",
    borderColor: "#EEE",
    borderTopWidth: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    width: "70%",
  },
});

export { AppStyles };
