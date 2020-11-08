import React from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { Course } from '../models/Course';
import { getCourseList } from '../services/CourseService'
import { CourseList } from './CourseList';

export interface Props {
}

interface State {
    courses: Course[],
    isLoading: boolean,
}

export class Courses extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            courses: [],
            isLoading: false,
        }
        this._loadCourses = this._loadCourses.bind(this)
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }   
    }

    _loadCourses() {
        this.setState({isLoading: true})
        getCourseList().then(data => {
            console.log(data)
            this.setState({
                courses: [...this.state.courses, ...data],
                isLoading: false
            })
        })
    }

    componentDidMount() {
        this._loadCourses()
    }

    render() {
        return (
            <View style={styles.main_container}>
                <CourseList
                    courses={this.state.courses}
                    loadCourses={this._loadCourses}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})