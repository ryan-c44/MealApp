import React from 'react';
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../Constants/Colors';
import CategoryGridTile from '../Components/CategoryGridTile';


const CategoryScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }});
                }}
            />
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

CategoryScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryScreen;