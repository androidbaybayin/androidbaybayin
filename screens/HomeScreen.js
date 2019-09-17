import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableWithoutFeedback,
    Image, TouchableOpacity, StyleSheet} from 'react-native';

import { withNavigation } from 'react-navigation';

import ChalkBoard from './images/BGBaybayin5.png';
import CoinContainer from './images/Button-icon.png';
import MenuContainer from './images/MenuIcon.png';
import CoinIcon from './images/Coin-icon.png';
import SettingIcon from './images/Setting-icon.png';

import BaybayinButton from './images/BaybayinButton.png';
import GamesButton from './images/GamesButton.png';
import TracingButton from './images/TracingButton.png';
import ChalkBoardButton from './images/ChalkBoardButton.png';
import ExitIcon from './images/Exit-Icon.png';
import StarIcon from './images/Star-icon.png';
import StoreIcon from './images/Store-icon.png';
import AboutIcon from './images/About-icon.png';
import AtinSulatin from './images/AtinSulatin.png';

import Achievement from './Achievements';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header:null,
    }

    achievementPressed = () => {
        this.setState({achievement: this.state.achievement ? false : true});
    }
    achievementClosePressed = () => {
        this.setState({achievement: this.state.achievement ? false : true});
    }

    constructor() {
        super();
        this.state = {
            achievement: false,
        }
    }

    gotoTracing = () => {
        this.props.navigation.navigate('Trace');
    }
    
    gotoChalkBoard = () => {
        this.props.navigation.navigate('ChalkBoard');
    }

    gotoBaybayin = () => {
        this.props.navigation.navigate('Baybayin');
    }

    gotoGames = () => {
        this.props.navigation.navigate('Games');
    }

    gotoAbout = () => {
        this.props.navigation.navigate('About');
    }

    render() {
        StatusBar.setHidden(true);
        return (
        <ImageBackground source={ChalkBoard} style={{flex: 1}}>
            <View style={{position: 'absolute', top: '0%', left: '0%',
                width: '100%', height: '100%', borderWidth: 1}}>
                    <Image source={ChalkBoard} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
                    </Image>
            </View>
            <Image source={AtinSulatin} style={{
                position: 'absolute', bottom: '3%', left: '3%', width: '25%', height: '12.5%', resizeMode: 'contain',
            }}></Image>

            <View style={style.CoinBankStyle}> 
                <Image source={CoinContainer} style={style.CoinContainerStyle}>
                </Image>
                <Image source={CoinIcon} style={style.CoinStyle}>
                </Image>
            </View>

            <TouchableOpacity style={style.SettingStyle} onPress={this.settingPressed}>
                <Image source={SettingIcon} style={style.SettingIconStyle}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity style={{
                position: 'absolute',
                width: '25%', height: '25%',
                top: '20%', left: '17.5%',
            }} onPress={this.gotoGames}> 
                <Image source={GamesButton} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity style={{
                position: 'absolute',
                width: '25%', height: '25%',
                top: '55%', left: '22.5%',
            }} onPress={this.gotoTracing}> 
                <Image source={TracingButton} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity style={{
                position: 'absolute',
                width: '25%', height: '25%',
                top: '27.5%', left: '47.5%',
            }} onPress={this.gotoBaybayin}> 
                <Image source={BaybayinButton} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity style={{
                position: 'absolute',
                width: '25%', height: '25%',
                top: '62.5%', left: '52.5%',
            }} onPress={this.gotoChalkBoard}> 
                <Image source={ChalkBoardButton} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
                </Image>
            </TouchableOpacity>

            

            <TouchableOpacity style={style.SideMenuStyle}> 
                <Image source={MenuContainer} style={style.ImageStyle}>
                </Image>
                <Image source={StoreIcon} style={{
                    width: '60%', height: '50%', position: 'absolute', top: '25%', left: '20%', resizeMode: 'contain'
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={[style.SideMenuStyle, {top: '47.5%'}]}
                onPress={this.achievementPressed}> 
                <Image source={MenuContainer} style={style.ImageStyle}>
                </Image>
                <Image source={StarIcon} style={{
                    width: '60%', height: '50%', position: 'absolute', top: '25%', left: '20%', resizeMode: 'contain'
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={[style.SideMenuStyle, {top: '70%'}]}> 
                <Image source={MenuContainer} style={style.ImageStyle}>
                </Image>
                <Image source={AboutIcon} style={{
                    width: '60%', height: '50%', position: 'absolute', top: '25%', left: '20%', resizeMode: 'contain'
                }}></Image>
            </TouchableOpacity>

            { this.state.achievement && 
                <View style={[style.achievement,]}>
                    <TouchableWithoutFeedback onPress={this.achievementClosePressed}>
                        <View style={style.background}>
                            
                        </View>
                    </TouchableWithoutFeedback>
                    <Achievement/>
                    <View style={{
                        position: 'absolute',
                        top: '12.5%',
                        right: '17%',
                        width: '6%',
                        height: '8%',
                    }}>
                        <TouchableOpacity onPress={this.achievementClosePressed}>
                            <Image source={ExitIcon} style={style.ImageStyle}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </ImageBackground>
        );
    }
}


const style = StyleSheet.create({
    achievement: {
        position: 'absolute',
        top: '0%',
        width: '100%',
        height: '100%',
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
    },
    CoinBankStyle: {
        position: 'absolute',
        top: '6%',
        left: '3%',
        width: '12.5%',
        height: '12.5%',
    },
    CoinStyle: {
        position: 'absolute',
        top: '30%',
        left: '15%',
        width: '25%',
        height: '40%',
        resizeMode: 'contain',
    },
    CoinContainerStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    SettingStyle: {
        position: 'absolute',
        top: '6%',
        right: '2%',
        width: '10%',
        height: '15%',
    },
    SettingIconStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    SideMenuStyle: {
        position: 'absolute',
        top: '25%',
        right: '5%',
        width: '10%',
        height: '20%',
    },
    ImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});


export default withNavigation(HomeScreen);