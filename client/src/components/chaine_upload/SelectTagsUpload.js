import { useEffect } from 'react';
import "./SelectedTagsUpload.scss"


const SelectTagsUpload = (state) => {


    useEffect(() => {
        fetch('http://localhost:3001/search/hashtag')
            .then(response => response.text())
            .then(data => {
                state.setTags(JSON.parse(data));

            })
            .catch(error => console.log(error));
    }, []);

    const handleTagClick = (id) => {
        const index = state.selectedTags.indexOf(id);
        // Mettre la class selected sur le tag s'il est sélectionné et l'enlever s'il est désélectionné
        if (index !== -1) {
            state.setSelectedTags(state.selectedTags.filter(tagId => tagId !== id));
        } else {
            state.setSelectedTags([...state.selectedTags, id]);
        }
    };


    return (
        <div className="hashtag-select-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {state.tags ? state.tags.map(tag => (
                <p
                    key={tag.id}
                    onClick={() => handleTagClick(tag.id)}
                    className={`tag-${tag.id} ${state.selectedTags.includes(tag.id) ? 'selected' : 'not-selected'}`}
                >
                    {tag.nom}
                </p>
            )) : <p>vide</p>}
        </div>

    );
};

export default SelectTagsUpload;
