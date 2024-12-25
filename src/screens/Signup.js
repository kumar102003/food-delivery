import React ,{useState}from 'react'

import {Link} from 'react-router-dom'
const Signup = () => {

    const [credentials,setCredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: credentials.name,
              email: credentials.email,
              password: credentials.password,
              location: credentials.geolocation,
            }),
          });
      
          const json = await response.json(); // Await response.json()
          console.log(json);
          if (!json.success) {
            alert("Enter Valid Credentials");
          } else {
            alert("Signup successful!");
          }
        } catch (error) {
          console.error("Error:", error.message);
          alert("An error occurred. Please try again later.");
        }
      };
      
    const onChange = (event)=>{
        setCredentials({
            ...credentials,[event.target.name]:event.target.value
        })
    }
  return (
    <div className='container mt-4'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" className="form-control" id="name" aria-describedby="name" name ='name' value ={credentials.name}  onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name ='email' value ={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name ='password' value ={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="geolocation" className="form-control" id="geolocation" name ='geolocation' value ={credentials.geolocation}onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" className="btn btn-success">Submit</button>
  <Link className='m-3' to ="/login">Already Have Account then Click here</Link>
</form>
    </div>
  )
}

export default Signup
