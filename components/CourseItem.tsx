import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import { FadeIn } from '../animations/FadeIn'
import { Course } from '../models/Course'

export interface Props {
    course: Course;
}

interface State {

}

class CourseItem extends React.Component<Props, State> {
    render() {
        return(
            <FadeIn>
                <TouchableOpacity 
                    style={styles.main_container}
                >
                    <View style={styles.content_container}>
                        <Text style={styles.title}>{this.props.course.label}</Text>
                    </View>
                </TouchableOpacity>
            </FadeIn>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        height: 100,
        flexDirection: 'row',
    },
    content_container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default CourseItem