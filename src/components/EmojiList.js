import React from 'react';
import PropTypes from 'prop-types';

import Emoji from './Emoji';

class EmojiList extends React.Component {
    render() {
         const emojiMap = this.props.emojis.map(emoji =>{
            return (<Emoji key={emoji.title} emoji={emoji}/>)
        });
        return (
            <div>
                <div> {emojiMap}</div>
            </div>
        );
    }
}

EmojiList.propTypes = {
    emojis: PropTypes.array.isRequired
};

export default EmojiList;