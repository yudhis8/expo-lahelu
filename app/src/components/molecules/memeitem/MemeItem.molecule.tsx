import * as React from 'react';
import BoxAtomic from '../../atomics/basic/Box.atomic';
import MemeHeaderItem from './section/MemeHeaderItem.section';
import MemeCaptionItem from './section/MemeCaptionItem.section';
import MemeMediaItem from './section/MemeMediaItem.section';
import MemeFooterItem from './section/MemeFooterItem.section';
import {PostInfo} from '../../../constants/Home.constant';

interface MemeItemMoleculeProps {
  data: PostInfo;
  isVisible: boolean;
}

const MemeItemMolecule = ({data, isVisible}: MemeItemMoleculeProps) => {
  return (
    <BoxAtomic width={'100%'} py={16}>
      <MemeHeaderItem
        avatar={data.userAvatar}
        username={data.userUsername}
        topic={data.topicTitle}
        createdTime={data.createTime}
        ageTime={data.ageTime}
      />
      <MemeCaptionItem title={data.title} />
      <MemeMediaItem
        url={data.media}
        isVisible={isVisible}
        mediaType={data.mediaType}
        width={data.mediaWidth}
        height={data.mediaHeight}
        sensitive={data.sensitive}
      />
      <MemeFooterItem
        data={data.hashtags}
        totalUpvotes={data.totalUpvotes}
        totalDownvotes={data.totalDownvotes}
        totalComments={data.totalComments}
      />
    </BoxAtomic>
  );
};

export default MemeItemMolecule;
