import { useState } from 'react'
import './Game.css'
import fly from '../../assets/FLY.png'

function Game() {
  const [isClicked, setIsClicked] = useState(0)
  
  const handleisClicked = () => {
    setIsClicked(isClicked+1)

  }

  const moverElemento = () => {
    const elemento = document.getElementById('miElemento');
    if (elemento) {
      const anchoPantalla = window.innerWidth - elemento.clientWidth;
      const altoPantalla = window.innerHeight - elemento.clientHeight;
      
      const x = Math.random() * anchoPantalla;
      const y = Math.random() * altoPantalla;
      
      setTimeout(() => {
        elemento.style.position = 'absolute'; 
        elemento.style.left = `${x}px`;
        elemento.style.top = `${y}px`;
    }, 140);
}}

  return (
    <>
    <h1 style={{

      display:"flex",
      flexDirection: 'row',
      
    }} >Mataste a la mosca {isClicked} veces.</h1>
        <img className='claseepica' onClick={handleisClicked}  id="miElemento" onMouseOver={moverElemento} src={fly} alt="" />
    </>
  )
}

export default Game;
