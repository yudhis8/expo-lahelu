import * as React from 'react';
import ButtonAtomic from '../../atomics/basic/Button.atomic';
import BoxAtomic from '../../atomics/basic/Box.atomic';
import ColorToken from '../../../constants/Color.constant';
import TextNormalAtomic from '../../atomics/text/TextNormal.atomic';

interface ButtonPrimaryMoleculeProps {
  text: string;
  onPress?: () => void;
}

const ButtonPrimaryMolecule = ({text, onPress}: ButtonPrimaryMoleculeProps) => {
  return (
    <ButtonAtomic onPress={onPress}>
      <BoxAtomic
        borderRadius={25}
        backgroundColor={ColorToken.BrandSecondary}
        padding={8}
        minWidth={80}
        justifyContent="center"
        alignItems="center">
        <TextNormalAtomic title={text} color={ColorToken.BaseWhite} fontWeight="bold" />
      </BoxAtomic>
    </ButtonAtomic>
  );
};

export default ButtonPrimaryMolecule;
