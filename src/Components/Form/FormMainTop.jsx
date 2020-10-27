import React from "react";
import { FormLabel } from "@material-ui/core";
import SocialRegButton from "./SocialRegButton";

export default function RegRightTop(props) {
  return (
    <div className="reg-top">
      <h1 className="font-bold">{props.heading || "Create Account"}</h1>
      <SocialRegButton />
      {props.soialSection}
      <FormLabel className="top-label">
        {props.subHeading || "or use your email for registration:"}
      </FormLabel>
    </div>
  );
}
