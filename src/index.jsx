// On Apple mobile devices add the proprietary app icon and splashscreen markup.
// No one should have to do this manually, and eventually this annoyance will
// go away once https://bugs.webkit.org/show_bug.cgi?id=183937 is fixed.
// Another way to do https://github.com/emojityper/emojityper/blob/master/src/loader.js#L8
import React from "react";
import { render } from "react-dom";
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import 'mobx-react-lite/batchingForReactDom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Store from "@store";
import StoreContext from "@store/context";
import App from './App';

const isSWAvailable = 'serviceWorker' in navigator;
if (isSWAvailable && __PRODUCTION__) {
    OfflinePluginRuntime.install({
        onUpdating: () => {
            console.log('SW Event:', 'onUpdating');
        },
        onUpdateReady: () => {
            console.log('SW Event:', 'onUpdateReady');
            // Tells to new SW to take control immediately
            OfflinePluginRuntime.applyUpdate();
        },
        onUpdated: () => {
            console.log('SW Event:', 'onUpdated');
            // window.location.reload();
        },

        onUpdateFailed: () => {
            console.log('SW Event:', 'onUpdateFailed');
        },
    });
}

document.body.addEventListener('touchstart', function () {}, {
    passive: true,
});

const root = document.getElementById('root');

const store = Store.create()

render(
    <StoreContext.Provider value={store}>
        <App/>
    </StoreContext.Provider>
    , root)
