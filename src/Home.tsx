import React, {useState} from 'react'
import PokeCard from './assets/pokemoncard.png'
import PokeLogo from './assets/pokemonlogo.png'
import PokeBackground from './assets/pokemonbackground.jpg'



const Home = () => {

    const gottaCatchEmAllStyle ={
        fontSize: '2vw',
        color:'white'
    }

    
    


return(
    <div>
        <img alt="Pokemon Logo" src= {PokeLogo}/>
        <p style={gottaCatchEmAllStyle}>Gotta fetch 'em all!</p>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <div style={{backgroundColor:'white', width:'fit-content',height:'585px', borderRadius:'30px'}}>
                <img alt='Pokemon Card' src ={PokeCard}/>
            </div>
        </div>
    
    </div>
)

}

export default Home