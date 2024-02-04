import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    id: '',
    uuid: '',
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      navigate("/");
      return;
    }
    // POST request to API to save customer data with the bearer token in headers
    const response = await fetch('https://api.example.com/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      navigate("/");
    } else {
      alert('Error: ' + response.statusText);
    }
  };

  return (
    <>
      <div className="formContainer">
        <h2>Add Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="formItemContainer">
            <label>
              UUID:
            </label>
            <input
              type="text"
              name="uuid"
              value={formData.uuid}
              onChange={handleChange}
            />
          </div>
          <div className="formItemContainer">
            <label>
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="formItemContainer">
            <label>
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="formItemContainer">
            <label>
              Street:
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
          </div>
          <div className="formItemContainer">
            <label>
              City:
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="formItemContainer">
            <label>
              State:
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="formItemContainer">
            <label>
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="formItemContainer">
            <label>
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <br />
          <button type="submit">Add Customer</button>
        </form>
      </div>
    </>
  );
};

export default AddCustomer;