# Ionic Manatee Works Starter App

## Description

This is a starter app for Manatee Works Barcode Scanner and Ionic which uses Cordova to handle native functions on your webView (angularJS) app. Knowledge of the Ionic platform is required to modify this app.

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


## Observations

When installation finishes, you need to put your credentials MW_LICENSE_KEY generated on [MWDN](https://manateeworks.com/lpr?type=evaluation) in the device ready event. To do this, open up the js/app.js file and fine the keys object

```javascript
                  var keys = {
                      'Android'   : "VALID_ANDROID_KEY",
                      'iOS'       : "VALID_IOS_KEY",
                      'Win32NT'   : "VALID_WIN_WP8_KEY",
                      'windows'   : "VALID_WIN_10_UWP_KEY"
                  };
``` 
Change the keys for your desired platform appropriately. 


This starter is using [Manateeworks Barcode Scanner Phonegap Plugin](https://github.com/manateeworks/phonegap-manateeworks-v3.git), so if you need more informations check the readme there.

## App Structure

The app will build an Ionic 1 Structured project. One that lets you create history lists that hold scanning results. The scanner starts in a cropped view. Saves history lists in localStorage. 

## License

[Manatee Works](https://manateeworks.com) © Manatee Works
