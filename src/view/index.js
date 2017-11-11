import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'apsl-react-native-button';
import PropType from 'prop-types';

const App = ({usdPrice, priceRequest, loading}) => (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={priceRequest}
        isLoading={loading}
        activityIndicatorColor="white"
        textStyle={styles.text}>
        Get Price
    </Button>
      <Text style={styles.price}>
        {usdPrice}
      </Text>
    </View>
);

App.propTypes = {
  usdPrice: PropType.string,
  priceRequest: PropType.func,
  loading: PropType.bool
};

App.defaultProps = {
  usdPrice: 5000.0,
  priceRequest: () => console.log('getPrice'),
  loading: false
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#8052a5',
    flexDirection: 'column',
  },
  price: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  button: {
    backgroundColor: '#268471',
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'white'
  },
  text: {
    color: 'white',
  }
});

export default App;
