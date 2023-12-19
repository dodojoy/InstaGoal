"use client";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { AppBar } from '@mui/material';


export default function TabsComponent() {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

    const texts = ["Acontecendo agora", "Próximos jogos"];

    return(
            <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
                {texts.map((item) => (
                    <Tab label={item} key={item} sx={{minWidth: "50%", bgcolor: "primary.dark", fontWeight: 500, '&.Mui-selected': {color: 'white'}, color: "white"}} />
                ))}
            </Tabs>
    )
}