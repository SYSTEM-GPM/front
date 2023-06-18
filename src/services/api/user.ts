import type {
  serviceGetUserByIdResponse,
  serviceGetUserResponse,
  serviceGetUsersProps,
  servicePostLoginProps,
  servicePostLoginResponse,
  servicePostPublicUserActivateProps,
  servicePostPublicUserProps,
  servicePostUserProps,
  servicePutUserProps
} from "@/_types/Users/serviceUsers";
import {
  LOGIN,
  PUBLIC_USERS,
  PUBLIC_USERS_SEND_EMAIL,
  USERS,
  USER_ADM_SEND_CODE
} from "./endpoints";
import { apiPublic, ApiToken } from ".";

export async function servicePostLogin(
  payload: servicePostLoginProps
): Promise<servicePostLoginResponse> {
  const { data } = await apiPublic.post<servicePostLoginResponse>(
    LOGIN,
    payload
  );
  return data;
}

export async function serviceGetUsers({
  page,
  size
}: serviceGetUsersProps): Promise<serviceGetUserResponse> {
  const { data } = await ApiToken().get<serviceGetUserResponse>(
    `${USERS}?page=${page}&size=${size}`
  );
  return data;
}

export async function serviceGetUserById(
  id: number
): Promise<serviceGetUserByIdResponse> {
  const { data } = await ApiToken().get<serviceGetUserByIdResponse>(
    `${USERS}/${id}`
  );
  return data;
}

export async function servicePostUser(
  payload: servicePostUserProps
): Promise<serviceGetUserResponse> {
  const { data } = await ApiToken().post<serviceGetUserResponse>(
    USERS,
    payload
  );
  ApiToken().post(USER_ADM_SEND_CODE, {
    email: payload?.email
  });
  return data;
}

export async function servicePostPublicUser(
  payload: servicePostPublicUserProps
): Promise<void> {
  await ApiToken().post(PUBLIC_USERS, payload);
  ApiToken().post(PUBLIC_USERS_SEND_EMAIL, { email: payload.email });
}

export async function servicePostPublicUserActivate(
  payload: servicePostPublicUserActivateProps
): Promise<void> {
  // await ApiToken().post(PUBLIC_USERS, payload);
  // ApiToken().post(PUBLIC_USERS_SEND_EMAIL, { email: payload.email });
}

export async function servicePutUser({
  id,
  payload
}: servicePutUserProps): Promise<serviceGetUserResponse> {
  const { data } = await ApiToken().put<serviceGetUserResponse>(
    `${USERS}/${id}`,
    payload
  );
  return data;
}
