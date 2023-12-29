"use client";
import React from "react";
import Select from "react-select";

interface GlobalSelectProps{
  options: Array<object>
}
  
export default function GlobalSelect({options}: GlobalSelectProps) {

  const selectStyle = {
    control: () => ({
      backgroundColor: "transparent",
      border: "1px solid rgba(180, 180, 180, 1)",
      borderRadius: "4px",
      width: "100%",
      display: "flex",
      height: "56px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "rgba(180, 180, 180, 1)",
    }),
    indicatorSeparator: () => ({ display: "none" })

  };

  return (
    <Select
      defaultValue={options[0]}
      styles={selectStyle}
      options={options}
    ></Select>
  );
}
