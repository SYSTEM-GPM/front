import React from "react";
import { ContainerFirstAccess } from "./style";
import Image from "next/image";
import Link from "next/link";
import { PATHS } from "@/_utils/constants";
import { GetEmail } from "./Partials/GetEmail";
import { GetCode } from "./Partials/GetCode";
import { ChangePassword } from "./Partials/ChangePassword";
import { useFirstAccess } from "./useFirstAccess";
import { AwaitRequest } from "@/Components";

export function FirstAccess(): JSX.Element {
  const {
    onRequestCode,
    goBackGetEmail,
    onValidateCode,
    onCreatePassword,
    isScreenGetEmail,
    isScreenGetCode,
    isScreenGetPassword,
    isLoading,
    capturedEmail,
    dataCreatePassword
  } = useFirstAccess();
  return (
    <ContainerFirstAccess>
      <AwaitRequest isVisible={isLoading} />
      <header className="top__bar">
        <Image
          src="/images/logo.png"
          alt="Logo da aplicação"
          width={169}
          height={67.76}
        />
        <Link href={PATHS.forgotPassword} className="top__login">
          Voltar ao login
        </Link>
      </header>
      <div className="box__form">
        <GetEmail
          onRequestCode={onRequestCode}
          isCurrentScreen={isScreenGetEmail}
          isLoading={isLoading}
          email={capturedEmail}
        />
        <GetCode
          isCurrentScreen={isScreenGetCode}
          isLoading={isLoading}
          email={capturedEmail}
          goBackGetEmail={goBackGetEmail}
          onRequestCode={onRequestCode}
          onValidateCode={onValidateCode}
        />
        <ChangePassword
          onCreatePassword={onCreatePassword}
          dataCreatePassword={dataCreatePassword}
          isCurrentScreen={isScreenGetPassword}
          isLoading={isLoading}
        />
      </div>
    </ContainerFirstAccess>
  );
}
