import React from 'react';

const CompTiIn = (props) => {
  const { name, setName, age, setAge, status, setStatus } = props;

  return (
    <div className="title-input">
      <label htmlFor="name">Name:</label>
      <input
        type="string"
        id="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        required
        onChange={(e) => setAge(e.target.value)}
      />
       <br/>
      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={status}
        required
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <br/>
    </div>
  );
};

export default CompTiIn;