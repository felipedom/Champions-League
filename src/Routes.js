import { Box } from "@mui/material";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Clubes from "./Pages/Clubes";
import Home from "./Pages/Home";

function Routes() {
    return <BrowserRouter>
        <NavBar />
        <Box mt={10} p={3}>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route path="/clubes" element={<Clubes />} />
            </Switch>
        </Box>
    </BrowserRouter >
}

export default Routes;
