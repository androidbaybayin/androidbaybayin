import React from 'react';
import { View, Text, StatusBar, ImageBackground, Dimensions,
    Image, TouchableOpacity, StyleSheet} from 'react-native';

import { withNavigation } from 'react-navigation';

import BAYBAYIN1 from '../images/toTraceScripts/BAYBAYIN_NA.png';
import BAYBAYIN2 from '../images/toTraceScripts/BAYBAYIN_NA2.png';
import TRACED from '../images/tracedScripts/TRACED_NA.png';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const scopeX = screenWidth * 0.03;
const scopeY = screenHeight * 0.03;

class TracingNAScreen extends React.Component {
    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props);
        this. state = {
            toTrace: BAYBAYIN1,
            dot1: false,
            dot2: false,
            dot3: false,
            dot4: false,
            dot5: false,
            dot6: false,
            dot7: false,
            dot8: false,
            dot9: false,
            dot10: false,
            dot11: false,
            dot12: false,
            dot13: false,
        },

        this.index = 0;

        // Dots Locations
        this.line1 = [{
            x: screenWidth * 0.33,
            y: screenHeight * 0.70,
        }, {
            x: screenWidth * 0.335,
            y: screenHeight * 0.43,
        }, {
            x: screenWidth * 0.39,
            y: screenHeight * 0.25,
        }, {
            x: screenWidth * 0.49,
            y: screenHeight * 0.15,
        }, {
            x: screenWidth * 0.605,
            y: screenHeight * 0.23,
        }, {
            x: screenWidth * 0.67,
            y: screenHeight * 0.48,
        }, {
            x: screenWidth * 0.67,
            y: screenHeight * 0.70,
        }, 

        {
            x: screenWidth * 0.515,
            y: screenHeight * 0.30,
        }, {
            x: screenWidth * 0.485,
            y: screenHeight * 0.44,
        }, {
            x: screenWidth * 0.525,
            y: screenHeight * 0.53,
        }, {
            x: screenWidth * 0.485,
            y: screenHeight * 0.63,
        }, {
            x: screenWidth * 0.53,
            y: screenHeight * 0.73,
        }, {
            x: screenWidth * 0.49,
            y: screenHeight * 0.82,
        }, 

    ];
    }

    scriptTrace =  (X, Y) => {
        if(!this.state.dot1) {
            if((X >= this.line1[0].x - scopeX && X <= this.line1[0].x + scopeX) && 
            (Y >= this.line1[0].y - scopeY && Y <= this.line1[0].y + scopeY)) {
                this.setState({dot1: true});
            }
        } else if(this.state.dot1 && !this.state.dot2) {
            this.setState({dot2: 
                ((X >= this.line1[1].x - scopeX && X <= this.line1[1].x + scopeX) && 
                (Y >= this.line1[1].y - scopeY && Y <= this.line1[1].y + scopeY)) ? true : false});
                
        } else if(this.state.dot2 && !this.state.dot3) {
            this.setState({dot3: 
                ((X >= this.line1[2].x - scopeX && X <= this.line1[2].x + scopeX) && 
                (Y >= this.line1[2].y - scopeY && Y <= this.line1[2].y + scopeY)) ? true : false});
                //alert('3');
                //alert('2' + this.state.dot2);
        } 
        
        else if(this.state.dot3 && !this.state.dot4) {
            this.setState({dot4: 
                ((X >= this.line1[3].x - scopeX && X <= this.line1[3].x + scopeX) && 
                (Y >= this.line1[3].y - scopeY && Y <= this.line1[3].y + scopeY)) ? true : false});
                
        } else if(this.state.dot4 && !this.state.dot5) {
            this.setState({dot5: 
                ((X >= this.line1[4].x - scopeX && X <= this.line1[4].x + scopeX) && 
                (Y >= this.line1[4].y - scopeY && Y <= this.line1[4].y + scopeY)) ? true : false});
                //alert('5');
        } else if(this.state.dot5 && !this.state.dot6) {
            this.setState({dot6: 
                ((X >= this.line1[5].x - scopeX && X <= this.line1[5].x + scopeX) && 
                (Y >= this.line1[5].y - scopeY && Y <= this.line1[5].y + scopeY)) ? true : false});
                //alert('6');
        } else if(this.state.dot6 && !this.state.dot7) {
            this.setState({dot7: 
                ((X >= this.line1[6].x - scopeX && X <= this.line1[6].x + scopeX) && 
                (Y >= this.line1[6].y - scopeY && Y <= this.line1[6].y + scopeY)) ? true : false});
        
        } else if(this.state.dot7 && !this.state.dot8) {
            this.setState({dot8: 
                ((X >= this.line1[7].x - scopeX && X <= this.line1[7].x + scopeX) && 
                (Y >= this.line1[7].y - scopeY && Y <= this.line1[7].y + scopeY)) ? true : false});
               //alert('8');
        } else if(this.state.dot8 && !this.state.dot9) {
            this.setState({dot9: 
                ((X >= this.line1[8].x - scopeX && X <= this.line1[8].x + scopeX) && 
                (Y >= this.line1[8].y - scopeY && Y <= this.line1[8].y + scopeY)) ? true : false});
               //alert('8');
        } else if(this.state.dot9 && !this.state.dot10) {
            this.setState({dot10: 
                ((X >= this.line1[9].x - scopeX && X <= this.line1[9].x + scopeX) && 
                (Y >= this.line1[9].y - scopeY && Y <= this.line1[9].y + scopeY)) ? true : false});
               //alert('8');
        } else if(this.state.dot10 && !this.state.dot11) {
            this.setState({dot11: 
                ((X >= this.line1[10].x - scopeX && X <= this.line1[10].x + scopeX) && 
                (Y >= this.line1[10].y - scopeY && Y <= this.line1[10].y + scopeY)) ? true : false});
               //alert('8');
        } else if(this.state.dot11 && !this.state.dot12) {
            this.setState({dot12: 
                ((X >= this.line1[11].x - scopeX && X <= this.line1[11].x + scopeX) && 
                (Y >= this.line1[11].y - scopeY && Y <= this.line1[11].y + scopeY)) ? true : false});
               //alert('8');
        } else if(this.state.dot12 && !this.state.dot13) {
            this.setState({dot13: 
                ((X >= this.line1[12].x - scopeX && X <= this.line1[12].x + scopeX) && 
                (Y >= this.line1[12].y - scopeY && Y <= this.line1[12].y + scopeY)) ? true : false});
               //alert('8');
        }

    }

    ifTraced = () => {
        if(this.state.dot7) {
            if(this.state.dot13) {
                this.setState({toTrace: TRACED});
            } else {
                this.setState({dot8: false, dot9: false, dot10: false, dot11: false, 
                    dot12: false, dot13: false, toTrace: BAYBAYIN2});
            }
        } else {
            this.clearBoard();
        }
    }

    clearBoard = () => {
        this.setState({dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, 
            dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, 
            dot12: false, dot13: false, toTrace: BAYBAYIN1});
     }

    render() {
        StatusBar.setHidden(true);
        return (
            <View style={style.backView}>
                {/* <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.70, left: screenWidth * 0.33}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.43, left: screenWidth * 0.335}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.25, left: screenWidth * 0.39}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.15, left: screenWidth * 0.49}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.23, left: screenWidth * 0.605}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.48, left: screenWidth * 0.67}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.70, left: screenWidth * 0.67}]}>
                </View> */}

                {/*
                    this.line1 = [{
                        x: screenWidth * 0.33,
                        y: screenHeight * 0.70,
                    }, {
                        x: screenWidth * 0.335,
                        y: screenHeight * 0.43,
                    }, {
                        x: screenWidth * 0.39,
                        y: screenHeight * 0.25,
                    }, {
                        x: screenWidth * 0.49,
                        y: screenHeight * 0.15,
                    }, {
                        x: screenWidth * 0.605,
                        y: screenHeight * 0.23,
                    }, {
                        x: screenWidth * 0.67,
                        y: screenHeight * 0.48,
                    }, {
                        x: screenWidth * 0.67,
                        y: screenHeight * 0.70,
                    }, 

                    {
                        x: screenWidth * 0.515,
                        y: screenHeight * 0.30,
                    }, {
                        x: screenWidth * 0.485,
                        y: screenHeight * 0.44,
                    }, {
                        x: screenWidth * 0.525,
                        y: screenHeight * 0.53,
                    }, {
                        x: screenWidth * 0.485,
                        y: screenHeight * 0.63,
                    }, {
                        x: screenWidth * 0.53,
                        y: screenHeight * 0.73,
                    }, {
                        x: screenWidth * 0.49,
                        y: screenHeight * 0.82,
                    }, 

                ];
                */}

                {/* <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.30, left: screenWidth * 0.515}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.44, left: screenWidth * 0.485}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.53, left: screenWidth * 0.525}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.63, left: screenWidth * 0.485}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.73, left: screenWidth * 0.53}]}>
                </View>
                <View style={[style.dot, {position: 'absolute', top: screenHeight * 0.82, left: screenWidth * 0.49}]}>
                </View> */}

                <View style={style.canvas} >
                    <View style={style.BaybayinStyle}>
                        <Image source={this.state.toTrace} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                <RNSketchCanvas
                        user={'clear'}
                        containerStyle={{position: 'absolute', 
                            width: '100%',
                            height: '100%',}}
                        canvasStyle={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                        defaultStrokeIndex={0}
                        defaultStrokeWidth={screenWidth * 0.035}
                        onStrokeChanged={(X, Y)=>{
                            this.scriptTrace(X, Y);
                        }}
                        
                        onStrokeEnd={()=>{
                            this.ifTraced();
                        }}
                            />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    backView: {
        position: 'absolute', top: '0%', width: '100%', height: '100%'
    },
    dot: {
        width: '1.5%',
        height: '3%',
        backgroundColor: 'yellow',
    },
    canvas: { 
        position: 'absolute',
        top: '5.1%',
        left: '2.52%',
        width: '95%',
        height: '90%',
    },
    BaybayinStyle: {
        position: 'absolute',
        top: '5%',
        left: '20%',
        width: '60%',
        height: '90%',
    },
    
    ImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});

export default withNavigation(TracingNAScreen);