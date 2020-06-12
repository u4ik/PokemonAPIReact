
import React, {useState,useEffect} from 'react'
import PokeCard from './assets/pokemoncard.png'
import PokeLogo from './assets/pokemonlogo.png'
import PokeBackground from './assets/pokemonbackground.jpg'
import Draggable from 'react-draggable'

const Home = () => {

    let baseURL = "https://pokeapi.co/api/v2/pokemon/"

    const [pokeName, setPokeName] = useState('')
    const [pokeNum,setPokeNum] = useState('')
    const [pokeHeight,setPokeHeight] = useState('')

    // Pokemon Logo Img Style
    const pokemonLogoImg: React.CSSProperties = {
        userSelect: 'none',
        marginTop:'2%',
        filter: 'drop-shadow(5px 5px 5px black)'

      };
    // Gotta Fetch Em All Style
    const gottaFetchEmAllStyle: React.CSSProperties ={
        fontSize:'3rem',
        color:'white',
        textShadow:'3px 3px 1px black',
        userSelect:'none',
        marginTop:'.5%',
        filter: 'drop-shadow(2px 2px 5px black)'
    }
    // Card Img Style
    const pokemonCardStyle: React.CSSProperties ={
        width:'60%',
        userSelect:'none',
        backgroundColor:'black',
        borderRadius:'4%',
        
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
        {/* Pokemon Logo */}
        <img style={pokemonLogoImg} alt="Pokemon Logo" src= {PokeLogo}/>
        {/* Gotta Fetch Em All Text */}
        <p style={gottaFetchEmAllStyle}>Gotta fetch 'em all!</p>
        {/* Card Container */}
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
            {/* Card Container */}
  
            <div style={{}}>
                {/* Card Img */}
                <Draggable>
                <div>
                <img draggable="false" style={pokemonCardStyle} alt='Pokemon Card' src ={PokeCard}/>
                </div>
                </Draggable>
            </div>
         
        </div>
    
    </div>
)

}

export default Home