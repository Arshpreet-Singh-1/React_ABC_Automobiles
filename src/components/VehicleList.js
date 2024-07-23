import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './VehicleList.css';  

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
            <div className="card h-100 shadow-sm">
              <img src={vehicle.image} className="card-img-top" alt={vehicle.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text"><strong>Price:</strong> ${vehicle.price}</p>
                <p className="card-text"><strong>Mileage:</strong> {vehicle.mileage} km</p>
                <p className="card-text"><strong>Seats:</strong> {vehicle.seats}</p>
                <p className="card-text"><strong>Color:</strong> {vehicle.color}</p>
                <p className="card-text"><strong>Fuel:</strong> {vehicle.fuel}</p>
                <p className="card-text"><strong>Gear:</strong> {vehicle.gear}</p>
                <p className="card-text"><strong>Description:</strong> {vehicle.description}</p>
                <div className="mt-auto">
                  <button className="btn btn-warning me-2" onClick={() => navigate(`/update-vehicle/${vehicle.id}`)}>Update</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(vehicle.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleList;
