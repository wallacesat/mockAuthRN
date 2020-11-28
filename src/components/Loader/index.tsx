import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Loader {
  loading?: boolean;
}

const Loader: React.FC<Loader> = (loading) => {
  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#999" />
    </View>
  ) : null;
};

export default Loader;
