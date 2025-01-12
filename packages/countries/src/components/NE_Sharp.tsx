// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type NE_SharpProps = CountrySymbolProps;

const NE_Sharp = forwardRef<SVGSVGElement, NE_SharpProps>(function NE_Sharp(
  props: NE_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="NE_Sharp"
      aria-label="Niger (the)"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-NE-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-NE-a)`}>
        <path fill="#009B77" d="M0 50V37h72v13z" />
        <path fill="#F5F7F8" d="M0 37V13h72v24z" />
        <path fill="#FF9E42" d="M0 13V0h72v13z" />
        <circle cx="36" cy="25" r="9" fill="#FF9E42" />
      </g>
    </CountrySymbol>
  );
});

export default NE_Sharp;
