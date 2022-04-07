import React from 'react'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type Props = {
    MSNV:string,
    name:string
}

const Member = ({MSNV,name}: Props) => {
  return (
   <tr>
       <td>{MSNV}</td>
       <td>{name}</td>
       <td>{MSNV}</td>
       <td>
         <button className='btn header__btn'>
           <FontAwesomeIcon icon={faEdit}/>
         </button>
       </td>
       
   </tr>
  )
}

export default Member