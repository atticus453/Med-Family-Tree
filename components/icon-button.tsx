import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./icon-button.module.css";

export type IconButtonType = {
  className?: string;
  showIconButton?: boolean;
  menu16: string;

  /** Variant props */
  size?: string;
  state?: string;
  variant?: string;
};

const IconButton: NextPage<IconButtonType> = ({
  className = "",
  size = "Medium",
  state = "Default",
  variant = "Primary",
  showIconButton,
  menu16,
}) => {
  return (
    !!showIconButton && (
      <Box
        className={[styles.iconButton, className].join(" ")}
        data-size={size}
        data-state={state}
        data-variant={variant}
      >
        <Image
          className={styles.menu16Icon}
          loading="lazy"
          width={20}
          height={20}
          alt=""
          src={menu16}
        />
      </Box>
    )
  );
};

export default IconButton;
