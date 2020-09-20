import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({onSubmit}) => {
    const { register, handleSubmit } = useForm();
    
    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <label for="stocks">Stock Symbol</label>
        <input type="text" id="stocks" name="stockSymbol" ref={register} required />
        <input type="submit" value="Submit"/>

        </form>
    )
};

export default Form;