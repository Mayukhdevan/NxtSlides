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

  const renderHeading = () =>
    headingEditable ? (
      <input
        className="heading-input"
        type="text"
        onChange={e => updateHeading(e.target.value)}
        value={heading}
        onBlur={() => setHeadingEditable(false)}
      />
    ) : (
      <h1 className="heading-input" onClick={() => setHeadingEditable(true)}>
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
        onBlur={() => setDescriptionEditable(false)}
      />
    ) : (
      <p className="para-input" onClick={() => setDescriptionEditable(true)}>
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
