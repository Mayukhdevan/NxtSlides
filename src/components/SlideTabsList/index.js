import './index.css'
import SlideTabItem from '../SlideTabItem'

const SlideTabsList = ({slidesList, addNewSlide}) => (
  <div className="sidebar">
    <button type="button" className="add-new-btn" onClick={() => addNewSlide()}>
      <img
        className="plus-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
        alt="new plus icon"
      />{' '}
      New
    </button>
    <ol className="slide-ul">
      {slidesList.map(eachSlide => (
        <SlideTabItem
          key={eachSlide.id}
          slide={eachSlide}
          indexVal={slidesList.indexOf(eachSlide)}
        />
      ))}
    </ol>
  </div>
)

export default SlideTabsList
