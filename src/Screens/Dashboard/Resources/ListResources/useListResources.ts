import React from "react";
import type { itemBreadCrumb } from "@/_types/BreadCrumb";
import type { ITabOptions, useListResourcesData } from "@/_types/ListResources";
import { PATHS, TABS_RESOURCES } from "@/_utils/constants";
import { useRouter, usePathname } from "next/navigation";

export function useListResources(): useListResourcesData {
  const { TAB_ONBOARD, TAB_LIST_DRIVER, TAB_LIST_PLACE, TAB_LIST_TRANSPORT } =
    TABS_RESOURCES;
  const [currentTab, setCurrentTab] = React.useState<ITabOptions>(TAB_ONBOARD);
  const router = useRouter();
  const pathname = usePathname();
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Recursos"
    },
    {
      label: "Todos locais"
    }
  ];

  function onChangeTab(tab: ITabOptions): void {
    const mapScreens = {
      0: PATHS.dashboard.recursos,
      1: PATHS.dashboard.recursosLocais,
      2: PATHS.dashboard.recursosTransportes,
      3: PATHS.dashboard.recursosMotoristas
    };
    setCurrentTab(tab);
    router.push(mapScreens[tab]);
  }

  function initTab(): void {
    const paths = {
      [PATHS.dashboard.recursos]: TAB_ONBOARD,
      [PATHS.dashboard.recursosLocais]: TAB_LIST_PLACE,
      [PATHS.dashboard.recursosTransportes]: TAB_LIST_TRANSPORT,
      [PATHS.dashboard.recursosMotoristas]: TAB_LIST_DRIVER
    };
    const getTab: ITabOptions =
      pathname !== null
        ? paths[pathname ?? [PATHS.dashboard.recursosLocais]]
        : paths[PATHS.dashboard.recursosLocais];
    setCurrentTab(getTab);
  }

  React.useEffect(() => {
    initTab();
  }, []);

  return {
    onChangeTab,
    breadCrumb,
    currentTab,
    isListPlace: currentTab === TAB_LIST_PLACE,
    isListTransport: currentTab === TAB_LIST_TRANSPORT,
    isListDriver: currentTab === TAB_LIST_DRIVER
  };
}
