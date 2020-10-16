import React from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { userContext } from '../../../App';
import { useState } from 'react';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);


    const [serviceState, setServiceState, loggedInUser, setLoggedInUser] = useContext(userContext);
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    const namechange = (e) => {
        const name = e.target.value;
        setName(name);
    }
    const descriptionchange = (e) => {
        const descriptionchange = e.target.value;
        setDescription(descriptionchange);
    }

    const handlerReview = () =>{
        const newReview = { ...loggedInUser, description, name};
        fetch("https://young-anchorage-57844.herokuapp.com/addReview",{
            method: "POST",
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    
    return (
        <div className="container">
            <form method="POST" action="/addReview" className="form-order" onSubmit={handleSubmit(onSubmit)}>
                <input className="text-area-input  my-2"  name="name" onBlur={ namechange } placeholder="Your Name " ref={register} /><br></br>
                <input className="text-area-input  my-2"  name="Company Name" onBlur={ descriptionchange } placeholder="Company Name" ref={register} /><br></br>
                <textarea className="text-area-message  my-2" name="description" placeholder="Description"></textarea><br></br>
            
                <button type="submit" onClick={handlerReview} className="mb-5 btn-main"> submit</button>
            </form>
            
        </div>
    );
};

export default Review;  
