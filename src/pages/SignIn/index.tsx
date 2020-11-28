import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Loader from '../../components/Loader';

import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SignIn: React.FC = () => {
  const {signIn, signed, loading} = useAuth();

  console.log(signed);
  function handleSignIn() {
    signIn();
  }

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
