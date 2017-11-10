
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'apsl-react-native-button'

export default () => (
  <View style={styles.container}>
    <Button style={styles.button}>
      Get Price
    </Button>
    <Text style={styles.price}>
      50000.00
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  price: {
    textAlign: 'center',
    color: '#333333',
    margin: 20,
  },
  button: {
    backgroundColor: 'purple',
    margin: 20,
  }
});
