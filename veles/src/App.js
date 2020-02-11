import React from 'react';
import MainPage from "./screens/MainPage";
import './styles/main-styles.sass';
import './styles/main-page.sass';

function App() {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false)
    return (
        <div className={showMobileMenu ? "container overflow-hidden" : "container"}>
            <MainPage showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
        </div>
    );
}

export default App;
