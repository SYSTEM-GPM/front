// LOGIC
export interface useLayoutDashboardData {
  isExpanded: boolean;
  onHandlerExpand: () => void;
}

// JSX

export type LayoutDashboardModifier = Pick<
  useLayoutDashboardData,
  "isExpanded"
>;

// SIDEBAR
export type SideBarProps = Pick<
  useLayoutDashboardData,
  "isExpanded" | "onHandlerExpand"
>;

export interface useSideBarData {
  currentPath: string;
}

export type SideBarModifier = Pick<useLayoutDashboardData, "isExpanded">;
