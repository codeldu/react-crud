import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import { Table } from './components/table';
import { TableRow } from './components/tableRow';
import { Spinner } from './components/spinner';


function App() {

  let url = 'https://tidal-butternut-ocelot.glitch.me/cars'

  const [cars, setCars] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [changeValue, setChangeValue] = useState('normal');
  const [yearValue, setYearValue] = useState('normal');




  useEffect(() => {
    const getData = async () => {
      setIsFetching(true)
      let response = await axios.get(url);
      setIsFetching(false)
      setCars(response.data);

    }

    getData()

  }, [])


  let filterize = () => {
    
    let newSortedArr;

    if (changeValue == 'a-z') {
      newSortedArr = cars.toSorted((a,b)=> a.make.localeCompare(b.make))
    }else if (changeValue == 'z-a') {
      newSortedArr = cars.toSorted((a,b)=> b.make.localeCompare(a.make))
    } else {
      newSortedArr = [...cars]
    }
    

    let sortForYears ;
    if (yearValue == 'inc') {
      sortForYears = newSortedArr.toSorted((a,b)=> a.year - b.year)
    }else if( yearValue == 'dec') {
      sortForYears = newSortedArr.toSorted((a,b)=> b.year - a.year)
    }else{
      sortForYears = [...newSortedArr]
    }

    let filterMake = sortForYears.filter((car) => car.make.toUpperCase().startsWith(searchValue.toUpperCase()));
    let filterModel = sortForYears.filter((car) => car.model.toUpperCase().startsWith(searchValue.toUpperCase()));
    let filterYear = sortForYears.filter((car) => String(car.year).toUpperCase().startsWith(searchValue.toUpperCase()));
    let filterVin = sortForYears.filter((car) => car.vin.toUpperCase().startsWith(searchValue.toUpperCase()));

    let allFiltered = [...filterMake, ...filterModel, ...filterYear, ...filterVin]

    return allFiltered.filter((item, i, arr) => arr.indexOf(item) === i )

  }

  console.log(changeValue);
  return (
    <>
      {isFetching && <Spinner />}
      <div style={{ margin: '0 auto', width: '80%' }}>
        <input type="text" style={{ width: '100%' }} onInput={(e) => { setSearchValue(e.target.value) }} />
      </div>

      <select onChange={(e)=> setChangeValue(e.target.value)}>
      <option value="normal" >
        Normal
        </option>
        <option value="a-z">
          A-Z
        </option>
        <option value="z-a">
          Z-A
        </option>
       
      </select>
      <select onChange={(e)=> setYearValue(e.target.value)}>
      <option value="normal" >
          Normal
        </option>
        <option value="inc">
          Artan
        </option>
        <option value="dec">
          Azalan
        </option>
       
      </select>


      {cars.length != 0 && <Table>
        {

          filterize().length != 0 ?

            filterize().map((car, i) => {
              return (
                <TableRow model={car.model} year={car.year} vin={car.vin} make={car.make} id={car.id} key={i} />
              )
            })
            :
            <tr>
              <td colSpan='5' style={{ textAlign: 'center' }}>Axtarisha uygun netice tapilmadi!</td>
            </tr>

        }


      </Table>}
    </>
  )
}

export default App
