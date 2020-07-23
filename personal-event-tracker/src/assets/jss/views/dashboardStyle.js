const appbarHeight="80px";

const dashboardStyle = theme => ({
    paperNormalCalendar: {
        padding: theme.spacing(3),
        textAlign: "center",
    },
    paperProgressCalendar: {
        padding: "0px",
        textAlign: "center",
        height: "350px",
    },
    paperLineGraph: {
        padding: "0px",
        textAlign: "center",
        height: "350px",
    },
    items: {
        height: "100%",
    },
    grid: {
        padding: "20px",
    },
    calTitle: {
        paddingTop: "30px",
    },
});

export default dashboardStyle;