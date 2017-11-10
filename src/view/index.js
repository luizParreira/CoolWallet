import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'apsl-react-native-button';
import container from './container';
import {connect} from 'react-redux';

const App = ({usdPrice, priceRequest, loading}) => (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={priceRequest}
        loading={loading}>
        Get Price
    </Button>
      <Text style={styles.price}>
        {usdPrice}
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

export default connect()(container(App));
