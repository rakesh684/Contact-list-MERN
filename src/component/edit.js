import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
export const Edit = () => {
    const [inputValue,setInputValue]=useState({
        name:"",
        email:"",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })

    function setdata(e){
        
         const {name,value}=e.target
        //  console.log(value)
         setInputValue(prevValue=>({
            ...prevValue,
            [name]:value
         }))
    }

  return (
    <div className='container'>

            <Link to="/">Home2</Link>
            <form className='mt-4'>
                <div className='row'>
                    <div className='mb-3 col-lg-6 col-md-6 col-12'>
                        <label for="exampleInputName" className='form-lebel'>Name</label>
                        <input type="text" value={inputValue.name} onChange={setdata} className='form-control' name='name' id='emailExample' />
                    </div>
                    <div className='mb-3 col-lg-6 col-md-6 col-12'>
                        <label for="exampleInputEmail" className='form-lebel'>Email</label>
                        <input type="email" value={inputValue.email} onChange={setdata} className='form-control' name='email' id='emailExample' />
                    </div>
        
                    <div className='mb-3 col-lg-6 col-md-6 col-12'>
                        <label for="exampleInputEmail" className='form-lebel'>Age</label>
                        <input type="number" value={inputValue.age} onChange={setdata} className='form-control' name='age' id='ageExample' />
                    </div>
                    <div className='mb-3 col-lg-6 col-md-6 col-12'>
                        <label for="exampleInputEmail" className='form-lebel'>Mobile</label>
                        <input type="number" value={inputValue.mobile} onChange={setdata} className='form-control' name='mobile' id='numberExample' />
                    </div>
                    <div className='mb-3 col-lg-6 col-md-6 col-12'>
                        <label for="exampleInputEmail" className='form-lebel'>Work</label>
                        <input type="text" value={inputValue.work} onChange={setdata} className='form-control' name='work' id='workExample' />
                    </div>
                    <div className='mb-3 col-lg-6 col-md-6 col-12'>
                        <label for="exampleInputEmail" className='form-lebel'>Address</label>
                        <input type="text"  value={inputValue.add} onChange={setdata} className='form-control' name='add' id='adressExample' />
                    </div>
                    <div className='mb-3 col-lg-12 col-md-12 col-12'>
                        <label for="exampleInputEmail" className='form-lebel'>Description</label>
                        <textarea  rows="5" value={inputValue.desc} onChange={setdata} cols="30" name='desc' className='form-control'></textarea>
                    </div>
                    
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>

  )
}
