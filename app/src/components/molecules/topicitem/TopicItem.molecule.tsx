import * as React from 'react';
import RowAtomic from '../../atomics/basic/Row.atomic';
import ImageAtomic from '../../atomics/images/Image.atomic';
import BoxAtomic from '../../atomics/basic/Box.atomic';
import ButtonPrimaryMolecule from '../button/ButtonPrimary.molecule';
import TextNormalAtomic from '../../atomics/text/TextNormal.atomic';
import TextCaptionAtomic from '../../atomics/text/TextCaption.atomic';
import ColorToken from '../../../constants/Color.constant';
import {TopicInfos} from '../../../constants/Topic.constant';
import {ENV} from '../../../constants/Env.constant';

interface TopicItemMoleculeProps {
  data: TopicInfos;
  btnVisible: boolean;
}

const TopicItemMolecule = (props: TopicItemMoleculeProps) => {
  const media = props.data.media ? ENV.CACHE_URL + props.data.media : ENV.API_URL + '/media/default/topic.jpg';
  return (
    <BoxAtomic py={10} width={'100%'}>
      <RowAtomic justify="space-between" alignItems="center">
        <RowAtomic justify="center" alignItems="center">
          <ImageAtomic width={60} height={60} imageStyle={{borderRadius: 8}} imageSource={{uri: media}} />
          <BoxAtomic mleft={10} width={'70%'}>
            <TextNormalAtomic
              title={props.data.title}
              fontWeight="bold"
              numberOfLines={2}
              elipsis="tail"
              color={ColorToken.BaseWhite}
            />
            <TextCaptionAtomic title={`${props.data.totalMembers} member`} color={ColorToken.TextSecondary} />
          </BoxAtomic>
        </RowAtomic>
        {props.btnVisible && <ButtonPrimaryMolecule text="Gabung" />}
      </RowAtomic>
    </BoxAtomic>
  );
};

export default TopicItemMolecule;
