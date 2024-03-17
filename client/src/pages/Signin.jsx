import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Signin() {
   const [formData,setFormData]=useState({});
   const [errorMessage, setErrorMessage] = useState(null);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
    const handleChange=(e)=>{
  setFormData({...formData,[e.target.id]:e.target.value.trim()});
   };

   
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!formData.email || !formData.password) {
    return setErrorMessage('Please fill out all fields.'); 
  }

  try {
    setLoading(true);
    setErrorMessage(null);
    const res = await axios.post('/api/auth/signin', formData, {
      headers: { 'Content-Type': 'application/json' },
    });

    const status = res.status;
    const data=res.data;
    console.log(data);
    if(status==200)
    {
      navigate('/');
    };
   
    setLoading(false);
    
   
  } catch(error) {
    console.error('Signin failed:', error);
    setErrorMessage('Failed  to sign in . Please try again later.');   
    //setLoading(false); 
  }
};


  return (
    <div className='min-h-screen mt-20  '>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md-items-center  gap-5  '>
        
         {/* left side */}
        <div className='flex-1 '>
        <Link to="/" className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Abhinav</span>
        Blog
      </Link>

      <p className='text-sm mt-5'>This is a demo project .You can Sign in with your email and password or with Google.</p>
        </div>

         {/* right side */}
        <div className=' flex-1'>
         <form  className='flex flex-col gap-4'  onSubmit={handleSubmit}>


{/* Email */}
            <div>
               <Label value='Your email' />
               <TextInput
                 type='email'
                 placeholder='name@comapany.com'
                 id='email'
                 onChange={handleChange}
                
                 />

            </div>

{/* password */}

            <div>
               <Label value='Your password' />
               <TextInput
                 type='password'
                 placeholder='**************'
                 id='password'
                onChange={handleChange}
               
                 />

            </div>
{/* sign up button */}
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
            {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            </form>

            <div className='flex gap-2 text-sm mt-5'>
                <span> Don't Have an account?</span>
                <Link to='/sign-up' className='text-blue-500'>
                  Sign Up
                </Link>
            </div>
            {errorMessage && (
            <div className='text-red-500 mt-2'>{errorMessage}</div>
          )}

        </div>

      </div>
    </div>
  )
}
