import { useLocation, useNavigate } from 'react-router-dom'
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
    <div className='song_box'>
      <div className='title_area'>
        <h2>{location.title}</h2>
        <p>{location.singer}</p>
      </div>
      <div className='song_contents'>
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
          <p dangerouslySetInnerHTML={{ __html: `${location.text}` }} />
          <button onClick={() => navigate(-1)}>
            <MdArrowBack /> 뒤로가기
          </button>
        </div>
      </div>
    </div>
  )
}
