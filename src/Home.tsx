
import React, {useState,useEffect} from 'react'
import PokeCard from './assets/pokemoncard.png'
import PokeLogo from './assets/pokemonlogo.png'
import PokeBackground from './assets/pokemonbackground.jpg'





const Home = () => {

    let baseURL = "https://pokeapi.co/api/v2/pokemon/"

    const [pokeName, setPokeName] = useState('')
    const [pokeNum,setPokeNum] = useState('')
    const [pokeHeight,setPokeHeight] = useState('')

    const gottaCatchEmAllStyle ={
        fontSize:'2vw',
        color:'white'
    }


    useEffect (() => {
        fetchPoke();
     },[])


    const fetchPoke = () =>{
        fetch(baseURL)
        .then(res => res.json())
        .then(pokeData => {
            //will display bulbasaur for now
            console.log(pokeData.results[0]); 
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