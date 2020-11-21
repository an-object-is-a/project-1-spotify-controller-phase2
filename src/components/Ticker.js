import React from 'react'

import '../styles/ticker_styles.css';


function Ticker(props) {
    return (
        <div id="chrome-ext-container_ticker">
            <div id="chrome-ext-ticker_background">
                <div id="chrome-ext-ticker_text">Artist - Song</div>
            </div>
        </div>
    )
}

export default React.memo(Ticker);