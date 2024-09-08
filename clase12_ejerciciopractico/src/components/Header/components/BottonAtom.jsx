import PropTypes from 'prop-types'

const BottonAtom = ({ text, setShowComponent, value }) => {

  const handleClick = () => {
    setShowComponent(value)

    console.log('This in the ${value? "left" : "right"}')
  }

  return (
    <li>
        <button onClick={handleClick}>{text}</button>
    </li>
  )
}

BottonAtom.propTypes = {
    text: PropTypes.string.isRequired,
    setShowComponent: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
}

export default BottonAtom
