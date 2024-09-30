import React, {memo} from 'react';
import {Text, TextStyle} from 'react-native';
import ColorToken from '../../../constants/Color.constant';
import Helper from '../../../helpers/helper';

interface TextCaptionProps {
  title?: string;
  color?: string;
  backgroundColor?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  lineHeight?: number;
  mtop?: number;
  mbot?: number;
  mleft?: number;
  mright?: number;
  decoration?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  decorationColor?: string;
  fontWeight?: 'normal' | 'semibold' | 'bold';
  numberOfLines?: number;
}

const TextCaption: React.FC<TextCaptionProps> = props => {
  const {
    title,
    color,
    backgroundColor,
    textAlign,
    lineHeight,
    mtop,
    mbot,
    mleft,
    mright,
    decoration,
    decorationColor,
    fontWeight = 'normal',
    numberOfLines,
  } = props;

  const textStyle: TextStyle = {
    fontSize: 12,
    color: color ?? ColorToken.BaseWhite,
    backgroundColor,
    textAlign,
    lineHeight,
    marginTop: mtop,
    marginBottom: mbot,
    marginLeft: mleft,
    marginRight: mright,
    textDecorationLine: decoration,
    textDecorationColor: decorationColor,
    fontFamily: Helper.getFontFamily(fontWeight),
  };

  return (
    <Text numberOfLines={numberOfLines} style={textStyle}>
      {title}
    </Text>
  );
};

export default memo(TextCaption);
