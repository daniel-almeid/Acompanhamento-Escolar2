import * as Font from 'expo-font';

export const loadFonts = () => {
  return Font.loadAsync({
    'poppins-thin': require('../fonts/Poppins-Thin.ttf'),
    'poppins-light': require('../fonts/Poppins-Light.ttf'),
    'poppins-regular': require('../fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../fonts/Poppins-Bold.ttf'),
  });
};