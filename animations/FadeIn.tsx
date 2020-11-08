import React from 'react'
import { Animated, Dimensions } from 'react-native'

export interface Props {
  positionLeft?: number;
}

interface State {
  positionLeft: Animated.Value;
}

export class FadeIn extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      positionLeft: new Animated.Value(Dimensions.get('window').width)
    };
  }

  componentDidMount() {
    Animated.spring(
      this.state.positionLeft,
      {
        toValue: 0,
        useNativeDriver:false
      }
    ).start()
  }

  render() {
    return (
      <Animated.View
        style={{ left: this.state.positionLeft }}>
        {this.props.children}
      </Animated.View>
    )
  }
}