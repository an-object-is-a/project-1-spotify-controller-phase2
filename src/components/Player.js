import React from 'react';

import '../styles/player_styles.css';
import '../styles/shared_styles.css';
import PlayerBody from './PlayerBody.js';
import PlayerButtons from './PlayerButtons.js';
import Ticker from './Ticker.js';


function Player() {
    return (
        <div className="chrome-ext-sub_container">
            <Ticker />
            <PlayerBody />
            <PlayerButtons />
        </div >
    )
}


export default React.memo(Player);