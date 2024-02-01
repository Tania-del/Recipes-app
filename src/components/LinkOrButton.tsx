import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  type?: "link";
  to: string;
}

interface ButtonProps {
  type?: "button";
  onClick?: () => void;
}

interface SharibleProps {
  className?: string;
  children?: ReactNode;
}

type LinkButton = SharibleProps & (LinkProps | ButtonProps);

const LinkOrButton = ({ type, children, ...props }: LinkButton) => {
  if (type === "link") {
    return <Link {...(props as LinkProps)}>{children}</Link>;
  }

  return <button {...(props as ButtonProps)}>{children}</button>;
};

export default LinkOrButton;
