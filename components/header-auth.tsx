import type { NextPage } from "next";
import { Button, Box } from "@mui/material";
import Button1 from "./button1";
import styles from "./header-auth.module.css";

export type HeaderAuthType = {
  className?: string;

  /** Variant props */
  state?: string;
};

const HeaderAuth: NextPage<HeaderAuthType> = ({
  className = "",
  state = "Logged Out",
}) => {
  return (
    <Box
      className={[styles.headerAuth, className].join(" ")}
      data-state={state}
    >
      <Button
        className={styles.button}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#1e1e1e",
          fontSize: "16",
          background: "#e3e3e3",
          border: "#767676 solid 1px",
          borderRadius: "8px",
          "&:hover": { background: "#e3e3e3" },
        }}
      >
        Sign in
      </Button>
      <Button1
        size="Small"
        state="Default"
        variant="Primary"
        hasIconEnd={false}
        hasIconStart={false}
        label="Register"
      />
    </Box>
  );
};

export default HeaderAuth;
