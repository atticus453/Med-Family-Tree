import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./star.module.css";

export type StarType = {
  className?: string;
  icon: string;
  hasIconStart?: boolean;
  showIcon?: boolean;

  /** Variant props */
  size?: 16;
};

const Star: NextPage<StarType> = ({
  className = "",
  size = 48,
  icon,
  hasIconStart,
  showIcon,
}) => {
  return (
    <Box className={[styles.star, className].join(" ")} data-size={size}>
      {!!showIcon && (
        <Image
          className={styles.icon}
          width={13}
          height={13}
          alt=""
          src={icon}
        />
      )}
    </Box>
  );
};

export default Star;
