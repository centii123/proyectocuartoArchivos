import Image from 'next/image'
import styles from './page.module.css'
import NoEncontrado from './not-found'

export default function Home() {
  let cliente= "client"
  if (cliente == "cliente") {
    return (
    <h1>hola</h1>
    )
  }else{
    return (
  < NoEncontrado/>
    )
  }
}

