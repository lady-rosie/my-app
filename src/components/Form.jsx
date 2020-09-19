import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({onSubmit}) => {
    const { register, handleSubmit } = useForm();
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <label for="stocks">Stock Symbol</label>
        <input type="text" id="stocks" name="stockSymbol" ref={register} />
        
        <label for="socials">Social media:</label>
        <select id="socials" name="socialMedia" ref={register} >
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
        </select>
        
        <label for="dates">Date:</label>
        <input type="date" id="dates" name="dates" ref={register} ></input>

        <input type="submit" value="Submit"/>

        </form>
    )
};

export default Form;