import React, { useState } from "react";
import ReactSwitch from "react-switch";

import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import { themeSwitchStyles } from "./styles";

const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked: boolean | ((prevState: boolean) => boolean)) => {
    setChecked(nextChecked);
  };
 
  return (

        <ReactSwitch
          checked={checked}
          onChange={handleChange}
          handleDiameter={30}
          offColor="#abb4be"
          onColor="#abb4be"
          offHandleColor="#011f3b"
          onHandleColor="#011f3b"
          height={20}
          width={45}
          borderRadius={50}
          activeBoxShadow="0px 0px 0px 0px white"
          uncheckedIcon={<></>}
          checkedIcon={<></>}
          uncheckedHandleIcon={
            <div
              style={themeSwitchStyles.uncheckedHandleIcon}
            >
              <LightModeIcon htmlColor="white"/>
            </div>
          }
          checkedHandleIcon={
            <div
              style={themeSwitchStyles.checkedHandleIcon}
            >
              <NightsStayIcon htmlColor="white"/>
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
  );
};
 
export default SwitchComponent;
