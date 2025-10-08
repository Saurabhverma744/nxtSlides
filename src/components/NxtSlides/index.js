import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NxtSlidesItem from '../NxtSlidesItem'

import './index.css'

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

class NxtSlides extends Component {
  state = {
    showHeading: true,
    showDescription: true,
    slideData: initialSlidesList,
    activeTabId: initialSlidesList[0].id,
  }

  onClickHeading = () => {
    this.setState(prevState => ({
      showHeading: !prevState.showHeading,
    }))
  }

  onChangeHeading = event => {
    const {activeTabId, slideData} = this.state
    const updatedSlides = slideData.map(each => {
      if (each.id === activeTabId) {
        return {...each, heading: event.target.value}
      }
      return each
    })
    this.setState({slideData: updatedSlides})
  }

  onChangeDescription = event => {
    const {activeTabId, slideData} = this.state
    const updatedSlides = slideData.map(each => {
      if (each.id === activeTabId) {
        return {...each, description: event.target.value}
      }
      return each
    })
    this.setState({slideData: updatedSlides})
  }

  onClickDescription = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription,
    }))
  }

  onclickTabBtn = id => {
    const {slideData} = this.state
    const currentTab = slideData.find(each => each.id === id)
    this.setState({
      activeTabId: currentTab.id,
      showHeading: true,
      showDescription: true,
    })
  }

  AddTab = () => {
    const {slideData, activeTabId} = this.state
    const activeIndex = slideData.findIndex(each => each.id === activeTabId)
    const newTab = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const updatedSlides = [
      ...slideData.slice(0, activeIndex + 1),
      newTab,
      ...slideData.slice(activeIndex + 1),
    ]
    this.setState({
      slideData: updatedSlides,
      activeTabId: newTab.id,
      showHeading: true,
      showDescription: true,
    })
  }

  render() {
    const {slideData, activeTabId, showHeading, showDescription} = this.state
    const activeHeading = slideData.find(each => each.id === activeTabId)
      .heading
    const activeDescription = slideData.find(each => each.id === activeTabId)
      .description
    return (
      <div>
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="logo"
          />
          <h1 className="heading">Nxt Slides</h1>
        </nav>
        <div className="container">
          <button className="add-button" type="button" onClick={this.AddTab}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="add-image"
            />
            <p className="new-text">New</p>
          </button>
          <div className="slide-tab-container">
            <ol className="tabs">
              {slideData.map((each, index) => (
                <NxtSlidesItem
                  key={each.id}
                  item={each}
                  index={index}
                  onclickTabBtn={this.onclickTabBtn}
                  isActive={activeTabId === each.id}
                />
              ))}
            </ol>
            <div className="slide-container" testid="slide">
              {!showHeading ? (
                <input
                  type="text"
                  className="tab-input"
                  onChange={this.onChangeHeading}
                  value={activeHeading}
                />
              ) : (
                <h1 className="heading-button" onClick={this.onClickHeading}>
                  {activeHeading}
                </h1>
              )}
              {!showDescription ? (
                <input
                  type="text"
                  className="tab-input-des"
                  onChange={this.onChangeDescription}
                  value={activeDescription}
                />
              ) : (
                <p
                  className="description-btn"
                  onClick={this.onClickDescription}
                >
                  {activeDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
