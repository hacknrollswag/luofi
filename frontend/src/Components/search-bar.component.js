import React, { Component } from 'react';


export default class SearchBar extends Component {
    render() {
        return(
            <form action="/" method="get">
               <label htmlFor="song">
                   <span className="no">Choose your song!</span>
                </label> 
                <input
                    type="text"
                    id="song"
                    placeholder="Song Name, Artist"
                    name="s"
                />
            </form>
        );
    };
}