import React, { Fragment } from 'react';

import '../styles/deck_styles.css';

const IMAGES_PATH = './images/';

function Deck() {
    const default_deck = chrome.runtime.getURL(IMAGES_PATH + 'decks/' + my_context.decks[my_context.current_deck].default);

    return (
        <Fragment>
            <img className="chrome-ext-deck" src={default_deck} alt="" />
        </Fragment >
    )
}

export default Deck;