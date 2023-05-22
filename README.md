<!-- Title -->
<h1 align="center">
  MyFone
</h1>

<!-- Header -->
<p align="center">
  <b>MyFone is a react native application for recharging, changing plans and providing feedbacks to the mobile phone service provider. The application provides option for you to register your mobile number, change the existing plan and provide feedback under various categories.</b>
  <br />

  <p align="center">
    <!-- iOS -->
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
    <!-- Android -->
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
    <!-- Web -->
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </p>
</p>

<!-- Body -->
```sh
npm start
```

## Sections

- [App flow](#app-flow)
- [Prerequisites](#prerequisites)
- [Base dependencies](#base-dependencies)
- [Features](#features)
- [Usage](#usage)
- [Folder structure](#folder-structure)

## App flow

1. <b>Splash screen</b>: This screen will be displayed when the application is loading.
<img width="175" alt="Splash" src="https://user-images.githubusercontent.com/25457325/236615306-797f69b7-7319-48c4-8db8-02f359de53f2.png" />

2. <b>Signup screen</b>: User can register with their phone number, enter preferred pin and confirm the pin. This screen will be shown only when the user using the application for the first time. Once registered, for subsequent logins only login screen will be displayed.
<img width="175" alt="Sign Up" src="https://user-images.githubusercontent.com/25457325/236615787-51632e15-f30f-478f-b829-bb23bc9d17e9.png" />

3. <b>Login screen</b>: This screen displays the text input for user to enter the pin number. Once entered, if the entry is correct user will be navigated to home screen. Else will remain in the same screen.
<img width="175" alt="Login" src="https://user-images.githubusercontent.com/25457325/236615819-4e9a7a7c-f359-4bba-96c2-e99f496c9fe2.png" />

4. <b>Home scree</b>n: This screen shows the user details such as phone number, existing plan, remaining data, bill amount, due date of paying bill etc.
<img width="175" alt="Home" src="https://user-images.githubusercontent.com/25457325/236615829-b5742f88-2413-4bcf-b25a-9dab4dc26383.png" />

5. <b>Change Plan screen</b>: This screen allows user to change their existing plan to a new one. User can click confirm plan button to switch to a new plan. Once clicked appropriate message will be displayed.
<img width="175" alt="Change Plan" src="https://user-images.githubusercontent.com/25457325/236615852-217e5026-c989-4274-ab06-759357612ae1.png" />
<img width="175" alt="Change Plan Submit" src="https://user-images.githubusercontent.com/25457325/236615855-e1b2ab4a-5766-411c-93ec-fa87a985affc.png" />

6. <b>Contact Us screen</b>: This screen allows user to provide feedback and complaint under various categories. Categories include Feedback, Internet access, Value added services, Port number, Roaming, General.
<img width="175" alt="Contact Us" src="https://user-images.githubusercontent.com/25457325/236615871-63facbf7-4d55-4d79-bbe8-21a45e02b219.png" />
<img width="175" alt="Contact Us Issue Picker" src="https://user-images.githubusercontent.com/25457325/236615881-e469ab66-5b4f-45ef-ba6c-d6b8b67c4276.png" />

Once submitted successfully an alert message should be displayed stating 'Issue submitted successfully' as shown below.

<img width="175" alt="Contact Us Submit" src="https://user-images.githubusercontent.com/25457325/236615887-85d3573b-5cf0-4ed3-95f8-e95d6df8d850.png" />

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)
- [Expo](https://docs.expo.dev/develop/development-builds/installation/)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.

## Features

- Login users.
- Home page displays current plan of user, data used, bill amount, due date of bill payment.
- Allow user to select a plan.
- User can raise complaints or feedback about MyFone service.

## Usage

### Option 1: Using React-Native-Rename

You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

Note: Please read the Setup environments section that is below in this file for more information about the execution scripts.

### Option 2: Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `controllers`: Folder to store all your network logic (you should have one controller per resource).
  - `localization`: Folder to store the languages files.
  - `navigation`: Folder to store the navigators.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.js`
      - `Screen.styles.js`
      - `Screen.test.js`
  - `selectors`: Folder to store your selectors for each reducer.
  - `storage`: Folder that contains the application storage logic.
  - `store`: Folder to put all redux middlewares and the store.
  - `test-utils`: Folder to store tests-related utilities and components.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

