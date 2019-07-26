/*
 * platform/application wide metrics for proper styling
*/
import { Dimensions, Platform, NativeModules } from 'react-native';

import { setPlatform } from './../utils/Platform';

const { StatusBarManager } = NativeModules;
const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    statusBarHeight: Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT,
    navBarHeight: setPlatform(64, 54),
    heightButton: 48,
    paddingHorizontal: 24
};

export default metrics;
