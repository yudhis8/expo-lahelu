import {StyleSheet} from 'react-native';
import ColorToken from '../../constants/Color.constant'; // Adjust the import path as necessary

const styles = StyleSheet.create({
  areaHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    width: '100%',
    backgroundColor: ColorToken.BrandPrimary,
  },
});

export default styles;
