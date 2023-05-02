import React from "react";
import { ContainerStatus } from "./style";
import type { StatusProps } from "@/_types/Status";

export function Status({ type }: StatusProps): JSX.Element {
  const labelType = {
    active: "Ativo",
    waiting: "Aguardando permissão",
    inactive: "Inativo"
  };
  return (
    <ContainerStatus type={type}>
      <p className="status__label">{labelType[type]}</p>
    </ContainerStatus>
  );
}
