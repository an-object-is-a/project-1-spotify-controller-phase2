import React from 'react';

import '../styles/foreground_styles.css';
import OptionsPage from './OptionsPage';



class Options extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="chrome-ext-modal">
                <OptionsPage />
            </div>
        )
    }
}

export default Options;