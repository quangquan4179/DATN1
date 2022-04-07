import React, { useEffect, useState } from 'react'
import Col from './Col'
import { store } from '../../mock/data'
import { DragDropContext } from 'react-beautiful-dnd'
import { v4 as uuid } from 'uuid'
import functionContext from '../utils/functionContext'
// import AddCardContainer from './AddCardContainer'
const Todos = () => {
  const [data, setData] = useState(store)
  useEffect(() => {}, [])

  const addMoreCard = (title, listId) => {
    console.log(title, listId)

    const newCardId = uuid()
    const newCard = {
      id: newCardId,
      title,
    }

    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    }
    setData(newState)
  }
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    // console.log('destination', destination, 'soirce',source, 'draggableId',draggableId);
    if (!destination) {
      return
    }
    const sourceList = data.lists[source.droppableId]
    const destinationList = data.lists[destination.droppableId]
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0]
    if (sourceList.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1)
      destinationList.card.splice(destination.index, 0, draggingCard)
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      }
      setData(newSate)
    } else {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      }
      setData(newState)
    }
  }
  return (
    <functionContext.Provider value={{ addMoreCard }}>
      <div className='todos'>
        <h1 className='todos-heading'>Todo</h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className='todos__main'>
            {data.listIds.map((listId) => {
              const listItem = data.lists[listId]
              return <Col key={listId} header={listId} list={listItem} />
            })}
          </div>
        </DragDropContext>
      </div>
    </functionContext.Provider>
  )
}

export default Todos
