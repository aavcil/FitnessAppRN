import React from 'react';
import { Font } from 'expo';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Main from './components/Main';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount(){
    await Font.loadAsync({
      'Montserrat': require('./assets/fonts/Montserrat-Regular.otf'),
      'BebasNeue': require('./assets/fonts/BebasNeue-Bold.otf'), 
    });


    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>

        <Text>Loading...</Text>
      </View>
      );
    }
    return (
      <View style={styles.container}>

        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});