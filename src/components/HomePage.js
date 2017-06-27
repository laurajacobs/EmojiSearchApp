import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';
import EmojiList from './EmojiList';
import emojis from '../emojis.json';

class HomePage extends React.Component {
     constructor(props){
        super(props);
        this.filterEmojis = this.filterEmojis.bind(this);
        this.handleFilterInput = this.handleFilterInput.bind(this);
        this.state = {filterStr: ''};
        
    }
    handleFilterInput (e) {
        console.log(e.target.value)
        this.setState({filterStr: e.target.value});
    }
    render() {
        return (
            <div>
                <h1>Emoji Search</h1>

                <SearchBox onFilterInput={this.handleFilterInput}  body={this.state.filterStr} />
                <EmojiList emojis={this.filterEmojis(emojis)} />

            </div>
        );
    }
    filterEmojis(emojis) {
        const str = this.state.filterStr.toLowerCase();
        if (this.state.filterStr === '') return emojis.slice(0, 10);
        return emojis.filter((emoji) => {
            return emoji.title.toLowerCase().includes(str) || emoji.keywords.toLowerCase().includes(str);
        });
    }

}

HomePage.propTypes = {
    emojis: PropTypes.array.isRequired
};

export default HomePage;

