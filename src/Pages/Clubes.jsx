import React from "react";

import { Grid } from "@mui/material";
import ClubesEscudo from "../Components/ClubesEscudo";

function Clubes() {
    const listaClubes = [
        { nome: "Paris", paisAbreviacao: "FRA", urlEscudo: "https://img.uefa.com/imgml/TP/teams/logos/70x70/52747.png" },
        { nome: "Real Madrid", paisAbreviacao: "REA", urlEscudo:"https://img.uefa.com/imgml/TP/teams/logos/70x70/50051.png" },
    ];

    return <>
        <h1>Clubes</h1>
        <Grid container columnSpacing={2}>
            {listaClubes.map(clube => <ClubesEscudo
                nome={clube.nome}
                paisAbreviacao={clube.paisAbreviacao}
                urlEscudo={clube.urlEscudo}
            />)}
        </Grid>
    </>
}

export default Clubes;