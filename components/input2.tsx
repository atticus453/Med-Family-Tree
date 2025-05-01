import type { NextPage } from "next";
import { Box } from "@mui/material";
import Input1 from "./input1";
import Button2 from "./button2";
import styles from "./input2.module.css";

export type Input2Type = {
  className?: string;
};

const Input2: NextPage<Input2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.input, className].join(" ")}>
      <Box className={styles.starInput}>
        <Input1 />
        <Button2
          size="Medium"
          state="Default"
          variant="Neutral"
          hasIconEnd={false}
          hasIconStart
          label="mpijknkn"
        />
        <Button2
          size="Medium"
          state="Default"
          variant="Neutral"
          hasIconEnd={false}
          hasIconStart
          label="mpijknkn"
          buttonLeft="0px"
          buttonBackgroundImage="url('/button1@3x.png')"
        />
      </Box>
    </section>
  );
};

export default Input2;
