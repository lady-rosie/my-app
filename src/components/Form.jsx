import React from 'react';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.values);
    };

    return(
        <form onSubmit={ handleSubmit }>
        <label for="stocks">Stock Symbol</label>
        <input type="text" id="stocks" name="stocks"/>
        
        <label for="socials">Social media:</label>
        <select id="socials" name="socials">
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
        </select>
        
        <label for="dates">Date:</label>
        <input type="date" id="dates" name="dates"></input>

        <input type="submit" value="Submit"/>

        </form>
    )
};

export default Form;