import { hot } from 'react-hot-loader/root';
import React from "react";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css';
import './assets/style.css';

UIkit.use(Icons);

const App = () => {
    return (
        <div
            className="uk-background-muted"
            data-uk-height-viewport="expand: true"
        >
            <div className="uk-container">
                <h3 className="uk-heading-bullet uk-margin-small-top">PWA Stated Kit</h3>
            </div>
        </div>
    );
};

export default __DEVELOPMENT__ ? hot(App) : App;
