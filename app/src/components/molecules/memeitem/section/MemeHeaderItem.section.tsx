import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import RowAtomic from '../../../atomics/basic/Row.atomic';
import ImageAtomic from '../../../atomics/images/Image.atomic';
import BoxAtomic from '../../../atomics/basic/Box.atomic';
import TextCaptionAtomic from '../../../atomics/text/TextCaption.atomic';
import {MemeItemImage} from '../../../../constants/Image.constant';
import ColorToken from '../../../../constants/Color.constant';
import ButtonAtomic from '../../../atomics/basic/Button.atomic';
import TextSmallAtomic from '../../../atomics/text/TextSmall.atomic';
import {ENV} from '../../../../constants/Env.constant';
import moment from 'moment';

interface MemeHeaderItemProps {
  avatar?: string | null;
  username: string;
  topic: string | undefined;
  createdTime: number;
  ageTime: number;
}

const MemeHeaderItem = ({username, avatar, topic, createdTime}: MemeHeaderItemProps) => {
  const [showAgeTime, setShowAgeTime] = useState(true);
  const momentCreate = moment.utc(createdTime).format('DD MMM YYYY');
  const targetDate = moment.utc(createdTime);
  const now = moment.utc();
  const duration = moment.duration(targetDate.diff(now));
  const momentAge = duration.humanize(true);
  return (
    <BoxAtomic px={16}>
      <RowAtomic alignItems="center" justify="space-between">
        <RowAtomic alignItems="center">
          <ImageAtomic
            imageStyle={StyleSheet.flatten([
              styles.imageProfile,
              {width: 30, height: 30, tintColor: topic ? ColorToken.BaseWhite : undefined},
            ])}
            imageSource={{uri: avatar ? ENV.CACHE_URL + avatar : ENV.API_URL + 'media/default/fresh-pp.jpg'}}
          />
          <BoxAtomic mleft={8} justifyContent="center">
            <RowAtomic>
              <TextSmallAtomic color={ColorToken.BaseWhite} title={`${username} `} fontWeight={'bold'} />
              <ButtonAtomic onPress={() => setShowAgeTime(!showAgeTime)}>
                <TextSmallAtomic color={ColorToken.TextPrimary} title={`· ${showAgeTime ? momentAge : momentCreate}`} />
              </ButtonAtomic>
            </RowAtomic>
            {topic !== null ||
              (topic && (
                <RowAtomic alignItems="center" mtop={6}>
                  <ImageAtomic imageSource={MemeItemImage.GroupTopicIcon} imageStyle={styles.image} />
                  <TextCaptionAtomic mleft={4} color={ColorToken.TextPrimary} title={topic} />
                </RowAtomic>
              ))}
          </BoxAtomic>
        </RowAtomic>
        <ButtonAtomic>
          <ImageAtomic imageSource={MemeItemImage.MoreIcon} imageStyle={styles.imageMore} />
        </ButtonAtomic>
      </RowAtomic>
    </BoxAtomic>
  );
};

export default MemeHeaderItem;

const styles = StyleSheet.create({
  imageProfile: {
    height: 40,
    width: 40,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  imageProfileDefault: {
    height: 30,
    width: 30,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  image: {
    height: 15,
    width: 15,
    tintColor: ColorToken.BaseWhite,
  },
  imageMore: {
    height: 20,
    width: 20,
    tintColor: ColorToken.BaseWhite,
  },
});
