import React, {useState,useEffect} from 'react'
import PokeCard from './assets/pokemoncard.png'
import PokeLogo from './assets/pokemonlogo.png'
import PokeBackground from './assets/pokemonbackground.jpg'
import Draggable from 'react-draggable'

import {ProgressBar} from 'react-bootstrap';



const Home = () => {

//TYPE ICON IMG SRC*************************************************************************************
    let grassTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/46/Type_Grass.gif/'
    let waterTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/e/ed/Type_Water.gif'
    let fireTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Type_Fire.gif/'
    let rockTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/b/b3/Type_Rock.gif/'
    let electricTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/a/aa/Type_Electric.gif/'
    let psychicTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/65/Type_Psychic.gif/'
    let ghostTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/f/f2/Type_Ghost.gif'
    let bugTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/64/Type_Bug.gif/'
    let dragonTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/2/26/Type_Dragon.gif/'
    let fairyTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/7/74/Type_Fairy.gif/'
    let fightingTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/6b/Type_Fighting.gif/'
    let iceTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/8/84/Type_Ice.gif/'
    let normalTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/61/Type_Normal.gif/'
    let steelTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/a/ab/Type_Steel.gif'
    let groundTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/1/1d/Type_Ground.gif/'
    let flyingTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/4b/Type_Flying.gif/'
    let poisonTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/8/82/Type_Poison.gif/'
    let darkTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/0/0d/Type_Dark.gif/'
   
//useStates*************************************************************************************
    const [pokeName, setPokeName] = useState('')

    //INPUT FIELD CAN BE AN onChange TO CHANGE THE NUMBER/NAME STATES
    //BULBASAUR BEING DISPLAYED FOR NOW
    const [pokeNum,setPokeNum] = useState(1)
    
    //Pokemon Image
    const [pokeImgUrl, setPokeImgUrl] = useState('')

    //Pokemon Type Icons
    const [pokeType1Url, setPokeType1Url] = useState('')
    const [pokeType2Url, setPokeType2Url] = useState('')
    //Pokemon Abilities
    const [pokeAbility1, setPokeAbility1] = useState('')
    const [pokeAbility2, setPokeAbility2] = useState('')
    //Pokemon Stats
    const [pokeHp, setPokeHp] = useState()
    const [pokeAtt, setPokeAtt] = useState()
    const [pokeDef, setPokeDef] = useState()
    const [pokeSpeed, setPokeSpeed] = useState()
    const [pokeSpAtt, setPokeSpAtt] = useState()
    const [pokeSpDef, setPokeSpDef] = useState()
//Main Fetch URL********************************
    let baseURL:string  = `https://pokeapi.co/api/v2/pokemon/`

//CSS STYLING*************************************************************************************
    //Pokemon Logo Img Style
    const pokemonLogoImg: React.CSSProperties = {
        userSelect: 'none',
        marginTop:'2%',
        filter: 'drop-shadow(5px 5px 5px black)',
        width:'35rem',

      };
    //Gotta Fetch Em All Style
    const gottaFetchEmAllStyle: React.CSSProperties ={
        fontSize:'3rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'-2px -2px 0 #00f,2px -2px 0 #00f,-2px 2px 0 #00f,2px 2px 0 #00f',
        userSelect:'none',
        marginTop:'.5%',
        filter: 'drop-shadow(2px 2px 5px black)'
    }
    //Card Img Style
    const pokemonCardStyle: React.CSSProperties ={
        width:'100%',
        userSelect:'none',
        backgroundColor:'black',
        borderRadius:'4%',
        position:'relative',
        filter: 'drop-shadow(6px 6px 4px black)'
    }
    //Poke Img Style
    const pokeImgStyle: React.CSSProperties={
        position:'absolute',
        right: '30%',
        top: '20%',
        width:'40%',
    }
    //Poke Type 1 Img Style
    const pokeType1ImgStyle: React.CSSProperties={
        userSelect:'none'
    }
    //Poke Type 2 Img Style
      const pokeType2ImgStyle: React.CSSProperties={
        userSelect:'none',
        marginLeft:'10%'
    }
    //Pokemon Name Text Style
    const pokemonNameTextStyle: React.CSSProperties = {
        margin:'0%',
        marginLeft:'',
        color:'white', 
        fontSize:'1.8rem',
        userSelect:'none'
    }
    //Pokemon Number Text Style
    const pokemonNumberStyle: React.CSSProperties ={
        margin:'0%',
        marginLeft:'',
        color:'white', 
        fontSize:'1rem',
        userSelect:'none'
    }
    //Pokemon Abilities Text Style
    const pokemonAbilitiesTextStyle: React.CSSProperties ={
        marginRight:'1%',
        marginLeft:'1%',
        padding:'0',
        color:'white',
        fontSize:'1rem',
        listStyleType:'none',
        userSelect:'none',
        width:'100%'
    }


//FETCH FUNCTIONS*************************************************************************************
    useEffect (() => {
        fetchPoke();
     })


    const fetchPoke = () =>{
        fetch(baseURL + pokeNum || pokeName)
        .then(res => res.json())
        .then(pokeData => {
          
            console.log(pokeData); 
            setPokeName(pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1))
            setPokeImgUrl(pokeData.sprites.front_default)
           
            setPokeAbility1(pokeData.abilities[0].ability.name)
            if(pokeData.abilities[1] !== undefined){
            setPokeAbility2(pokeData.abilities[1].ability.name)
            } else {
                setPokeAbility2('')
            }
            
            setPokeHp(pokeData.stats[0].base_stat)
            setPokeAtt(pokeData.stats[1].base_stat)
            setPokeDef(pokeData.stats[2].base_stat)
            setPokeSpAtt(pokeData.stats[3].base_stat)
            setPokeSpDef(pokeData.stats[4].base_stat)
            setPokeSpeed(pokeData.stats[5].base_stat)

            //Pokemon Type 1 Checker
            if (pokeData.types[0].type.name === 'grass') {
                setPokeType1Url(grassTypeURL)
            } else if (pokeData.types[0].type.name === 'poison') {
                setPokeType1Url(poisonTypeURL)
            } else if (pokeData.types[0].type.name === 'water') {
                setPokeType1Url(waterTypeURL)
            } else if (pokeData.types[0].type.name === 'fire') {
                setPokeType1Url(fireTypeURL)
            } else if (pokeData.types[0].type.name === 'rock') {
                setPokeType1Url(rockTypeURL)
            } else if (pokeData.types[0].type.name === 'electric') {
                setPokeType1Url(electricTypeURL)
            } else if (pokeData.types[0].type.name === 'psychic') {
                setPokeType1Url (psychicTypeURL)
            } else if (pokeData.types[0].type.name === 'ghost') {
                setPokeType1Url (ghostTypeURL)
            } else if (pokeData.types[0].type.name === 'bug') {
                setPokeType1Url(bugTypeURL)
            } else if (pokeData.types[0].type.name === 'dragon') {
                setPokeType1Url( dragonTypeURL)
            } else if (pokeData.types[0].type.name === 'fairy') {
                setPokeType1Url(fairyTypeURL)
            } else if (pokeData.types[0].type.name === 'fighting') {
                setPokeType1Url(fightingTypeURL)
            } else if (pokeData.types[0].type.name === 'ice') {
                setPokeType1Url( iceTypeURL)
            } else if (pokeData.types[0].type.name === 'normal') {
                setPokeType1Url ( normalTypeURL)
            } else if (pokeData.types[0].type.name === 'steel') {
                setPokeType1Url( steelTypeURL)
            } else if (pokeData.types[0].type.name === 'ground') {
                setPokeType1Url( groundTypeURL)
            } else if (pokeData.types[0].type.name === 'flying') {
                setPokeType1Url(flyingTypeURL)
            } else if (pokeData.types[0].type.name === 'dark') {
                setPokeType1Url (darkTypeURL)
            } else if (pokeData.types[0].type.name === '' || pokeData.types[0].type.name === undefined) {
                setPokeType1Url('')
            }
            //POKEMON TYPE 2 CHECKER
            if (pokeData.types[1] !== undefined) {

                if (pokeData.types[1].type.name === 'grass') {
                    setPokeType2Url(grassTypeURL)
                } else if (pokeData.types[1].type.name === 'poison') {
                     setPokeType2Url(poisonTypeURL)
                } else if (pokeData.types[1].type.name === 'water') {
                     setPokeType2Url(waterTypeURL)
                } else if (pokeData.types[1].type.name === 'fire') {
                     setPokeType2Url(fireTypeURL)  
                } else if (pokeData.types[1].type.name === 'rock') {
                     setPokeType2Url(rockTypeURL)
                } else if (pokeData.types[1].type.name === 'electric') {
                     setPokeType2Url(electricTypeURL)
                } else if (pokeData.types[1].type.name === 'psychic') {
                     setPokeType2Url(psychicTypeURL)
                } else if (pokeData.types[1].type.name === 'ghost') {
                     setPokeType2Url(ghostTypeURL)
                } else if (pokeData.types[1].type.name === 'bug') {
                     setPokeType2Url(bugTypeURL)
                } else if (pokeData.types[1].type.name === 'dragon') {
                     setPokeType2Url(dragonTypeURL)
                } else if (pokeData.types[1].type.name === 'fairy') {
                     setPokeType2Url(fairyTypeURL)
                } else if (pokeData.types[1].type.name === 'fighting') {
                     setPokeType2Url(fightingTypeURL)
                } else if (pokeData.types[1].type.name === 'ice') {
                     setPokeType2Url(iceTypeURL)
                } else if (pokeData.types[1].type.name === 'normal') {
                     setPokeType2Url(normalTypeURL)
                } else if (pokeData.types[1].type.name === 'steel') {
                     setPokeType2Url(steelTypeURL)
                } else if (pokeData.types[1].type.name === 'ground') {
                     setPokeType2Url(groundTypeURL)
                } else if (pokeData.types[1].type.name === 'flying') {
                     setPokeType2Url(flyingTypeURL)
                } else if (pokeData.types[1].type.name === 'dark') {
                     setPokeType2Url(darkTypeURL)             }
            } else {
                 setPokeType2Url('')  }
            console.log('Bulba Bulba ^_^')
        })
    }

    // Pokemon Stat Bar Info





  

