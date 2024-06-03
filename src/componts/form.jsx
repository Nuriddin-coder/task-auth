//// Import Icon
import { EyeIcon } from "@/assets/icons/eye-icon";
import { LockIcon } from "@/assets/icons/lock-icon";
import { CheckboxDemo } from "./checkbox";
import React from "react";
import { HideEyeIcon } from "@/assets/icons/hide-eye-icon";

export const Form = () => {
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  return (
    <form>
      <div>
        <label className="block font-semibold text-Primary">Email</label>
        <input
          placeholder="Email"
          className="text-Primary outline-none w-[315px] mt-2 shadow-inputShadow pl-4 py-2 rounded-[128px]"
          type="email"
        />
      </div>
      <div className="py-4">
        <label className="block font-semibold text-Primary">Password</label>
        <div className="w-[315px] flex items-center mt-2 shadow-shadowBtn border border-borderClr pl-4  rounded-[128px]">
          <LockIcon />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="text-Primary outline-none py-2 pr-3 mr-3 ml-2"
            type={visible ? "text" : "password"}
          />
          <div className="cursor-pointer" onClick={() => setVisible(!visible)}>
            {visible ? <EyeIcon /> : <HideEyeIcon />}
          </div>
        </div>
      </div>
      <CheckboxDemo />
    </form>
  );
};
