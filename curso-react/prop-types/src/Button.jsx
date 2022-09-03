import PropTypes from "prop-types"

function Button(props) {
  return (
    <button style={{width: `${props.width}px`, height: `${props.width / 3}px`}}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
}

export default Button
