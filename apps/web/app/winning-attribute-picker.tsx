import { Box, Select, Typography, Option } from "@mui/joy";
import React from "react";
import { camelToTitle } from "../shared/utils";

interface WinningAttributePickerProps<T> {
  attributeName: string;
  defaultValue: keyof T;
  options: (keyof T)[];
  handleChange: (v: keyof T) => void;
}

export function WinningAttributePicker<T>({
  attributeName,
  defaultValue,
  options,
  handleChange,
}: WinningAttributePickerProps<T>) {
  const onSelectOptionClick = (
    _: React.SyntheticEvent | null,
    newValue: keyof T | null
  ) => {
    if (newValue) {
      handleChange(newValue);
    }
  };

  return (
    <Box my={2}>
      <Typography>Pick a winning attribute for {attributeName}</Typography>
      <Select defaultValue={defaultValue} onChange={onSelectOptionClick}>
        {options.map((o) => (
          <Option key={o.toString()} value={o}>
            {camelToTitle(o.toString())}
          </Option>
        ))}
      </Select>
    </Box>
  );
}
