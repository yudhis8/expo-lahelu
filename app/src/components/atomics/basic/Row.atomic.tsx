import React, {memo} from 'react';
import {DimensionValue, FlexAlignType, View, ViewStyle} from 'react-native';

interface RowComponentProps {
  padding?: number;
  margin?: number;
  mleft?: number;
  mright?: number;
  mtop?: number;
  mbot?: number;
  my?: number;
  mx?: number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: FlexAlignType;
  width?: DimensionValue;
  height?: DimensionValue;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  shadow?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const RowComponent: React.FC<RowComponentProps> = props => {
  const combineStyle: ViewStyle = {
    padding: props.padding,
    margin: props.margin,
    marginLeft: props.mleft,
    marginRight: props.mright,
    marginTop: props.mtop,
    marginBottom: props.mbot,
    marginVertical: props.my,
    marginHorizontal: props.mx,
    justifyContent: props.justify ?? 'flex-start',
    alignItems: props.alignItems ?? 'stretch',
    width: props.width,
    height: props.height,
    borderWidth: props.borderWidth,
    borderColor: props.borderColor,
    borderRadius: props.borderRadius,
    flexDirection: 'row',
    shadowColor: props.shadow ? '#000' : undefined,
    shadowOffset: props.shadow ? {width: 0, height: 2} : undefined,
    shadowOpacity: props.shadow ? 0.3 : 0,
    shadowRadius: props.shadow ? 3 : 0,
    elevation: props.shadow ? 3 : 0,
    backgroundColor: props.backgroundColor ?? undefined,
  };

  const {children} = props;

  return <View style={combineStyle}>{children}</View>;
};

export default memo(RowComponent);
