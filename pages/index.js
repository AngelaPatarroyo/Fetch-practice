import { useEffect, useState } from 'react'

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    getFoto()
  }, [])

  const person = [
    { name: "Paulo", age: 22 },
    { name: "Martin", age: 22, post: [{ id: 2123, name: "Mart", url: "www.photo" }, { id: 343, name: "Angela", url: "oo.photo" }] },
    { name: "Pablo", age: 22 },
  ]
  console.log(person[1].post[1].name)

  /* 
  return (
    <div>
    {person[1].post.map((element) =>{
  return(
  <p>{element.name}</p>
  ))
    }}
    <div/>
  
  )
  */
  /* METODO GET */
  const getFoto = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
      .then((resp) => resp.json())
      .then((info) => setData(info))
      .catch((err) => console.log(err))
  }
  /* async/await cuando la funcion pudiera tardarse en ejecutarse */

  /* METODO POST */
  const postPost = (dataPost) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPost) /* SIEMPRE VA A IR ESTO */
    })
      .then((resp) => resp.json())
      .then((info) => console.log(info))
      .catch((err) => console.log(err))
  }

  console.log(data)
  return (
    <div>
      {person[1].post.map((element) => {
        return (
          <p>{element.name}</p>
        )
      })}
    </div>
  )
}
