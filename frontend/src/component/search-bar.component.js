import React, { useState } from 'react';

const styles = {
    width: 350,
    height: 15,
    padding: 10,
    marginTop: 10,
    borderRadius: 30
};

export default function SearchBar() {
    const [searchVal, setSearchVal] = useState("");

    return(
        <form action="/" method="get">
            <input
                id="song"
                type="text"
                value={searchVal}
                onChange={setSearchVal}
                placeholder="Song name, Artist"
                style={styles}
            />
        </form>
    );
}