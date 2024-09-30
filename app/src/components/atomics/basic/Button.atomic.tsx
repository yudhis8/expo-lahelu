import React, {memo} from 'react';
import {FlexAlignType, TouchableOpacity, ViewStyle} from 'react-native';

interface ButtonComponentProps {
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
  backgroundColor?: string;
  flex?: number;
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: FlexAlignType;
  children?: React.ReactNode;
  onPress?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = props => {
  const {
    padding,
    pleft,
    pright,
    ptop,
    pbot,
    py,
    px,
    margin,
    mleft,
    mright,
    mtop,
    mbot,
    my,
    mx,
    backgroundColor,
    flex,
    justifyContent,
    alignItems,
    children,
  } = props;

  const buttonStyle: ViewStyle = {
    padding,
    paddingLeft: pleft,
    paddingRight: pright,
    paddingTop: ptop,
    paddingBottom: pbot,
    paddingVertical: py,
    paddingHorizontal: px,
    margin,
    marginLeft: mleft,
    marginRight: mright,
    marginTop: mtop,
    marginBottom: mbot,
    marginVertical: my,
    marginHorizontal: mx,
    backgroundColor,
    flex,
    justifyContent,
    alignItems,
  };

  return (
    <TouchableOpacity {...props} style={[buttonStyle]}>
      {children}
    </TouchableOpacity>
  );
};

export default memo(ButtonComponent);
