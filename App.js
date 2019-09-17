import { createAppContainer } from 'react-navigation';
import { createStackNavigator,  } from 'react-navigation-stack';

import TracingScreen from './screens/TracingScreen';
import ChalkBoardScreen from './screens/ChalkBoardScreen';
import BaybayinScreen from './screens/BaybayinScreen';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';

const AppNavigator = createStackNavigator( {
    Home: {
        screen: HomeScreen,
    },
    Trace: {
        screen: TracingScreen,
    },
    ChalkBoard: {
        screen: ChalkBoardScreen,
    },
    Baybayin: {
        screen: BaybayinScreen,
    },
    Games: {
        screen: GameScreen,
    }
}, 
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);