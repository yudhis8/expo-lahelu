import React, {useRef} from 'react';
import {FlatList, ActivityIndicator, NativeSyntheticEvent, NativeScrollEvent, ViewToken} from 'react-native';

import BoxAtomic from '../../../components/atomics/basic/Box.atomic';
import ColorToken from '../../../constants/Color.constant';
import {PostInfo} from '../../../constants/Home.constant';

interface HomeListSectionProps {
  selector: PostInfo[];
  fetchLoading: boolean;
  renderItem: ({item, index}: {item: PostInfo; index: number}) => JSX.Element;
  loadMoreData: () => void;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  setVisibleItem: (index: number | null) => void;
}

const HomeListSection: React.FC<HomeListSectionProps> = ({
  fetchLoading,
  selector,
  renderItem,
  loadMoreData,
  handleScroll,
  setVisibleItem,
}) => {
  const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: ViewToken[]}) => {
    if (viewableItems.length > 0) {
      setVisibleItem(viewableItems[0].index);
    }
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 25,
  });

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      bounces={false}
      data={selector}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={{width: '100%', paddingTop: 90, backgroundColor: ColorToken.BrandPrimary}}
      contentContainerStyle={{flexGrow: 1, paddingBottom: 90, backgroundColor: ColorToken.BrandPrimary}}
      onEndReached={loadMoreData}
      onEndReachedThreshold={2}
      ItemSeparatorComponent={() => <BoxAtomic height={4} backgroundColor={ColorToken.BorderPrimary} />}
      ListFooterComponent={
        fetchLoading ? (
          <ActivityIndicator style={{marginBottom: 20}} size="large" color={ColorToken.BrandSecondary} />
        ) : null
      }
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    />
  );
};

export default HomeListSection;
