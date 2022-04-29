import { Theme, Typography } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import React from "react";
// import Modal from "react-modal";
import CommonLayout from "../../components/CommonLayout";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";

interface ContactProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    contact: {
      display: "flex",
      "&>div:first-child": {
        marginRight: theme.spacing(5),
      },
    },
  })
);

const Contact: React.ComponentType<ContactProps> = (props: ContactProps) => {
  const classes = useStyle();

  return (
    <>
      <StyleComp
        header={{
          title: "CONTACT",
        }}
      >
        <CommonLayout
          assetSrc={"/icons/dry_logo_resized.svg"}
          menuSection={<TitleWithOrnament>CONTACT</TitleWithOrnament>}
          contentSection={
            <div className={classes.contact}>
              <div>
                <Typography>FOUNDERS</Typography>
                <Typography>MASHA SILLEM /</Typography>
                <Typography>FRANK PERONI</Typography>
                <Typography>
                  <a
                    target="_blank"
                    href="https://us5.list-manage.com/contact-form?u=00f3c7e3cc31c2ad4ca29f331&form_id=4c28bcf96e13654eb23c7db6f4af7a63"
                    rel="noreferrer"
                  >
                    {" "}
                    send email
                  </a>
                </Typography>
              </div>
              <div>
                <Typography>CONTACT</Typography>
                <Typography>
                  <a href="mailto: info@dryagency.com">INFO@DRY-AGENCY.COM</a>
                </Typography>
              </div>
            </div>
          }
        />
      </StyleComp>
    </>
  );
};
export default Contact;
