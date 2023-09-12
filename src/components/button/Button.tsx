import React from "react";
import "./Button.scss";

type Props = {
  label: string;
};

const Button = ({ label }: Props): JSX.Element => {
  return (
    <div className='button'>
      <div className='label'>{label}</div>
    </div>
  );
};

export default Button;
