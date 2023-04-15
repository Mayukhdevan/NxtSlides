import {useContext} from 'react'
import TabContext from '../../context/TabContext'
import './index.css'

const SlideTabItem = ({slide, indexVal}) => {
  const {heading, description} = slide
  const setActiveSlideId = useContext(TabContext)

  return (
    <li className="slide-li" onClick={() => setActiveSlideId(slide.id)}>
      <p className="slide-num">{indexVal + 1}</p>
      <div className="slide-card">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default SlideTabItem
