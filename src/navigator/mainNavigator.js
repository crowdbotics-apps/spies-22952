import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp12178933Navigator from '../features/SignUp12178933/navigator';
import Settings3178932Navigator from '../features/Settings3178932/navigator';
import Messaging5178930Navigator from '../features/Messaging5178930/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp12178933: { screen: SignUp12178933Navigator },
Settings3178932: { screen: Settings3178932Navigator },
Messaging5178930: { screen: Messaging5178930Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
