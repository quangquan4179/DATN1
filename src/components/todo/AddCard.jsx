import React, { useContext, useState } from 'react'
import functionContext from '../utils/functionContext'

const AddCard = ({ listId, type, setOpen }) => {
  const { addMoreCard } = useContext(functionContext)
  const [name, setName] = useState('')

  const handleOnChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = () => {
    console.log(name)
    addMoreCard(name, listId)
    setName('')
    setOpen(false)
  }

  return (
    <div>
      <input
        value={name}
        placeholder={
          type === 'card'
            ? 'Enter a title of this card..'
            : 'Enter list title...'
        }
        onChange={handleOnChange}
      />
      <button onClick={handleSubmit}>
        {type === 'card' ? 'Add Card' : 'Add List'}
      </button>
    </div>
  )
}

export default AddCard
