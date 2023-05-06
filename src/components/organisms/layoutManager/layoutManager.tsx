"use client";

// Types
import { LayoutManagerProps } from "@/types/layoutManager.types";
import { HeaderProps } from "@/types/header.types";

// Logic scripts
import LayoutContent from "./getContent";

// Components
import Header from "@/components/molecules/header/header";
import Form from "../form/form";

// React
import { useEffect, useState } from "react";

export default function LayoutManager({ layoutStep }: LayoutManagerProps) {
  const [content, setContent] = useState<HeaderProps>();

  useEffect(() => {
    const layoutContent = LayoutContent({ layoutStep: "your info" });

    if (layoutContent) setContent(layoutContent);
  }, []);

  return (
    <div className="w-full pt-10 flex gap-8 flex-col">
      <Header
        title={content?.title || "loading"}
        subTitle={content?.subTitle || "loading"}
      />

      <Form />
    </div>
  );
}
