import React from 'react'
import Member from './Member'

type Props = {}

const Members = (props: Props) => {
  return (
    <div className='members'>
        <h1 className='mt members__heading'>Members</h1>
        <div className="members__container">
          <div className='members__switch-position'>
            <button className='btn__members '>All</button>
            <button className='btn__members '>CEO</button>
            <button className='btn__members '>FULLTIME</button>
            <button className='btn__members '> PARTTIME</button>

          </div>
         <div className='members__filter'>
          <div className='members__search'>
              <form>
                <div className='form-group'>
                    <input type="text" placeholder='Search' className='form-input'/>
                </div>
              </form>
              
            </div>
            <div className='members__sort'>
              

                <select id="sort"  className='members__sort-select'>
                  <option value="DateAtWork">Date At Work</option>
                  <option value="DateOfBirth">Date Of Birth</option>
                  <option value="MSNV">MSNV</option>
                  <option value="Name">Name</option>
                </select>
                <label htmlFor="sort" className='members__sort-label'>Sort by</label>
            </div>
         </div>

            <table className='table members__table' >
                    <thead className='table__header'>
                        <tr> 
                            <th>
                              <span>
                                <input type="checkbox"/>
                              </span>
                            </th>
                            <th>MSNV</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                      <Member MSNV='01' name='Ngueyn Van Hoan'/>
                      <Member MSNV='01' name='Ngueyn Van Hoan'/>
                      <Member MSNV='01' name='Ngueyn Van Hoan'/>

                    </tbody>
         
            </table>


        </div>
    </div>
  )
}

export default Members