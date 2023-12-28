"use client";

import CreateBtn from "@/components/CreateBtn";
import GlobalSelect from "@/components/GlobalSelect";
import GrayBtn from "@/components/GrayBtn";
import GreenBtn from "@/components/GreenBtn";
import GridContainer from "@/components/Grid";
import Modal from "@/components/Modal";
import Scoreboard from "@/components/Scoreboard";
import TimeSelect from "@/components/TimeSelect";
import Title from "@/components/Title";
import { FormControl } from "@mui/base";
import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { useState } from "react";

export default function ResultadoPage() {
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsCreateClicked(true);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 0px",
      }}
    >
      <Title title="Resultado" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          maxWidth: "700px",
          gap: 35,
        }}
      >
        <Scoreboard
          firstSrc="/palmas-logo.svg"
          secondSrc="/spfc-logo.svg"
          firstTeamGoal={0}
          secondTeamGoal={0}
        />
        <Stack direction="row" width="100%">
          <RadioGroup row sx={{ width: "100%", justifyContent: "space-between"}}>
            <FormControlLabel
              label="1º tempo"
              value="1º tempo"
              sx={{ ".MuiFormControlLabel-label": {color: "secondary.main"}}}
              control={
                <Radio
                  sx={{
                    color: "secondary.main",
                    "&.Mui-checked": {
                      color: "primary.dark",
                    }, 
                  }}
                />
              }
            />
            <FormControlLabel
              label="Resultado"
              value="Resultado"
              sx={{ ".MuiFormControlLabel-label": {color: "secondary.main"}}}
              control={
                <Radio
                  sx={{
                    color: "secondary.main",
                    "&.Mui-checked": {
                      color: "primary.dark",
                    },
                  }}
                />
              }
            />
          </RadioGroup>
        </Stack>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
          }}
        >
          <GridContainer container={true}>
            <GridContainer item={true} xs={12}>
              <CreateBtn onClick={handleCreateClick} />
            </GridContainer>
          </GridContainer>

          <GridContainer container={true} sx={{justifyContent: "space-between"}}>
            {!isCreateClicked && (
              <>
                <GridContainer item={true} xs={8.5}>
                  <GrayBtn onClick={handleModal} text="Visualizar" />
                </GridContainer>
                <GridContainer item={true} xs={3}>
                  <GrayBtn src="download-icon.svg" />
                </GridContainer>
              </>
            )}
            {isCreateClicked && (
              <>
                <GridContainer item={true} xs={8.5}>
                  <GreenBtn onClick={handleModal} text="Visualizar" />
                </GridContainer>
                <GridContainer item={true} xs={3}>
                  <GreenBtn src="download-icon.svg" />
                </GridContainer>
              </>
            )}
          </GridContainer>

          <Modal open={isModalOpen} onClose={handleModal} />
        </div>
      </div>
    </div>
  );
}
