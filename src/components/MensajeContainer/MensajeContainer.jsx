import React,{useEffect, useState} from 'react'
import { getDoc, doc } from 'firebase/firestore'
import db from '../../services'
import Mensajes from '../Mensajes/Mensajes'

const MensajeContainer = ({mensaje}) => {
    
   
    
  return (
    <>
        <Mensajes mensaje={mensaje}/>
    </>
  )
}

export default MensajeContainer