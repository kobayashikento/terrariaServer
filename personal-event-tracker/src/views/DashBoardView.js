import React from 'react';

// import material ui cores 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import dashbaord componenets files 
import NormalCalendar from '../components/Calendar.js';
import ProgressCalendar from '../components/ProgressCalendar.js';

import styles from '../assets/jss/views/dashboardStyle.js';

const useStyles = makeStyles(styles);

export default function DashBoardView() {
    const classes = useStyles();

    return (
        // implement gird with breakpoints to adjust for chagne in window size 
        <Grid
            container
            justify="space-evenly"
            alignItems="center"
            className={classes.grid}
            spacing={5}
        >
            <Grid item xs={12} sm={8} >
                <Paper className={classes.paperProgressCalendar} elevation={3}>
                    <Typography className={classes.calTitle}variant="h6">Daily Activity</Typography>
                    <ProgressCalendar />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paperNormalCalendar} elevation={3}>
                    <NormalCalendar />
                </Paper>
            </Grid>            
        </Grid>
    );
}