import React from 'react';
import {View} from 'react-native';
import styles from './style';
import HeaderLahelu from '../../components/molecules/header/LaheluHeader.molecule';
import TabAnimated from '../../components/molecules/tabbar/TabAnimated.molecule';
import {TabTopicData} from '../../constants/Tab.constant';
const TopicScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderLahelu />
      <TabAnimated dataTab={TabTopicData} />
    </View>
  );
};

export default TopicScreen;
