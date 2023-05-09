import React, { useState } from 'react'
import './form.css';

const AddBlog = () => {
  return (
    <section>
    <div className="form-box" >
       <form action="">
           <h2>Blog Form</h2>
           <br/>
           <div className="inputbox">
               <input type='text'></input>
               <label for="">Blog Name</label>
           </div>
           <div className="inputbox">
               <input type='text'></input>
               <label for="">Description</label>
           </div>
           <div className="inputbox">
               <input type='text'></input>
               <label for="">Author Name</label>
           </div>
           
           <button className='add' >ADD</button>
       </form>
   </div>
    </section>
  )

}
export default AddBlog
