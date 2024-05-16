import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import './style.scss';


export const Add = () => {

  const { register , handleSubmit, formState: {errors}} = useForm();

  const onSubmit = async (obj) => {
    
    let response =  await  axios.post('https://tidal-butternut-ocelot.glitch.me/cars', obj);

    console.log(response.data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection : 'column', gap: '5px', alignItems: 'center'}}>
      <label> Car Make:
        <input type="text" {...register("make")}/>
      </label>
      <label> Car Model:
        <input type="text" {...register("model")}/>
      </label>
      <label> Car Year:
        <input type="text" {...register("year")}/>
      </label>
      <label> VinCode :
        <input type="text" {...register("vin")}/>
      </label>
      <button type='submit'>Save new car</button>
    </form>
    
  )
}
