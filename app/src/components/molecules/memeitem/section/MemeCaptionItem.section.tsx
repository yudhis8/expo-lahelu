import * as React from 'react';
import TextNormalAtomic from '../../../atomics/text/TextNormal.atomic';
import BoxAtomic from '../../../atomics/basic/Box.atomic';

interface MemeCaptionItemProps {
  title: string;
}

const MemeCaptionItem = (props: MemeCaptionItemProps) => {
  return (
    <BoxAtomic px={16} mtop={8}>
      <TextNormalAtomic title={props.title} fontWeight={'bold'} />
    </BoxAtomic>
  );
};

export default MemeCaptionItem;
