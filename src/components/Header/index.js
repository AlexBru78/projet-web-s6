import logo from "../../assets/logo.jpeg";
import {Button as MuiButton, Box} from "@mui/material";
import "./index.css"

const Header = () => {
    return (
        <Box className="Header" >
            <img src={logo} className="header-logo" alt="logo"/>
            <p>
            </p>
            <MuiButton className="button-name" color={"primary"} variant={"contained"}>Se connecter</MuiButton>
        </Box>
    )

}
export default Header