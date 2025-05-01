"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import Star from "./star";
import X from "./x";
import styles from "./button2.module.css";

export type Button2Type = {
  className?: string;
  hasIconEnd?: boolean;
  hasIconStart?: boolean;
  label?: string;

  /** Variant props */
  size?: string;
  state?: string;
  variant?: string;

  /** Style props */
  buttonLeft?: CSSProperties["left"];
  buttonBackgroundImage?: CSSProperties["backgroundImage"];
};

const Button2: NextPage<Button2Type> = ({
  className = "",
  size = "Medium",
  state = "Default",
  variant = "Primary",
  hasIconEnd = false,
  hasIconStart = true,
  label = "mpijknkn",
  buttonLeft,
  buttonBackgroundImage,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      left: buttonLeft,
      backgroundImage: buttonBackgroundImage,
    };
  }, [buttonLeft, buttonBackgroundImage]);

  return (
    <Box
      className={[styles.button1, className].join(" ")}
      data-size={size}
      data-state={state}
      data-variant={variant}
      style={button1Style}
    >
      {!!hasIconStart && (
        <Star size={16} icon="/icon@2x.png" hasIconStart showIcon={false} />
      )}
      <Box className={styles.button}>{label}</Box>
      {!!hasIconEnd && <X size={16} icon1="/icon-4.svg" xDisplay="unset" />}
    </Box>
  );
};

export default Button2;
