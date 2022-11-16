import React from 'react'
import { UserAuth } from '../context/AuthContext'

const FormularioPosteo = () => {

    const { user } = UserAuth()

      return (
        <h1>Hola! {user?.displayName}</h1>
      )
}

export default FormularioPosteo