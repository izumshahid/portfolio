"use client";

import React from "react";

const InputField = ({ label, value, type = "text", requred = false }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-2">
      <label
        className="block text-gray-700 text-base md:text-xl font-semibold mb-2"
        for="username"
      >
        🔹
        {type === "password" ? (
          showPassword ? (
            <span>🔓 </span>
          ) : (
            <span>🔒 </span>
          )
        ) : null}
        {label} {requred ? <span className="text-red-400">*</span> : null}
      </label>

      <div className="relative">
        <input
          disabled
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-not-allowed text-lg md:text-xl"
          value={value}
        />
        {type === "password" ? (
          <div
            className="absolute right-3 top-3 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <span className="text-main_purple_color">👀</span>
            ) : (
              <span className="text-main_purple_color">👁️‍🗨️</span>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
