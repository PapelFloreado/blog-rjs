import React from 'react'

const Check = ({dataSet}) => {
    

    return (
        <>
            <p data-set={dataSet}id="dataUrl" className="font-bold uppercase text-fuchsia-700 text-2xl mt-6">Su imagen ha sido cargada</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mt-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </>
    )
}

export default Check