import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import HeaderAuth from "./header-auth";
import IconButton from "./icon-button";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <Image
        className={styles.image2Icon}
        loading="lazy"
        width={65}
        height={47}
        alt=""
        src="/image-2@2x.png"
      />
      <Box className={styles.leftPaneWrapper}>
        <Box className={styles.leftPane}>
          <Box className={styles.authPane}>
            <HeaderAuth state="Logged Out" />
          </Box>
          <IconButton
            size="Medium"
            state="Default"
            variant="Neutral"
            showIconButton
            menu16="/menu16.svg"
          />
        </Box>
      </Box>
    </header>
  );
};

export default Header;
