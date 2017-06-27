import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' onChange={this.handleChange}/>
                </form>

            </div>
        )
    }
    handleChange (eve) {
        console.log(eve.target.value)

    }
}

export default SearchBox;