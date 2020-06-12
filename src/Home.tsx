import React, {useState,useEffect} from 'react'
import PokeCard from './assets/pokemoncard.png'
import PokeLogo from './assets/pokemonlogo.png'
import PokeBackground from './assets/pokemonbackground.jpg'
import Draggable from 'react-draggable'

const Home = () => {

    let baseURL:string  = "https://pokeapi.co/api/v2/pokemon/"

    const [pokeName, setPokeName] = useState('')
    const [pokeNum,setPokeNum] = useState('')
    const [pokeHeight,setPokeHeight] = useState('')

    // Pokemon Logo Img Style
    const pokemonLogoImg: React.CSSProperties = {
        userSelect: 'none',
        marginTop:'2%',
        filter: 'drop-shadow(5px 5px 5px black)',
        width:'35rem'

      };
    // Gotta Fetch Em All Style
    const gottaFetchEmAllStyle: React.CSSProperties ={
        fontSize:'3rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'-2px -2px 0 #00f,2px -2px 0 #00f,-2px 2px 0 #00f,2px 2px 0 #00f',
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
        position:'relative'
     
        
        
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
            console.log('Bulba Bulba ^_^')
        })
    }
  

return(
    <div>
        {/* Pokemon Logo */}
        <img style={pokemonLogoImg} alt="Pokemon Logo" src= {PokeLogo}/>
        {/* Gotta Fetch Em All Text */}
        <p style={gottaFetchEmAllStyle}>Gotta fetch( ) 'em all!</p>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
            {/* Card Container */}
            <div style={{}}>
                {/* Card Img */}
                <Draggable>
                    <div>
                        <img draggable="false" style={pokemonCardStyle} alt='Pokemon Card' src ={PokeCard}/>
                            <div style={{}}>
                                {/* Pokemon Name Text */}
                                <p style={{margin:'0%',marginLeft:'',color:'white', fontSize:'1rem',position:'absolute',top:'60%', left:'37%'}}>A SUH DUDES!</p>
                                {/* Pokemon Stat? */}
                                <p style={{margin:'0%',marginLeft:'',color:'white', fontSize:'1rem',position:'absolute',top:'70%', left:'37%'}}>A SUH DUDES part 2!</p>
                            </div>
                    </div>
                </Draggable>
             
            </div>
        </div>
    
    </div>
)

}

export default Home