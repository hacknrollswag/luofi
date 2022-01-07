import React, { Component } from 'react';

export default class Gif extends Component {
    height = window.innerHeight();
    width = window.innerWidth();

    render() {
        return (
            <div>
                <img src="https://media.giphy.com/media/VzlS9BIBAgvuH3EbRH/giphy.gif" /> 
            </div>
        )
    }
}