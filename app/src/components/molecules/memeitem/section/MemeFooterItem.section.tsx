import * as React from 'react';
import {ScrollView} from 'react-native';
import BoxAtomic from '../../../atomics/basic/Box.atomic';

import TagAtomic from '../../../atomics/tags/Tags.atomic';
import GroupTagMolecule from '../../grouptag/GroupTag.molecule';
import RowAtomic from '../../../atomics/basic/Row.atomic';
import ColorToken from '../../../../constants/Color.constant';

import ImageAtomic from '../../../atomics/images/Image.atomic';
import {MemeItemImage} from '../../../../constants/Image.constant';
import TextNormalAtomic from '../../../atomics/text/TextNormal.atomic';
import ButtonAtomic from '../../../atomics/basic/Button.atomic';

interface MemeFooterItemProps {
  data: string[];
  totalUpvotes?: number;
  totalDownvotes?: number;
  totalComments?: number;
}

const MemeFooterItem = (props: MemeFooterItemProps) => {
  return (
    <BoxAtomic width={'100%'} px={16} ptop={8} mtop={4}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TagAtomic donation={true} text="Sawer" />
        <GroupTagMolecule data={props.data} />
      </ScrollView>
      <RowAtomic justify="space-between" mtop={12}>
        <RowAtomic alignItems="center">
          <BoxAtomic borderWidth={1} borderColor={ColorToken.BorderSecondary} borderRadius={8}>
            <RowAtomic alignItems="center">
              <ButtonAtomic>
                <RowAtomic padding={8} alignItems="center">
                  <ImageAtomic
                    width={18}
                    height={18}
                    imageSource={MemeItemImage.UpVoteIcon}
                    tintColor={ColorToken.BaseWhite}
                  />

                  <TextNormalAtomic
                    mleft={6}
                    title={props?.totalUpvotes ?? 0 > 0 ? props.totalUpvotes?.toString() : 'vote'}
                    color={ColorToken.BaseWhite}
                    fontWeight="bold"
                  />
                </RowAtomic>
              </ButtonAtomic>
              <BoxAtomic borderLeftWidth={1} borderLeftColor={ColorToken.BorderSecondary} height={'100%'} />
              <ButtonAtomic>
                <BoxAtomic padding={8}>
                  <ImageAtomic
                    width={18}
                    height={18}
                    imageSource={MemeItemImage.DownVoteIcon}
                    tintColor={ColorToken.BaseWhite}
                  />
                </BoxAtomic>
              </ButtonAtomic>
            </RowAtomic>
          </BoxAtomic>

          <BoxAtomic mleft={8} borderWidth={1} borderColor={ColorToken.BorderSecondary} borderRadius={8}>
            <ButtonAtomic>
              <RowAtomic padding={8} alignItems="center">
                <ImageAtomic
                  width={18}
                  height={18}
                  imageSource={MemeItemImage.CommentIcon}
                  tintColor={ColorToken.BaseWhite}
                />

                <TextNormalAtomic
                  mleft={6}
                  title={props?.totalComments?.toString()}
                  color={ColorToken.BaseWhite}
                  fontWeight="bold"
                />
              </RowAtomic>
            </ButtonAtomic>
          </BoxAtomic>
        </RowAtomic>

        <BoxAtomic borderWidth={1} borderColor={ColorToken.BorderSecondary} borderRadius={8}>
          <ButtonAtomic>
            <RowAtomic padding={8} alignItems="center">
              <ImageAtomic
                width={18}
                height={18}
                imageSource={MemeItemImage.ShareIcon}
                tintColor={ColorToken.BaseWhite}
              />
            </RowAtomic>
          </ButtonAtomic>
        </BoxAtomic>
      </RowAtomic>
    </BoxAtomic>
  );
};

export default MemeFooterItem;
