import React , { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div>
                <form action="/">
                    <div>
                        <label for="findinput">Find a buisness:</label>
                        <input type="text" id="findinput" name="find" placeholder="What"/>
                        <input type="text" name="location" placeholder="Where"/>
                        <input type="submit" value="Search"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search