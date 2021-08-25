import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [user, setUser] = useState({});


    const handleChange = e => {
        const newUser = {...user}
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
      
        let  fd = new FormData();
        fd.append("date", new Date().toLocaleDateString());
        fd.append("name", user.name);
        fd.append("email", user.email);
        fd.append("password", user.password);
        fd.append("confirmPassword", user.confirmPassword);

        // fetch("http://localhost:8080/register", {
        //   method: "POST",
        //   //   body: JSON.stringify(user),
        //   body: fd,
        //   headers: {
        //     "Content-type": "multipart/form-data; charset=UTF-8",
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((json) => console.log(json));
        
        // const config = {
        //   headers: { "content-type": "multipart/form-data" },
        // };

        axios
          .post("http://localhost:8080/register", fd,  {
            onUploadProgress: (progressEvent) => {
              console.log(
                "uploadProgress : " +
                  Math.round(
                    (progressEvent.loaded / progressEvent.total) * 100
                  ) +
                  "%"
              );
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    console.log(user)
    return (
      <div className="container">
        <form action=""
        method="post">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name"> Name :</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="form-control"
                placeholder="name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email"> Email :</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password"> Password:</label>
              <input
                type="password"
                name="password"
              
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
              />
       
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="confirmPassword"> Confirm Password :</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <button onClick={handleSubmit} type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default Login;