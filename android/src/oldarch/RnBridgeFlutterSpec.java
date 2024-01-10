package com.rnbridgeflutter;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

abstract class RnBridgeFlutterSpec extends ReactContextBaseJavaModule {
  RnBridgeFlutterSpec(ReactApplicationContext context) {
    super(context);
  }

  // Flutter
  public abstract void openFlutter();
}
