import React from "react";
import { Avatar, Card, CardContent, Typography, Grid } from "@mui/material";

function ClubesEscudo(props) {
    function GridItem(props) {
        return <Grid item sm={3} md={2} xs={4} x1={2}>
            {props.children}
        </Grid>
    }
    function CardTime(props) {
        return <Card sx={{ minWidth: 80, maxWidth: 140, mt: 2, alignItems: "center", padding: 1 }}>
            {props.children}
        </Card>
    }
    function TypographyItem(props) {
        return <Typography sx={{ textAlign: "center" }} component="div"{...props}>

            {props.children}
        </Typography>
    }
    function AvatarTime(props) {
        return <Avatar
            alt={props.nome}
            sx={{ width: 64, height: 64, margin: "0 auto", mt: 1 }}
            {...props}
        />
    }
    return <GridItem>
        <CardTime>
            <AvatarTime src={props.urlEscudo} />
            <CardContent>
                <TypographyItem fontWeight="bold">
                    {props.nome}
                </TypographyItem>
                <TypographyItem>
                    {props.paisAbreviacao}
                </TypographyItem>
            </CardContent>
        </CardTime>
    </GridItem>
}
export default ClubesEscudo