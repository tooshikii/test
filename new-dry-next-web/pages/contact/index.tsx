import React from "react";
import CommonLayout from "../../components/CommonLayout";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";

interface ContactProps {}

const Contact: React.ComponentType<ContactProps> = (props: ContactProps) => {
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
            <div className={"flex"}>
              <div className="mr-5">
                <p>FOUNDERS</p>
                <p>MASHA SILLEM /</p>
                <p>FRANK PERONI</p>
                <p>
                  <a
                    target="_blank"
                    href="https://us5.list-manage.com/contact-form?u=00f3c7e3cc31c2ad4ca29f331&form_id=4c28bcf96e13654eb23c7db6f4af7a63"
                    rel="noreferrer"
                  >
                    {" "}
                    send email
                  </a>
                </p>
              </div>
              <div>
                <p>CONTACT</p>
                <p>
                  <a href="mailto: info@dryagency.com">INFO@DRY-AGENCY.COM</a>
                </p>
              </div>
            </div>
          }
        />
      </StyleComp>
    </>
  );
};
export default Contact;
