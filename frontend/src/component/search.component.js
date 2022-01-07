import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";


export default function SearchBar(props) {
    const [searchVal, setSearchVal] = useState("");

    return(
        <view style={styles.horizontal}>
            <form action="/" method="get">
                <input
                    id="song"
                    type="text"
                    value={searchVal}
                    onChange={text => setSearchVal(text.target.value)}
                    placeholder="Song name, Artist"
                    style={styles.input}
                />
            </form>
            <FaSearch 
                color='white'
                size={20}
                style={styles.search}
                onClick={props.onSubmit}
            />
        </view>
    );
};

const styles = {
    input: {
        width: 350,
        height: 15,
        padding: 10,
        marginTop: 10,
        borderRadius: 30
    },
    horizontal: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    search: {
        marginTop: 20,
        marginLeft: 10
    }
};