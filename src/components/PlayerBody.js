import React from 'react';

import '../styles/playerbody_styles.css';

const IMAGES_PATH = './images/';


function PlayerBody() {
    return (
        <div id="chrome-ext-container_playerbody">
            <img src={`${IMAGES_PATH}decks/pause-deck(orange)-cassette(punk-dark).gif`} id="chrome-ext-player_gif" />
        </div>
    )
}

export default PlayerBody;