import React from 'react';

import Emoji from './Emoji';

class EmojiList extends React.Component {
    render() {
        return (
            <div>
                <Emoji/>
                <Emoji/>
                <Emoji/>
            </div>
        );
    }
}

export default EmojiList;