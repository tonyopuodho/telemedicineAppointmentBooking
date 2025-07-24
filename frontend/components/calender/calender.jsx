import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 

const Calender = () => {
    return (
        <div className='p-6'>
            <FullCalendar
             plugins={[ dayGridPlugin ]}
             initialView="dayGridMonth"
             headerToolbar={{
                start:"today,prev,next",
                center:"title",
                end:"dayGridMonth, dayGridWeek ,dayGridDay"                
             }}
             height={'85vh'}
            />            
        </div>
    )
}

export default Calender