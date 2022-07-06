import {Button as MuiButton, Box, TextField} from "@mui/material";
import Restaurant from "../Restaurant";
import Header from "../Header";
import Home from "../Home";
import "./index.css"

const Connexion = () => {
    return (
        <div className="connexion">
            <Header/>
            <p className="title">Connexion</p>
            <Box sx={{
                display : 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'}} >
                <TextField className="login" sx={{
                    backgroundColor: "#919191",
                    width: "30%",
                    marginBottom: 2
                }}
                           id="outlined-basic"
                           label="Identifiant"
                           variant="filled"
                           InputProps={{
                               disableUnderline: true,
                           }}/>
                <TextField className="login" sx={{
                    backgroundColor: "#919191",
                    width: "30%"
                }}
                           id="outlined-basic"
                           label="mot de passe"
                           variant="filled"
                           InputProps={{
                               disableUnderline: true,
                           }}/>
            </Box>
        </div>
    )

}
export default Connexion