import {useState} from 'react'
import './index.css'

const ActiveTab = ({
  activeSlideId,
  slidesList,
  updateHeading,
  updateDescription,
}) => {
  const [headingEditable, setHeadingEditable] = useState(false)
  const [descriptionEditable, setDescriptionEditable] = useState(false)

  const {heading, description} = slidesList.find(
    eachSlide => eachSlide.id === activeSlideId,
  )

  const toggleHeadingEditable = () =>
    setHeadingEditable(prevState => !prevState)

  const toggleDescriptionEditable = () =>
    setDescriptionEditable(prevState => !prevState)

  const renderHeading = () =>
    headingEditable ? (
      <input
        className="heading-input"
        type="text"
        onChange={e => updateHeading(e.target.value)}
        value={heading}
        onBlur={toggleHeadingEditable}
      />
    ) : (
      <h1 className="heading-input" onClick={toggleHeadingEditable}>
        {heading}
      </h1>
    )

  const renderDescription = () =>
    descriptionEditable ? (
      <input
        className="para-input"
        type="text"
        onChange={e => updateDescription(e.target.value)}
        value={description}
        onBlur={toggleDescriptionEditable}
      />
    ) : (
      <p className="para-input" onClick={toggleDescriptionEditable}>
        {description}
      </p>
    )

  return (
    <div className="active-slide-bg-container">
      {renderHeading()}
      {renderDescription()}
    </div>
  )
}

export default ActiveTab
