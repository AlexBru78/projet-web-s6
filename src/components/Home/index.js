import Header from "../Header";
import {Box, Stack, TextField, Typography} from "@mui/material";
import Restaurant from "../Restaurant";
import {getValue} from "@testing-library/user-event/dist/utils";

const Home = () => {
    const items = [
        {
            name: "macdo",
            description: "j'ai des hémoroïdes",
            type: "fast food"
        },
        {
            name: "subway",
            description: "hello julien",
            type: "burger"
        }
    ]
    return (
        <Stack
            flexDirection={"column"}
            sx={{
                backgroundColor: "secondary.main",
                width: "100vw",
                minHeight: "100vh"
            }}>
            <Header/>
            <Box sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <TextField onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        window.location.pathname = '/search'
                    }
                }} sx={{
                    backgroundColor: "#919191",
                    width: "50%"
                }}
                           id="outlined-basic"
                           label="Rechercher un restaurant"
                           variant="filled"
                           InputProps={{
                               disableUnderline: true,
                           }}/>
                <Stack flexDirection={"row"} alignItems={"stretch"} >
                    {items.map(item => {
                        return (
                            <Restaurant data={item}/>
                        )
                    })}
                </Stack>
            </Box>
        </Stack>
    )
}
export default Home