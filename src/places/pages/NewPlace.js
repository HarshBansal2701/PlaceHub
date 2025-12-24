import React from 'react'
import Input from '../../shared/components/FormElements/Input'
import './NewPlace.css'
import { VALIDATOR_REQUIRE } from '../../shared/utils/Validators'

const NewPlace = () => {
  return (
    <form className='place-form'>
      <Input element="input" type="email" label="Name" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title"/>
    </form>
  )
}

export default NewPlace