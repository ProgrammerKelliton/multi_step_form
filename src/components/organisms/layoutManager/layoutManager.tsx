"use client";

// Types
import { HeaderProps } from "@/types/header.types";

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

  return (
    <div className="w-full pt-10 flex gap-8 flex-col">
      <Header
        title={content?.title || "loading"}
        subTitle={content?.subTitle || "loading"}
      />

      <ComponentByStep number={number} />
    </div>
  );
}
