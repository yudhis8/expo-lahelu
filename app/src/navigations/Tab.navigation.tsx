import React from 'react';
import {createBottomTabNavigator, BottomTabNavigationOptions, BottomTabBarProps} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import ColorToken from '../constants/Color.constant';

import {ImageHomeTab} from '../constants/Image.constant';
import IconAtomic from '../components/atomics/images/Icon.atomic';
import CustomTabBar from '../components/molecules/tabbar/CustomTabBar.molecule';
import TopicScreen from '../screens/topic';
import {RouteName} from '../constants/Route.constant';
import useDimensions from '../redux/hooks/Dimension.hooks';
import Helper from '../helpers/helper';

const tabBarOptions: BottomTabNavigationOptions = {
  tabBarLabelStyle: {
    fontSize: 16,
    paddingTop: 5,
    color: ColorToken.BrandSecondary,
  },
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: ColorToken.BrandPrimary,
  },
  tabBarItemStyle: {
    paddingBottom: 6,
    paddingTop: 9,
    backgroundColor: ColorToken.BrandPrimary,
  },
};

const Tab = createBottomTabNavigator();

const HomeIcon = ({focused}: {focused: boolean}) => <IconAtomic focused={focused} url={ImageHomeTab.HomeIcon} />;

const TopicIcon = ({focused}: {focused: boolean}) => <IconAtomic focused={focused} url={ImageHomeTab.TopicIcon} />;

const AddIcon = ({focused}: {focused: boolean}) => <IconAtomic focused={focused} url={ImageHomeTab.AddIcon} />;

const NotifIcon = ({focused}: {focused: boolean}) => <IconAtomic focused={focused} url={ImageHomeTab.NotifIcon} />;

const CustomTabBars = (props: BottomTabBarProps, width: number) => (
  <CustomTabBar {...props} isVisible={!Helper.isTablet(width)} />
);

const TabNavigation: React.FC = () => {
  const {width} = useDimensions();

  return (
    <Tab.Navigator
      tabBar={props => CustomTabBars(props, width)}
      screenOptions={{...tabBarOptions, headerShown: false}}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name={RouteName.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name={RouteName.TopicScreen}
        component={TopicScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: TopicIcon,
        }}
      />
      <Tab.Screen
        name={RouteName.AddScreen}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: AddIcon,
        }}
      />
      <Tab.Screen
        name={RouteName.NotifScreen}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: NotifIcon,
        }}
      />
      <Tab.Screen
        name={RouteName.ProfileScreen}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: HomeIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
