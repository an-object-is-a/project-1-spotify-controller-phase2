import React from 'react';

import '../styles/foreground_styles.css';
import Player from './Player.js';
import LoadingPage from './LoadingPage';


class Foreground extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="chrome-ext-modal">
                <div className="chrome-ext-container">
                    <Player />
                </div>
            </div>
        )
    }
}

export default Foreground;