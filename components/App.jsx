'use client'
import '/styles/global.css'
import Nav from '/components/Nav'
import { store } from '/redux/store'
import { Provider } from "react-redux";

function App({ children }) {
    return (
        <>
            <Provider store={store}>
                <div>
                    <h1>Our Site</h1>
                    <Nav/>
                </div>
                {children}
                <p>Footer</p>
            </Provider>
        </>
    )
}

export default App;
