import React from 'react';
import { View, Text, StatusBar, ImageBackground, 
    Image, TouchableOpacity, StyleSheet} from 'react-native';

import { withNavigation } from 'react-navigation';

import MenuFrame from './images/BGBaybayinAchievement.png';

class AchievementScreen extends React.Component {
    static navigationOptions = {
        header:null,
    }

    render() {
        StatusBar.setHidden(true);
        return (
            <View style={style.menu}>
                <Image source={MenuFrame} style={style.image}>
                </Image>
            </View>
            
        );
    }
}

const style = StyleSheet.create({
    
    menu: {
        position: 'absolute',
        top: '10%',
        left: '15%',
        width: '70%',
        height: '80%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    }
});

export default withNavigation(AchievementScreen);