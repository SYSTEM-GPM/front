import React from "react";
import { CreateRequestTransport } from "@/Screens";
import { LayoutDashboard } from "@/Components";
import { type GetServerSideProps } from "next";
import { checkProfilePermission } from "@/_utils/permissionRules";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);
  const permission = checkProfilePermission({ session, isOnlyAdm: false });
  return permission;
};

CreateRequestTransport.getLayout = function getLayout(
  page: React.ReactElement
) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default CreateRequestTransport;
