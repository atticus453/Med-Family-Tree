"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import Star from "./star";
import X from "./x";
import styles from "./button1.module.css";

export type Button1Type = {
  className?: string;
  hasIconEnd?: boolean;
  hasIconStart?: boolean;
  label?: string;

  /** Variant props */
  size?: "Small" | "Medium";
  state?: string;
  variant?: "Primary" | "Neutral" | "Subtle";

  /** Style props */
  buttonFlex?: CSSProperties["flex"];
  buttonPosition?: CSSProperties["position"];
  buttonTop?: CSSProperties["top"];
  buttonLeft?: CSSProperties["left"];
  buttonWidth?: CSSProperties["width"];
  buttonHeight?: CSSProperties["height"];
};

const Button1: NextPage<Button1Type> = ({
  className = "",
  size = "Medium",
  state = "Default",
  variant = "Primary",
  hasIconEnd = false,
  hasIconStart = false,
  label = "Register",
  buttonFlex,
  buttonPosition,
  buttonTop,
  buttonLeft,
  buttonWidth,
  buttonHeight,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      flex: buttonFlex,
      position: buttonPosition,
      top: buttonTop,
      left: buttonLeft,
      width: buttonWidth,
      height: buttonHeight,
    };
  }, [
    buttonFlex,
    buttonPosition,
    buttonTop,
    buttonLeft,
    buttonWidth,
    buttonHeight,
  ]);

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-size={size}
      data-state={state}
      data-variant={variant}
      style={buttonStyle}
    >
      {!!hasIconStart && (
        <Star
          size={16}
          icon="/icon-2.svg"
          hasIconStart={false}
          showIcon
          className={styles.star}
        />
      )}
      <Box className={styles.button}>{label}</Box>
      {!!hasIconEnd && <X size={16} icon1="/icon-3.svg" className={styles.x} />}
    </button>
  );
};

export default Button1;
