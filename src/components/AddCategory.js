
import React, {useState} from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hello World')

    const handleInputChange = (event) => {

        console.log(event.target.value);
        setInputValue(event.target.value);

    }

    const handleSubmit = (event) => {

        event.preventDefault();

    }

    return <form onSubmit={(event) => handleSubmit(event)}>
            <input 
                type="text"
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
            />
        </form>
    
}
