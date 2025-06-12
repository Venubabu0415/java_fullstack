import React, { useState } from 'react';

function Venu() {
  const [formData, setFormData] = useState({
    phno: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    phnoError: '',
    emailError: '',
    passError: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ phnoError: '', emailError: '', passError: '' });
  };

  const validateForm = (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = { phnoError: '', emailError: '', passError: '' };

    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&!])[A-Za-z\d@#$%^&!]{6,}$/;

    if (!phonePattern.test(formData.phno)) {
      newErrors.phnoError = 'Enter a valid 10-digit phone number';
      isValid = false;
    }

    if (!emailPattern.test(formData.email)) {
      newErrors.emailError = 'Enter a valid email address';
      isValid = false;
    }

    if (!passwordPattern.test(formData.password)) {
      newErrors.passError =
        'Password must include uppercase, lowercase, number & special character';
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) {
      alert('Form submitted successfully!');
      
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={validateForm}>
        <fieldset style={{ height: '', width: '220px', backgroundColor: 'rgb(130, 132, 134)' }}>
          <legend align="center"><b style ={{
          }} >REGISTRATION FORM</b></legend><br />

          <label>Name <span style={{ color: 'red' }}>*</span>:</label><br />
          <input type="text" placeholder="First name" required autoFocus /><br /><br />

          <label>Number <span style={{ color: 'red' }}>*</span>:</label><br />
          <input
            type="text"
            id="phno"
            value={formData.phno}
            onChange={handleChange}
            placeholder="Phone number"
          />
          <div style={{ color: 'red' }}>{errors.phnoError}</div><br />

          <label>E-mail <span style={{ color: 'red' }}>*</span>:</label><br />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Mail id"
          />
          <div style={{ color: 'red' }}>{errors.emailError}</div><br />

          <label>Password :</label><br />
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div style={{ color: 'red' }}>{errors.passError}</div><br />

          <label>Gender :</label><br />
          <input type="radio" name="gender" value="male" />
          <label>Male</label>
          <input type="radio" name="gender" value="female" />
          <label>Female</label>
           <input type="radio" name="gender" value="other" /><br /><br />
          <label>Other</label>
         

          <label>Date of Birth :</label><br />
          <input type="date" /><br /><br />

          <label>Address <span style={{ color: 'red' }}>*</span>:</label><br />
          <textarea cols="40" rows="2" required></textarea><br /><br />

          <label>Person's Role :</label>
          <select>
            <option value="Customer">Customer</option>
            <option value="Staff">Staff</option>
            <option value="Chef">Chef</option>
          </select><br /><br />

          <label>
            <input type="checkbox" /> Terms and Conditions
          </label><br /><br />

          <div style={{ textAlign: 'center' }}>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Venu;
