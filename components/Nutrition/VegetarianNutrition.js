import React, { Component, PropTypes } from 'react';
import Wallpaper from '../Shared/Wallpaper';
import { Header, Tabs, Tab } from 'native-base';
import Dimensions from 'Dimensions';
const menuImage = require('../../images/icons/menu.png');
import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity

} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import Menu from '../Shared/Menu';
import SideMenuu from 'react-native-side-menu';



export default class VegetarianNutrition extends Component {

    constructor(props) {
        super(props);
        this.state = {

            selectedItem: ' ',

        };
    }

    _onPress(data) {

        Actions.nutritionDetailPageScreen( {setData:data } );

    }

    render() {

        return (
            <Wallpaper source={require('../../images/Vejeteryan.jpg')}>

                <ScrollView >
                    <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                    <Image style={{  opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBgFirst.png')} />                    
                    <Text style={{opacity:0.5,fontSize:30,top:-105,textAlign:'center',color:'#ff0055',fontWeight:'bold'}}> VEJETARYEN SMOOTHIE DİYETİ</Text>

                     <Image resizeMode='cover' style={{opacity:1,top:-180,left:(DEVICE_WIDTH/2)-37.5,width:75,height:80}} source={require('../../images/icons/Lock.png')} />    
                  </View>
                        
                  <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                    <Image style={{  opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />                    
                    <Text style={{opacity:0.5,fontSize:30,top:-105,textAlign:'center',color:'#ff0055',fontWeight:'bold' }}  onPress={(e)=> this._onPress(5)}  >LAKTO-OVO VEJETARYEN DİYET LİSTESİ</Text>

                     <Image resizeMode='cover' style={{opacity:1,top:-180,left:(DEVICE_WIDTH/2)-37.5,width:75,height:80}} source={require('../../images/icons/Lock.png')} />    
                  </View>
               
                  <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                    <Image style={{  opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />                    
                    <Text style={{opacity:0.5,fontSize:30,top:-105,textAlign:'center',color:'#ff0055',fontWeight:'bold'}} onPress={(e)=> this._onPress(6)} > PESKETARYEN DİYET LİSTESİ</Text>


                     <Image resizeMode='cover' style={{opacity:1,top:-160,left:(DEVICE_WIDTH/2)-37.5,width:75,height:80}} source={require('../../images/icons/Lock.png')} />    
                  </View>
                    
                  <View style={{ width: DEVICE_WIDTH, height: 170 }}>
                    <Image style={{  opacity: 0.7, width: DEVICE_WIDTH, height: 170 }} source={require('../../images/shadowBg.png')} />                    
                    <Text style={{opacity:0.5,fontSize:30,top:-105,textAlign:'center',color:'#ff0055',fontWeight:'bold'}} onPress={(e)=> this._onPress(7)} > TAM VEJETARYEN DİYET LİSTESİ</Text>


                     <Image resizeMode='cover' style={{opacity:1,top:-180,left:(DEVICE_WIDTH/2)-37.5,width:75,height:80}} source={require('../../images/icons/Lock.png')} />    
                  </View>
                </ScrollView>
            </Wallpaper>

        );
    }
}

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 2,
        padding: 10,
        left: 10,
    },
    images: {
        width: DEVICE_WIDTH,
        height: 230,

    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});