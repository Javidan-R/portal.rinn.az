import React, { FC } from "react";

interface BredCrumbProps {
  link: string;
  name: string;
  text: string;
}

const BredCrumb: FC<BredCrumbProps> = ({ link, name, text, ...props }) => {
  return (
    <div {...props} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href={link}>{name}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {text}
        </li>
      </ol>
    </div>
  );
};

export default BredCrumb;
