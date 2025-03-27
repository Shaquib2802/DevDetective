import React, { useContext } from 'react'
import { UserContext } from './Practice2';



const Practice4 = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <div>Componenet4</div>
      <h2>{`Hello ${data} again!`}</h2>

    </div>
  )
}

export default Practice4