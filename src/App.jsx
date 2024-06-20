import { db } from './firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import List from './pages/List'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Song from './pages/Song'
import Write from './pages/Write'
import Home from './pages/Home'
import Login from './pages/Login'

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<List songs={songs} />} />
          <Route path='/song/:id' element={<Song />} />
          <Route path='/write' element={<Write />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
