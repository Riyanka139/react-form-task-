import React, { useState } from "react";
import Group from "./components/Group";

function App() {
  const [groups, setGroups] = useState([]);

  const addGroup = () => {
    console.log(groups,'group');
    
    setGroups([...groups, []]); // add empty group
  };

  const removeGroup = (index) => {
    const updatedGroups = groups.filter((_, i) => i !== index);
    setGroups(updatedGroups);
  };

  const updateGroupForms = (groupIndex, forms) => {
    const updatedGroups = [...groups];
    updatedGroups[groupIndex] = forms;
    setGroups(updatedGroups);
  };

  const handleSave = () => {
    localStorage.setItem("groupFormData", JSON.stringify(groups));
    alert("Groups saved to localStorage!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Group and Forms App</h1>
      <button onClick={addGroup}>Add Group</button>
      {groups.map((groupForms, index) => (
        <Group
          key={index}
          groupIndex={index}
          initialForms={groupForms}
          onRemove={() => removeGroup(index)}
          onGroupChange={(forms) => updateGroupForms(index, forms)}
        />
      ))}
      {groups.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <button onClick={handleSave}>Save All Groups</button>
        </div>
      )}
    </div>
  );
}

export default App;