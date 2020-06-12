import React, {useState} from 'react'
import PokeCard from './assets/pokemoncard.png'
import PokeLogo from './assets/pokemonlogo.png'



const Home = () => {



return(
    <div>
        <img alt="Pokemon Logo" src= {PokeLogo}/>
        <p>Gotta fetch 'em all!</p>
    <div>
        <img alt='Pokemon Card' src ={PokeCard}/>
    </div>
    
    </div>
)

}

export default Home