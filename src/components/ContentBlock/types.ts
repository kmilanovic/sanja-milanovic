import { ReactNode } from "react";
import { TFunction } from "react-i18next";

export interface ContentBlockProps {
  icon?: string;
  iconSize?: { width: string; height: string };
  title: ReactNode;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: {
    title: string;
    color?: string;
    scrollTo?: string; 
  }[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  children?: ReactNode;
}
