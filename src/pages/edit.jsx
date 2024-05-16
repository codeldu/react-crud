import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const Edit = () => {

  const [carInfo, setCarInfo] = useState([]);


  let { id } = useParams();
  useEffect(() => {

    const getById = async () => {
      let response = await axios.get('https://tidal-butternut-ocelot.glitch.me/cars/' + id)
      setCarInfo(response.data)
    }
    getById()

  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (obj) => {

    let response = await axios.patch('https://tidal-butternut-ocelot.glitch.me/cars/' + id, obj);

    setTimeout(() => window.location = '/', 2000)
  }


  console.log(errors);

  return (
    <>
      {carInfo.length != 0 &&
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
          <label> Car Make:
            <input type="text" {...register("make", {required: true})} defaultValue={carInfo.make} />
            {errors.make && <p>Car Make daxil edilmelidir! </p>}
          </label>
          <label> Car Model:
            <input type="text" {...register("model", {required:true})} defaultValue={carInfo.model} />
            {errors.model && <p>Car Model daxil edilmelidir! </p>}
          </label>
          <label> Car Year:
            <input type="text" {...register("year", {required: true})} defaultValue={carInfo.year} />
            {errors.year && <p>Car Year daxil edilmelidir! </p>}
          </label>
          <label> VinCode :
            <input type="text" {...register("vin" , { required : true })} defaultValue={carInfo.vin} />
            {errors.vin && <p>Car Vin daxil edilmelidir! </p>}
          </label>
          <button type='submit'>Save car info</button>
        </form>
      }

    </>
  )
}
