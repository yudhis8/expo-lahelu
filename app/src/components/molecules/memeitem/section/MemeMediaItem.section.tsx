import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, AppState, AppStateStatus, useWindowDimensions} from 'react-native';
import Helper from '../../../../helpers/helper';
import BoxAtomic from '../../../atomics/basic/Box.atomic';
import ImageAtomic from '../../../atomics/images/Image.atomic';
import {ENV} from '../../../../constants/Env.constant';
import {Video, ResizeMode, AVPlaybackStatus} from 'expo-av';
import TextNormalAtomic from '../../../atomics/text/TextNormal.atomic';
import TextCaptionAtomic from '../../../atomics/text/TextCaption.atomic';
import ColorToken from '../../../../constants/Color.constant';
import ButtonPrimaryMolecule from '../../button/ButtonPrimary.molecule';
import useDimensions from '@/app/src/redux/hooks/Dimension.hooks';
import {useAppDispatch, useTypedSelector} from '@/app/src/redux/hooks/Selector.hooks';
import {RootStates} from '@/app/src/redux/store';

interface MemeMediaItemProps {
  url: string;
  isVisible: boolean;
  mediaType: number;
  width: number;
  height: number;
  sensitive: boolean;
}

const MemeMediaItem = (props: MemeMediaItemProps) => {
  const dispatch = useAppDispatch();
  const authSelector = useTypedSelector((state: RootStates) => state.auth);
  const {height, width} = useDimensions();
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
  const [progress, setProgress] = useState<number>(0);

  const flexibleWidth = Helper.isTablet(width) ? width * 0.7 : width;
  const ref = useRef<Video>(null);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      } else if (nextAppState.match(/inactive|background/)) {
        console.log('App has gone to the background!');
      }
      setAppState(nextAppState);
    };

    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      appStateSubscription.remove();
    };
  }, [appState]);

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      const {positionMillis, durationMillis} = status;
      const progress = (positionMillis / durationMillis!!) * 100;
      setProgress(progress);
    }
  };

  return (
    <BoxAtomic
      mtop={6}
      mx={Helper.isTablet(width) ? 16 : 0}
      borderRadius={Helper.isTablet(width) ? 8 : 0}
      overflow="hidden">
      {props.sensitive && false ? (
        <BoxAtomic
          backgroundColor={ColorToken.BorderSecondary}
          width={flexibleWidth}
          height={flexibleWidth}
          justifyContent="center"
          alignItems="center">
          <TextNormalAtomic title="KONTEN SENSITIF" fontWeight="bold" color={ColorToken.BaseWhite} />
          <TextCaptionAtomic
            mtop={8}
            mbot={8}
            title="Post ini mengandung unsur sesnsitif atau dewasa"
            color={ColorToken.TextSecondary}
          />
          <TextCaptionAtomic mbot={8} title="klik untuk ubah peraturan" color={ColorToken.BrandSecondary} />
          <ButtonPrimaryMolecule
            text="Lihat"
            // onPress={() => dispatch(setModal(true))}
          />
        </BoxAtomic>
      ) : props.mediaType == 0 ? (
        <ImageAtomic
          imageStyle={{...styles.image, height, width: flexibleWidth}}
          imageSource={{uri: ENV.CACHE_URL + props.url}}
        />
      ) : (
        <>
          <Video
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            shouldPlay={props.isVisible}
            ref={ref}
            style={{width: flexibleWidth, height: height + 100}}
            source={{uri: ENV.CACHE_URL + props.url}}
            resizeMode={ResizeMode.CONTAIN}
            isLooping
          />

          <BoxAtomic height={2} backgroundColor={ColorToken.BrandSecondary} width={`${progress}%`} />
        </>
      )}
    </BoxAtomic>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    resizeMode: 'stretch',
  },
});

export default React.memo(MemeMediaItem, (prevProps, nextProps) => {
  return prevProps.isVisible === nextProps.isVisible && prevProps.url === nextProps.url;
});
