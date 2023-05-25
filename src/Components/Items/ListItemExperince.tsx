import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Theme, Typography, Card, CardContent, CardMedia, CardActionArea, Button, CardActions, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import SvgHelper from '../../Helpers/SvgHelper';
import { OurIcons } from '../../Others/OurIcons';

interface Props {
    fontStyle?: any,
    item?: any
}

const getThemeObj = (theme: Theme) => {
    return {
        root: {
            marginLeft: 8,
            paddingTop: 5,
            marginBottom: 5
        },
        text: {
            marginLeft: 8,
            marginRight: 8,
            fontSize: 12,
            fontWeight: 600,
            color: "#757575",
            marginTop: 8
        },
        desc: {
            marginTop: 8
        }

    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const ListItemExperince: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()
    const { fontStyle, item } = props
    const classes = useStyles();


    return <Grid container direction='row' alignItems='center' alignContent='center' className={classes.root}>


        <Card className={classes.root}>
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>

                    <Typography variant='body2' style={fontStyle} className={classes.text}>
                        {item.link}
                    </Typography>

                    <Typography variant='body2' style={fontStyle} className={classes.text}>
                        {item.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.desc} component="p">
                        {item.desc}
                    </Typography>

                    <List className={classes.root} subheader={<li />}>
                        {item.techStuffs.map((val: any) => (
                            <li key={`section-${val}`} >
                                 <ListItemText className={classes.text} >{`- ${val}`}</ListItemText>
                             
                            </li>
                        ))}
                    </List>
                </CardContent>
            </CardActionArea>
        </Card>

    </Grid>

}

export default ListItemExperince;