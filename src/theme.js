import {createTheme} from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "100px"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    ['& fieldset']: {
                        borderRadius: "100px"
                    },
                    borderRadius: "100px"
                }
            }
        },
        MuiCardMedia : {
            styleOverrides : {
                root : {
                    borderRadius: "30px"
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#E9BE76',
        },
        secondary: {
            main: "#05192d",
            contrastText: "#ffffff"
        }
    }
});

export default theme