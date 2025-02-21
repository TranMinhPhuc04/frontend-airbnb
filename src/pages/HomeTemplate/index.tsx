import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function () {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main><Outlet /></main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
