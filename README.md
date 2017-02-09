# Ionic Manatee Works Starter App

## Description

This is a starter app for Manatee Works barcode scanner, the cordova platform, and Ionic which uses cordova to handle native functions on your webView app. Some knowledge of the ionic platform is required to use this app.

## Dependencies

- Ionic CLI installed (required) 
- Cordova 5.x.x installed (required)
- node
- git
- npm
- \***Android** and/or iOS environment installed (optional, but required if you don't have devices to test)


## Usage

Clone this project and run the following commands in your terminal:

```ssh
$ cd manateeworks-barcodescanner-starter && npm install
```

When installation finishes, you need to put your credentials MW_LICENSE_KEY generated on [MWDN](https://manateeworks.com/lpr?type=evaluation) inside the `package.json` file.

After that, you need to restore the state of the project and to do this, please run:

```ssh
$ ionic state restore
```

When restore is finished, do:

#### iOS

Just run your project using the following commands:

```ssh
$ ionic build ios
$ ionic run ios
```


#### Android

Just run the following command to open the project inside a device connected:

```ssh
$ ionic build android
```

Note: when building for ios, it could complain that it doesn't have a signing profile, easily fixed within xcode. 

## Screenshots

TODO ADD SCREENSHOTS

## Observations

This starter is using [Manateeworks Barcode Scanner Phonegap Plugin](https://github.com/manateeworks/phonegap-manateeworks-v3.git)

## App Structure

The app will build an Ionic 1 Structured project. One that lets you create history lists that hold scanning results. The scanner starts in a cropped view. Saves history lists in localStorage. 

## License

[Manatee Works](https://manateeworks.com) © Manatee Works
