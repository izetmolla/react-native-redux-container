import React from "react"

import { View, Text, Button } from "react-native"
import { connect } from "react-redux";
import { signInWithEmail } from "../../../../app/modules/auth/actions";

function HomeScreen(props) {
    console.log(props)
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Login" onPress={() => props.dispatch(signInWithEmail({ email: "izetmolla@gmail.com", password: "milani10" }))} />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        // config: dataConfigSelector(state),
        // toggleSidebar: toggleSidebarSelector(state),
    };
};

export default connect(mapStateToProps)(HomeScreen);
