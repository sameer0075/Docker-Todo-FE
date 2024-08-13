/**
 * The style for a link
 */
const linkStyle = { 
  textDecoration: "none", 
  color: "black" }

/**
 * The style for a list item
 * @param {Object} props - The properties passed to the function
 * @param {Object} props.item - The data for the item to be rendered
 * @param {Object} props.location - The current location of the user
 * @returns {CSSObject} The styles for the list item
 */
const listItemStyle = ({item, location}: any) => {
  return {
    display: "block",
    background:
      location.pathname === item.path
        ? "linear-gradient(180deg, #E7463F, #EF8439)"
        : "transparent",
    color:
      location.pathname === item.path
        ? "white"
        : "black",
    '&:hover': {
      background:location.pathname !== item.path ? "linear-gradient(180deg, #E7463F33, #EF843933)"  : "linear-gradient(180deg, #E7463F, #EF8439)",
    },
  }
}

/**
 * The style for a list item button
 * @param {boolean} open - Whether the sidebar is open or not
 * @returns {CSSObject} The styles for the button
 */
const listItemButtonStyle = (open: boolean)=>{
  return {
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
  }
}

/**
 * The style for a list item icon
 * @param {Object} props - The properties passed to the function
 * @param {Object} props.item - The data for the item to be rendered
 * @param {Object} props.location - The current location of the user
 * @returns {CSSObject} The styles for the icon
 */
const listItemIconStyle = ({item, location}: any)=>{
  return {
    minWidth: 0,
    mr: 1,
    justifyContent: "center",
    color:
      location.pathname !== item.path
        ? "#EF8439"
        : "white",
  }
}

/**
 * The style for a list item text
 * @param {boolean} open - Whether the sidebar is open or not
 * @returns {CSSObject} The styles for the text
 */
const listItemTextStyle = (open: boolean) =>{
  return { opacity: open ? 1 : 0 }
}

const themeSwitchStyles =  {
  uncheckedHandleIcon:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 20,
  },
  checkedHandleIcon:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 18,
  }
}

export { linkStyle , listItemStyle, listItemButtonStyle, listItemIconStyle, listItemTextStyle, themeSwitchStyles}
