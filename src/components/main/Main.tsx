import React from 'react'
import { Link , Routes, Route} from 'react-router-dom'
import Calender from '../calendar/Calender'
import Chat from '../chat/Chat'
import Header from '../header/Header'
import Mail from '../mail/Mail'
import Member from '../members/Members'
import Product from '../products/Products'
import Todos from '../todo/Todos'

type Props = {}

const Main = (props: Props) => {
  return (
    <main className='main'>
      <Header />

      <Routes>
       
          <Route path='todo' element={<Todos />} />
          <Route path='calender' element={<Calender />} />
          <Route path='chat' element={<Chat />} />
          <Route path='mail' element={<Mail />} />
          <Route path='products' element={<Product/>}/>        
          <Route path='members' element={<Member/>}/>
      </Routes>
    </main>
  )
}

export default Main
