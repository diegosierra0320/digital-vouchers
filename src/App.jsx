import axios from 'axios'
import { useState } from 'react'
import './App.css'
import Form from './components/Form'


function App() {

  // funcion para guardar la info del llamado a la API
  const [ query, setQuery] = useState([])

  // funcion para manejar el loader de la data
  const [ isLoading, setIsLoading ] = useState()

  // Llamado a la API tipo POST ***************
    const newQuery = data => {
    const URL = 'http://vwnv02ax03625:8080/sp-record-voucher/record-voucher/'
    axios.post(URL, data)
      .then((res) => {setQuery(res.data)
        setIsLoading(false)})
      .catch((err) => console.log(err))
  }

  const submit = data => {
    newQuery(data)
    setIsLoading(true)
  }

    return (
      <div className="App">
  
        <div className='header'>
          <img src="./utils/CWT+logo white.png" alt="" />
        </div>
  
        <div className='form-container'>
          <Form query={query} submit={submit} isLoading={isLoading}/>
        </div>

      </div>
    )

}

export default App
