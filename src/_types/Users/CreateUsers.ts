import { type Decorator } from "final-form";
import type { itemBreadCrumb } from "../BreadCrumb";
import { type IDataFormUser } from "../Common";

export interface useCreateUserData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  isShowSectors: boolean;
  onOpenListSectors: () => void;
  onCloseListSectors: () => void;
  onCreateUser: (payload: IDataFormUser) => void;
  focusOnError: Decorator<IDataFormUser, Partial<IDataFormUser>>;
}

export type onCreateUserProps = IDataFormUser;
