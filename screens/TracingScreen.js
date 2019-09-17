import React from 'react';
import { View, Text, StatusBar, ImageBackground, 
    Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import { withNavigation } from 'react-navigation';

import ChalkBoard from './images/BGBaybayin5.png';
import CoinContainer from './images/Button-icon.png';
import CoinIcon from './images/Coin-icon.png';
import BackIcon from './images/Back-Icon.png';
import Eraser from './images/ERASER.png';
import ExitIcon from './images/Exit-Icon.png';
import NextIcon from './images/Next-icon.png';
import PrevIcon from './images/Prev-icon.png';

import SciptsButton from './images/ScriptsButton.png';
import BaybayinFrame from './images/Baybayin-Frame.png';

import TracingA from './tracing/tracingA';
import TracingEI from './tracing/tracingEI';
import TracingOU from './tracing/tracingOU';
import TracingBA from './tracing/tracingBA';
import TracingKA from './tracing/tracingKA';
import TracingDA from './tracing/tracingDA';
import TracingGA from './tracing/tracingGA';
import TracingHA from './tracing/tracingHA';
import TracingLA from './tracing/tracingLA';
import TracingMA from './tracing/tracingMA';
import TracingNA from './tracing/tracingNA';
import TracingNGA from './tracing/tracingNGA';
import TracingPA from './tracing/tracingPA';
import TracingSA from './tracing/tracingSA';
import TracingTA from './tracing/tracingTA';
import TracingWA from './tracing/tracingWA';
import TracingYA from './tracing/tracingYA';

const tracingScript = [TracingA, TracingEI, TracingOU, TracingBA, TracingKA, TracingDA, TracingGA, TracingHA, TracingLA,
    TracingMA, TracingNA, TracingNGA, TracingPA, TracingSA, TracingTA, TracingWA, TracingYA];

import A from './images/scripts/A.png';
import EI from './images/scripts/EI.png';
import OU from './images/scripts/OU.png';
import BA from './images/scripts/BA.png';
import KA from './images/scripts/KA.png';
import DA from './images/scripts/DA.png';
import GA from './images/scripts/GA.png';
import HA from './images/scripts/HA.png';
import LA from './images/scripts/LA.png';
import MA from './images/scripts/MA.png';
import NA from './images/scripts/NA.png';
import NGA from './images/scripts/NGA.png';
import PA from './images/scripts/PA.png';
import SA from './images/scripts/SA.png';
import TA from './images/scripts/TA.png';
import WA from './images/scripts/WA.png';
import YA from './images/scripts/YA.png';

import script_A from './images/planeScripts/script_A.png';
import script_EI from './images/planeScripts/script_EI.png';
import script_OU from './images/planeScripts/script_OU.png';
import script_BA from './images/planeScripts/script_BA.png';
import script_KA from './images/planeScripts/script_KA.png';
import script_DA from './images/planeScripts/script_DARA.png';
import script_GA from './images/planeScripts/script_GA.png';
import script_HA from './images/planeScripts/script_HA.png';
import script_LA from './images/planeScripts/script_LA.png';
import script_MA from './images/planeScripts/script_MA.png';
import script_NA from './images/planeScripts/script_NA.png';
import script_NGA from './images/planeScripts/script_NGA.png';
import script_PA from './images/planeScripts/script_PA.png';
import script_TA from './images/planeScripts/script_TA.png';
import script_WA from './images/planeScripts/script_WA.png';
import script_YA from './images/planeScripts/script_YA.png';
import script_SA from './images/planeScripts/script_SA.png';


const romanList = [script_A, script_EI, script_OU, script_BA, script_KA, script_DA, script_GA, script_HA, script_LA, script_MA, script_NA,
        script_NGA, script_PA, script_SA, script_TA, script_WA, script_YA,];

class TracingScreen extends React.Component {
    static navigationOptions = {
        header:null,
    }

    scriptsPressed = () => {
        this.setState({scripts: this.state.scripts ? false : true});
    }
    scriptsClosePressed = () => {
        this.setState({scripts: this.state.scripts ? false : true});
        this.setState({firstScripts: true, 
            secondScripts: false});
    }

    constructor() {
        super();
        this.state = {
            scripts: false,
            firstScripts: true,
            secondScripts: false,
            nextTraced: true,
            prevTraced: false,
            tracingScript: tracingScript[0],
            traceIndex: 0,
            roman: romanList[0],
            toTraceScripts: true, 
        }
    }

    scriptPicked = (index) => {
        if(index == 0) {
            this.setState({prevTraced: false, nextTraced: true});
        } else if(index == 16) {
            this.setState({prevTraced: true, nextTraced: false});
        } else {
            this.setState({prevTraced: true, nextTraced: true});
        }
        this.setState({tracingScript: tracingScript[index], traceIndex: index, roman: romanList[index]});
        this.scriptsClosePressed();
    }

    nextScriptListPressed = () => {
        this.setState({firstScripts: this.state.firstScripts ? false : true, 
            secondScripts: this.state.secondScripts ? false : true});
    }

    nextTracePressed = () => {
        if(this.state.traceIndex == 16) {
            this.setState({tracingScript: tracingScript[0], traceIndex: 0, roman: romanList[0],
            prevTraced: false, nextTraced: true});
        } else {
            let index = this.state.traceIndex + 1;
            if(index == 16) {
                this.setState({nextTraced: false});
            }
            this.setState({tracingScript: tracingScript[index], traceIndex: index, roman: romanList[index],
            prevTraced: true});
        }
        //this.closeNextPrevBtn();
    }

    prevTracePressed = () => {
        if(this.state.traceIndex == 0) {
            this.setState({tracingScript: tracingScript[16], traceIndex: 16, roman: romanList[16], prevTraced: true,
            nextTraced: false});
        } else {
            let index = this.state.traceIndex - 1;
            if(index == 0) {
                this.setState({prevTraced: false});
            }
            this.setState({tracingScript: tracingScript[index], traceIndex: index, roman: romanList[index],
            nextTraced: true,});
        }
        //this.closeNextPrevBtn();
    }

    closeNextPrevBtn = () => {
        this.setState({prevTraced: false, nextTraced: false, });
    }

    clearTrace = () => {
        this.setState({toTraceScripts: false,});
        setTimeout(()=> {
            this.setState({toTraceScripts: true,});
        }, 50);
    }

    gotoHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        StatusBar.setHidden(true);
        return (
        <ImageBackground source={ChalkBoard} style={{flex: 1}}>
            <View style={style.backView}>
                    <Image source={ChalkBoard} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
                    </Image>
            </View>

            {/* Tracing Script */}
            {this.state.toTraceScripts &&
                <this.state.tracingScript />
            }

            {/* Peso Coins */}
            <View style={style.CoinBankStyle}> 
                <Image source={CoinContainer} style={style.CoinContainerStyle}>
                </Image>
                <Image source={CoinIcon} style={style.CoinStyle}>
                </Image>
            </View>
            
            {/* Back to Home Button */}
            <TouchableOpacity style={style.BackStyle} onPress={this.gotoHome}>
                <Image source={BackIcon} style={style.SettingIconStyle}>
                </Image>
            </TouchableOpacity>

            {/* Script List Button */}
            <TouchableOpacity style={style.scriptBtn} onPress={this.scriptsPressed}>
                
                <Image source={SciptsButton} style={style.CoinContainerStyle}>
                </Image>
            </TouchableOpacity>

            <Image source={this.state.roman} style={{
                    position: 'absolute',
                    bottom: '17%',
                    right: '4.5%',
                    width: '10%',
                    height: '10%',
                    resizeMode: 'contain',
                }}>
            </Image>


            {/* Next Trace Pressed */}
            { this.state.nextTraced && 
                <View style={style.backView}>
                    {/* NextTrace Icon */}
                    <TouchableOpacity style={[style.nextPrevTrace, {right: '5%',}]} onPress={this.nextTracePressed}> 
                        <Image source={NextIcon} style={style.CoinContainerStyle}>
                        </Image>
                    </TouchableOpacity>
                </View>
            }

            {/* Prev Trace Pressed */}
            { this.state.prevTraced && 
                <View style={style.backView}>
                    {/* NextTrace Icon */}
                    <TouchableOpacity style={[style.nextPrevTrace, {left: '5%',}]} onPress={this.prevTracePressed}> 
                        <Image source={PrevIcon} style={style.CoinContainerStyle}>
                        </Image>
                    </TouchableOpacity>
                </View>
            }

            <TouchableOpacity style={{
                position: 'absolute',
                bottom: '7%',
                left: '7%',
                width: '6%',
                height: '12%',
            }} onPress={this.clearTrace}>
                <Image source={Eraser} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                }}></Image>
            </TouchableOpacity>

            {/* Scripts List Button Pressed */}
            { this.state.scripts && 
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%', }}>
                    <TouchableWithoutFeedback onPress={this.scriptsClosePressed}>
                    <View style={style.background}>
                        </View>
                    </TouchableWithoutFeedback>

                    {/* Baybayin Script List Frame */}
                    <View style={style.menu}>
                        <Image source={BaybayinFrame} style={[style.image, {position: 'absolute'}]}>
                        </Image>

                        {/* Script List, First List*/}
                        { this. state.firstScripts && 
                            <View style={style.scriptListContainer}>
                                <View style={style.scriptList}>
                                    <View style={style.scriptListRow}>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(0);
                                        }}>
                                            <Image source={A} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', marginLeft: '5%', marginRight: '5%',}} onPress={()=> {
                                            this.scriptPicked(1);
                                        }}>
                                            <Image source={EI} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(2);
                                        }}>
                                            <Image source={OU} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[style.scriptListRow,]}>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(3);
                                        }}>
                                            <Image source={BA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', marginLeft: '5%', marginRight: '5%',}} onPress={()=> {
                                            this.scriptPicked(4);
                                        }}>
                                            <Image source={KA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(5);
                                        }}>
                                            <Image source={DA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={style.scriptListRow}>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(6);
                                        }}>
                                            <Image source={GA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', marginLeft: '5%', marginRight: '5%',}} onPress={()=> {
                                            this.scriptPicked(7);
                                        }}>
                                            <Image source={HA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(8);
                                        }}>
                                            <Image source={LA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* First Script, Next Icon */}
                                <TouchableOpacity style={[style.scriptNextPrevBtn, {right: '-3%'}]}
                                    onPress={this.nextScriptListPressed}>
                                    <Image source={NextIcon} style={style.ImageStyle}></Image>
                                </TouchableOpacity>
                            </View>
                        }

                        {/* Script List, Second List*/}
                        { this. state.secondScripts && 
                            <View style={style.scriptListContainer}>
                                <View style={style.scriptList}>
                                    <View style={style.scriptListRow}>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(9);
                                        }}>
                                            <Image source={MA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', marginLeft: '5%', marginRight: '5%',}} onPress={()=> {
                                            this.scriptPicked(10);
                                        }}>
                                            <Image source={NA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(11);
                                        }}>
                                            <Image source={NGA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[style.scriptListRow,]}>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(12);
                                        }}>
                                            <Image source={PA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', marginLeft: '5%', marginRight: '5%',}} onPress={()=> {
                                            this.scriptPicked(13);
                                        }}>
                                            <Image source={SA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(14);
                                        }}>
                                            <Image source={TA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={[style.scriptListRow,]}>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', }} onPress={()=> {
                                            this.scriptPicked(15);
                                        }}>
                                            <Image source={WA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '20%', height: '100%', marginLeft: '5%'}} onPress={()=> {
                                            this.scriptPicked(16);
                                        }}>
                                            <Image source={YA} style={style.scriptIcon}></Image>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                                {/* Second Script, Prev Icon */}
                                <TouchableOpacity style={[style.scriptNextPrevBtn, {left: '-3%'}]}
                                    onPress={this.nextScriptListPressed}>
                                    <Image source={PrevIcon} style={style.ImageStyle}></Image>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>

                    {/* Script List Exit Icon */}
                    <View style={style.ExitIcon}>
                        <TouchableOpacity onPress={this.scriptsClosePressed}>
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
    backView: { 
        position: 'absolute',
        top: '0%',
        left: '0%',
        width: '100%',
        height: '100%'
    },
    nextPrevTrace: {
        position: 'absolute',
        top: '43%',
        width: '6.5%',
        height: '14%',
    },
    scriptNextPrevBtn: {
        position: 'absolute',
        bottom: '5%',
        width: '20%',
        height: '20%',
    },
    scriptListRow: {
//        borderWidth: 1,
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    scriptList: {
        position: 'absolute',
        top: '5%',
        left: '10%',
        flexDirection: 'row',
//        borderWidth: 1,
        width: '80%',
        height: '90%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },
    scriptListContainer: {
        position: 'absolute',
        top: '16%',
        left: '2%',
        width: '96%',
        height: '80%',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    scriptIcon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    scriptBtn: {
        position: 'absolute',
        bottom: '6%',
        right: '3%',
        width: '12.5%',
        height: '12.5%',
    },
    background: {
        position: 'absolute',
        top: '0%',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    ExitIcon: {
        position: 'absolute',
        top: '12.5%',
        right: '17%',
        width: '6%',
        height: '8%',
    },
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
    },
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

export default withNavigation(TracingScreen);