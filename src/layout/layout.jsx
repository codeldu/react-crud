import React from 'react'
import { Outlet , Link} from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <nav style={{display: 'flex', justifyContent: "space-around"}}>
            <Link to="/">  Home </Link>
            <Link to="./add">  ADD PAGE </Link>
            <Link to="./edit">  Edit PAGE </Link>
        </nav>
        <Outlet/>
    </>
  )
}
