import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { card } from '../../interface'

type Props = {
  Card: card
  index: number
}

const Card = ({ Card, index }: Props) => {
  return (
    <div>
      <Draggable draggableId={Card.id} index={index}>
        {(provided) => (
          <div
            className='todo'
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            onClick={() => console.log('hear')}
          >
            {/* <div>{id}</div> */}
            <div>{Card.title}</div>
            {/* <div>label</div> */}
          </div>
        )}
      </Draggable>
    </div>
  )
}

export default Card
