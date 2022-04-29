import React from "react";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";

interface ComingSoonProps {}

const ComingSoon: React.ComponentType<ComingSoonProps> = (
  props: ComingSoonProps
) => {
  return (
    <StyleComp>
      <div className={"min-h-[100vh_-_50px] flex  items-center justify-center"}>
        <TitleWithOrnament>COMING SOON</TitleWithOrnament>
      </div>
    </StyleComp>
  );
};

export default ComingSoon;
