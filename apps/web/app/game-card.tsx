"use client";
import { Card, Typography } from "@mui/joy";

interface GameCardProps {
  name: string;
  value: string;
}

export function GameCard({ name, value }: GameCardProps) {
  return (
    <Card>
      <Typography>{name}</Typography>
      <Typography fontWeight={700} fontSize={32}>
        {value}
      </Typography>
    </Card>
  );
}
