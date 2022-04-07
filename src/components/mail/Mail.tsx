import React from 'react'
import MailMain from './MailMain'
import MailSidebar from './MailSidebar'

type Props = {}

const Mail = (props: Props) => {
  return (
    <div className='mail'>

      <MailSidebar/>
      <MailMain/>
      
    </div>
  )
}

export default Mail