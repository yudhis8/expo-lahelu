// CustomTabBar.tsx
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import ColorToken from '../../../constants/Color.constant';
import {ImageHomeTab} from '../../../constants/Image.constant';
import ImageAtomic from '../../atomics/images/Image.atomic';

interface CustomTabBarProps extends BottomTabBarProps {
  isVisible: boolean;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({state, descriptors, navigation, isVisible}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = options.tabBarIcon
          ? options.tabBarIcon({
              focused: isFocused,
              color: ColorToken.BrandPrimary,
              size: 24,
            })
          : null;

        const children = () => {
          if (label === 'ProfileScreen') {
            return <ImageAtomic imageStyle={styles.profileIcon} imageSource={ImageHomeTab.ProfileIcon} />;
          } else {
            return icon;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabItem}>
            {children()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: ColorToken.BrandPrimary,
    borderTopWidth: 0.5,
    borderTopColor: ColorToken.BorderPrimary,

    zIndex: 1,
    width: '100%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    width: 24,
    height: 24,
    borderRadius: 100,
  },
});

export default CustomTabBar;
