import logo from './assets/logo.jpeg';
import './App.css';
import {Button as MuiButton} from "@mui/material"
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme.js"
import Home from "./components/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path={"/search"} element={<Search/>}/>
                        <Route path={"/"} element={<Home/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </CssBaseline>
    );
}

export default App;
