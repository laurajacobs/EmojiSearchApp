import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';
import EmojiList from './EmojiList';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Emoji Search</h1>
            
                <SearchBox/>
                <EmojiList emojis = {this.props.emojis}/>

            </div>
        );
    }
}

HomePage.propTypes = {
    emojis: PropTypes.array.isRequired
};

export default HomePage;