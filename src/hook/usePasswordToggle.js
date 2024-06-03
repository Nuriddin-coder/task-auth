import React from "react";
import { EyeIcon } from "@/assets/icons/eye-icon";
import { HideEyeIcon } from "@/assets/icons/hide-eye-icon";

const usePasswordToggle = () => {
  const [visible, setVisible] = React.useState(false);

  const Icon = (
    <div onClick={() => setVisible(!visible)}>
      {visible ? <HideEyeIcon /> : <EyeIcon />}
    </div>
  );

  const InputType = visible ? "text" : "password";

  return [Icon, InputType];
};

export default usePasswordToggle;
