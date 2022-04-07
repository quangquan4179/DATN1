import React from 'react'

type Props = {
  
    name:string,
    description:string,
    status:string,
}

const Product = ({name, description,status}: Props) => {
  return (
   <tr>
  
       <td>{name}</td>
       <td>{description}</td>
       <td>{status}</td>
       
   </tr>
  )
}

export default Product