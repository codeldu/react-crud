import React from 'react'

export const Table = ({children}) => {
  return (
    <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Vin Code</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>

  )
}
