import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../../Overmind/OvermindHelper';
import { GlobalVars, myGithubUsername } from '../../../Others/GlobalVars';
import ListItemWithIcon from '../../Items/ListItemWithIcon';
import { OurIcons } from "../../../Others/OurIcons";
import { WebImages } from "../../../Others/Images";
import { TitledListItemInterface } from "../../../Others/Interfaces";
import ListItemExperince from '../../Items/ListItemExperince';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

interface GithubResp {
    name: string;
    html_url: string;
    description: string;
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const WorksRoute: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()
    const [works, setWorks] = useState<Array<TitledListItemInterface>>([])
    const classes = useStyles();

    const getExperinces = () => {
        if (works.length > 0) {
            return works
        } else {
            return GlobalVars.experiences
        }
    }

    return <Grid container xs={12} item direction='column'>
        {
            getExperinces().map((item, index) => {
                return <ListItemExperince key={index} item={item} />
            })
        }
    </Grid>

}

export default WorksRoute;