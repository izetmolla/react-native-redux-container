import React from 'react';


import { StatusBar } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';


// import { darkColors, getThemeLight } from './components/config/colors';

// import { ThemeProvider } from 'src/components';
import Router from './routes/root-switch';
import Unconnected from './resources/containers/Unconnected';

// import {
//     themeSelector,
//     colorsSelector,
//     languageSelector,
// } from './modules/common/selectors';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheck: false,
            isConnected: true,
        };
    }

    componentDidMount() {
        NetInfo.addEventListener((state) => {
            const { isCheck } = this.state;
            const { isConnected } = state;
            if (!isConnected) {
                this.setState({
                    isConnected: false,
                });
            }
            if (isCheck && isConnected) {
                this.setState({
                    isConnected: true,
                    isCheck: false,
                });
            }
        });
    }

    checkInternet = () => {
        this.setState({
            isCheck: true,
        });
    };

    render() {
        const { } = this.props;
        const { isConnected } = this.state;



        // const themeColor =
        //     theme === 'light' ? getThemeLight(colors) : darkColors;
        // const barStyle = theme === 'light' ? 'dark-content' : 'light-content';

        return (
            <>

                {!isConnected ? (
                    <Unconnected clickTry={this.checkInternet} />
                ) : (<Router />)}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // language: languageSelector(state),
        // theme: themeSelector(state),
        // colors: colorsSelector(state),
    };
};

export default connect(mapStateToProps)(AppRouter);
