import { Link, useLocation, useNavigate } from 'react-router-dom'
import YouTube from 'react-youtube'
import { MdArrowBack } from 'react-icons/md'

export default function Song() {
  const location = useLocation().state
  const navigate = useNavigate()

  const opts = {
    width: '560',
    height: '315',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <main>
      <div className='song_box'>
        <div className='left'>
          <YouTube
            videoId={location.movieID}
            opts={opts}
            onEnd={e => {
              e.target.stopVideo(0)
            }}
          />
        </div>
        <div className='right'>
          <h2>{location.title}</h2>
          <h3>{location.singer}</h3>
          <p className='text'>{location.text}</p>
          <button onClick={() => navigate(-1)}>
            <MdArrowBack /> 뒤로가기
          </button>
        </div>
      </div>
    </main>
  )
}
