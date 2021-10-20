import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    // after logging the user in, redirect to the home page!
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

//from lecture 10/20/21
// //POST
// fetch(`/cats`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({name:'rose', age:10, id:2})
// })
// .then(r => r.json())
// .then(data => console.log(data))

// //PATCH
// fetch(`/cats/{data.id}`, {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({...data, age:11})
// })
// .then(r => r.json())
// .then(data => console.log(data))

// //DELETE
// fetch(`/cats/{data.id}`, {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then(r => r.json())
// .then(data => console.log(data))