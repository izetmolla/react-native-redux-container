// @flow

import React from 'react';

import { connect } from 'react-redux';
import { isLogin } from '../../../app/modules/auth/actions';
import { isLoginSelector } from '../../../app/modules/auth/selectors';
import { fetchSettingSuccess } from '../../../app/modules/common/actions';
import { fetchSetting } from '../../../app/modules/common/service';
import SplashScreen from 'react-native-splash-screen'


type Props = {
    initSetting: Function,
};

class LoadingScreen extends React.Component<Props> {
    componentDidMount() {
        this.bootstrapAsync();
    }

    /**
     * Init data
     * @returns {Promise<void>}
     */
    bootstrapAsync = async () => {
        try {
            const { initSetting, isLoginBool, isLoginFc } = this.props;
            let settings = await fetchSetting();

            console.log(settings)
            // Check user token
            if (isLoginBool) {
                isLoginFc();
            }
            initSetting({
                settings: settings,
            });

            SplashScreen.hide();
        } catch (e) {
            console.error(e);
        }
    };

    render() {
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginBool: isLoginSelector(state),
    };
};

const mapDispatchToProps = {
    initSetting: fetchSettingSuccess,
    isLoginFc: isLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
