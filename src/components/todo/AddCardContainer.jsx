import React, { useState } from 'react'
import AddCard from './AddCard'

export default function AddCardContainer({ listId, type }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {open ? (
        <AddCard listId={listId} type={'card'} setOpen={setOpen} />
      ) : (
        <div className='todos__add'>
          <button
            className='btn todos__btn'
            onClick={() => {
              setOpen(!open)
            }}
          >
            {type === 'card' ? '+ Add a Card' : '+ Add another List'}
          </button>
        </div>
      )}
    </div>
  )
}
