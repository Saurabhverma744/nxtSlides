import './index.css'

const NxtSlidesItem = props => {
  const {item, index, onclickTabBtn, isActive} = props
  const {heading, description, id} = item
  const onClickTab = () => {
    onclickTabBtn(id)
  }
  const backColor = isActive ? 'blue' : ''

  return (
    <li onClick={onClickTab} className={`list ${backColor}`}>
      <p className='count'>{index + 1}</p>
      <p className="item-heading">{heading}</p>
      <p className="item-description">{description}</p>
    </li>
  )
}

export default NxtSlidesItem
