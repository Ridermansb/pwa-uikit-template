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
                <h3 className="uk-heading-bullet uk-text-muted uk-margin-top">PWA Stated Kit</h3>
                <div className="uk-card uk-card-default uk-card-body uk-margin-small-top uk-border-rounded">
                    <p>Hello from <q>PWA Started kit with uikit and mobx</q></p>
                </div>
            </div>
            {__VERSION__ && (
                <div className="uk-position-fixed uk-position-bottom-center">
                    <p className="uk-text-meta">
                        v{__VERSION__}
                    </p>
                </div>
            )}
        </div>
    );
};

export default __DEVELOPMENT__ ? hot(App) : App;
