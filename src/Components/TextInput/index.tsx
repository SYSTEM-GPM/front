import React from "react";
import { Field } from "react-final-form";
import { ContainerTextInput, TextWarning } from "./style";
import { useTextInput } from "./useTextInput";
import type { TextInputProps } from "@/_types/TextInput";
import { ButtonChangeInput } from "./Partials/ButtonChangeInput";

export function TextInput({
  label,
  name,
  placeholder,
  type = "text",
  inputMode,
  parse,
  className,
  disabled = false,
  ...rest
}: TextInputProps): JSX.Element {
  const { onHandlerInputPassword, shouldRenderButton, isPassword } =
    useTextInput({ type });
  return (
    <Field
      parse={parse}
      name={name}
      render={({ input, meta }) => {
        const isInvalid: boolean =
          meta.error !== undefined && meta.touched === true;
        return (
          <ContainerTextInput error={isInvalid}>
            <span className="input__label">{label}</span>
            <div className="container__input">
              <input
                type={!isPassword ? "text" : "password"}
                autoComplete="off"
                className={`input__text ${className ?? ""}`}
                placeholder={placeholder}
                id={name}
                disabled={disabled}
                {...rest}
                {...input}
              />
              {shouldRenderButton && (
                <ButtonChangeInput
                  onClick={onHandlerInputPassword}
                  isPassword={isPassword}
                />
              )}
            </div>
            <TextWarning show={isInvalid}>{meta.error}</TextWarning>
          </ContainerTextInput>
        );
      }}
    />
  );
}
