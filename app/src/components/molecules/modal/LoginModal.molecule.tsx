import * as React from 'react';
import {Modal} from 'react-native';
import BoxAtomic from '../../atomics/basic/Box.atomic';
import ColorToken from '../../../constants/Color.constant';
import ImageAtomic from '../../atomics/images/Image.atomic';
import {GeneralImage} from '../../../constants/Image.constant';
import TextTitleAtomic from '../../atomics/text/TextTitle.atomic';
import TextCaptionAtomic from '../../atomics/text/TextCaption.atomic';
import ButtonAtomic from '../../atomics/basic/Button.atomic';
import TextNormalAtomic from '../../atomics/text/TextNormal.atomic';
import RowAtomic from '../../atomics/basic/Row.atomic';
import {useAppDispatch} from '../../../redux/hooks/Selector.hooks';
import {setAuth, setModal} from '../../../redux/actions/Auth.action';

interface LoginModalMoleculeProps {
  isVisible: boolean;
}

const LoginModalMolecule = ({isVisible}: LoginModalMoleculeProps) => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(setAuth());
    dispatch(setModal(false));
  };
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        dispatch(setModal(false));
      }}>
      <BoxAtomic
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        backgroundColor={ColorToken.SemiTransparent}>
        <BoxAtomic
          justifyContent="center"
          alignItems="center"
          borderRadius={8}
          width={'100%'}
          py={16}
          backgroundColor={ColorToken.BrandPrimary}>
          <BoxAtomic borderRadius={50} justifyContent="center" alignItems="center">
            <ImageAtomic width={50} height={50} imageSource={GeneralImage.LaheluIcon} imageStyle={{borderRadius: 50}} />
            <TextTitleAtomic title="Selamat datang!" color={ColorToken.BaseWhite} mtop={8} mbot={8} fontWeight="bold" />
            <TextCaptionAtomic
              title="Buat meme, beri vote, dan berkomentar setelah login!"
              color={ColorToken.TextSecondary}
            />
            <ButtonAtomic onPress={handleLogin}>
              <BoxAtomic
                width={'100%'}
                borderWidth={1}
                borderColor={ColorToken.BorderSecondary}
                borderRadius={8}
                padding={16}
                mtop={16}>
                <RowAtomic width={'70%'} justify="space-between" alignItems="center">
                  <ImageAtomic width={20} height={20} imageSource={GeneralImage.GoogleIcon} />
                  <BoxAtomic width={'100%'} justifyContent="center" alignItems="center">
                    <TextNormalAtomic title="Login dengan Google" color={ColorToken.TextSecondary} />
                  </BoxAtomic>
                </RowAtomic>
              </BoxAtomic>
            </ButtonAtomic>
          </BoxAtomic>
        </BoxAtomic>
      </BoxAtomic>
    </Modal>
  );
};

export default LoginModalMolecule;
