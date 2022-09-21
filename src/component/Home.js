import React from 'react'
import Table from 'react-bootstrap/Table';

export const Home = () => {
  return (
    <div className='mt-5'>
      <div className='container'>
        <div className='add_btn mt-3'>
          <button className='btn btn-primary'>+ Add data</button>
        </div>
        <Table striped bordered hover size="sm" className='mt-2'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Username</th>
              <th>Job</th>
              <th>Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>abc34@gmail.com</td>
              <td>Rakesh Kumar</td>
              <td>Otto</td>
              <td>9999999999</td>
              <td className='d-flex justify-content-between'>
                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                <button className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abc34@gmail.com</td>
              <td>Rakesh Kumar</td>
              <td>Otto</td>
              <td>9999999999</td>
              <td className='d-flex justify-content-between'>
                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                <button className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>abc34@gmail.com</td>
              <td>Rakesh Kumar</td>
              <td>Otto</td>
              <td>9999999999</td>
              <td className='d-flex justify-content-between'>
                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                <button className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    </div>
  )
}
