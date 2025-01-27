import React from 'react';

import '../styles/loadingpage_styles.css';
import '../styles/shared_styles.css';

function LoadingPage() {
    return (
        <div className="chrome-ext-sub_container" id="chrome-ext-container_loadingpage">
            <img id="chrome-ext-loading_screen" src="./images/loading_screen.gif" alt="" />
            <div id="chrome-ext-loading_text">Loading...</div>
        </div>
    )
}

export default LoadingPage;