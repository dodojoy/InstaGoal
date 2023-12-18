import { Avatar } from "@mui/material";

export default function Logo() {
  return (
    <Avatar
      src="/logo-branca.svg"
      variant="square"
      sx={{
        width: 30,
        height: "auto",
        mr: 1,
        cursor: "pointer",
      }}
    />
  );
}