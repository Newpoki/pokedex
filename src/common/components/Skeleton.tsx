import styled from "@emotion/styled";
import { memo } from "react";

type SkeletonShape = "round";

type SkeletonProps = {
  className?: string;
  width?: string;
  height?: string;
  shape?: "round";
};

export const Skeleton = memo(
  ({ className, width = "100%", height = "100%", shape }: SkeletonProps) => {
    return <Root className={className} width={width} height={height} shape={shape} />;
  }
);

type RootProps = {
  width: string;
  height: string;
  shape?: SkeletonShape;
};

const Root = styled.div<RootProps>`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.11);
  animation: pulsate ease-in-out 2s infinite;

  ${({ width, height }) => `
    width: ${width};
    height: ${height}; 
  `};

  ${({ shape }) =>
    shape === "round" &&
    `
    border-radius: 50%;
  `}

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
