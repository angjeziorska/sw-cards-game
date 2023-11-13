"use client";
import { Card, Typography } from "@mui/joy";

interface GameCardProps {
  name: string;
  value: string;
  attribute: string;
}

export function GameCard({ name, value, attribute }: GameCardProps) {
  return (
    <Card>
      <Typography mb={2}>{name}</Typography>
      <Typography fontWeight={700} fontSize={32}>
        {attribute}: {value}
      </Typography>
    </Card>
  );
}
