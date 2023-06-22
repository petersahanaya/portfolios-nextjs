"use client";

import EyeIcon from "@icon/eye";
import Link from "next/link";

type ListTileActionProps = {
  baseStyle?: string;
} & ReactChild;

const ListTileAction = ({ baseStyle, children }: ListTileActionProps) => {
  return (
    <nav className={`flex justify-between items-center px-8 ${baseStyle}`}>
      <Link href="/">
        <EyeIcon width={40} height={40} />
      </Link>
      {children}
    </nav>
  );
};

export default ListTileAction;
