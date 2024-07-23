import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './VehicleList.css';  
import PureVehicle from './PureVehicle';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = () => {
    axios.get('http://localhost:5000/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the vehicle data!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/vehicles/${id}`)
      .then(() => {
        fetchVehicles();
      })
      .catch(error => {
        console.log('There was an error deleting the vehicle data!', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Vehicle List</h2>
      <div className="row">
        {vehicles.map(vehicle => (
 <div className="col-md-4 mb-4" key={vehicle.id}>
  <PureVehicle vehicle={vehicle}/>
  <div className="mt-auto">
                  <button className="btn btn-warning me-2" onClick={() => navigate(`/update-vehicle/${vehicle.id}`)}>Update</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(vehicle.id)}>Delete</button>
                </div>
  </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleList;
