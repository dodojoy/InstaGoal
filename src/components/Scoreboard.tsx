"use client";
import { Stack, TextField, Typography } from "@mui/material";
import TeamLogo from "./TeamLogo";
import TeamScoreInput from "./TeamScoreInput";

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
            <Stack direction="row" gap={2} alignItems="center">
                <TeamScoreInput />
                <Typography color="secondary.main" fontWeight={600}>X</Typography>
                <TeamScoreInput />
            </Stack>
            <TeamLogo src={secondSrc}/>
        </Stack>
    )
}