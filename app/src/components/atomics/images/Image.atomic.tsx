import React, {memo, useState} from 'react';
import {View, ViewStyle, Image, ImageStyle, ImageSourcePropType, ActivityIndicator, DimensionValue} from 'react-native';
import ColorToken from '../../../constants/Color.constant';

interface ImageAtomicProps {
  padding?: number;
  pleft?: number;
  pright?: number;
  ptop?: number;
  pbot?: number;
  py?: number;
  px?: number;
  margin?: number;
  mleft?: number;
  mright?: number;
  mtop?: number;
  mbot?: number;
  my?: number;
  mx?: number;
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  shadow?: boolean;
  children?: React.ReactNode;
  imageSource?: ImageSourcePropType;
  imageStyle?: ImageStyle;
  width?: DimensionValue;
  height?: DimensionValue;
  tintColor?: string;
}

const ImageAtomic: React.FC<ImageAtomicProps> = props => {
  const [loading, setLoading] = useState(true);
  const isRemoteImage = typeof props.imageSource === 'string';

  const combineStyle: ViewStyle = {
    shadowOffset: props.shadow ? {width: 0, height: 2} : undefined,
    shadowOpacity: props.shadow ? 0.3 : 0,
    shadowRadius: props.shadow ? 3 : 0,
    elevation: props.shadow ? 3 : 0,
    padding: props.padding,
    paddingLeft: props.pleft,
    paddingRight: props.pright,
    paddingTop: props.ptop,
    paddingBottom: props.pbot,
    paddingVertical: props.py,
    paddingHorizontal: props.px,
    margin: props.margin,
    marginLeft: props.mleft,
    marginRight: props.mright,
    marginTop: props.mtop,
    marginBottom: props.mbot,
    marginVertical: props.my,
    marginHorizontal: props.mx,
    justifyContent: props.justifyContent,
  };

  const {imageSource, imageStyle} = props;

  return (
    <View style={[combineStyle, {justifyContent: 'center', alignItems: 'center'}]}>
      {isRemoteImage && loading && <ActivityIndicator size="large" color={ColorToken.BrandSecondary} />}
      {imageSource && (
        <Image
          source={imageSource}
          style={{width: props.width, height: props.height, tintColor: props.tintColor, ...imageStyle}}
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      )}
    </View>
  );
};

export default memo(ImageAtomic);
