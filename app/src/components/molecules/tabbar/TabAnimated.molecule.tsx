import React, {useState, useRef, useEffect} from 'react';
import {Animated, StyleSheet, useWindowDimensions} from 'react-native';
import ColorToken from '../../../constants/Color.constant';
import {TabItem} from '../../../constants/Tab.constant';
import TextNormalAtomic from '../../atomics/text/TextNormal.atomic';
import ButtonAtomic from '../../atomics/basic/Button.atomic';
import BoxAtomic from '../../atomics/basic/Box.atomic';
import RowAtomic from '../../atomics/basic/Row.atomic';
import Helper from '../../../helpers/helper';

interface TabAnimatedProps {
  dataTab: TabItem[];
  onSelectTab?: (id: number) => void;
}

const TabItems = (
  dataItem: TabItem,
  activeTab: number,
  handleTabPress: (id: number, index: number) => void,
  index: number,
) => {
  return (
    <ButtonAtomic
      key={dataItem.id}
      flex={1}
      alignItems="center"
      pbot={8}
      onPress={() => handleTabPress(dataItem.id, index)}>
      <TextNormalAtomic
        title={dataItem.title}
        color={activeTab === index ? ColorToken.BrandSecondary : ColorToken.BaseWhite}
        fontWeight={'bold'}
      />
    </ButtonAtomic>
  );
};

const TabAnimated: React.FC<TabAnimatedProps> = ({dataTab, onSelectTab}) => {
  const [activeTab, setActiveTab] = useState(0);
  const underlinePosition = useRef(new Animated.Value(0)).current;

  const handleTabPress = (id: number, index: number) => {
    setActiveTab(index);
    onSelectTab && onSelectTab(id);
  };

  const {width} = useWindowDimensions();
  const flexibleWidth = Helper.isTablet(width) ? width * 0.7 : width;
  useEffect(() => {
    const tabWidth = flexibleWidth / dataTab.length;
    Animated.timing(underlinePosition, {
      toValue: activeTab * tabWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [activeTab, underlinePosition, width, dataTab.length]);

  return (
    <BoxAtomic width={'100%'}>
      <BoxAtomic pbot={0} py={10}>
        <RowAtomic justify="space-around" alignItems="center">
          {dataTab?.map((data, index) => TabItems(data, activeTab, handleTabPress, index))}
        </RowAtomic>
      </BoxAtomic>
      {/* Animated underline */}
      <BoxAtomic width={'100%'} height={1} position="relative" backgroundColor={ColorToken.BorderPrimary}>
        <Animated.View style={[styles.underline, {left: underlinePosition, width: flexibleWidth / dataTab.length}]} />
      </BoxAtomic>
    </BoxAtomic>
  );
};

const styles = StyleSheet.create({
  underline: {
    position: 'absolute',
    bottom: 0, // Same as the tabWidth
    height: 2,
    backgroundColor: ColorToken.BrandSecondary, // Underline color
  },
});

export default TabAnimated;
