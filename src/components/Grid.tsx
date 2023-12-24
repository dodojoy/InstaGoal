"use client";
import { Grid } from "@mui/material";

interface GridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: number;
  sx?: object;
  spacing?: number;
}

export default function GridContainer({
  children,
  container,
  item,
  xs,
  sx,
  spacing,
}: GridProps) {
  return (
    <Grid container={container} item={item} xs={xs} sx={sx} spacing={spacing} maxWidth="sm">
      {children}
    </Grid>
  );
}
