import * as React from 'react';
import ButtonAtomic from '../basic/Button.atomic';
import BoxAtomic from '../basic/Box.atomic';
import ColorToken from '../../../constants/Color.constant';
import RowAtomic from '../basic/Row.atomic';
import ImageAtomic from '../images/Image.atomic';
import TextCaptionAtomic from '../text/TextCaption.atomic';
import {GeneralImage} from '../../../constants/Image.constant';

import {StyleSheet} from 'react-native';

interface TagAtomicProps {
  donation: boolean;
  text: string;
}

const TagAtomic = (props: TagAtomicProps) => {
  return (
    <ButtonAtomic mright={8}>
      <BoxAtomic
        borderRadius={25}
        backgroundColor={props.donation ? ColorToken.Orange : undefined}
        borderColor={props.donation ? ColorToken.Orange : ColorToken.BorderSecondary}
        borderWidth={1}
        py={2}
        px={8}
        minWidth={60}>
        <RowAtomic alignItems="center" justify="center">
          <ImageAtomic
            imageSource={props.donation ? GeneralImage.DontationIcon : GeneralImage.TagIcon}
            imageStyle={styles.icon}
          />
          <TextCaptionAtomic mleft={4} title={props.text} color={ColorToken.BaseWhite} fontWeight={'bold'} />
        </RowAtomic>
      </BoxAtomic>
    </ButtonAtomic>
  );
};

export default TagAtomic;

const styles = StyleSheet.create({
  icon: {height: 14, width: 14, tintColor: ColorToken.TextPrimary},
});
