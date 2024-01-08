BUILD_WS="$PWD"
BUILD_ARCH="arm64-v8a"
#BUILD_ARCH="armeabi-v7a"
#BUILD_ARCH="x86_64"

BUILD_HERMESC_DIRECTORY=$BUILD_WS/build_release/hermesc
BUILD_TARGET_DIRECTORY=$BUILD_WS/build_release/${BUILD_ARCH}-output
BUILD_LIBRARY_DIRECTORY=$BUILD_WS/build_release/${BUILD_ARCH}-lib

SOURCE_DIRECTORY=$BUILD_WS/hermes
JSI_DIRECTORY=$BUILD_WS/jsi

ohos_sdk_native_dir=/Users/hansenchen/Library/Huawei/Sdk/openharmony/10/native

$ohos_sdk_native_dir/build-tools/cmake/bin/cmake  \
  -S$SOURCE_DIRECTORY \
  -B$BUILD_HERMESC_DIRECTORY \
  -DJSI_DIR=$JSI_DIRECTORY

$ohos_sdk_native_dir/build-tools/cmake/bin/cmake  \
  --build $BUILD_HERMESC_DIRECTORY \
  --target hermesc -j 8

$ohos_sdk_native_dir/build-tools/cmake/bin/cmake  \
  -H$SOURCE_DIRECTORY \
  -B$BUILD_TARGET_DIRECTORY \
  -DCMAKE_MAKE_PROGRAM=$ohos_sdk_native_dir/build-tools/cmake/bin/ninja \
  -DCMAKE_SYSTEM_NAME=OHOS \
  -DCMAKE_EXPORT_COMPILE_COMMANDS=ON \
  -DCMAKE_SYSTEM_VERSION=1 \
  -DOHOS_ARCH=$BUILD_ARCH \
  -DOHOS_STL=c++_shared \
  -DCMAKE_TOOLCHAIN_FILE=$ohos_sdk_native_dir/build/cmake/ohos.toolchain.cmake \
  -DCMAKE_LIBRARY_OUTPUT_DIRECTORY=$BUILD_LIBRARY_DIRECTORY \
  -DCMAKE_RUNTIME_OUTPUT_DIRECTORY=$BUILD_LIBRARY_DIRECTORY \
  -DIMPORT_HERMESC=$BUILD_HERMESC_DIRECTORY/ImportHermesc.cmake \
  -DJSI_DIR=/Users/hansenchen/workspace/RNProjects/react-native/packages/react-native/ReactCommon/jsi \
  -DHERMES_IS_ANDROID=True \
  -DHERMES_SLOW_DEBUG=False \
  -DHERMES_BUILD_SHARED_JSI=True \
  -DHERMES_RELEASE_VERSION="for RN 0.72.3" \
  -DHERMES_ENABLE_INTL=False \
  -DCMAKE_BUILD_WITH_INSTALL_RPATH=On \
  -DHERMES_ENABLE_TEST_SUITE=False \
  -DHERMES_UNICODE_LITE=True \
  -DCMAKE_BUILD_TYPE=Release \
  -GNinja \



$ohos_sdk_native_dir/build-tools/cmake/bin/ninja \
  -C \
  $BUILD_TARGET_DIRECTORY \
  libhermes
