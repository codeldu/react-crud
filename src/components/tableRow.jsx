import React from 'react'
import { Link } from 'react-router-dom'

export const TableRow = ({make , model, year, vin, id}) => {
  return (
    <>
              <tr>
                <td>
                  {make}
                </td>
                <td>
                  {model}
                </td>
                <td>
                  {year}
                </td>
                <td>
                  {vin}
                </td>
                <td>
                  <Link to={`./edit/${id}`}>Edit</Link>
                </td>
              </tr>
            </>
  )
}
