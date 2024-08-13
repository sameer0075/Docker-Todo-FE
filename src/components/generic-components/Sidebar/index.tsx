import { useState } from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import SpeedIcon from '@mui/icons-material/Speed';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MapIcon from '@mui/icons-material/Map';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Groups2Icon from '@mui/icons-material/Groups2';
import SettingsIcon from '@mui/icons-material/Settings';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import Header from "../Header";
import ThemeSwitch from "./ThemeSwitch";
import Drawer from "./styled-components/Drawer";
import SidebarListItem from "./SidebarListItem";

/**
 * Type definition for a subsection in the sidebar.
 */
type SubSection = {
  // The title of the subsection.
  title: string;
  // The path to navigate to when the subsection is clicked.
  path: string;
};

/**
 * Type definition for an item in the sidebar.
 */
type Item = {
  // The title of the item.
  title: string;
  // The path to navigate to when the item is clicked.
  path?: string;
  // The icon associated with the item.
  icon: React.ReactNode;
  // Optional sub-sections related to the item.
  subSections?: SubSection[];
};

/**
 * Type definition for a section in the sidebar.
 *
 * Each section contains an array of items.
 */
type Section = {
  // The array of items in the section.
  items: Item[];
};

const sections: Section[] = [
  {
    items: [
      {
        title: "Tasks",
        path: "/dashboard",
        icon: <FormatListBulletedIcon fontSize="medium" />,
        subSections: [],
      },
    ],
  },
];


/**
 * A component that renders the sidebar.
 *
 * The sidebar is a permanent drawer that renders a list of sections.
 * Each section contains a list of items, each of which is rendered as a
 * `SidebarListItem` component.
 *
 * When the user hovers over the sidebar, the `handleDrawer` function is called with
 * `true` as the argument. When the user leaves the sidebar, the `handleDrawer` function
 * is called with `false` as the argument.
 *
 * The `open` state is used to control the width of the sidebar. When `open` is `true`,
 * the sidebar is rendered with a width of 100%. When `open` is `false`, the sidebar is
 * rendered with a width of 25px.
 */
const Sidebar = () => {
  /**
   * The `open` state is used to control the width of the sidebar.
   */
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("light");

  /**
   * The current location of the user.
   */
  const location = useLocation();

  /**
   * A function that is called when the user hovers over or leaves the sidebar.
   * @param {boolean} isOpen - Whether or not the sidebar is open.
   */
  const handleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Drawer variant="permanent"
        open={open}
        onMouseEnter={() => handleDrawer(true)}
        onMouseLeave={() => handleDrawer(false)}>
        <Box
          sx={{
            my: "32px",
            marginLeft: "18px",
            width: `${open ? "100%" : "25px"}`,
            overflow: "hidden",
          }}
        />
        {sections.map((section, sectionIndex) => (
          <Box key={sectionIndex}>
            <Divider style={{ marginBottom: !sectionIndex ? '20px' : '0px' }} />
            <List>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <SidebarListItem key={itemIndex} item={item} location={location} open={open} />
                  {item.title === "Appearance" &&
                    <Box sx={{
                      display: open ? 'visible' : 'none',
                      ml: 5
                    }}>
                      <ThemeSwitch/>
                    </Box>

                  }
                  {item.subSections && (
                    <List component="div" disablePadding>
                      {item.subSections.map((subSection, subIndex) => (
                        <SidebarListItem key={subIndex} item={subSection} location={location} open={open} />
                      ))}
                    </List>
                  )}
                </div>
              ))}
            </List>
          </Box>
        ))}

      </Drawer>
    </Box>
  );
};


export default Sidebar;
