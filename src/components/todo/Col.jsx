import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
// import { list, card } from '../../interface'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddCardContainer from './AddCardContainer'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Col = ({ list, header }) => {
  return (
    <div className='todos__content'>
      <div className='todos__content-header'>
        <div className='todos__title-card'>{header}</div>
        <div className='todos__title-icons'>
          <span>{list.cards.length}</span>
          <div>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>
      <div>
        <Droppable droppableId={list.id} type='list'>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className='todos__item'
            >
              {list.cards.map((card, index) => (
                <Card Card={card} key={card.id} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <AddCardContainer type={'card'} listId={list.id} />
      </div>
    </div>
  )
}
export default Col
