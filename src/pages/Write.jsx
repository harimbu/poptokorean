import { useNavigate } from 'react-router-dom'
import YouTube from 'react-youtube'
import { MdArrowBack } from 'react-icons/md'
import { useState } from 'react'

export default function Write() {
  const [image, setImage] = useState('')
  const [videoID, setVideoID] = useState('')
  const [title, setTitle] = useState('')
  const [singer, setSinger] = useState('')
  const [text, setText] = useState('')

  const navigate = useNavigate()

  const opts = {
    width: '560',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <main>
      <div className='song_box'>
        <div className='left'>
          <input type='text' placeholder='이미지' value={image} onChange={e => setImage(e.target.value)} />
          <div className='image'>
            <img src={image} alt='' />
          </div>
          <input type='text' placeholder='videoID' value={videoID} onChange={e => setVideoID(e.target.value)} />
          <YouTube
            videoId={videoID}
            opts={opts}
            onEnd={e => {
              e.target.stopVideo(0)
            }}
          />
        </div>
        <div className='right'>
          <input type='text' placeholder='제목' value={title} onChange={() => {}} />
          <input type='text' placeholder='가수' value={singer} onChange={() => {}} />
          <textarea name='' id='' placeholder='가사' rows='30' value={text} onChange={() => {}}></textarea>
          <button onClick={() => navigate(-1)}>
            <MdArrowBack /> 뒤로가기
          </button>
        </div>
      </div>
    </main>
  )
}
