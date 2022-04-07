import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,

  faBell,
  faEarthAfrica,
  faMagnifyingGlass,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='header__content'>
      <div className='togger'><FontAwesomeIcon icon={faBars}/></div>
      <div className='header__list'>
        <button className='btn header__btn'>
          <FontAwesomeIcon icon={faEarthAfrica} />
        </button>
        <button className='btn header__btn'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className='btn header__btn'>
          <FontAwesomeIcon icon={faUserGroup} />
          <span>1</span>
        </button>
        <button className='btn header__btn'>
          <FontAwesomeIcon icon={faBell} />
          <span>1</span>
        </button>
        <button className='btn  header__avt'>5</button>
      </div>
    </header>
  )
}

export default Header