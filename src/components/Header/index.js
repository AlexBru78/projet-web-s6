import logo from "../../assets/logo.jpeg";
import {Button as MuiButton, Box, IconButton} from "@mui/material";
import "./index.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from 'styled-components';

const NavLogo = styled.div `
  color: white;
  font-weight : bold;
  text-decoration: none;
  cursor : pointer;
  height:110px;
  width: 130px;
  margin-top: 30px;
  min-width: 50px;
`

const Img = styled.img `
  height: 100%;
  width: 100%;
  color: white;
  transition: all 0.25s ease-in-out;
  &:hover{
    filter: brightness(1.5);
  }
  z-index: 100;
`



const Header = () => {
    return (
        <Box className="Header">

            <IconButton href={"/"} sx= {{ "&:hover": { backgroundColor: "transparent"}}}>
                <NavLogo sx= {{display : 'flex' , alignItems : 'center' , justifyContent: 'center'}}>
                    <Img src={logo} alt="Logo"/>
                </NavLogo>
            </IconButton>

            { /* <div className="header-logo">
                <IconButton  href={"/"}><img src={logo} alt="logo"/></IconButton>
            </div>
                */ }



            <div className="header-slogan">
                <p className="slogan">
                Réserver et manger sans perdre de temps
                </p>
                <AccessTimeIcon color={"primary"} sx={{fontSize: 50}}/>
            </div>

            <MuiButton className="button-name" color={"primary"} variant={"contained"} href="/connexion">Se connecter</MuiButton>
        </Box>
    )

}
export default Header