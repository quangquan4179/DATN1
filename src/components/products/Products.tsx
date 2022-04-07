import React from 'react'
import Product from './Product'

type Props = {}

const Products = (props: Props) => {
  return (
    <div className='products'>
        <h1>Products</h1>
        <div className="products__container">
        <div className='products__search'>
            <form>
              <input type="text" placeholder='Search'/>
            </form>
          </div>
          
          <table className='table members__table' >
                      <thead className='table__header'>
                          <tr>
                         
                              <th>Name</th>
                              <th>Description</th>
                              <th>Status</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                        <Product name='phr' status='done' description='ql'/>
                        <Product name='phr' status='done' description='ql'/>
                        <Product name='phr' status='done' description='ql'/>
                        <Product name='phr' status='done' description='ql'/>  
                      

                      </tbody>
          
              </table>

        </div>
    </div>
  )
}

export default Products