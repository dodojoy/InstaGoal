import { Box, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

export default function TemplateList() {
  const templates = [
    { name: "gol", href: "/gol" },
    { name: "resultados", href: "/resultados" },
    { name: "cartão", href: "/cartao" },
    { name: "substituição", href: "/substituicao" },
    { name: "escalação", href: "escalacao" },
  ];

  return (
    <>
      {templates.map((item) => (
        <Link key={item.name} href={item.href} style={{ textDecoration: "none", color: "#6D6D6D" }}>
          <ListItemButton >
            <ListItemText
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                fontWeight: 600,
              }}
              primary={item.name}
            />
          </ListItemButton>
        </Link>
      ))}
    </>
  );
}
