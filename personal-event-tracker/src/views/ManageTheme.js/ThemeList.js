import React from 'react';
import { useForm } from 'react-hook-form';

// import styles from MUI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import styles from '../../assets/jss/components/theme/themelistStyle.js';
import themes from '../../assets/data/themes.json';

const useStyles = makeStyles(styles);


export default function ThemeList(props) {
    const classes = useStyles();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    // set default theme 
    let defaultTheme;
    themes.forEach(theme => {
        if (theme.themeName === "default") {
            defaultTheme = theme;
        }
    })

    return (
        <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
            <select className={classes.select} name="selector" ref={register}>
                {themes.map(theme => {
                    return (
                        <option value={theme}>{theme.themeName}</option>
                    );
                })}
            </select>
            <Typography className={classes.text}>Primary Color</Typography>
            <Typography className={classes.text}>Secondary Color</Typography>
            <Typography className={classes.text}>Tertiary Color</Typography>
            <Button style={{ backgroundColor: defaultTheme.colors.primary }} variant="contained" className={classes.button} />
            <Button style={{ backgroundColor: defaultTheme.colors.secondary }} variant="contained" className={classes.button} />
            <Button style={{ backgroundColor: defaultTheme.colors.tertiary }} variant="contained" className={classes.button} />
            <Typography className={classes.colortext}>Primary Text Color</Typography>
            <Typography className={classes.colortext}>Secondary Text Color</Typography>
            <Button style={{ backgroundColor: defaultTheme.colors.primarytext }} variant="contained" className={classes.colorbutton} />
            <Button style={{ backgroundColor: defaultTheme.colors.secondarytext }} variant="contained" className={classes.colorbutton} />
            <Button className={classes.inputButton} variant="outlined">Save</Button>
            <Button className={classes.inputButton} variant="outlined">Reset</Button>
        </form>
    );
}