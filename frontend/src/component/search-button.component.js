import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: gray
`

function clickMe() {
    alert('Clickeduwu');
}

export default class SearchButton extends Component {
    render() {
        return(
            <Button
                onClick={clickMe}>
            Search
            </Button>
        );
    };
}