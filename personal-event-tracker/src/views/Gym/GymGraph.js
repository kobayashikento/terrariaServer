import React from 'react';
import { Link } from 'react-router-dom';

// import recharts
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// import material ui core 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import styles from '../../assets/styles/views/dashboard/dashgraphStyle.js';

const useStyles = makeStyles(styles);

export default function DashGraph(props) {

    const classes = useStyles();

    const titleCase = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    return (
        <Paper className={classes.paper}>
            <LineChart width={500} height={400} data={props.gymData.data}
                margin={{ top: 30, right: 50, left: 20, bottom: 5 }}>
                <XAxis dataKey="date" />
                <YAxis dataKey="weight" domain={['auto', 'auto']} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend height={36} wrapperStyle={{ top: 0, left: 25 }} />
                <Line name={titleCase(props.gymData.workout.name)} type="monotone" dataKey="weight" stroke={props.theme.colors.primary} />
            </LineChart>
            <Link
                to={"/main-menu/gym"}
                style={{ textDecoration: 'none' }} 
            >
                <Button onClick={() => {props.handleListItemClick(1)}} color="secondary" variant="outlined" className={classes.button}>More Details</Button>
            </Link>
        </Paper>
    );
}