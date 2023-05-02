export interface tableItems {
  className?: string;
  label: string;
}

export interface TableTitleProps {
  className?: string;
  items: tableItems[];
}

export interface TableContentProps {
  className?: string;
  children?: JSX.Element[];
}

export interface TableItemProps {
  className?: string;
  item?: tableItems;
  children?: JSX.Element;
}
