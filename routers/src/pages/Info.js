import React from 'react'
import {useParams} from 'react-router-dom';


const Info = () => {
    const {id} = useParams();

  return (
    <div>Mais informações sobre o Produto id: {id} </div>
  )
}

export default Info

