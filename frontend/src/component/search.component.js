import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

export default function SearchBar() {
    const [searchVal, setSearchVal] = useState("");

    const onSubmit = input => {
        axios.get("http://localhost:3000")
    }

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
                onClick={onSubmit}
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