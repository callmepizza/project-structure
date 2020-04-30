import * as React from "react";
import { CustomIcon } from "common/components/img";

export const CustomArrow = ({ className, icon, onClick }) => {
  return (
    <div className={className}>
      <CustomIcon name={icon} onClick={onClick} size="30px" />
    </div>
  );
};
