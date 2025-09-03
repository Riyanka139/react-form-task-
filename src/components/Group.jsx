import React, { useState, useEffect } from "react";
import Form from "./Form";

const Group = ({ groupIndex, initialForms, onRemove, onGroupChange }) => {
  const [forms, setForms] = useState(initialForms || []);

  const addForm = () => {
    setForms([
      ...forms,
      {
        name: "",
        mobile: "",
        gender: "",
        hobbies: [],
        dob: "",
        city: "",
      },
    ]);
  };

  const updateForm = (index, newFormData) => {
    const updatedForms = [...forms];
    updatedForms[index] = newFormData;
    setForms(updatedForms);
  };

  const removeForm = (index) => {
    const updatedForms = forms.filter((_, i) => i !== index);
    setForms(updatedForms);
  };

  useEffect(() => {
    onGroupChange(forms);
  }, [forms]);

  return (
    <div style={{ border: "2px solid blue", padding: 20, marginBottom: 20 }}>
      <h3>Group {groupIndex + 1}</h3>
      <button onClick={addForm}>Add Form</button>
      <button onClick={onRemove} style={{ marginLeft: 10 }}>Remove Group</button>
      {forms.map((form, index) => (
        <Form
          key={index}
          formData={form}
          onChange={(newData) => updateForm(index, newData)}
          onRemove={() => removeForm(index)}
        />
      ))}
    </div>
  );
};

export default Group;
