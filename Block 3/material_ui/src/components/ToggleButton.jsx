import { useContext } from "react";
import { ColorModeContext } from "../context/theme";
import Switch from '@mui/material/Switch';

const ToggleButton = () => {

  const colorMode = useContext(ColorModeContext)

  return (
    <Switch defaultChecked onClick={colorMode} />
  )
}

export default ToggleButton