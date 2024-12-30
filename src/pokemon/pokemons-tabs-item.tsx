import { Link, useParams } from "@tanstack/react-router";
import { useCallback, useLayoutEffect, useRef } from "react";

type LinkTo =
  | "/pokemon/$name"
  | "/pokemon/$name/stats"
  | "/pokemon/$name/evolution";

type PokemonsTabsItemProps = {
  children: React.ReactNode;
  to: LinkTo;
  setActiveLinkCenterPosition: (linkLeftPosition: number) => void;
};

export const PokemonsTabsItem = ({
  to,
  children,
  setActiveLinkCenterPosition,
}: PokemonsTabsItemProps) => {
  const { name } = useParams({ from: "/pokemon/$name" });
  const ref = useRef<HTMLAnchorElement>(null);

  const handleSetActiveLinkCenterPosition = useCallback(() => {
    const element = ref.current;

    if (element == null) {
      return;
    }

    const { left, width } = element.getBoundingClientRect();

    const refCenter = left + width / 2;

    setActiveLinkCenterPosition(refCenter);
  }, [setActiveLinkCenterPosition]);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element == null) {
      return;
    }

    const status = element.getAttribute("data-status");

    if (status !== "active") {
      return;
    }

    handleSetActiveLinkCenterPosition();
  }, [handleSetActiveLinkCenterPosition]);

  return (
    <Link
      className="relative text-white/50 transition-colors data-[status=active]:font-bold data-[status=active]:text-white"
      to={to}
      activeOptions={{ exact: true }}
      onClick={handleSetActiveLinkCenterPosition}
      params={{ name }}
      ref={ref}
    >
      {children}
    </Link>
  );
};
