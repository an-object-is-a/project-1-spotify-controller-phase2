import React from 'react'

import '../styles/playerbuttons_styles.css';


function PlayerButtons() {
    return (
        <div id="chrome-ext-container_playerbuttons">
            <div className="chrome-ext-playerbuttons" id="chrome-ext-button_open_close"></div>
            <div className="chrome-ext-playerbuttons" id="chrome-ext-button_play_pause"></div>
            <div className="chrome-ext-playerbuttons" id="chrome-ext-button_next"></div>
            <div className="chrome-ext-playerbuttons" id="chrome-ext-button_previous"></div>
        </div>
    )
}

export default PlayerButtons;