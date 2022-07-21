import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFoodToCostumer } from '../features/costumerSlice';

interface CostumerCardTypes {
  id: string
  name: string 
  food: string[]
}

export const CostumerCard = ({ id, name, food }: CostumerCardTypes) => {

  const dispatch = useDispatch();
  const [costumerFood, setCostumerFood] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{ name }</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          { food.map(food => {
            return <p>{ food }</p>
          }) }
        </div>
        <div className="customer-food-input-container">
          <input value={costumerFood} onChange={e => setCostumerFood(e.target.value)} />
          <button onClick={() => {
            if (!costumerFood) return 
            dispatch(addFoodToCostumer({
              id, food: costumerFood
            }));
            setCostumerFood("");
          }}>Add</button>
        </div>
      </div>
    </div>
  )
}
