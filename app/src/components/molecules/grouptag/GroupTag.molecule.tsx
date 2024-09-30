import * as React from 'react';
import RowAtomic from '../../atomics/basic/Row.atomic';
import TagAtomic from '../../atomics/tags/Tags.atomic';

interface GroupTagMoleculeProps {
  data: string[];
}

const GroupTagMolecule = (props: GroupTagMoleculeProps) => {
  return (
    <RowAtomic width={'100%'}>
      {props.data.map((item, index) => {
        return <TagAtomic key={index.toString()} text={item} donation={false} />;
      })}
    </RowAtomic>
  );
};

export default GroupTagMolecule;
