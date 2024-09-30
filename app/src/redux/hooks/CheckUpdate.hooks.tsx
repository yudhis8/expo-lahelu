import {useEffect} from 'react';
import {Alert} from 'react-native';
import RNFS from 'react-native-fs';

const currentAppVersion = '1.0.0'; // The version of the app running on the user's device.

const useCheckForUpdates = () => {
  const checkForUpdates = async () => {
    try {
      const response = await fetch(
        'http://my-react-native-ota-bundles-1.s3-website-ap-southeast-1.amazonaws.com/latest-version.json',
      );
      const versionInfo = await response.json();

      if (versionInfo.version > currentAppVersion) {
        Alert.alert('Update Available', 'A new update is available. Downloading now...');
        downloadBundle(versionInfo.bundleUrl);
      } else {
        console.log('App is up-to-date');
      }
    } catch (error) {
      console.error('Error checking for updates:', error);
    }
  };

  const downloadBundle = async (bundleUrl: string) => {
    try {
      const localBundlePath = `${RNFS.DocumentDirectoryPath}/main.jsbundle`; // Local path to save the bundle
      const download = await RNFS.downloadFile({
        fromUrl: bundleUrl,
        toFile: localBundlePath,
      }).promise;

      if (download.statusCode === 200) {
        Alert.alert('Update Complete', 'Please close the app to apply changes');
        // Optionally, restart the app to apply the new bundle
      } else {
        console.error('Failed to download the bundle');
      }
    } catch (error) {
      console.error('Error downloading the bundle:', error);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);
};

export default useCheckForUpdates;
