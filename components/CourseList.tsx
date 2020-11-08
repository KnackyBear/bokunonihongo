import React from 'react'
import { Course } from '../models/Course'
import { FlatList, StyleSheet } from 'react-native'
import CourseItem from './CourseItem'

export interface Props {
    courses: Course[];
    loadCourses: () => void;
}

interface State {
    courses: Course[];
}

export class CourseList extends React.Component<Props, State> {

    constructor(props : Props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.props.courses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <CourseItem
                        course={item}
                    />
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    }
})