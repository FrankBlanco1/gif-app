
import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {

        console.log(event.target.value);
        setInputValue(event.target.value);

    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if (inputValue.trim().length > 0){

            // El callback tiene el estado anterior del state (categories) por lo que no se necesita
            // la referencia
            setCategories((categories) => {
                return [...categories, inputValue];
            });
            setInputValue('');

        }

    }

    return <form onSubmit={(event) => handleSubmit(event)}>
            <input 
                type="text"
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
            />
        </form>
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}