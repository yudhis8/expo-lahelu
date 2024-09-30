import React, {memo} from 'react';
import {DimensionValue, FlexAlignType, View, ViewStyle} from 'react-native';

interface BoxAtomicProps {
  flex?: number;
  position?: 'relative' | 'absolute' | 'static' | undefined;
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
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: FlexAlignType;
  width?: DimensionValue;
  height?: DimensionValue;
  minWidth?: DimensionValue;
  maxWidth?: DimensionValue;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  shadow?: boolean;
  children?: React.ReactNode;
  overflow?: 'visible' | 'hidden' | 'scroll';
  borderBottomWidth?: number;
  borderBottomColor?: string;
  borderTopWidth?: number;
  borderTopColor?: string;
  borderLeftWidth?: number;
  borderLeftColor?: string;
  borderRightWidth?: number;
  borderRightColor?: string;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
}

const BoxAtomic: React.FC<BoxAtomicProps> = props => {
  const combineStyle: ViewStyle = {
    flex: props.flex,
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
    alignItems: props.alignItems,
    width: props.width,
    height: props.height,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    borderWidth: props.borderWidth,
    borderColor: props.borderColor,
    borderBottomWidth: props.borderBottomWidth,
    borderBottomColor: props.borderBottomColor,
    borderTopWidth: props.borderTopWidth,
    borderTopColor: props.borderTopColor,
    borderLeftWidth: props.borderLeftWidth,
    borderLeftColor: props.borderLeftColor,
    borderRightWidth: props.borderRightWidth,
    borderRightColor: props.borderRightColor,
    borderStyle: props.borderStyle,
    borderRadius: props.borderRadius,
    backgroundColor: props.backgroundColor,
    shadowOffset: props.shadow ? {width: 0, height: 2} : undefined,
    shadowOpacity: props.shadow ? 0.3 : 0,
    shadowRadius: props.shadow ? 3 : 0,
    elevation: props.shadow ? 3 : 0,
    position: props.position,
    overflow: props.overflow,
  };

  const {children} = props;

  return <View style={combineStyle}>{children}</View>;
};

export default memo(BoxAtomic);
