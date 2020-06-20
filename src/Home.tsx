import React, {useState,useEffect} from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
//Trainer Silhouette 
import TrainerImg from './assets/trainer.png'
//Pokemon Logo
import PokeLogo from './assets/pokemonlogo.png'
// Backgrounds
import PokemonBackGroundGif from './assets/pokemonbackground.png'
import GrassBackground from './assets/typegrass.png'
import BugBackground from './assets/typebug.png'
import NormalBackground from './assets/typecolorless.png'
import DarkBackground from './assets/typedark.png'
import DragonBackground from './assets/typedragon.png'
import ElectricBackground from './assets/typeelectric.png'
import FairyBackground from './assets/typefairy.png'
import FightingBackground from './assets/typefighting.png'
import FireBackground from './assets/typefire.png'
import FlyingBackground from './assets/typeflying.png'
import GroundBackground from './assets/typeground.png'
import IceBackground from './assets/typeice.png'
import PoisonBackground from './assets/typepoison.png'
import PsychicBackground from './assets/typepsychic.png'
import RockBackground from './assets/typerock.png'
import SteelBackground from './assets/typesteel.png'
import WaterBackground from './assets/typewater.png'
import GhostBackground from './assets/typeghost.png'
//Type Icon pngs
import Bugpng from './assets/Type Icons/bug.png'
import Darkpng from './assets/Type Icons/dark.png'
import Dragonpng from './assets/Type Icons/dragon.png'
import Electricpng from './assets/Type Icons/electric.png'
import Fairypng from './assets/Type Icons/fairy.png'
import Fightingpng from './assets/Type Icons/fighting.png'
import Firepng from './assets/Type Icons/fire.png'
import Flyingpng from './assets/Type Icons/flying.png'
import Ghostpng from './assets/Type Icons/ghost.png'
import Grasspng from './assets/Type Icons/grass.png'
import Groundpng from './assets/Type Icons/ground.png'
import Icepng from './assets/Type Icons/ice.png'
import Normalpng from './assets/Type Icons/normal.png'
import Poisonpng from './assets/Type Icons/poison.png'
import Psychicpng from './assets/Type Icons/psychic.png'
import Rockpng from './assets/Type Icons/rock.png'
import Steelpng from './assets/Type Icons/steel.png'
import Waterpng from './assets/Type Icons/water.png'
//Card Templates By Type
import PokeCardGrass from './assets/pokemoncardgrass.png'
import PokeCardFire from './assets/pokemoncardfire.png'
import PokeCardWater from './assets/pokemoncardwater.png'
import PokeCardPoison from './assets/pokemoncardpoison.png'
import PokeCardPsychic from './assets/pokemoncardpsychic.png'
import PokeCardElectric from './assets/pokemoncardelectric.png'
import PokeCardFairy from './assets/pokemoncardfairy.png'
import PokeCardNormal from './assets/pokemoncardnormal.png'
import PokeCardDark from './assets/pokemoncarddark.png'
import PokeCardGhost from './assets/pokemoncardghost.png'
import PokeCardDragon from './assets/pokemoncarddragon.png'
import PokeCardIce from './assets/pokemoncardice.png'
import PokeCardGround from './assets/pokemoncardground.png'
import PokeCardRock from './assets/pokemoncardrock.png'
import PokeCardFlying from './assets/pokemoncardflying.png'
import PokeCardSteel from './assets/pokemoncardsteel.png'
import PokeCardBug from './assets/pokemoncardbug.png'
import PokeCardFighting from './assets/pokemoncardfighting.png'
// React Module Imports
import {ProgressBar} from 'react-bootstrap';
import Draggable from 'react-draggable';
import ReactAudioPlayer from 'react-audio-player';
import Tappable from 'react-tappable/lib/Tappable';
//Welcome Console Log:
console.log('Welcome! You can search by name or # or click the pokemon that appears in the card to randomize!')     
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
    //Toggle display: 'flex' - setState below with 'none' - This is for the evolution chart to show up neatly and for the card to recenter when it's not present.
    const [makeFlex, setMakeFlex] = useState<any>('flex')
    //For the onClick which lets the pokemon # to be random. 0-800...and something..lol
    const [pokeRand, setPokeRand] = useState<any>('')
    //Randomizer Enable Check
    const [isRandom, setIsRandom] = useState<boolean>(false)
    //Background Color
    const [backgroundColor, setBackgroundColor] = useState('')
    //Shows Pokemon Card
    const [showCard, setShowCard] = useState(false)
    //Show Submit
    // const [showSubmit, setShowSubmit] = useState(false)
    //Background Image
    const [backgroundImg, setBackgroundImg] = useState(PokemonBackGroundGif)
    //Pokemon Name
    const [pokeName, setPokeName] = useState <string> ('')
    //Input Field/Search Field Value
    const [inputFieldValue, setInputFieldValue]=useState <string>('')
    //Pokemon Number
    const [pokeNum,setPokeNum] = useState<any>()
    //PokeCardImg
    const [pokeCardImg, setPokeCardImg] = useState<string>()
    //PokeEleImg
    const [pokeEleImg, setPokeEleImg] = useState('')
    //PokeEleImgClass
    const [eleImgClass, setEleImgClass] = useState<any>()
    //Pokemon Image
    const [pokeImgUrl, setPokeImgUrl] = useState('')
    //Pokemon Height
    const [pokeHeight, setPokeHeight] = useState('')
    //Pokemon Type Icons
    const [pokeType1Url, setPokeType1Url] = useState('')
    const [pokeType2Url, setPokeType2Url] = useState('')
    //Pokemon Abilities
    const [pokeAbility1, setPokeAbility1] = useState('')
    const [pokeAbility2, setPokeAbility2] = useState('')
    const [showAbility2, setShowAbility2]= useState<any>('visible')
    //Pokemon Stats
    const [pokeHp, setPokeHp] = useState<number>()
    const [pokeAtt, setPokeAtt] = useState<number>()
    const [pokeDef, setPokeDef] = useState<number>()
    const [pokeSpeed, setPokeSpeed] = useState<number>()
    const [pokeSpAtt, setPokeSpAtt] = useState<number>()
    const [pokeSpDef, setPokeSpDef] = useState<number>()
    //Pokemon Evo Data
    const [showEvo, setShowEvo] = useState<boolean>(true)
    const [evolutionChainText, setEvolutionChainText] = useState('')
    const [evoStage1, setEvoStage1] = useState('')
    const [evoStage2, setEvoStage2] = useState('')
    const [evoStage3, setEvoStage3] = useState('')
    const [evoStage4, setEvoStage4] = useState('')
    const [evoStage5, setEvoStage5] = useState('')
    const [evoStage6, setEvoStage6] = useState('')
    const [evoStage7, setEvoStage7] = useState('')
    const [evoStage8, setEvoStage8] = useState('')
    const [evoStage9, setEvoStage9] = useState('')
    const [evoStage10, setEvoStage10] = useState('')
    const [evoStage1ImgSrc, setEvoStage1ImgSrc] = useState<string>()
    const [evoStage2ImgSrc, setEvoStage2ImgSrc] = useState<string>()
    const [evoStage3ImgSrc, setEvoStage3ImgSrc] = useState<string>()
    const [evoStage4ImgSrc, setEvoStage4ImgSrc] = useState<string>()
    const [evoStage5ImgSrc, setEvoStage5ImgSrc] = useState<string>()
    const [evoStage6ImgSrc, setEvoStage6ImgSrc] = useState<string>()
    const [evoStage7ImgSrc, setEvoStage7ImgSrc] = useState<string>()
    const [evoStage8ImgSrc, setEvoStage8ImgSrc] = useState<string>()
    const [evoStage9ImgSrc, setEvoStage9ImgSrc] = useState<string>()
    const [evoStage10ImgSrc, setEvoStage10ImgSrc] = useState<string>()
    //Pokemon Cry Audio
    const [cryAudioURL, setCryAudioURL] = useState<string>()
