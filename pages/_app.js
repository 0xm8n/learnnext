'use client'
import '../styles/global.css'
import Nav from '/components/Nav'
import { wrapper } from '../redux/store'
import { Provider } from "react-redux";

function App({ Component, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;
    return (
        <>
            {
                <Provider store={store}>
                    <div>
                        <h1>Our Site</h1>
                        <Nav/>
                    </div>
                    <Component {...pageProps} />
                    <p>Footer</p>
                </Provider>
            }
        </>
    )
}

export default App;
