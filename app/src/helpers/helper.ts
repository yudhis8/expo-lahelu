import {Dimensions, PixelRatio, Platform} from 'react-native';
import {fontFamilies} from '../constants/Font.constant';

// NOTE: a helper class to consistently scale margins, paddings
//       on different screen sizes
class Helper {
  static reduceText(text: string): string {
    // this is a function to change tenant's name view if their name is > 25 char
    if (text.length >= 70) {
      const newName = `${text.slice(0, 95)}...`;
      return newName;
    }
    return text;
  }

  static isAndroid(): boolean {
    return Platform.OS === 'android';
  }

  static widthPercentage = (widthPercent: string): number => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };

  static heightPercentage = (heightPercent: string): number => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  };

  static fontSize = (size: number): number => {
    // Precalculate Device Dimensions for better performance
    const x = Dimensions.get('window').width;

    // Calculating ratio from iPhone breakpoints
    const ratioX = x < 375 ? (x < 320 ? 0.55 : 0.8) : 1;

    // We're simulating EM by changing font size according to Ratio
    const unit = size * ratioX;

    return unit;
  };

  static getFontFamily = (weight: 'normal' | 'semibold' | 'bold'): string => {
    const selectedFontFamily = fontFamilies.OPENSANS;
    return selectedFontFamily[weight];
  };

  static isTablet(value: number): boolean {
    return value > 500;
  }
}

export default Helper;
