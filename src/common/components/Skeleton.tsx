import styled from "@emotion/styled";
import { memo } from "react";

type SkeletonProps = {
  className?: string;
};

export const Skeleton = memo(({ className }: SkeletonProps) => {
  return <Root className={className} />;
});

const Root = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.11);
  animation: pulsate ease-in-out 2s infinite;

  @keyframes pulsate {
    0% {
      background-color: rgba(0, 0, 0, 0.11);
    }

    50% {
      background-color: rgba(0, 0, 0, 0.18);
    }

    100% {
      background-color: rgba(0, 0, 0, 0.11);
    }
  }
`;
