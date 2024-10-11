const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('dist'))


let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": "1"
    },
    {
      "name": "Ada Lovelace",
      "number": 12345678,
      "id": "2"
    },
    {
      "name": "Dan Abramov",
      "number": 12345678,
      "id": "3"
    },
    {
      "name": "Mary Poppendieck",
      "number": 12345678,
      "id": "4"
    },
    {
      "id": "5",
      "name": "ajibola opeyemi",
      "number": 12345678
    },
    {
      "id": "6",
      "name": "ajibola akorede",
      "number": 12345678
    },
    {
      "id": "7",
      "name": "ajibola fatimah",
      "number": "9823748732"
    },
    {
      "id": "8",
      "name": "ajibola ahmad",
      "number": "09289474839"
    }
  ]

  app.get('/', (request, response) => {
    response.send('<h1>Welcome to my backend home page</h1>')
  })

  app.get('/info', (request, response) => {
    response.send(`<div><p>Phonebook has info for ${persons.length}</p><p>${new Date().toString()}</p></div>`)
  })

  app.get('/api/phonebook', (request, response) => {
    response.json(persons)
  })

  app.get('/api/phonebook/:id', (request, response) =>{
    const id = request.params.id
    const person = persons.filter(per => per.id === id)
    if (person){
        response.json(person)
    }
    else{
        response.status(404).end()
    }
  })

  app.delete('/api/phonebook/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person.id !== id)
    response.status(204).end()
  })

  app.post('/api/phonebook', (request, response) =>{
    
    const generateId = function() {
        const maxId = persons.length > 0 
        ? Math.max(...persons.map(person => Number(person.id)))
        : 0
        return String(maxId + 1)
    }

    const body = request.body
    if(!person.name){
        response.status(400).json({
            "error": "content missing"
        })
    } 
    const person = {
        name: body.name,
        number: "0284937834",
        id: generateId()
    }
   
    persons = persons.concat(person)
    response.json(person)
  })

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`My server is up and running on port ${PORT}`)
  })