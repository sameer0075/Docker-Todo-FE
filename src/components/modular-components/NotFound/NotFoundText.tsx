import CustomText from "../../generic-components/Text"

/**
 * A component that displays a not found message in a white, centered typography component.
 *
 * This component expects a single prop, `text`, which is the text to be displayed.
 *
 * The component renders a `Typography` component with the following props:
 *
 * - `sx`: An object that defines the styles for the component.
 * - `content`: The text to be displayed.
 * - `variant`: The variant of the `Typography` component. Defaults to 'h2'.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.text - The text to display.
 * @return {JSX.Element} The not found text component.
 */
const NotFoundText = ({ text }: { text: string }) => {
  return (
    <CustomText
      sx={{
        /**
         * Set the text alignment to center.
         */
        textAlign: 'center',
        /**
         * Set the text color to white.
         */
        color: 'white'
      }}
      /**
       * The text to be displayed.
       */
      content={text}
      /**
       * The variant of the `Typography` component. Defaults to 'h2'.
       */
      variant={'h2'} />
  )
}

export default NotFoundText