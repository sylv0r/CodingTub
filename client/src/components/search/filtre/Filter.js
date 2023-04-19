import React, { useState } from 'react';

function FilterButton(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {isOpen ? 'Close Filter' : 'Open Filter'}
            </button>
            {isOpen && (
                <div className="filter-panel">
                    {/* Add your filter options here */}
                </div>
            )}
        </div>
    );
}

export default FilterButton;
