import {useState, useEffect} from "react"
import axios from "axios"
import {baseUrl} from "../constants/urls"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {

const [pokemonsInfos, setPokemonsInfos] = useState([]);
const [pokemons, setPokemons] = useState([]);
const [pokedex, setPokedex] = useState([]);
const [pagination, setPagination] = useState(1)

useEffect(() => {
  getPokemonsInfos()
},[pagination])

const getPokemonsInfos = () => {
  const limit = 30*(pagination-1)
  axios.get(`${baseUrl}/pokemon?limit=30&offset=${limit}`)
  .then(res =>{
    setPokemonsInfos(res.data.results);
  })
  .catch(err => {
    console.log(err);
  })
} 

useEffect(() => {
  const newList = []
  pokemonsInfos.forEach((item) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
    .then((res) => {
      newList.push(res.data)
      if (newList.length === 30 && pagination < 38) {
        const orderedList = newList.sort((a, b) => {
          return a.id - b.id;
        });
        setPokemons(orderedList);
      } else if (pagination === 38 && newList.length === 8) {
               
        const orderedList = newList.sort((a, b) => {
          return a.id - b.id;
        })
setPokemons(orderedList)
      }
    })
  })
}, [pokemonsInfos, pagination])

const data = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    pagination,
    setPagination
  };

return <GlobalStateContext.Provider value={data}>
    {props.children}
</GlobalStateContext.Provider>
}

export default GlobalState;