import React from 'react'
import CardInformation from './CardInformation'
import imagen1 from "../assets/rock1.jpg"
import imagen2 from "../assets/rock2.jpg"
import imagen3 from "../assets/rock3.jpg"

const ListInformation = () => {
  return (
    <>
      <CardInformation
        titulo={"For Those about to rock..."}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, praesentium? Veniam facilis a asperiores impedit error quos culpa dolorum, alias fuga officia voluptatibus odio et repellendus doloribus saepe recusandae molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maxime odit soluta incidunt dolorum eligendi eaque molestias illo, labore est sequi omnis quia nihil, vero asperiores, atque voluptas accusamus harum.."}
        imagen={imagen1}        
      />
      <CardInformation
        titulo={"We Salute you!"}
        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quaerat nesciunt qui dolore voluptates molestias velit ipsum itaque perferendis repellat voluptate quos tem pore, nemo iste. Rem natus quaerat dicta sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maxime odit soluta incidunt dolorum eligendi eaque molestias illo, labore est sequi omnis quia nihil, vero asperiores, atque voluptas accusamus harum.."}
        imagen={imagen3}
        esIzquierdo
      />
      <CardInformation
        titulo={"Let there be rock."}
        descripcion={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quaerat nesciunt qui dolore voluptates molestias velit ipsum itaque perferendis repellat voluptate quos tempore, nemo iste. Rem natus quaerat dicta sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maxime odit soluta incidunt dolorum eligendi eaque molestias illo, labore est sequi omnis quia nihil, vero asperiores, atque voluptas accusamus harum.."}
        imagen={imagen2}
      />
    </>
  )
}

export default ListInformation