return(
    <div>
        {/* Pokemon Logo */}
		 
                                  
        <img  draggable="false" style={pokemonLogoImg} alt="Pokemon Logo" src= {PokeLogo}/>
        {/* Gotta Fetch Em All Text */}
        <p style={gottaFetchEmAllStyle}>Gotta fetch( ) 'em all!</p>
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                {/* Card Container */}
                <Draggable>
                    <div>
                       {/* Card Img */}
                        <img draggable="false" style={pokemonCardStyle} alt='Pokemon Card' src ={PokeCard}/>
                        {/* Pokemon Img */}
                        <img draggable="false" className ='pokeImg'style={pokeImgStyle} alt="pokeImg" src={pokeImgUrl} onClick={() => {
                            setPokeNum(Math.round(Math.random() * 10*80.2))
                            fetchPoke()
                            }}/>
                            <div style={{}}>
                                <div style={{display:'flex', flexDirection:'column', position:'absolute',top:'53%',textAlign:'center', width:'100%'}}>
                                    {/* Pokemon Name Text */}
                                    <p style={pokemonNameTextStyle}>{pokeName}</p>
                                    {/* Pokemon Number */}
                                    <p style={pokemonNumberStyle}># {pokeNum}</p>
                                    <div style={{display:'flex', flexDirection:'row', marginLeft:'auto',marginRight:'auto', height:'100px'}}>
                                        {/* Pokemon Abilities Text */}
                                        <div style={{marginRight: '9%',marginTop: ''}}>
                                            <ul style={pokemonAbilitiesTextStyle}>Abilities:
                                                <li style={{fontSize:'1rem'}}>{pokeAbility1}</li>
                                                <li style={{fontSize:'1rem'}}>{pokeAbility2}</li>
                                            </ul>
                                        </div>
                                        {/* Pokemon Stat Bars */}
                                        <div style={{ width: 200, display:'flex',flexDirection:'column', justifyContent:'space-evenly',userSelect:'none' }}>
                                            <ProgressBar style={{marginTop:'1%'}} now={pokeHp} label={`HP: ${pokeHp}`} />
                                            <ProgressBar now={pokeAtt} label={`Att: ${pokeAtt}`} />
                                            <ProgressBar now={pokeDef} label={`Def: ${pokeDef}`} />
                                            <ProgressBar now={pokeSpeed} label={`Speed: ${pokeSpeed}`} />
                                            <ProgressBar now={pokeSpAtt} label={`Sp.Att: ${pokeSpAtt}`} />
                                            <ProgressBar now={pokeSpDef} label={`Sp.Def: ${pokeSpDef}`} />
                                    
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* Pokemon Type Images */}
                                <div style={{display:'flex',flexDirection:'row',position:'absolute', top:'85.5%', left:'17%'}}>
                                    {/* Pokemon Type Img 1 */}
                                    <img  draggable="false" style={pokeType1ImgStyle} src={pokeType1Url}/>
                                    {/* Pokemon Type Img 2 */}
                                    <img draggable="false" style={pokeType2ImgStyle} src={pokeType2Url}/>
                                </div>
                            </div>
                    </div>
                </Draggable>
        </div>
    </div>
)
}

export default Home