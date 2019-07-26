/**
 * Helper class to fixing iPhoneX UI
 */
import { Platform } from 'react-native';

export function setPlatform(ios, android) {
  if (Platform.OS === 'ios') {
    return ios;
  } else {
    return android;
  }
}