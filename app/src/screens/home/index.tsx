import React, {useEffect, useState, useRef, useCallback, useMemo} from 'react';
import {FlatList, Animated, NativeSyntheticEvent, NativeScrollEvent, useWindowDimensions} from 'react-native';
import styles from './style';
import HeaderLahelu from '../../components/molecules/header/LaheluHeader.molecule';
import TabAnimated from '../../components/molecules/tabbar/TabAnimated.molecule';
import {TabHomeData} from '../../constants/Tab.constant';
import {homeAction, homeReset} from '../../redux/actions/Home.action';
import {useAppDispatch, useTypedSelector} from '../../redux/hooks/Selector.hooks';
import {PostInfo} from '../../constants/Home.constant';
import {RootStates} from '../../redux/store';
import ColorToken from '../../constants/Color.constant';
import BoxAtomic from '../../components/atomics/basic/Box.atomic';
import RowAtomic from '../../components/atomics/basic/Row.atomic';
import Helper from '../../helpers/helper';
import TopicItemMolecule from '../../components/molecules/topicitem/TopicItem.molecule';
import MemeItemMolecule from '../../components/molecules/memeitem/MemeItem.molecule';

import {topicAction} from '../../redux/actions/Topic.action';
import ButtonSecondaryMolecule from '../../components/molecules/button/ButtonSecondary.molecule';
import {TopicInfos} from '../../constants/Topic.constant';
import HomeListSection from './section/HomeList.section';
import useCheckForUpdates from '../../redux/hooks/CheckUpdate.hooks';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  useCheckForUpdates();
  const selector = useTypedSelector((state: RootStates) => state.home);
  console.log('🚀 ~ selector:', selector);
  const selectorTopic = useTypedSelector((state: RootStates) => state.topic);
  const [feed, setFeed] = useState(1);
  const [page, setPage] = useState(0);
  const {width, height} = useWindowDimensions();
  const [visibleItem, setVisibleItem] = useState<number | null>(null);

  const headerTranslateY = useRef(new Animated.Value(0)).current;
  const scrollOffset = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(homeAction(`feed=${feed}&page=${page}`));
    };

    fetchData();
  }, [page, dispatch, feed]);

  useEffect(() => {
    const fetchTopicData = async () => {
      await dispatch(topicAction(`page=0`));
    };

    fetchTopicData();
  }, []);

  const loadMoreData = useCallback(() => {
    if (!selector.fetching && selector.data?.hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  }, [selector.fetching, selector.data?.hasMore]);

  const onSetFeed = useCallback((id: number) => {
    setFeed(id);
    setPage(0);
  }, []);

  const handleScroll = useMemo(
    () => (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.y;
      const direction = currentOffset > scrollOffset.current ? 'down' : 'up';
      scrollOffset.current = currentOffset;

      if (direction === 'down') {
        Animated.timing(headerTranslateY, {
          toValue: -100,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {});
      } else {
        Animated.timing(headerTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    },
    [headerTranslateY],
  );

  const renderItem = useCallback(
    ({item, index}: {item: PostInfo; index: number}) => (
      <MemeItemMolecule data={item} isVisible={index === visibleItem} />
    ),
    [visibleItem],
  );

  const renderTopicItem = useCallback(
    ({item}: {item: TopicInfos; index: number}) => <TopicItemMolecule data={item} btnVisible={false} />,
    [],
  );
  return (
    <BoxAtomic flex={1} backgroundColor={ColorToken.BrandPrimary}>
      <Animated.View
        style={{
          ...styles.areaHeader,
          transform: [{translateY: Helper.isTablet(width) ? 0 : headerTranslateY}],
          width: '100%',
        }}>
        <HeaderLahelu />
      </Animated.View>
      <RowAtomic backgroundColor={ColorToken.BrandPrimary}>
        <BoxAtomic flex={1} height={Helper.heightPercentage('100')} backgroundColor={ColorToken.BrandPrimary}>
          <Animated.View
            style={{
              ...styles.areaHeader,
              transform: [{translateY: Helper.isTablet(width) ? 0 : headerTranslateY}],
              width: '100%',
              marginTop: 50,
            }}>
            <TabAnimated onSelectTab={(id: number) => onSetFeed(id)} dataTab={TabHomeData} />
          </Animated.View>
          {feed === 1 && (
            <HomeListSection
              fetchLoading={selector.fetching}
              selector={selector.data?.postInfos ?? []}
              renderItem={renderItem}
              loadMoreData={loadMoreData}
              setVisibleItem={setVisibleItem}
              handleScroll={handleScroll}
            />
          )}
          {feed === 0 && (
            <HomeListSection
              fetchLoading={selector.fetching}
              selector={selector.data?.freshInfos ?? []}
              renderItem={renderItem}
              loadMoreData={loadMoreData}
              setVisibleItem={setVisibleItem}
              handleScroll={handleScroll}
            />
          )}
          {feed === 2 && (
            <HomeListSection
              fetchLoading={selector.fetching}
              selector={selector.data?.trendingInfos ?? []}
              renderItem={renderItem}
              loadMoreData={loadMoreData}
              setVisibleItem={setVisibleItem}
              handleScroll={handleScroll}
            />
          )}
        </BoxAtomic>
        {Helper.isTablet(width) && (
          <BoxAtomic
            width={'30%'}
            height={height}
            borderLeftWidth={1}
            borderLeftColor={ColorToken.BorderPrimary}
            backgroundColor={ColorToken.BrandPrimary}>
            <FlatList
              showsVerticalScrollIndicator={false}
              bounces={false}
              data={selectorTopic.data?.topicInfos}
              renderItem={renderTopicItem}
              keyExtractor={(item, index) => index.toString()}
              style={{width: '100%', paddingTop: 60, paddingHorizontal: 16}}
              contentContainerStyle={{flexGrow: 1, paddingBottom: 90}}
              onEndReachedThreshold={2}
              ItemSeparatorComponent={() => <BoxAtomic height={1} backgroundColor={ColorToken.BorderPrimary} />}
              ListFooterComponent={<ButtonSecondaryMolecule text="Lihat topik terkini" />}
            />
          </BoxAtomic>
        )}
      </RowAtomic>
    </BoxAtomic>
  );
};

export default HomeScreen;
