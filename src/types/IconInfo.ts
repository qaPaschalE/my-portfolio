// src/types/IconInfo.ts
import { FC } from "react";

export interface IconInfo {
  id: string;
  color?: string; // Optional prop to pass color dynamically
}

export type IconComponent = FC<{ color?: string }>;
