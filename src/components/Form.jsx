import React from "react";

const hobbiesList = ["Reading", "Gaming", "Traveling", "Cooking"];
const cities = ["New York", "London", "Tokyo", "Paris"];

const Form = ({ formData, onChange, onRemove }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedHobbies = formData.hobbies.includes(value)
        ? formData.hobbies.filter((h) => h !== value)
        : [...formData.hobbies, value];
      onChange({ ...formData, hobbies: updatedHobbies });
    } else if (type === "radio") {
      onChange({ ...formData, [name]: value });
    } else {
      onChange({ ...formData, [name]: value });
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 15, marginBottom: 15 }}>
      <button onClick={onRemove}>Remove Form</button>
      <div>
        <label>Name: </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <label>Mobile Number: </label>
        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          type="number"
        />
      </div>
      <div>
        <label>Gender: </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
      </div>
      <div>
        <label>Hobbies: </label>
        {hobbiesList.map((hobby) => (
          <label key={hobby}>
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              checked={formData.hobbies.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </label>
        ))}
      </div>
      <div>
        <label>DOB: </label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City: </label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Form;