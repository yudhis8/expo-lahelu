import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import RowAtomic from '../../atomics/basic/Row.atomic';
import ImageAtomic from '../../atomics/images/Image.atomic';
import {HeaderImage} from '../../../constants/Image.constant';
import ColorToken from '../../../constants/Color.constant';

const HeaderLahelu = () => {
  return (
    <View style={styles.container}>
      <RowAtomic width={'100%'} backgroundColor={ColorToken.BrandPrimary} justify="space-between" height={50}>
        <RowAtomic alignItems="center">
          <ImageAtomic imageStyle={styles.image} imageSource={HeaderImage.BurgerIcon} />
          <ImageAtomic imageStyle={styles.imageHeader} imageSource={HeaderImage.Logo} />
        </RowAtomic>

        <RowAtomic alignItems="center">
          <ImageAtomic imageStyle={styles.imageSearch} imageSource={HeaderImage.SearchIcon} />
        </RowAtomic>
      </RowAtomic>
    </View>
  );
};

export default HeaderLahelu;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: ColorToken.BorderPrimary,
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 16,
    tintColor: ColorToken.BaseWhite,
  },
  imageSearch: {
    height: 20,
    width: 20,
    tintColor: ColorToken.BaseWhite,
  },
  imageHeader: {
    height: 20,
    width: 70,
    resizeMode: 'contain',
  },
});
