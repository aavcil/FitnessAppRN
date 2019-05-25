import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Dimensions from 'Dimensions';

import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }


  render() {


    const DEVICE_HEIGHT = Dimensions.get('window').height;
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Footer >
        <FooterTab style={{ backgroundColor: '#ff0055' }}>
          <Button vertical onPress={() => Actions.trainingPageScreen()}>
            <Image source={require('../../images/icons/antrenmanFooter.png')} style={{ width: 62, height: 45 }} />

          </Button>
          <Button vertical onPress={() => Actions.nutritionPageScreen()}>
            <Image source={require('../../images/icons/beslenme.png')} style={{ width: 45, height: 47 }} />

          </Button>
          <Button vertical onPress={()=>{Actions.packetPageScreen()}} >
            <Image source={require('../../images/icons/calendarFooter.png')} style={{ width: 57, height: 45 }} />

          </Button>
          <Button vertical onPress={() => Actions.beforeAfterPage()}>
            <Image source={require('../../images/icons/extraFooter.png')} style={{ width: 40, height: 45 }} />

          </Button>
        </FooterTab>
      </Footer>
    );
  }
}