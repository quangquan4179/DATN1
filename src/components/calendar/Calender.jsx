import React from 'react'
import { ScheduleComponent, Inject, Day,Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'

function Calendar() {
  return (
    <div className='calendar'>
      <ScheduleComponent currentView='month'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar