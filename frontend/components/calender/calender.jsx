import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 

const Calender = () => {
    return (
        <div>
            <FullCalendar className="z-5"
             plugins={[ dayGridPlugin ]}
             initialView="dayGridMonth"
            />            
        </div>
    )
}

export default Calender