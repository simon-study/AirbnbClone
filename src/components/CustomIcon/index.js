import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import iconMoonConfig from 'selection.json';

const Icon = createIconSetFromIcoMoon(iconMoonConfig);

const CustomIcon = (props) => {
  const { name, size, color } = props;
  return (
    <Icon
      name={name}
      size={size}
      color={color}
    />
  );
}

export default CustomIcon;
