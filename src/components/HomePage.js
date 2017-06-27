import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';
import EmojiList from './EmojiList';
import emojis from '../emojis.json';

class HomePage extends React.Component {
     constructor(props){
        super(props);
        this.filterEmojis = this.filterEmojis.bind(this);
        this.state = {emojis};
    }
    render() {
        return (
            <div>
                <h1>Emoji Search</h1>

                <SearchBox emojis={emojis} filterEmojis={this.filterEmojis} />
                <EmojiList emojis={this.state.emojis} />

            </div>
        );
    }
    filterEmojis(str, emojis) {
        str = str.toLowerCase();
        const filteredList = emojis.filter((emoji) => {
            return emoji.title.toLowerCase().includes(str) || emoji.keywords.toLowerCase().includes(str);
        });
        this.setState({emojis: filteredList});
    }

}

HomePage.propTypes = {
    emojis: PropTypes.array.isRequired
};

export default HomePage;