//Main Fetch URL********************************
    let pokemonURL:string  = `https://pokeapi.co/api/v2/pokemon/`
//Evolution Fetch URL*********************
    let speciesURL:string = `https://pokeapi.co/api/v2/pokemon-species/`
//CSS STYLING*************************************************************************************
    //Pokemon Logo Img Style
    const pokemonLogoImg: React.CSSProperties = {
        userSelect: 'none',
        marginTop:'2%',
        filter: 'drop-shadow(5px 5px 5px black)',
        width:'21rem',
        
    };
    //Gotta Fetch Em All Style
    const gottaFetchEmAllStyle: React.CSSProperties ={
        fontSize:'1.8rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'.1rem .1rem 0 blue',
        userSelect:'none',
        marginTop:'',
        filter: 'drop-shadow(2px 2px 5px black)'
    }
    //Welcome Text Style
    const welcomeTextStyle: React.CSSProperties ={
        fontSize:'1.5rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'.1rem .1rem 0 blue',
        userSelect:'none',
        marginTop:'2rem',
        filter: 'drop-shadow(2px 2px 2px black)',
        marginLeft:' 25%',
        marginRight: '25%'
    }
    const trainerImgStyle: React.CSSProperties={
        width: `19%`,
        userSelect:'none'

    }
    const pokeSilStyle : React.CSSProperties={
        width: pokeHeight + 10 + '%',
        filter: 'brightness(0%)',
        userSelect:'none'
    }
    //Card Element Icon Styles
    const bugEleStyle: React.CSSProperties = {
        background: '#92BC2C',
        boxShadow: '0 0 20px #92BC2C',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const darkEleStyle: React.CSSProperties = {
        background: '#595761',
        boxShadow: '0 0 20px #595761',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const dragonEleStyle: React.CSSProperties = {
        background: '#0C69C8',
        boxShadow: '0 0 20px #0C69C8',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const electricEleStyle:React.CSSProperties = {
        background: '#F2D94E',
        boxShadow: '0 0 20px #F2D94E',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const fireEleStyle:React.CSSProperties = {
        background: '#FBA54C',
        boxShadow: '0 0 20px #FBA54C',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const fairyEleStyle:React.CSSProperties = {
        background: '#EE90E6',
        boxShadow: '0 0 20px #EE90E6',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const fightingEleStyle:React.CSSProperties ={
        background: '#D3425F',
        boxShadow: '0 0 20px #D3425F',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const flyingEleStyle:React.CSSProperties= {
        background: '#A1BBEC',
        boxShadow: '0 0 20px #A1BBEC',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const ghostEleStyle:React.CSSProperties= {
        background: '#5F6DBC',
        boxShadow: '0 0 20px #5F6DBC',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const grassEleStyle:React.CSSProperties = {
        background: '#5FBD58',
        boxShadow: '0 0 20px #5FBD58',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const groundEleStyle:React.CSSProperties = {
        background: '#DA7C4D',
        boxShadow: '0 0 20px #DA7C4D',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const iceEleStyle:React.CSSProperties= {
        background: '#75D0C1',
        boxShadow: '0 0 20px #75D0C1',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const normalEleStyle:React.CSSProperties= {
        background: '#A0A29F',
        boxShadow: '0 0 20px #A0A29F',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const poisonEleStyle:React.CSSProperties = {
        background: '#B763CF',
        boxShadow: '0 0 20px #B763CF',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const psychicEleStyle:React.CSSProperties = {
        background: '#FA8581',
        boxShadow: '0 0 20px #FA8581',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const rockEleStyle:React.CSSProperties =  {
        background: '#C9BB8A',
        boxShadow: '0 0 20px #C9BB8A',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const steelEleStyle:React.CSSProperties = {
        background: '#5695A3',
        boxShadow: '0 0 20px #5695A3',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const waterEleStyle:React.CSSProperties = {
        background: '#539DDF',
        boxShadow: '0 0 20px #539DDF',
        width: '5.5%',
        height: '5%',
        left: '80%',
        bottom: '91.5%',
        userSelect:'none',
        position:'fixed',
    }
    const elementIconStyle:React.CSSProperties ={
    }
    //Card Img Style
    const pokemonCardStyle: React.CSSProperties ={
     
        width:'82%',
        userSelect:'none',
        // backgroundColor:'black',
        borderRadius:'5%',
        position:'relative',
        filter: 'drop-shadow(6px 6px 2px black)',
        marginBottom: '2%',
        // outline: '1rem solid #fff',
        // outlineOffset:' -.7rem',
        
       
    }
    //Poke Img Style
    const pokeImgStyle: React.CSSProperties={
        position:'absolute',
        right: '30%',
        top: '15%',
        width:'40%',
        filter: 'drop-shadow(4px 4px 5px black)',
        cursor: 'pointer'
    }
    //Poke Type 1 Img Style
    const pokeType1ImgStyle: React.CSSProperties={
        userSelect:'none',
        filter: 'drop-shadow(1px 1px 1px black)',
        border: '',
        borderRadius:'25px'
    }
    //Poke Type 2 Img Style
      const pokeType2ImgStyle: React.CSSProperties={
        userSelect:'none',
        marginLeft:'10%',
        filter: 'drop-shadow(1px 1px 1px black)',
        border: '',
        borderRadius:'25px',
        visibility: showAbility2
    }
    //Pokemon Name Text Style
    const pokemonNameTextStyle: React.CSSProperties = {
        margin:'0%',
        marginLeft:'',
        color:'white', 
        fontSize:'1.8rem',
        userSelect:'none',
        filter: 'drop-shadow(2px 2px 5px black)'
    }
    //Pokemon Number Text Style
    const pokemonNumberStyle: React.CSSProperties ={
        margin:'0%',
        marginLeft:'',
        color:'white', 
        fontSize:'1rem',
        userSelect:'none',
        filter: 'drop-shadow(2px 2px 5px black)'
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
        width:'100px',
        filter: 'drop-shadow(2px 2px 5px black)'
    }
    //Evolution: Text Style
    const evolutionChainTextStyle: React.CSSProperties ={
        fontSize:'1.6rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'.1rem .1rem 0 blue',
        userSelect:'none',
        marginTop:'.5%',
        filter: 'drop-shadow(2px 2px 5px black)'
    }
    //Evolution Name Text Style
    const evolutionNameTextStyle: React.CSSProperties ={
        
        fontSize:'1.2rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'.1rem .1rem 0 blue',
        userSelect:'none',
        marginTop:'.5%',
        filter: 'drop-shadow(2px 2px 5px black)',
        cursor:'pointer'
    }
    //Audio Pokemon Main Theme & Onclicks To Load Pokemon Cries
    let audioUrl = require('./assets/pokemontheme.mp3');
    let cryAudio = new Audio(cryAudioURL + pokeNum + '.ogg')
    const startAudio = () => { 
     
        cryAudio.play()
        cryAudio.volume = .1;
      }
//FETCH FUNCTIONS*************************************************************************************
    //Making the fetch constantly run!
    useEffect (() => {
        if(inputFieldValue.length > 0){
        fetchPoke();
            if(showCard === true){
                setShowEvo(true)
                
            } 
        }
        else{
            setShowCard(false)
            setBackgroundColor('')
            setShowEvo(false)
            setBackgroundImg(PokemonBackGroundGif)
        }
     })
    const fetchPoke = () =>{
        fetch( isRandom === false ? pokemonURL + inputFieldValue : pokemonURL + pokeRand)
        .then(res => res.json())
        .then(pokeData => {
            const fetchSpecies = () => {
                fetch(speciesURL + pokeData.id )
                .then(
                    res => res.json())
                .then(speciesData => {
                    fetch(speciesData.evolution_chain.url)
                    .then(res => res.json())
                    .then(evoData => {
                    if(evoData.chain.evolves_to[0] !== undefined){
                        if(showEvo === true){
                            setMakeFlex('flex')
                        }else{
                            setMakeFlex('none')
                        }
                        //EVOLVES FROM - if nothing, it will be pokemon base name
                        setEvoStage1(evoData.chain.species.name.charAt(0).toUpperCase() + evoData.chain.species.name.slice(1))
                        // console.log(evoStage1)
                        setEvoStage1ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.species.url.slice(42).slice(0, -1)  + '.png')
                        //EVOLVES TO - NEXT EVOLUTION/ SECOND EVOLUTION
                        setEvoStage2(evoData.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[0].species.name.slice(1))
                        setEvoStage2ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[0].species.url.slice(42).slice(0,-1)  + '.png')
                        //VARIABLE EVOLUTIONS....STONE...ETC...
                        if (evoData.chain.evolves_to[1] !== undefined){
                            setEvoStage4(evoData.chain.evolves_to[1].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[1].species.name.slice(1))
                            setEvoStage4ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[1].species.url.slice(42).slice(0,-1) + '.png' )
                            if (evoData.chain.evolves_to[2] !== undefined){
                                setEvoStage5(evoData.chain.evolves_to[2].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[2].species.name.slice(1))
                                setEvoStage5ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[2].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[3] !== undefined){
                                setEvoStage6(evoData.chain.evolves_to[3].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[3].species.name.slice(1))
                                setEvoStage6ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[3].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[4] !== undefined){
                                setEvoStage7(evoData.chain.evolves_to[4].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[4].species.name.slice(1))
                                setEvoStage7ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[4].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[5] !== undefined){
                                setEvoStage8(evoData.chain.evolves_to[5].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[5].species.name.slice(1))
                                setEvoStage8ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[5].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[6] !== undefined){
                                setEvoStage9(evoData.chain.evolves_to[6].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[6].species.name.slice(1))
                                setEvoStage9ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[6].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[7] !== undefined){
                                setEvoStage10(evoData.chain.evolves_to[7].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[7].species.name.slice(1))
                                setEvoStage10ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[7].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                        }
                        else{
                            setEvoStage4('')
                            setEvoStage5('')
                            setEvoStage6('')
                            setEvoStage7('')
                            setEvoStage8('')
                            setEvoStage9('')
                            setEvoStage10('')
                            setEvoStage4ImgSrc('')
                            setEvoStage5ImgSrc('')
                            setEvoStage6ImgSrc('')
                            setEvoStage7ImgSrc('')
                            setEvoStage8ImgSrc('')
                            setEvoStage9ImgSrc('')
                            setEvoStage10ImgSrc('')
                        }
                        //EVOLVES TO - NEXT EVOLUTION/ THIRD EVOLUTION
                        if(evoData.chain.evolves_to[0].evolves_to[0] !==undefined){
                        setEvoStage3(evoData.chain.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[0].evolves_to[0].species.name.slice(1))
                        setEvoStage3ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[0].evolves_to[0].species.url.slice(42).slice(0,-1) + '.png' )
                        // setMakeFlex('flex')
                            } else{
                                setEvoStage3('')
                                setEvoStage3ImgSrc('')
                            }
                        setEvolutionChainText('Evolution:')
                        } else {
                            setEvoStage1('')
                            setEvoStage2('')
                            setEvoStage3('')
                            setEvoStage4('')
                            setEvoStage5('')
                            setEvoStage6('')
                            setEvoStage7('')
                            setEvoStage8('')
                            setEvoStage9('')
                            setEvoStage10('')
                            setEvoStage1ImgSrc('')
                            setEvoStage2ImgSrc('')
                            setEvoStage3ImgSrc('')
                            setEvoStage4ImgSrc('')
                            setEvoStage5ImgSrc('')
                            setEvoStage6ImgSrc('')
                            setEvoStage7ImgSrc('')
                            setEvoStage8ImgSrc('')
                            setEvoStage9ImgSrc('')
                            setEvoStage10ImgSrc('')
                            setEvolutionChainText('')
                            setMakeFlex('none')
                        }
                    })
                })
            }
            fetchSpecies();
            setShowCard(true)          
            if(pokeData.name !== undefined){
           
            setPokeName(pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1))
                // Can Change Pokemon Profile Pic here
                    setPokeImgUrl(pokeData.sprites.front_default)

                    setPokeHeight(pokeData.height)
                // setPokeImgUrl('https://projectpokemon.org/images/normal-sprite/' + pokeName.toLowerCase() +'.gif')
                // console.log(pokeName.toLowerCase())
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
            setPokeNum(pokeData.id)
            if(pokeNum !== undefined){
                setCryAudioURL ('https://veekun.com/dex/media/pokemon/cries/');
            }
            //Pokemon Type 1 Checker
            if (pokeData.types[0].type.name === 'grass') {
                setPokeType1Url(grassTypeURL)
                setBackgroundImg(GrassBackground)
                setPokeCardImg(PokeCardGrass)

                setBackgroundColor('#679A1C')
                } else if (pokeData.types[0].type.name === 'poison') {
                    setPokeType1Url(poisonTypeURL)
                    setBackgroundImg(PoisonBackground)
                    setPokeCardImg(PokeCardPoison)

                    setBackgroundColor('#6E4259')
                } else if (pokeData.types[0].type.name === 'water') {
                    setPokeType1Url(waterTypeURL)
                    setBackgroundImg(WaterBackground)
                    setPokeCardImg(PokeCardWater)

                    setBackgroundColor('#1187B8')
                } else if (pokeData.types[0].type.name === 'fire') {
                    setPokeType1Url(fireTypeURL)
                    setBackgroundImg(FireBackground)
                    setPokeCardImg(PokeCardFire)
                    
                    setBackgroundColor('#C63626')
                } else if (pokeData.types[0].type.name === 'rock') {
                    setPokeType1Url(rockTypeURL)
                    setBackgroundImg(RockBackground)
                    setPokeCardImg(PokeCardRock)

                    setBackgroundColor('#585048')
                } else if (pokeData.types[0].type.name === 'electric') {
                    setPokeType1Url(electricTypeURL)
                    setBackgroundImg(ElectricBackground)
                    setPokeCardImg(PokeCardElectric)

                    setBackgroundColor('#CCB929')
                } else if (pokeData.types[0].type.name === 'psychic') {
                    setPokeType1Url (psychicTypeURL)
                    setBackgroundImg(PsychicBackground)
                    setPokeCardImg(PokeCardPsychic)

                    setBackgroundColor('#603A6F')
                } else if (pokeData.types[0].type.name === 'ghost') {
                    setPokeType1Url (ghostTypeURL)
                    setBackgroundImg(GhostBackground)
                    setPokeCardImg(PokeCardGhost)
                    
                    setBackgroundColor('#420B0C')
                } else if (pokeData.types[0].type.name === 'bug') {
                    setPokeType1Url(bugTypeURL)
                    setBackgroundImg(BugBackground)
                    setPokeCardImg(PokeCardBug)

                    setBackgroundColor('#1E5E2E')
                } else if (pokeData.types[0].type.name === 'dragon') {
                    setPokeType1Url( dragonTypeURL)
                    setBackgroundImg(DragonBackground)
                    setPokeCardImg(PokeCardDragon)

                    setBackgroundColor('#9F892C')
                } else if (pokeData.types[0].type.name === 'fairy') {
                    setPokeType1Url(fairyTypeURL)
                    setBackgroundImg(FairyBackground)
                    setPokeCardImg(PokeCardFairy)
                    
                    setBackgroundColor('#BF407E')
                } else if (pokeData.types[0].type.name === 'fighting') {
                    setPokeType1Url(fightingTypeURL)
                    setBackgroundImg(FightingBackground)
                    setPokeCardImg(PokeCardFighting)

                    setBackgroundColor('#C65617')
                } else if (pokeData.types[0].type.name === 'ice') {
                    setPokeType1Url( iceTypeURL)
                    setBackgroundImg(IceBackground)
                    setPokeCardImg(PokeCardIce)

                    setBackgroundColor('#72ACBE')
                } else if (pokeData.types[0].type.name === 'normal') {
                    setPokeType1Url ( normalTypeURL)
                    setBackgroundImg(NormalBackground)
                    setPokeCardImg(PokeCardNormal)

                    setBackgroundColor('#8C8663')
                } else if (pokeData.types[0].type.name === 'steel') {
                    setPokeType1Url( steelTypeURL) 
                    setBackgroundImg(SteelBackground)
                    setPokeCardImg(PokeCardSteel)

                    setBackgroundColor('#5C6A70')
                } else if (pokeData.types[0].type.name === 'ground') {
                    setPokeType1Url( groundTypeURL)
                    setBackgroundImg(GroundBackground)
                    setPokeCardImg(PokeCardGround)

                    setBackgroundColor('#7E5228')
                } else if (pokeData.types[0].type.name === 'flying') {
                    setPokeType1Url(flyingTypeURL)
                    setBackgroundImg(FlyingBackground)
                    setPokeCardImg(PokeCardFlying)

                    setBackgroundColor('#189ABF')
                } else if (pokeData.types[0].type.name === 'dark') {
                    setPokeType1Url (darkTypeURL)
                    setBackgroundImg(DarkBackground)
                    setPokeCardImg(PokeCardDark)
                    
                    setBackgroundColor('#152A47')
                } else if (pokeData.types[0].type.name === '' || pokeData.types[0].type.name === undefined) {
                    setPokeType1Url('')
                }
            //POKEMON TYPE 2 CHECKER
            if (pokeData.types[1] !== undefined) {
                setShowAbility2('visible') 
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
                setShowAbility2('hidden') 
                setPokeType2Url('') 
                }
            }
        })
    }
return(
    // Background Image/Main Container
    <div>
    <div style={{backgroundImage: `url(${backgroundImg})`, height:'auto',minHeight:'91.9vh',maxHeight: 'auto', backgroundRepeat:'',backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center',backgroundColor: 'black'}}>
            {/* Pokemon Logo */}                       
            <div style={{}}>
                <img  draggable="false" style={pokemonLogoImg} alt="Pokemon Logo" src= {PokeLogo}/>
            </div>
        </div>
        {/* Gotta Fetch Em All Text */}
        <div style={{backgroundColor: 'black'}}>
        <p style={gottaFetchEmAllStyle}>Gotta fetch( ) 'em all!</p>
        </div>
        <div>
            {/* Input Field */}
            <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
            <Input placeholder="Search" style={{textAlign:'center',fontSize:'80%',borderRadius:'15px', outline: 'none',filter: 'drop-shadow(5px 5px 5px black)',marginTop:'1%', marginBottom: '2rem',marginLeft:'35%', marginRight:'35%'}}  onChange={(e) =>{
                setIsRandom(false)
                setInputFieldValue(e.target.value.toLowerCase())
            }}/>
            </InputGroup>
        </div>
            {/* Card and Evolution Container */}
    <div style={{display: 'flex', flexDirection:'row', justifyContent:'center', flexWrap: 'wrap-reverse'}}>
            {showCard === true ?
                <div style={{ display: 'flex', flexDirection:'column',height:"auto",width:'20rem', marginTop:''}}>
                    <div>
                        <p style={evolutionChainTextStyle}>Size:</p>
                    </div>
                    <div style={{backgroundColor: backgroundColor, borderRadius: '1rem', marginBottom: '12%', border:'.1rem solid white',  paddingBottom: '2%', paddingTop: '2%', filter: 'drop-shadow(6px 6px 2px black)'}}>
                                <img draggable='false'  src ={TrainerImg} style={trainerImgStyle}/>
                                <img draggable='false' src={pokeImgUrl} style={pokeSilStyle}/>
                    </div>
                </div>
            :null}
            <div style={{ display:'', flexDirection:'row', justifyContent:'center', zIndex: 1}}>
                {/* Card Container */}
                {showCard === true ? 
                // <Draggable>
                <div style={{transform: 'translate(0px, 0px)', marginBottom:'7%'}}>
                        {/* Card Img */}
                     
                            <img   draggable="false" style={pokemonCardStyle} alt='Pokemon Card' src ={pokeCardImg}/>
                            {/* <div style = {{height: '99%',border: `solid .98rem ${backgroundColor}`,position: 'absolute',width: '82%',left: '9%',top: '-.5%',borderRadius: '1rem'}}></div> */}
                        {/* Poke Element Img + Checker */}
                        {pokeType1Url === grassTypeURL ?
                            <div className= "icon" style={grassEleStyle}  >
                                    <img src={Grasspng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === darkTypeURL ?
                            <div className= "icon" style={darkEleStyle}  >
                                    <img src={Darkpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === groundTypeURL ?
                            <div className= "icon" style={groundEleStyle}  >
                                    <img src={Groundpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === fairyTypeURL ?
                            <div className= "icon" style={fairyEleStyle}  >
                                    <img src={Fairypng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === ghostTypeURL ?
                            <div className= "icon" style={ghostEleStyle}  >
                                    <img src={Ghostpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === bugTypeURL ?
                            <div className= "icon" style={bugEleStyle}  >
                                    <img src={Bugpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === psychicTypeURL ?
                            <div className= "icon" style={psychicEleStyle}  >
                                    <img src={Psychicpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === normalTypeURL ?
                            <div className= "icon" style={normalEleStyle}  >
                                    <img src={Normalpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === rockTypeURL ?
                            <div className= "icon" style={rockEleStyle}  >
                                    <img src={Rockpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === dragonTypeURL ?
                            <div className= "icon" style={dragonEleStyle}  >
                                    <img src={Dragonpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === fireTypeURL ?
                            <div className= "icon" style={fireEleStyle}  >
                                    <img src={Firepng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === waterTypeURL ?
                            <div className= "icon" style={waterEleStyle}  >
                                    <img src={Waterpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === electricTypeURL ?
                            <div className= "icon" style={electricEleStyle}  >
                                    <img src={Electricpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === steelTypeURL ?
                            <div className= "icon" style={steelEleStyle}  >
                                    <img src={Steelpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === flyingTypeURL ?
                            <div className= "icon" style={flyingEleStyle}  >
                                    <img src={Flyingpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === iceTypeURL ?
                            <div className= "icon" style={iceEleStyle}  >
                                    <img src={Icepng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === poisonTypeURL ?
                            <div className= "icon" style={poisonEleStyle}  >
                                    <img src={Poisonpng} style={elementIconStyle}/>
                            </div> : null
                            }
                        {pokeType1Url === fightingTypeURL ?
                            <div className= "icon" style={fightingEleStyle}  >
                                    <img src={Fightingpng} style={elementIconStyle}/>
                            </div> : null
                            }
                            {/* Pokemon Img */}
                            <div style={{}}>
                                <Tappable  onTap={() => {
                                    setIsRandom(true)  
                                    startAudio();
                                    setPokeRand(Math.round(Math.random() * 10*80.2))
                                    setShowEvo(true)
                                }}>
                                <img  draggable="false" className ='pokeImg'style={pokeImgStyle} alt="pokeImg" src={pokeImgUrl}
                                onClick={() => {
                                    // setIsRandom(true)  
                                    // startAudio();
                                    // setPokeRand(Math.round(Math.random() * 10*80.2))
                                    // // console.log(pokeRand)
                                    // setShowEvo(true)
                                    }}/>
                                </Tappable>
                            </div>
                            <div style={{}}>
                                <div style={{display:'flex', flexDirection:'column', position:'absolute',top:'53%',textAlign:'center', width:'100%',textShadow:'1px 1px 1px black'}}>
                                        {/* Pokemon Name Text */}
                                        <p style={pokemonNameTextStyle}>{pokeName}</p>
                                        <p style={{opacity:'.3', marginTop:'-6%', marginBottom:'0', userSelect:'none'}}>__________________</p>
                                        {/* Pokemon Number */}
                                        <p style={pokemonNumberStyle}># {pokeNum}</p>
                                        <div style={{display:'flex', flexDirection:'row', marginLeft:'15%',marginRight:'15%', height:'100px'}}>
                                            {/* Pokemon Abilities Text */}
                                            <div style={{marginRight: '9%',marginTop: ''}}>
                                                <ul style={pokemonAbilitiesTextStyle}>Abilities:
                                                    <li style={{fontSize:'1rem'}}>{pokeAbility1}</li>
                                                    <li style={{fontSize:'1rem'}}>{pokeAbility2}</li>
                                                </ul>
                                            </div>
                                            {/* Pokemon Stat Bars */}
                                            <div style={{ marginBottom:'-4%',width: 200, display:'flex',flexDirection:'column', justifyContent:'space-evenly',userSelect:'none' ,   filter: 'drop-shadow(2px 2px 5px black)'}}>
                                                <ProgressBar style={{marginTop:'1%',  textShadow:'2px 2px 2px black'}} now={pokeHp} label={`HP: ${pokeHp}`} />
                                                <ProgressBar style={{marginTop:'1%',  textShadow:'2px 2px 2px black'}} now={pokeAtt} label={`Att: ${pokeAtt}`} />
                                                <ProgressBar style={{marginTop:'1%',  textShadow:'2px 2px 2px black'}} now={pokeDef} label={`Def: ${pokeDef}`} />
                                                <ProgressBar style={{marginTop:'1%',  textShadow:'2px 2px 2px black'}} now={pokeSpeed} label={`Speed: ${pokeSpeed}`} />
                                                <ProgressBar style={{marginTop:'1%',  textShadow:'2px 2px 2px black'}} now={pokeSpAtt} label={`Sp.Att: ${pokeSpAtt}`} />
                                                <ProgressBar style={{marginTop:'1%',  textShadow:'2px 2px 2px black'}} now={pokeSpDef} label={`Sp.Def: ${pokeSpDef}`} />
                                            </div>
                                        </div>
                                    <div style={{display:'flex', flexDirection:'column', width: '100px'}}>
                                        {/* Pokemon Type Images */}
                                        <div style={{display:'flex',flexDirection:'row',position:'absolute', top:'70.5%', left:'15%', marginTop: '10%'}}>
                                            {/* Pokemon Type Img 1 */}
                                            <img  alt={''} draggable="false" style={pokeType1ImgStyle} src={pokeType1Url}/>
                                            {/* Pokemon Type Img 2 */}
                                            <img   alt={''} draggable="false" style={pokeType2ImgStyle} src={pokeType2Url}/>
                                        </div>
                                    </div>    
                                    {/* <p style={{opacity:'.3', userSelect:'none', marginTop: '3%'}}>__________________</p> */}
                                </div>
                            </div>
                        </div>
                    // </Draggable>
                        :null} 
            </div>
            {/* Evolution Stuff */}
            {showEvo === true ? 
            <div style={{display: 'flex', flexDirection:'column'}}>
                    {/* Evolution Chain Text */}
                <div>
                     <p style={evolutionChainTextStyle}>{evolutionChainText}</p>
                </div>
                    {/* Evolution Names & Images*/}
                <div style={{display: makeFlex, flexDirection:'row', justifyContent:'center', flexWrap:'wrap', width:'20rem', backgroundColor: backgroundColor, borderRadius:'1rem', marginBottom: '5%',  border:'.1rem solid white', paddingBottom: '2%', paddingTop: '2%',   filter: 'drop-shadow(6px 6px 2px black)'}}>
                    <div>
                           {/* Evolution 1*/}
                        <p style={evolutionNameTextStyle}>{evoStage1}</p>
                        <img draggable = 'false'  alt={''}style={evolutionNameTextStyle} className="evoImg1" src={evoStage1ImgSrc} 
                        onMouseEnter={() => {
                            setIsRandom(true)
                            fetchPoke();
                            if(evoStage1ImgSrc !== undefined){
                            setPokeRand(evoStage1ImgSrc.slice(73).slice(0,-4))
                            }
                        }} onClick={() => {
                            startAudio();
                        }}
                     />
                    </div>
                    <div>
                           {/* Evolution 2*/}
                        <p style={evolutionNameTextStyle}>{evoStage2}</p>
                        <img draggable = 'false'  alt={''} style={evolutionNameTextStyle} className='evoImg2' src={evoStage2ImgSrc}
                            onMouseEnter={() => {
                            setIsRandom(true)
                            fetchPoke();
                            if(evoStage2ImgSrc !== undefined){
                            setPokeRand(evoStage2ImgSrc.slice(73).slice(0,-4))
                            }
                        }} onClick={() => {
                            startAudio();
                        }} />
                    </div>
                    <div>
                           {/* Evolution 3*/}
                        <p style={evolutionNameTextStyle}>{evoStage3}</p>
                        <img  draggable = 'false' alt={''}style={evolutionNameTextStyle}  className='evoImg3' src={evoStage3ImgSrc}
                            onMouseEnter={() => {
                            setIsRandom(true)
                            fetchPoke();
                            if(evoStage3ImgSrc !== undefined){
                            setPokeRand(evoStage3ImgSrc.slice(73).slice(0,-4))
                            } 
                            }} onClick={() => {
                            startAudio();          
                            }}/>
                    </div>
                    <div>
                           {/* Evolution 4*/}
                        <p style={evolutionNameTextStyle}>{evoStage4}</p>
                        <img draggable = 'false'  alt={''} style={evolutionNameTextStyle}  className='evoImg4' src={evoStage4ImgSrc}
                                     onMouseEnter={() => {
                                        setIsRandom(true)
                                        fetchPoke();
                                        if(evoStage4ImgSrc !== undefined){
                                        setPokeRand(evoStage4ImgSrc.slice(73).slice(0,-4))
                                        }
                                        }} 
                                        onClick={() => {
                                        startAudio();
                                        }}/>
                    </div>
                    <div>
                           {/* Evolution 5*/}
                        <p style={evolutionNameTextStyle}>{evoStage5}</p>
                        <img draggable = 'false'  alt={''} style={evolutionNameTextStyle}  className='evoImg5' src={evoStage5ImgSrc}
                                     onMouseEnter={() => {
                                        setIsRandom(true)
                                        fetchPoke();
                                        if(evoStage5ImgSrc !== undefined){
                                        setPokeRand(evoStage5ImgSrc.slice(73).slice(0,-4))
                                        }
                                    }} onClick={() => {
                                        startAudio();
                                    }}
                        />
                    </div>
                    <div>
                           {/* Evolution 6*/}
                        <p style={evolutionNameTextStyle}>{evoStage6}</p>
                        <img draggable = 'false'  alt={''}style={evolutionNameTextStyle} className='evoImg6' src={evoStage6ImgSrc}
                                     onMouseEnter={() => {
                                        setIsRandom(true)
                                        fetchPoke();
                                        if(evoStage6ImgSrc !== undefined){
                                        setPokeRand(evoStage6ImgSrc.slice(73).slice(0,-4))
                                        }
                                    }} onClick={() => {
                                        startAudio();
                                    }}
                        />
                    </div>
                    <div>
                           {/* Evolution 7*/}
                        <p style={evolutionNameTextStyle}>{evoStage7}</p>
                        <img draggable = 'false'  alt={''} style={evolutionNameTextStyle} className='evoImg7' src={evoStage7ImgSrc}
                                     onMouseEnter={() => {
                                        setIsRandom(true)
                                        fetchPoke();
                                        if(evoStage7ImgSrc !== undefined){
                                        setPokeRand(evoStage7ImgSrc.slice(73).slice(0,-4))
                                        }
                                    }} onClick={() => {
                                        startAudio();
                                    }}
                                    />
                    </div>
                    <div>
                           {/* Evolution 8*/}
                        <p style={evolutionNameTextStyle}>{evoStage8}</p>
                        <img draggable = 'false'  alt={''} style={evolutionNameTextStyle}  className='evoImg8'src={evoStage8ImgSrc}
                                     onMouseEnter={() => {
                                        setIsRandom(true)
                                        fetchPoke();
                                        if(evoStage8ImgSrc !== undefined){
                                        setPokeRand(evoStage8ImgSrc.slice(73).slice(0,-4))
                                        }
                                    }} onClick={() => {
                                        startAudio();
                                    }}
                                    />
                    </div>
                    <div>
                           {/* Evolution 9*/}
                        <p style={evolutionNameTextStyle}>{evoStage9}</p>
                        <img draggable = 'false'  alt={''} style={evolutionNameTextStyle}  className='evoImg9' src={evoStage9ImgSrc}
                                     onMouseEnter={() => {
                                        setIsRandom(true)
                                        fetchPoke();
                                        if(evoStage9ImgSrc !== undefined){
                                        setPokeRand(evoStage9ImgSrc.slice(73).slice(0,-4))
                                        }
                                    }} onClick={() => {
                                        startAudio();
                                    }}/>
                    </div>
                    <div>
                           {/* Evolution 10*/}
                        <p style={evolutionNameTextStyle}>{evoStage10}</p>
                        <img draggable = 'false' alt={''} style={evolutionNameTextStyle} className='evoImg10'  src={evoStage10ImgSrc}
                                     onMouseEnter={() => {
                                        setIsRandom(true)
                                        fetchPoke();
                                        if(evoStage10ImgSrc !== undefined){
                                        setPokeRand(evoStage10ImgSrc.slice(73).slice(0,-4))
                                        }
                                    }} onClick={() => {
                                        startAudio();
                                    }}
                        />
                    </div>
                </div>
            </div>
            : null}
        </div>
        {showCard === false ? 
        <div >
            <p style={welcomeTextStyle}>Welcome! You can search by name or # or click the Pokémon that appears in the card to randomize!</p>
        </div>
        : null
        }
     
    </div>
             {/* Audio Player */}
             <div style= {{backgroundColor: 'black', paddingBottom:'1vh',paddingTop:'1vh'}}>
            <ReactAudioPlayer style = {{filter: 'drop-shadow(5px 5px 5px black)',marginTop:'',paddingTop:'', marginBottom:'', background:'transparent', outline:'none'} }src={audioUrl} autoPlay loop controls  />
        </div>
    </div>
    
)
}
export default Home;