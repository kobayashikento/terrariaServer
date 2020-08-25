import {
    appbarHeight
} from '../../masterStyle.js';

const goldenRatio = 1.61803398875;

const dashboardStyle = theme => ({
    container: {
        height: "100%",
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(5),
            marginLeft: theme.spacing(5),
            marginRight: theme.spacing(5),
            width: "inherit"
        }
    },
});

export default dashboardStyle;