import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SongItem({ song }) {
  const [user, setUser] = useState(false)

  const text = song.text.replace(/<[^>]+>/g, '')

  return (
    <li className='song' key={song.id}>
      <div className='thumb'>
        <img src={song.image} alt='' />
      </div>
      <Link className='title' to={`/song/${song.id}`} state={song}>
        {song.title}
      </Link>

      <div className='singer'>{song.singer}</div>
      <div className='text' dangerouslySetInnerHTML={{ __html: text }} />
      {user && (
        <div className='btns'>
          <button>수정</button>
          <button>삭제</button>
        </div>
      )}
    </li>
  )
}
