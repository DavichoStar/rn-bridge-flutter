
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnBridgeFlutterSpec.h"

@interface RnBridgeFlutter : NSObject <NativeRnBridgeFlutterSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnBridgeFlutter : NSObject <RCTBridgeModule>
#endif

@end
