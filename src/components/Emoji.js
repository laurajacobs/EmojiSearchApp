import React from 'react';
import PropTypes from 'prop-types';

class Emoji extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.emoji.symbol} {this.props.emoji.title}</p>
            </div>
        );
    }

}

Emoji.propTypes = {
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Emoji;