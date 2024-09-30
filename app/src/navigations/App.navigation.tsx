import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeNavigation from './Home.navigation';
import LoginModalMolecule from '../components/molecules/modal/LoginModal.molecule';
import {useSelector} from 'react-redux';
import {RootStates} from '../redux/store';

const AppNavigation: React.FC = () => {
  const auth = useSelector((state: RootStates) => state.auth);

  return (
    <NavigationContainer independent={true}>
      <LoginModalMolecule isVisible={auth.modalOpen} />
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
