import React from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Platform,
    Image,
    TouchableOpacity,
    ImageBackground,
    Text,
} from 'react-native';

import Wallpaper from './Wallpaper';
const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

import {  Actions  } from 'react-native-router-flux';
import GLOBAL from '../HomePage/Home';


const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
    },
    avatarContainer: {
        marginTop: 70,
        marginBottom: 50

    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#FDC312',
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        fontSize:15,
        color:'white',
        fontWeight:'bold',
        top: 20,
    },
    item: {
        fontSize: 14,
        fontWeight: '300',
        paddingTop: 5,
    },
    menuImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        position: 'absolute',
        width: 284
    },
    picture: {
        flex: 1,
        height: 200,
        resizeMode: 'cover'
    },
    menuItems: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
 
    },
    button: {
        paddingLeft:10,
        marginBottom:10,
        flex: 1,
        height: 60,
        justifyContent:'center',
        alignItems: 'flex-start',
        width: 284

    }, buttonText: {
  
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat',
        fontSize: 20,
    },
    
});

export default function Menu({ onItemSelected }) {

  
    if (Platform.OS == 'android') {
    return (
        <Wallpaper source={require('../../images/menuBg.jpg')}>
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <ImageBackground style={styles.menuImage} imageStyle={styles.picture} source={require('../../images/menuImage.png')}>
                </ImageBackground>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri }}
                    />
                    <Text style={styles.name}>{GLOBAL.BASE_URL}</Text>
                </View>

                <View style={styles.menuItems}>
                    <TouchableOpacity style={styles.button}
                     onPress={()=> Actions.trainingPageScreen()}
                        activeOpacity={1} >

                        <Text style={styles.buttonText}
                       
                        >
                       
                            <Image                             
                                source={require('../../images/icons/antrenman.png')}
                            />  Antrenmanlarım </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                         onPress={()=> Actions.nutritionPageScreen()}
                        activeOpacity={1} >

                        <Text style={styles.buttonText}>
                            <Image                             
                                source={require('../../images/icons/eating.png')}
                            />  Beslenme Listelerim </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={this._onPress}
                        activeOpacity={1} >

                        <Text style={styles.buttonText}>
                            <Image                             
                                source={require('../../images/icons/calendar.png')}
                            />  Antrenman Takvimim </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={this._onPress}
                        activeOpacity={1} >

                        <Text style={styles.buttonText}>
                            <Image                             
                                source={require('../../images/icons/extra.png')}
                            />  Ekstralar </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                                  onPress={()=> Actions.profilePage()}
                        activeOpacity={1} >

                        <Text style={styles.buttonText}>
                            <Image                             
                                source={require('../../images/icons/profile.png')}
                            />  Profilim </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                            onPress={()=> Actions.beforeAfterPage()}
                        activeOpacity={1} >

                        <Text style={styles.buttonText}>
                            <Image                             
                                source={require('../../images/icons/setting.png')}
                            />  Ayarlar </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={this._onPress}
                        activeOpacity={1} >

                        <Text style={styles.buttonText}>
                            <Image                             
                                source={require('../../images/icons/sss.png')}
                            />  Sıkça Sorulan Sorular </Text>

                    </TouchableOpacity>
           

                    {/* <Text onPress={() => onItemSelected('Contacts')}
                        style={styles.item}>Contacts</Text> */}
                </View>
            </ScrollView>
        </Wallpaper >
    );
}else{
    return(
        <Wallpaper source={require('../../images/menuBg.jpg')}>
        <ScrollView scrollsToTop={false} style={styles.menu}>
            <ImageBackground style={styles.menuImage} imageStyle={styles.picture} source={require('../../images/menuImage.png')}>
            </ImageBackground>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri }}
                />
                <Text style={styles.name}>Your name</Text>
            </View>

            <View style={styles.menuItems}>
                <TouchableOpacity style={styles.button}
                    onPress={this._onPress}
                    activeOpacity={1} >

                    <Text style={styles.buttonText}
                     onPress={()=> Actions.trainingPageScreen()}
                    >
                        <Image                             
                            source={require('../../images/icons/antrenmanIos.png')}
                        />  Antrenmanlarım </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={this._onPress}
                    activeOpacity={1} >

                    <Text style={styles.buttonText}>
                        <Image                             
                            source={require('../../images/icons/eatingIos.png')}
                        />  Beslenme Listelerim </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this._onPress}
                    activeOpacity={1} >

                    <Text style={styles.buttonText}>
                        <Image                             
                            source={require('../../images/icons/calendarIos.png')}
                        />  Antrenman Takvimim </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this._onPress}
                    activeOpacity={1} >

                    <Text style={styles.buttonText}>
                        <Image                             
                            source={require('../../images/icons/extraIos.png')}
                        />  Ekstralar </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={()=> Actions.profilePage()}
                    activeOpacity={1} >

                    <Text style={styles.buttonText}>
                        <Image                             
                            source={require('../../images/icons/profileIos.png')}
                        />  Profilim </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this._onPress}
                    activeOpacity={1} >

                    <Text style={styles.buttonText}>
                        <Image                             
                            source={require('../../images/icons/settingIos.png')}
                        />  Ayarlar </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this._onPress}
                    activeOpacity={1} >

                    <Text style={styles.buttonText}>
                        <Image                             
                            source={require('../../images/icons/sssIos.png')}
                        />  Sıkça Sorulan Sorular </Text>

                </TouchableOpacity>
       

                {/* <Text onPress={() => onItemSelected('Contacts')}
                    style={styles.item}>Contacts</Text> */}
            </View>
        </ScrollView>
    </Wallpaper >
);}

}

Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};