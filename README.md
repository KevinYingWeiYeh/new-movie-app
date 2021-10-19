# React Native Movie App

It provides you the information what is showing and what are upcoming movies.

## System Requirement:
MacOS: Big Sur Version 11.6 or more
  - Xcode: Version 13.0 or more
  - IOS Simulator (Require setting in Xcode to active it) 
  - Android Studio: Android Studio Arctic Fox | 2020.3.1 Patch 2
  - Android SDK: API Level 30 or above
  - Android AVD Manager (Android Virtual Device Manager) (Require setting in Android Studio to active it)

Windows: Windows 10
  - Android Studio: Android Studio Arctic Fox | 2020.3.1 Patch 2
  - Android SDK: API Level 30 or above (Require to download in Android Studio)
  - Android AVD Manager (Android Virtual Device Manager) (Require setting in Android Studio to active it)

## Software Requirement:
- Node.js: Version 14.18 or above
  Installation instruction [pip](https://nodejs.org/en/download/)
- React Native CLI:
  Installation instruction [pip](https://reactnative.dev/docs/environment-setup)
- Expo CLI: Version 4.12.1 or above
  Installation instruction [pip](https://reactnative.dev/docs/environment-setup)
```
npm install --global expo-cli
```

## Preparation:
In your project folder run this:
```
expo doctor
```
To make sure you get all of section passed as the result like this:
```
🎉 Didn't find any issues with the project!
```
If any issues found. Please follow the instruction and fix those issues.

## Starting Project: 
Require iOS simulator opened or Android emulator opened to allow Expo Metro Bundler to connect to them.

In terminal 
- With Metro Bundler (Recommended)
```
npm i
expo start 
// or 
npm start
```
Your default browser will open one new page with Metro Bundler
In the Metro dashboard, you might choose different devices to display the project at the same time.
1. iOS simulator
2. Android device/emulator
3. Run in web browser
4. Display it on your phone/tablet devices, but it requires download expo client side app either iOS or Android.

- Without Metro Bundler
Using Expo CLI
```
npm i
expo start --android
// or
expo start --ios
// or
expo start --web
```

Using mpn
```
npm i
npm run android
// or
npm run ios
// or
npm run web
