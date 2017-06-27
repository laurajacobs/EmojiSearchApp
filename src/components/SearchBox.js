import React from 'react';


class SearchBox extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' onChange={this.props.onFilterInput} value={this.props.body} />
                </form>

            </div>
        )
    }
}

export default SearchBox;


