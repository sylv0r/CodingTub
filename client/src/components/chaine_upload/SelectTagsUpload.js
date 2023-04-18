import React, { useState, useEffect } from 'react';


const SelectTagsUpload = (state) => {


    useEffect(() => {
        console.log("fetch")
        fetch('http://localhost:3001/search/hashtag')
            .then(response => response.text())
            .then(data => {
                state.setTags(JSON.parse(data));

            })
            .catch(error => console.log(error));
    }, []);

    const handleTagClick = (id) => {
        state.setSelectedTags([...state.selectedTags, id])
    };

    return (
        <div className="hashtag-select-list" >
            {state.tags ? state.tags.map(name => (
                <p onClick={() => handleTagClick(name.id)}>{name.nom}</p>
            ))
                : <p>vide</p>}
        </div>
    );
};

export default SelectTagsUpload;
