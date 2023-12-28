import { TextField } from "@mui/material";

export default function TeamScoreInput(){
    return(
        <TextField sx={{ width: 15, color: "secondary.main", 'input': { color: "secondary.main", fontWeight: 600, textAlign: "center"}}} placeholder="0" type="number" variant="standard" InputProps={{
            disableUnderline: true,
          }}/>
    )
}