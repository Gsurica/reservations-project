import { useDispatch } from 'react-redux';
import { addCostumer } from '../features/costumerSlice';
import { removeReservation } from '../features/reservationSlice';
import { v4 as uuid } from 'uuid';

interface ReservationsCardsTypes {
  name: string
  index: number
}

const ReservationCard = ({ name, index }: ReservationsCardsTypes) => {

  const dispatch = useDispatch();

  return (
    <div  onClick={() => {
      dispatch(removeReservation(index));
      dispatch(addCostumer({
        id: uuid(),
        name,
        food: []
      }))
    }} 
      className="reservation-card-container"
    >
      { name }
    </div>
  )
}

export default ReservationCard