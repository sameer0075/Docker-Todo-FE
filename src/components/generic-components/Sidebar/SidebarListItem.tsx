import { ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { linkStyle, listItemStyle, listItemButtonStyle, listItemIconStyle, listItemTextStyle } from "./styles";
import CustomText from "../Text";


/**
 * Component that renders a single item in the sidebar.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.item - The data for the item to be rendered.
 * @param {boolean} props.open - Whether the sidebar is open or not.
 * @param {Object} props.location - The current location of the user.
 * @return {JSX.Element} The rendered item component.
 */
const SidebarListItem = ({ item, open, location }: any) => {
  // Determine if the item is a section or not.
  const isSection = item.subSections;

  // Render the item as a list item with a link.
  return (
    <>
      {/* Render the link to the item's path. */}
      <RouterLink
        to={item.path ? item.path : ""}
        style={linkStyle}
      >
        <ListItem
          disablePadding
          // Apply the appropriate styles based on the item and location.
          sx={() => listItemStyle({ item, location })}
        >
          <ListItemButton
            sx={() => listItemButtonStyle(open)}
          >
            {/* Render a tooltip with the item's title. */}
            <Tooltip title={item.title}>
              {/* Render the icon for the item. */}
              <ListItemIcon
                sx={() => listItemIconStyle({ item, location })}
              >
                {item.icon}
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              sx={() => listItemTextStyle(open)}
            >
              {/* Render the title of the item. */}
              <CustomText
              sx={{
                fontSize: isSection ? 'auto' : '14px',
                paddingLeft:  !isSection ? '25px' : '0px',
              }}
              content={item.title}
              />
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </RouterLink>
    </>
  )
}

export default SidebarListItem