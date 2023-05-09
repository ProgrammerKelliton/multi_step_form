"use client";

// Types
import { HeaderProps } from "@/types/components/molecules/header.types";

// Logic scripts
import LayoutContent from "./getContent";

// Components
import Header from "@/components/molecules/header/header";
import ComponentByStep from "./componentByStep";

// React
import { useContext, useEffect, useState } from "react";

// Context
import { GlobalContext } from "@/context/global";

export default function LayoutManager() {
  const [content, setContent] = useState<HeaderProps>();
  const {
    step: { number },
  } = useContext(GlobalContext);

  useEffect(() => {
    const layoutContent = LayoutContent({ stepNumber: number });

    if (layoutContent) setContent(layoutContent);
  }, [number]);

  const CONFIRM_COMPONENT_NUMBER = 5;

  return (
    <div className="w-full max-sm:items-baseline max-md:items-center max-md:justify-center h-3/4 pt-10 flex gap-8 flex-col">
      {number !== CONFIRM_COMPONENT_NUMBER && (
        <Header
          title={content?.title || "loading"}
          subTitle={content?.subTitle || "loading"}
        />
      )}
      <ComponentByStep number={number} />
    </div>
  );
}
