export type IScreenSteps = 0 | 1 | 2;

export interface FirstAccessData {
  isScreenGetEmail: boolean;
  isScreenGetCode: boolean;
  isScreenGetPassword: boolean;
  isLoading: boolean;
  capturedEmail: string;
  onRequestCode: (value: string) => void;
  goBackGetEmail: () => void;
  onValidateCode: (payload: { codigo: string; email: string }) => void;
}

export type GetEmailProps = {
  isCurrentScreen: boolean;
  email?: string;
  onRequestCode: (value: string) => void;
} & Pick<FirstAccessData, "isLoading">;

export type GetCodeProps = {
  isCurrentScreen: boolean;
  email: string;
} & Pick<
  FirstAccessData,
  "isLoading" | "onRequestCode" | "goBackGetEmail" | "onValidateCode"
>;

export type ChangePasswordProps = {
  isCurrentScreen: boolean;
} & Pick<FirstAccessData, "isLoading">;
