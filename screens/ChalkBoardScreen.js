import React from 'react';
import { View, Text, StatusBar, ImageBackground, 
    Image, TouchableOpacity, StyleSheet} from 'react-native';

import { withNavigation } from 'react-navigation';

import ChalkBoard from './images/BGBaybayin5.png';
import CoinContainer from './images/Button-icon.png';
import CoinIcon from './images/Coin-icon.png';
import BackIcon from './images/Back-Icon.png';
import Eraser from './images/ERASER.png';

import SciptsButton from './images/ScriptsButton.png';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

class ChalkBoardScreen extends React.Component {
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
            <View style={{position: 'absolute', top: '0%', left: '0%',
                width: '100%', height: '100%', borderWidth: 1}}>
                    <Image source={ChalkBoard} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
                    </Image>
            </View>

            <View style={{ position: 'absolute', 
                        width: '100%',
                        height: '100%',
                }} >
                <RNSketchCanvas
                    user={'noClear'}
                    containerStyle={{position: 'absolute', 
                        width: '100%',
                        height: '100%',
                        borderWith: 5}}
                    canvasStyle={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                    defaultStrokeIndex={0}
                    defaultStrokeWidth={25}
                    onStrokeChanged={(X, Y)=>{
                        
                    }}
                    
                    onStrokeEnd={()=>{
                        
                    }}
                    undoComponent={<Image source={Eraser} style={{
                        width: '100%', height: '100%', resizeMode: 'stretch',
                            }}></Image>}
                        />
            </View>

            <TouchableOpacity style={style.BackStyle} onPress={this.gotoHome}>
                <Image source={BackIcon} style={style.SettingIconStyle}>
                </Image>
            </TouchableOpacity>

        </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    BaybayinStyle: {
        position: 'absolute',
        top: '15%',
        left: '25%',
        width: '50%',
        height: '70%',
    },
    CoinBankStyle: {
        position: 'absolute',
        top: '6%',
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
        top: '6%',
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

export default withNavigation(ChalkBoardScreen);