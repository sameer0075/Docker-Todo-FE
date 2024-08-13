/**
 * The styles for the button component.
 * The button is a block element with a border radius of 10 and a height of 50.
 * The button is transparent with a white border and white text.
 * On hover, the button will have a semi-transparent red background.
 */
const buttonStyles ={
  mt: 3,
  mb: 2,
  borderRadius: 10,
  height: 50,
  width: 280,
  display: 'block',
  border:'1px solid white',
  background: 'transparent',
  color:'white',
  /**
   * The styles for the button on hover.
   * The button will have a semi-transparent red background.
   */
  '&:hover': {
    border:'1px solid white',
    backgroundColor:'#E7463F33'
  }
}

/**
 * The styles for the button text.
 * The text is bold and has a padding top of 0.7.
 */
const buttonTextStyles = { fontWeight: 'bold', pt:0.7 }

/**
 * The styles for the container box.
 * The container box is a flexbox that is centered both horizontally and vertically.
 * The container box has a linear gradient background that goes from red to orange.
 * The container box has a minimum height of 100vh and a padding left and right of 3.
 */
const containerBoxStyles = {
  alignItems: 'center',
  background: "linear-gradient(180deg, #E7463F, #EF8439)",
  display: 'flex',
  minHeight: '100vh',
  px: 3,
}

/**
 * The styles for the button box.
 * The button box is a flexbox that is centered horizontally.
 * The button box has a margin top of 6.
 */
const buttonBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  mt: 6
}

export {buttonStyles, buttonTextStyles, containerBoxStyles, buttonBoxStyles}
