import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faCalendarMinus,
  faClipboardList,
  faEnvelope,
  faMessage,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
type Props = {}

const Sidebar = (props: Props) => {
  
  

  

  const handeleSelected =(e:React.MouseEvent<HTMLElement>)=>{
   

    let oldEl = document.getElementsByClassName('sidebar__item-active');
    oldEl[0].classList.remove('sidebar__item-active')
    const tg=e.target as Element;
    tg.classList.add('sidebar__item-active')
  }
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'> logo</div>
      <div className='sidebar__list-box'>
        <h3 className='sidebar__title'>Apps</h3>
        <ul className='sidebar__list'>
          <Link
            to='/todo'
            className='sidebar__item sidebar__item-active'
            onClick={handeleSelected}
          >
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faClipboardList} />
            </span>
            Todo
          </Link>
          <Link to='/mail' className='sidebar__item' onClick={handeleSelected}>
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            Mail
          </Link>

          <Link to='/chat' className='sidebar__item' onClick={handeleSelected}>
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faMessage} />
            </span>
            Chat
          </Link>
          <Link
            to='/calender'
            className='sidebar__item'
            onClick={handeleSelected}
          >
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faCalendarMinus} />
            </span>
            Calender
          </Link>
        </ul>
        <h4 className='sidebar__title'>Management</h4>
        <ul className='sidebar__list'>
          <Link
            to='/members'
            className='sidebar__item '
            onClick={handeleSelected}
          >
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            Members
          </Link>
          <Link
            to='/products'
            className='sidebar__item'
            onClick={handeleSelected}
          >
            <span className='sidebar__item-icon'>
              <FontAwesomeIcon icon={faBagShopping} />
            </span>
            Products
          </Link>
        </ul>
      </div>
      <div className='sidebar__footer'>
        <div className='sidebar__footer-text'>Need Help?</div>
        <p>Check our docs</p>
        <button className='btn btn--green sidebar__btn'>Ducumentation</button>
      </div>
    </div>
  )
}

export default Sidebar
