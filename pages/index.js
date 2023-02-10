import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
      .then((resp) => resp.json())
      .then((info) => setData(info))
      .catch((err) => console.log(err))
  }, [])
  console.log(data)
  return (
    <div>
      {data?.map((element) => {
        return (
          <img src={element?.url} width={600} height={600} />
        )
      })}
    </div>
  )
    }
