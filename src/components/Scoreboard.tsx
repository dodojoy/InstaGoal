"use client";
import { Stack, Typography } from "@mui/material";
import TeamLogo from "./TeamLogo";

interface ScoreboardProps{
    firstSrc: string;
    secondSrc: string;
    firstTeamGoal: number;
    secondTeamGoal: number;
}

export default function Scoreboard({firstSrc, secondSrc, firstTeamGoal, secondTeamGoal}: ScoreboardProps){
    return(
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <TeamLogo src={firstSrc}/>
            <Stack direction="row" gap={2}>
                <Typography color="secondary.main">{firstTeamGoal}</Typography>
                <Typography color="secondary.main" fontWeight={600}>X</Typography>
                <Typography color="secondary.main">{secondTeamGoal}</Typography>
            </Stack>
            <TeamLogo src={secondSrc}/>
        </Stack>
    )
}