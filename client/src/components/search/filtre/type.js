import { useState } from "react";

import React, { useState } from 'react';

function DropdownMenu({ onChange }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <select value={value} onChange={handleChange}>
            <option value="">Trier par</option>
            <option value="moreview">Les plus vues</option>
            <option value="lessview">Les moins vues</option>
            <option value="morelike">Les plus likées</option>
            <option value="lesslike">Les moins likées</option>
            <option value="DateSup">Les plus anciennes</option>
            <option value="Dateinf">Les plus récentes</option>
        </select>
    );
}

export default DropdownMenu;
