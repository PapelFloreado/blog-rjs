import React from 'react'
import Spinner from '../Spinner/Spinner'
import Clock from '../Clock/Clock'


const RecetaDetail = ({item}) => {
  
  const { plato, ingredientes, img, description, procedimientos, tiempo, displayName} = item

  return (
     
      <>
      {

        !item.plato ? <Spinner/> :
        
        <div>

            <h1 className='text-center uppercase font-bold text-fuchsia-700 text-6xl my-16'>{plato}</h1>
            <img className='flex justify-center container mx-auto w-2/4 shadow-2xl shadow-slate-700  rounded-3xl' src={img} alt={plato} />
            <div>
              <h3 className='text-center my-16 text-xl'>{description}</h3>
              <h2 className='text-2xl  font-bold uppercase mx-auto container mt-20 text-center'>Ingredientes</h2>
              <div className='flex justify-center'>

              <table  className="table-auto text-center mt-10">
                    <thead>
                      <tr>
                        <th className='uppercase px-5 text-xl'>Nombre</th>
                        <th className='uppercase px-5 text-xl'>Cantidad</th>
                        <th className='uppercase px-5 text-xl'>Unidades</th>
                      </tr>
                    </thead>
                {

                  ingredientes.map((ingrediente, index)=>(
                    
                    <tbody key={index}>
                      <tr>
                        <td className='uppercase'>{ingrediente.nombre}</td>
                        <td className='uppercase'>{ingrediente.cantidad}</td>
                        <td className='uppercase'>{ingrediente.medida}</td>
                      </tr>
                    </tbody>
                    
                    ))
                    
                  }
                  </table>
            
            </div>
            <div className='container mx-auto'>
                <div className='flex mt-10 place-content-center items-center justify-center'>
                  <p className=' uppercase font-bold text-xl text-fuchsia-800'>Tiempo de Coccion</p>
                  <Clock/>
                <h3 className='text-2xl'>{tiempo}</h3>
                </div>
                <h2 className='px-10 text-2xl font-bold my-10'>Procedimientos</h2>
                <p className='px-10 text-xl'>{procedimientos}</p>
                <p className='text-center text-lg'>Realizado por <span className='uppercase font-bold'>{displayName}</span></p>

            </div>
            </div>
        </div>
      
      }

        
        
        
        </>
          
      
  )
}

export default RecetaDetail