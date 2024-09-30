import React, {memo} from 'react';
import {StyleSheet, Image, ImageProps} from 'react-native';
import ColorToken from '../../../constants/Color.constant';

interface IconAtomicProps {
  url: ImageProps;
  focused?: boolean;
}

const IconAtomic = (props: IconAtomicProps) => {
  return (
    <Image
      tintColor={props.focused ? ColorToken.BrandSecondary : ColorToken.BaseWhite}
      style={[styles.container]}
      source={props.url}
    />
  );
};

export default memo(IconAtomic);

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
  },
});
