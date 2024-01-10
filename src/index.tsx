import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-bridge-flutter' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RnBridgeFlutterModule = isTurboModuleEnabled
  ? require('./NativeRnBridgeFlutter').default
  : NativeModules.RnBridgeFlutter;

const RnBridgeFlutter = RnBridgeFlutterModule
  ? RnBridgeFlutterModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export const openFlutter = (): void => {
  return RnBridgeFlutter.openFlutter();
};
