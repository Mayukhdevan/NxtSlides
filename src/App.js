import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import ActiveTab from './components/ActiveTab'
import SlideTabsList from './components/SlideTabsList'

import './App.css'
import TabContext from './context/TabContext'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
const App = () => {
  const [slidesList, setSlidesList] = useState(initialSlidesList)
  const [activeSlideId, setActiveSlideId] = useState(initialSlidesList[0].id)

  const updateHeading = value =>
    setSlidesList(prevSlidesList =>
      prevSlidesList.map(eachSlide => {
        if (eachSlide.id === activeSlideId) {
          return {...eachSlide, heading: value}
        }
        return eachSlide
      }),
    )

  const updateDescription = value =>
    setSlidesList(prevSlidesList =>
      prevSlidesList.map(eachSlide => {
        if (eachSlide.id === activeSlideId) {
          return {...eachSlide, description: value}
        }
        return eachSlide
      }),
    )

  const addNewSlide = () => {
    const slideIndex = slidesList.indexOf(
      slidesList.find(eachSlide => eachSlide.id === activeSlideId),
    )
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    setSlidesList(prevSlidesList => {
      const newSlideList = [...prevSlidesList]
      newSlideList.splice(slideIndex + 1, 0, newSlide)
      return newSlideList
    })
    setActiveSlideId(newSlide.id)
  }

  return (
    <div className="main-container">
      <Header />
      <div className="slides-container">
        <TabContext.Provider value={{activeSlideId, setActiveSlideId}}>
          <SlideTabsList slidesList={slidesList} addNewSlide={addNewSlide} />
          <ActiveTab
            activeSlideId={activeSlideId}
            slidesList={slidesList}
            updateHeading={updateHeading}
            updateDescription={updateDescription}
          />
        </TabContext.Provider>
      </div>
    </div>
  )
}

export default App
