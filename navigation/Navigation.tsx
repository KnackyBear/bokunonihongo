import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {Courses} from '../components/Courses'

const CourseStack = createStackNavigator();

export default function appContainer() {
    return (
        <NavigationContainer>
            <CourseStack.Navigator initialRouteName="Vocabulaire">
                <CourseStack.Screen name="Cours" component={Courses} options={{ title: 'Vocabulaire' }} />
            </CourseStack.Navigator>
        </NavigationContainer>
    );
}