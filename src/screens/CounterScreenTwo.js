import React from "react";
import { View , TouchableOpacity, Text , StyleSheet } from "react-native";
import { connect } from "react-redux";
import NativeUtils from "../utils/NativeUtils";
import { CounterScreenName } from "./CounterScreen";

export const CounterScreenTwoName = "CounterScreenTwo"

//https://github.com/nathvarun/WTF-Is-Redux-React-Native-Tutorials

class CounterScreenTwo extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            try {
                NativeUtils.notifyMessageLONG('Hello, Welcome to Basic React Native Template')
            } catch (error) {
                NativeUtils.print(error)
            }
        }, 1000)
    }

    render() {

        return (

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => {
                        this.props.increaseCounter()
                    }}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counter + ' ' + this.props.counterTwo}</Text>
                    <TouchableOpacity onPress={() => {
                        this.props.decreaseCounter()
                    }}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate(CounterScreenName)
                }}>
                    <Text style={{ fontSize: 20 }}>Go to Screen One</Text>
                </TouchableOpacity>
            </View>


        )

    }

}

function mapStateToProps(state) {
    NativeUtils.print(state)
    return {
        counter: state.SplashReducer.counter,
        counterTwo : state.CounterScrenTwoRed.counter
    }
}

function mapDispatchToProps(dispatch) {
    NativeUtils.print(dispatch)
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER_2' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER_2' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreenTwo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});