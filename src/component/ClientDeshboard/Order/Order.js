import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Order.css';

const Order = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const [serviceState, setServiceState, loggedInUser, setLoggedInUser] = useContext(userContext);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const titlechange = (e) => {
        const name = e.target.value;
        setTitle(name);
    }
    const descriptionchange = (e) => {
        const descriptionchange = e.target.value;
        setDescription(descriptionchange);
    }



    const handlerOrder = () =>{
        const newOrder = {...loggedInUser,serviceState, description, title};
        fetch("https://young-anchorage-57844.herokuapp.com/addOrder",{
            method: "POST",
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })

        alert("Successfully submited")
    }

    return (
        <div className="container">
            <form method="POST"  action="/addOrder" className="form-order" onSubmit={handleSubmit(onSubmit)}>
                <input className="text-area-input my-2"  name="email" value={loggedInUser.name} placeholder="Email Address" ref={register} /><br></br>
                <input className="text-area-input  my-2"  name="name" value={loggedInUser.email} placeholder="Your Name or Company Name" ref={register} /><br></br>
                <input className="text-area-input  my-2" value={serviceState.title} name="title-name" placeholder="Service Name" ref={register} /><br></br>
                <input className="text-area-input  my-2"  onBlur ={titlechange}  name="service-name" placeholder="Service Name" ref={register} /><br></br>
                <textarea className="text-area-message  my-2"  onBlur ={descriptionchange} name="message" placeholder="Message"></textarea><br></br>
                <input className="w-25 text-area-input  my-2"  name="price" placeholder="Price" ref={register} />
                <input className="w-25 ml-4 text-area-input  my-2"  name="price" type='file' placeholder="Price" ref={register} /> <br></br>
                <Link to="/service-list" type="submit" onClick={handlerOrder}  className="mb-5 btn-main"> submit</Link>
            </form>
            
        </div>
    );
};

export default Order;