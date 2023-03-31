import React from 'react';

const CompTable = (props) => {
  const { data, handleEdit, handleDelete } = props;

  return (
    <div className="table-container">
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompTable;