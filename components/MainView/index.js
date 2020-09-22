import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
const MainView = () => {
    return (
        <View>
            <Text>Hello World</Text>
        </View>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(MainView);