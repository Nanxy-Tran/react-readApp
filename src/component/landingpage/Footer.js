import React from "react";
import { Typography, Hidden, Grid } from "@material-ui/core";

export default function Footer() {
    return (
        <React.Fragment>
            <Grid item lg={2} sm={12}>
                {" "}
                    Lo go copyright cac thu
            </Grid>
            <Hidden mdDown>
                <Grid item lg={10}>
                    info  page
                </Grid>
            </Hidden>
            <Hidden smUp>
                <Grid container>
                    <Typography>{/* icon links  */}</Typography>
                </Grid>
            </Hidden>
        </React.Fragment>
    );
}
