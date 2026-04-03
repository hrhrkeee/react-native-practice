# React Native練習用アプリ

## 環境構築

プロジェクト作成

```
npx create-expo-app@latest --template default@sdk-55 "react-native-practice"
```

Development Build 用ライブラリのインストール

```
npx expo install expo-dev-client
```

プロジェクトの初期化

```
npm run reset-project
rm -rf example
```

ios環境の構築

```
npx expo run:ios
```

## 環境の確認

### iOSの場合

```
xcodebuild -version
xcode-select -p
xcrun simctl list devices
watchman --version

npx expo run:ios
```

### Androidの場合

```
java -version
echo $JAVA_HOME
echo $ANDROID_HOME
adb --version
emulator -list-avds
watchman --version
adb devices

npx expo run:android
```

## 実行

iosシミュレータでの実行

```
npm run ios
```
