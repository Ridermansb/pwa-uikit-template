import {useContext} from "react";
import StoreContext from './context';

export default function useStore() {
    const store = useContext(StoreContext);
    if (store === null) {
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
}