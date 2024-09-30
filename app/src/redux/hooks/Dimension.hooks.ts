import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import Helper from '../../helpers/helper';

const useDimensions = () => {
  const [height, setHeight] = useState(Helper.widthPercentage('80'));
  const [width, setWidth] = useState(Helper.widthPercentage('100'));

  useEffect(() => {
    const updateDimension = () => {
      setHeight(Helper.widthPercentage('80'));
      setWidth(Helper.widthPercentage('100'));
    };

    const subscription = Dimensions.addEventListener('change', updateDimension);

    // Cleanup the event listener on component unmount
    return () => {
      subscription?.remove();
    };
  }, []);

  return {height, width};
};

export default useDimensions;
