"use client";

import { Dialog, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export interface ModalProps {
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
}

export default function Modal({ onClose, open }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose}  PaperProps={{
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    }}>
      <Stack direction="column">
        <IconButton onClick={onClose} sx={{ alignSelf: "flex-end" }}>
          <CloseIcon />
        </IconButton>
        <Image
          width={350}
          height={600}
          alt="template image"
          src="/template.svg"
          style={{ alignSelf: "center" }}
        />
      </Stack>
    </Dialog>
  );
}
