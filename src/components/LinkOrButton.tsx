import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  type?: "link";
  to: string;
}

interface ButtonProps {
  type?: "button";
  onClick?: () => void;
  children?: string;
}

type LinkButton = ({ children: ReactNode } & LinkProps) | ButtonProps;

const LinkOrButton = ({ type, children, ...props }: LinkButton) => {
  if (type === "link") {
    return <Link {...(props as LinkProps)}>{children}</Link>;
  }

  return <button {...(props as ButtonProps)}>{children}</button>

};

export default LinkOrButton;
