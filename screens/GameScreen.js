import React from 'react';
import { View, Text, StatusBar, ImageBackground, 
    Image, TouchableOpacity, StyleSheet} from 'react-native';

import { withNavigation } from 'react-navigation';

import ChalkBoard from './images/BGBaybayin5.png';
import CoinContainer from './images/Button-icon.png';
import CoinIcon from './images/Coin-icon.png';
import BackIcon from './images/Back-Icon.png';
import SciptsButton from './images/ScriptsButton.png';

class GameScreen extends React.Component {
    static navigationOptions = {
        header:null,
    }

    gotoHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        StatusBar.setHidden(true);
        return (
        <ImageBackground source={ChalkBoard} style={{flex: 1}}>
            <View style={style.CoinBankStyle}> 
                <Image source={CoinContainer} style={style.CoinContainerStyle}>
                </Image>
                <Image source={CoinIcon} style={style.CoinStyle}>
                </Image>
            </View>

            <TouchableOpacity style={style.BackStyle} onPress={this.gotoHome}>
                <Image source={BackIcon} style={style.SettingIconStyle}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity style={{
                position: 'absolute',
                bottom: '3%',
                right: '3%',
                width: '12.5%',
                height: '12.5%',
            }}> 
            <Image source={SciptsButton} style={style.CoinContainerStyle}>
                </Image>
            </TouchableOpacity>

        </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    CoinBankStyle: {
        position: 'absolute',
        top: '3%',
        right: '3%',
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
    BackStyle: {
        position: 'absolute',
        top: '4%',
        left: '2%',
        width: '10%',
        height: '15%',
    },
    SettingIconStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    ImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});

export default withNavigation(GameScreen);