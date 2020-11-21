import React from 'react';

import '../styles/options_styles.css';
import Deck from './Deck.js';


function OptionsPage() {
    return (
        <div id="chrome-ext-container_options">
            <div className="chrome-ext-options_page">
                <div className="chrome-ext-options_name">Current Deck</div>
                <div className="chrome-ext-options_navigator">
                    <div id="chrome-ext-prev">&#60;&#60;</div>
                    <div id="chrome-ext-next">&#62;&#62;</div>
                </div>
                <div className="chrome-ext-options_content">
                        <Deck />
                </div>
                <div className="chrome-ext-deck_type">orange</div>
            </div>
        </div>
    )
}

export default OptionsPage;