"use client";
import { Tooltip } from "pol-ui";
import { useMemo } from "react";

const GeoTooltip = () => {
  return useMemo(
    () => (
      <Tooltip label={<div>DE</div>}>
        <span className="cursor-help">Freiburg.</span>
      </Tooltip>
    ),
    [],
  );
};

export default GeoTooltip;
