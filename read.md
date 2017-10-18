### error
#### This command will create 2 files : index.android.bundle & index.android.bundle.meta
```shell
mkdir android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res  
```
### 签名打包
#### 1.生成Android签名证书
```shell
keytool -genkey -v -keystore my-release-key.keystore  -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
#### 2.设置gradle变量，在android目录下的gradle.properties文件里追加下面四行代码,用正确的值添加
```shell
MYAPP_RELEASE_STORE_FILE=clark.keystore
MYAPP_RELEASE_KEY_ALIAS=clark
MYAPP_RELEASE_STORE_PASSWORD=195056
MYAPP_RELEASE_KEY_PASSWORD=195056
```
#### 3.编辑 android/app/build.gradle文件添加如下代码：
```shell
...  
android {  
    ...  
    defaultConfig { ... }  
    signingConfigs {  
        release {  
            storeFile file(MYAPP_RELEASE_STORE_FILE)  
            storePassword MYAPP_RELEASE_STORE_PASSWORD  
            keyAlias MYAPP_RELEASE_KEY_ALIAS  
            keyPassword MYAPP_RELEASE_KEY_PASSWORD  
        }  
    }  
    buildTypes {  
        release {  
            ...  
            signingConfig signingConfigs.release  
        }  
    }  
}  
...
```
#### 4.签名打包APK,终端进入项目下的android目录，运行如下代码：
```shell
./gradlew assembleRelease
```
#### 5.签名打包成功后你会在 "android/app/build/outputs/apk/"目录下看到签名成功后的app-release.apk文件。
