import {StyleSheet} from 'react-native';
import ColorToken from '../../constants/Color.constant'; // Adjust the import path as necessary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorToken.BrandPrimary, // Use the primary color from Color.constant.ts
    alignItems: 'center',
  },
});

export default styles;
