import React from 'react'
import Spinner from '../Spinner/Spinner'


const RecetaDetail = ({item}) => {
  console.log(item)

  const { plato, ingredientes, img} = item

  return (
     
      <>
      {

        !item.plato ? <Spinner/> :
        
        <div>

            <h1 className='text-center uppercase font-bold text-fuchsia-700 text-6xl my-16'>{plato}</h1>
            <img className='flex justify-center container mx-auto w-2/4 shadow-2xl shadow-slate-700  rounded-3xl' src={img} alt={plato} />
            <div>
              <h2 className='text-2xl  font-bold uppercase mx-auto container mt-20 text-center'>Ingredientes</h2>
              <div className='flex justify-center'>

              <table  className="table-auto text-center mt-10">
                    <thead>
                      <tr>
                        <th className='uppercase px-3 text-xl'>Nombre</th>
                        <th className='uppercase px-3 text-xl'>Cantidad</th>
                        <th className='uppercase px-3 text-xl'>Unidades</th>
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
              </div>
        </div>
      
      }

        
        
        
        </>
          
      
  )
}

export default RecetaDetail