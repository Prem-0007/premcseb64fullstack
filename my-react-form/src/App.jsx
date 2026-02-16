import { useState } from "react";
import "./App.css";

function App() {
  
  const [inc, setInc] = useState(0);

 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  
  function handleClick() {
    setInc(prev => prev + 1);
  }

 
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  
  function submitData(e) {
    e.preventDefault();

    console.log("Form Submitted");
    console.log(formData);

  
    setFormData({
      name: "",
      email: "",
      password: ""
    });
  }

  return (
    <>
      <h2>React Form Handling</h2>

      <p>
        <button onClick={handleClick}>Increment</button>
      </p>
      <p>Count is {inc}</p>

      <h2>Form Details</h2>

      <form onSubmit={submitData}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br /><br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h3>Entered Details:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </>
  );
}

export default App;
