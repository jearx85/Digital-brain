import { useState } from  'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='Mycalendar'>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}
