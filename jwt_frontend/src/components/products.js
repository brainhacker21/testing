import React, { useState } from "react";
import CompTiIn from './CompTiIn';
import CompTable from './CompTable';
import CompButton from './CompButton';
import "./products.css"
import axios from 'axios'

const Products = () => {
    const [name, setName] = useState('');
const [age, setAge] = useState('');
const [status, setStatus] = useState('Active');
const [data, setData] = useState([]);
const [selectedIndex, setSelectedIndex] = useState(null);
const handleSecret = async (e) => {
  e.preventDefault();
  const token = await sessionStorage.getItem('jwt')
  console.log(token)
  await axios
    .get("http://localhost:8000/user/getSecret", {headers: {"x-access-token": `${token}`}})
    .then((response) => {
      // localStorage.setItem("token", response.data.token);
      console.log(response);
     
    
      // props.setToken(response.data.token);
    })
    .catch((error) => {
      console.log(error);
    
    });
};


const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex === null) {
    setData([...data, { name: name, age: age, status: status }]);
    } else {
    const newData = [...data];
    newData[selectedIndex] = { name: name, age: age, status: status };
    setData(newData);
    setSelectedIndex(null);
    }
    setName('');
    setAge('');
    setStatus('Active');
    };
    
    const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    };
    
    const handleEdit = (index) => {
    const selectedData = data[index];
    setName(selectedData.name);
    setAge(selectedData.age);
    setStatus(selectedData.status);
    setSelectedIndex(index);
    };
    
    const getSecret = () => {

    }
    return (
    <div className="prod">
      <h1>Form Input Data</h1>
    <form onSubmit={handleSubmit}>
    <CompTiIn name={name} setName={setName} age={age} setAge={setAge} status={status} setStatus={setStatus} /> 
    <br/>
    <CompButton type="submit">{selectedIndex === null ? 'Submit' : 'Update'}</CompButton>
    <button type="secret" onClick={handleSecret}>Get Secret</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </form>
    <CompTable data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    
    </div>
    );

}
export default Products