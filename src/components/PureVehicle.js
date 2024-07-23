import { PureComponent } from "react";

class PureVehicle extends PureComponent {

    render(){
        const { vehicle } = this.props;
        return (
           
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
              
              </div>
            </div>
      
        )
    }
}


export default PureVehicle;