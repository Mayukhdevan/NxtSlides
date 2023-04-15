import {useContext} from 'react'
import TabContext from '../../context/TabContext'
import './index.css'

const SlideTabItem = ({slide, indexVal}) => {
  const {heading, description} = slide
  const {activeSlideId, setActiveSlideId} = useContext(TabContext)

  const activeCls = activeSlideId === slide.id ? 'active-bg' : ''
  return (
    <li
      testid={`slideTab${indexVal + 1}`}
      className={`slide-li ${activeCls}`}
      onClick={() => setActiveSlideId(slide.id)}
    >
      <p className="slide-num">{indexVal + 1}</p>
      <div className="slide-card">
        <h1 className="slide-card-heading">{heading}</h1>
        <p className="slide-card-para">{description}</p>
      </div>
    </li>
  )
}

export default SlideTabItem
