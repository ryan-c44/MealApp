import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoryScreen from '../Screens/CategoryScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import Colors from "../Constants/Colors";

const MealsNavigation = createStackNavigator({
    Categories: {
        screen: CategoryScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    });

export default createAppContainer(MealsNavigation);
