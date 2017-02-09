# Ionic ManateeWorks Starter Appp


## Dependencies

- Ionic CLI installed (required)
- Cordova 5.x.x installed (required)
- \***Android** and/or iOS environment installed (optional, but required if you don't have devices to test)


## Usage

Clone this project and run the following commands in your terminal:

```ssh
$ cd manateeworks-barcodescanner-starter-master && npm install
```

When installation finishes, you need put your credentials MW_LICENSE_KEY generated on [MWDN](https://manateeworks.com/lpr?type=evaluation) inside the `package.json` file.

After that, you need restore the state of project and to do this, please run:

```ssh
$ ionic state restore
```

When restore is finish, you need follow the next steps in each platform supported:

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

## Screenshots

TODO ADD SCREENSHOTS

## Observations

This starter is using [Manateeworks Barcode Scanner Phonegap Plugin](https://github.com/manateeworks/phonegap-manateeworks-v3.git)

## License

[Manatee Works](https://manateeworks.com) © Manatee Works
