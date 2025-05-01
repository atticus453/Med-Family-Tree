import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Header from "../components/header";
import Input2 from "../components/input2";
import Button1 from "../components/button1";
import IconButton from "../components/icon-button";
import HeaderAuth from "../components/header-auth";
import styles from "./main-frame.module.css";

const MainFrame: NextPage = () => {
  return (
    <Box className={styles.mainFrame}>
      <Header />
      <Input2 />
      <section className={styles.logo}>
        <Box className={styles.title}>
          <Typography
            className={styles.familyTreeGeneratorContainer}
            variant="inherit"
            component="h3"
            sx={{
              fontWeight: "600",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
            }}
          >
            <Typography className={styles.p} variant="inherit">
              家系圖生成系統
            </Typography>
            <Typography
              className={styles.p}
              variant="inherit"
            >{`FAMILY TREE `}</Typography>
            <Typography className={styles.p} variant="inherit">
              GENERATOR SYSTEM
            </Typography>
          </Typography>
        </Box>
        <Box className={styles.image}>
          <Image
            className={styles.image2Icon}
            width={399}
            height={361}
            alt=""
            src="/image-21@2x.png"
          />
        </Box>
      </section>
      <Box className={styles.downloadTxtParent}>
        <Box className={styles.downloadTxt}>Download TXT</Box>
        <Button1
          size="Medium"
          state="Default"
          variant="Neutral"
          hasIconEnd={false}
          hasIconStart={false}
          label="Download TXT "
          buttonFlex="unset"
          buttonPosition="absolute"
          buttonTop="calc(50% - 81.5px)"
          buttonLeft="calc(50% + 234px)"
          buttonWidth="250px"
          buttonHeight="145px"
        />
        <Box className={styles.downloadJpg}>Download JPG</Box>
        <Button1
          size="Medium"
          state="Default"
          variant="Neutral"
          hasIconEnd={false}
          hasIconStart={false}
          label="Download JSON"
          buttonFlex="unset"
          buttonPosition="absolute"
          buttonTop="calc(50% - 81.5px)"
          buttonLeft="116px"
          buttonWidth="250px"
          buttonHeight="145px"
        />
        <Box className={styles.downloadJson}>Download JSON</Box>
        <Button1
          size="Medium"
          state="Default"
          variant="Neutral"
          hasIconEnd={false}
          hasIconStart={false}
          label="Download JPG "
          buttonFlex="unset"
          buttonPosition="absolute"
          buttonTop="calc(50% - 81.5px)"
          buttonLeft="calc(50% - 125px)"
          buttonWidth="250px"
          buttonHeight="145px"
        />
      </Box>
      <Box className={styles.header}>
        <Box className={styles.block}>
          <IconButton
            size="Medium"
            state="Default"
            variant="Neutral"
            showIconButton
            menu16="/menu16.svg"
          />
          <IconButton
            size="Medium"
            state="Default"
            variant="Neutral"
            showIconButton={false}
            menu16="/x16.svg"
          />
          <Image
            className={styles.figmaIcon}
            width={40}
            height={35}
            alt=""
            src="/figma.svg"
          />
        </Box>
        <Box className={styles.navigationPillList}>
          <Box className={styles.navigationPill}>
            <Box className={styles.title1}>Products</Box>
          </Box>
          <Box className={styles.navigationPill1}>
            <Box className={styles.title1}>Solutions</Box>
          </Box>
          <Box className={styles.navigationPill1}>
            <Box className={styles.title1}>Community</Box>
          </Box>
          <Box className={styles.navigationPill1}>
            <Box className={styles.title1}>Resources</Box>
          </Box>
          <Box className={styles.navigationPill1}>
            <Box className={styles.title1}>Pricing</Box>
          </Box>
          <Box className={styles.navigationPill1}>
            <Box className={styles.title1}>Contact</Box>
          </Box>
          <Box className={styles.navigationPill1}>
            <Box className={styles.title1}>Link</Box>
          </Box>
        </Box>
        <HeaderAuth state="Logged Out" />
      </Box>
      <Box className={styles.cardGridContentList}>
        <Box className={styles.textContentHeading}>
          <Box className={styles.heading}>輸入方式:</Box>
          <Box className={styles.subheading}>
            語音輸入按按鈕並錄音，文字輸入上傳txt檔
          </Box>
        </Box>
        <Box className={styles.cards}>
          <Box className={styles.card}>
            <Image
              className={styles.imageIcon}
              width={160}
              height={160}
              alt=""
              src="/image2@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>語音輸入</Box>
                <Box
                  className={styles.bodyTextFor}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</Box>
              </Box>
              <Box className={styles.buttonGroup}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="75px"
                  buttonHeight="40px"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.card}>
            <Image
              className={styles.imageIcon}
              width={160}
              height={160}
              alt=""
              src="/image11@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>文字輸入</Box>
                <Box className={styles.bodyTextFor}>nbjinn</Box>
              </Box>
              <Box className={styles.buttonGroup}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="txt"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.card2}>
            <Image
              className={styles.imageIcon}
              width={160}
              height={160}
              alt=""
              src="/image11@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>Title</Box>
                <Box
                  className={styles.bodyTextFor2}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</Box>
              </Box>
              <Box className={styles.buttonGroup}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.cardGridImage}>
        <Box className={styles.textContentHeading}>
          <Box className={styles.heading}>Heading</Box>
          <Box className={styles.subheading}>Subheading</Box>
        </Box>
        <Box className={styles.cards1}>
          <Box className={styles.card3}>
            <Image
              className={styles.imageIcon3}
              width={160}
              height={160}
              alt=""
              src="/image11@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>Title</Box>
                <Box
                  className={styles.bodyTextFor2}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</Box>
              </Box>
              <Box className={styles.buttonGroup3}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.card3}>
            <Image
              className={styles.imageIcon3}
              width={160}
              height={160}
              alt=""
              src="/image-1@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>Title</Box>
                <Box
                  className={styles.bodyTextFor2}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</Box>
              </Box>
              <Box className={styles.buttonGroup3}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.card3}>
            <Image
              className={styles.imageIcon3}
              width={160}
              height={160}
              alt=""
              src="/image-211@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>Title</Box>
                <Box
                  className={styles.bodyTextFor2}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</Box>
              </Box>
              <Box className={styles.buttonGroup3}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.cards1}>
          <Box className={styles.card3}>
            <Image
              className={styles.imageIcon3}
              width={160}
              height={160}
              alt=""
              src="/image11@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>Title</Box>
                <Box
                  className={styles.bodyTextFor2}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</Box>
              </Box>
              <Box className={styles.buttonGroup3}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.card3}>
            <Image
              className={styles.imageIcon3}
              width={160}
              height={160}
              alt=""
              src="/image-1@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>Title</Box>
                <Box
                  className={styles.bodyTextFor2}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</Box>
              </Box>
              <Box className={styles.buttonGroup3}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.card3}>
            <Image
              className={styles.imageIcon3}
              width={160}
              height={160}
              alt=""
              src="/image-211@2x.png"
            />
            <Box className={styles.body}>
              <Box className={styles.text}>
                <Box className={styles.heading}>Title</Box>
                <Box
                  className={styles.bodyTextFor2}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</Box>
              </Box>
              <Box className={styles.buttonGroup3}>
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Subtle"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
                <Button1
                  size="Medium"
                  state="Default"
                  variant="Neutral"
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Button"
                  buttonFlex="unset"
                  buttonPosition="unset"
                  buttonTop="unset"
                  buttonLeft="unset"
                  buttonWidth="unset"
                  buttonHeight="unset"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.footer}>
        <Box className={styles.title17}>
          <Image
            className={styles.figmaIcon1}
            width={23}
            height={35}
            alt=""
            src="/figma-1.svg"
          />
          <Box className={styles.buttonList}>
            <Image
              className={styles.xLogoIcon}
              width={24}
              height={24}
              alt=""
              src="/x-logo.svg"
            />
            <Image
              className={styles.logoInstagramIcon}
              width={24}
              height={24}
              alt=""
              src="/logo-instagram.svg"
            />
            <Image
              className={styles.logoInstagramIcon}
              width={24}
              height={24}
              alt=""
              src="/logo-youtube.svg"
            />
            <Image
              className={styles.logoInstagramIcon}
              width={24}
              height={24}
              alt=""
              src="/linkedin.svg"
            />
          </Box>
        </Box>
        <Box className={styles.textLinkList}>
          <Box className={styles.title18}>
            <Box className={styles.textStrong}>
              <Box className={styles.textStrong1}>Use cases</Box>
            </Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>UI design</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>UX design</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Wireframing</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Diagramming</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Brainstorming</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Online whiteboard</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Team collaboration</Box>
          </Box>
        </Box>
        <Box className={styles.textLinkList}>
          <Box className={styles.title18}>
            <Box className={styles.textStrong}>
              <Box className={styles.textStrong1}>Explore</Box>
            </Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Design</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Prototyping</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Development features</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Design systems</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Collaboration features</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Design process</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>FigJam</Box>
          </Box>
        </Box>
        <Box className={styles.textLinkList}>
          <Box className={styles.title18}>
            <Box className={styles.textStrong}>
              <Box className={styles.textStrong1}>Resources</Box>
            </Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Blog</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Best practices</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Colors</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Color wheel</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Support</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Developers</Box>
          </Box>
          <Box className={styles.textLinkListItem}>
            <Box className={styles.listItem}>Resource library</Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.panelImageDouble}>
        <Image
          className={styles.imageIcon9}
          width={512}
          height={350}
          alt=""
          src="/image-6@2x.png"
        />
        <Image
          className={styles.imageIcon9}
          width={512}
          height={350}
          alt=""
          src="/image-6@2x.png"
        />
      </Box>
      <Box className={styles.mainFrameChild} />
    </Box>
  );
};

export default MainFrame;
