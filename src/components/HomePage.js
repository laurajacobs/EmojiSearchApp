import React from 'react';

import SearchBox from './SearchBox';
import EmojiList from './EmojiList';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <SearchBox/>
                <EmojiList/>

            </div>
        );
    }
}


export default HomePage;