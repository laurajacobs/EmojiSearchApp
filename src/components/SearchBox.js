import React from 'react';


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { body: '' };
    }
    render() {
        return (
            <div>
                <form>
                    <input type='text' onChange={this.handleChange} value={this.state.body} />
                </form>

            </div>
        )
    }
    handleChange(eve) {

        this.setState({ body: eve.target.value })
        console.log(this.state.body)
        const filteredList = this.props.filterEmojis(this.state.body, this.props.emojis)
        return filteredList;

    }
}

export default SearchBox;


