import React, {useState,useEffect} from 'react'
import PokeCard from './assets/pokemoncard.png'
import PokeLogo from './assets/pokemonlogo.png'
import PokeBackground from './assets/pokemonbackground.jpg'



const Home = () => {

    let baseURL = "https://pokeapi.co/api/v2/pokemon/"

    const [pokeName, setPokeName] = useState('')
    const [pokeHeight,setPokeHeight] = useState('')

    const gottaCatchEmAllStyle ={
        fontSize: '2vw',
        color:'white'
    }


    useEffect (() => {
        fetchPoke();
     },[])


    const fetchPoke = () =>{
        fetch(baseURL)
        .then(res => res.json())
        .then(pokeData => {
            console.log(pokeData); 
        })
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