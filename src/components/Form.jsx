import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({onSubmit}) => {
    const { register, handleSubmit } = useForm();
    
    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Enter the stock symbol</label>
        <input type="text" id="stocks" name="stockSymbol" ref={register} required />
        <div className="form-risk-button">
            <p>Select your risk level: </p>
            <input type="radio" id="low" name="risk" value="0.2" ref={register}/>
            <label className="green-text">Low</label>
            <input type="radio" id="medium" name="risk" value="0.5" ref={register}/>
            <label className="orange-text" >Medium</label>
            <input type="radio" id="high" name="risk" value="0.6" ref={register}/>
            <label className="red-text" >High</label>
        </div>

        <input type="submit" value="Submit"/>

        </form>
    )
};

export default Form;