import React from "react";
import './Email.css'
import { useForm } from "react-hook-form";

const Email = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container-fluid row email-section">
      <div className="col-md-6 text-center  p-5">
          <div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deserunt tenetur quae aliquam? Ducimus omnis aliquam laboriosam voluptate accusantium molestias vel id saepe error soluta quod veniam, velit ullam recusandae architecto eveniet illum aliquid quas.

            </p>
          </div>
      </div>
      <div className="col-md-6 ">
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className="text-area-input my-2"  name="email" placeholder="Email Address" ref={register} /><br></br>
            <input className="text-area-input  my-2"  name="name" placeholder="Your Name or Company Name" ref={register} /><br></br>
            <textarea className="text-area-message  my-2" name="message" placeholder="Message"></textarea><br></br>
            <input type="submit" className="btn-main" />
            </form>
        </div>
      </div>
      <h2 className="text-center my-4">Copyright <span className="text-danger">Dihan Abir</span> 2020</h2>
    </div>
  );
};

export default Email;
