```javascript
import React from 'react';
import { Image, StyleSheet, ActivityIndicator } from 'react-native';
import { CachedImage } from 'react-native-cached-image';

const MyImage = ({ source }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <CachedImage
      source={{ uri: source }}
      style={styles.image}
      resizeMode="contain"
      placeholderContent={<ActivityIndicator size="large" />}
      onError={(error) => console.warn('Error loading image:', error)}
      onLoadEnd={() => setIsLoading(false)}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});

export default MyImage;
```