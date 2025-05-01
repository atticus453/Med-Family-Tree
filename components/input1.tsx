import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import styles from "./input1.module.css";

export type Input1Type = {
  className?: string;
};

const Input1: NextPage<Input1Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.input, className].join(" ")}>
      <Box className={styles.input1} />
      <Box className={styles.inputChild} />
      <Typography
        className={styles.h3}
        variant="inherit"
        component="h3"
        sx={{ fontWeight: "600", lineHeight: "120%", letterSpacing: "-0.02em" }}
      >
        . . . . . . 輸入文字
      </Typography>
    </Box>
  );
};

export default Input1;
