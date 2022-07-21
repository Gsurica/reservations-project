import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import "./App.css";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import { CostumerCard } from "./components/CostumerCard";

function App() {

  const [reservationName, setReservationName] = useState("");

  const reservations = useSelector((state: RootState) => state.reservations.value);
  const costumers = useSelector((state: RootState) => state.costumer.value);

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              { reservations.map((name, index) => {
                return <ReservationCard name={ name } index={index} />
              }) }
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={(e) => setReservationName(e.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {costumers.map((costumer) => {
            return <CostumerCard id={ costumer.id } name={ costumer.name } food={ costumer.food } />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;