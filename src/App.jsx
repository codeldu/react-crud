import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Table } from './components/table';
import { TableRow } from './components/tableRow';
import { Spinner } from './components/spinner';

function App() {

  let url = 'https://tidal-butternut-ocelot.glitch.me/cars'

  const [cars, setCars] = useState([]);
  const [isFetching, setIsFetching] = useState(false)


  useEffect(() => {
    const getData = async () => {
      setIsFetching(true)
      let response = await axios.get(url);
      setIsFetching(false)
      setCars(response.data);

    }

    getData()

  }, [])


  return (
    <>
      {isFetching && <Spinner/>}

      {cars.length !=0 && <Table>
        {cars.map((car , i) => {
          return (
            <TableRow model={car.model} year={car.year} vin={car.vin} make={car.make} id={car.id} key={i}/>
          )
        })}

      </Table>}
    </>
  )
}

export default App
