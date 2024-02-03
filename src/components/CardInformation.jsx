import React from 'react'

const CardInformation = ({titulo,descripcion,imagen, esIzquierdo = false}) => {
  return (
    <>
      <div className={`flex px-20 items-center mb-8 gap-4 ${esIzquierdo?'flex-row-reverse': ""}`}>
        <div className=''>
          <h2 className='font-medium text-xl'>{titulo}</h2>
          <p className='text-sm'>{descripcion}</p>
        </div>
        <img src={imagen} alt="" className='rounded-full w-[350px]'/>
      </div>
    </>

  )
}

export default CardInformation