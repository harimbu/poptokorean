import { db } from './firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Song from './pages/Song'
import Write from './pages/Write'

export default function App() {
  const [songs, setSongs] = useState([])

  async function fetchData() {
    const q = query(collection(db, 'songs'))
    const querySnapshot = await getDocs(q)
    const songs = []
    querySnapshot.forEach(doc => {
      songs.push(doc.data())
    })

    setSongs(songs)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home songs={songs} />} />
          <Route path='/about' element={<About />} />
          <Route path='/song' element={<Song />}>
            <Route path='/song:id' />
          </Route>
          <Route path='/write' element={<Write />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
