// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GR_SharpProps = CountrySymbolProps;

const GR_Sharp = forwardRef<SVGSVGElement, GR_SharpProps>(function GR_Sharp(
  props: GR_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="GR_Sharp"
      aria-label="Greece"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-GR-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-GR-a)`}>
        <path fill="#F5F7F8" d="M0 42v-7h72v7H0Z" />
        <path fill="#005EB8" d="M0 35v-7h72v7H0Z" />
        <path fill="#F5F7F8" d="M0 28v-7h72v7H0Z" />
        <path fill="#005EB8" d="M0 21v-7h72v7H0Z" />
        <path fill="#F5F7F8" d="M0 14V7h72v7H0Z" />
        <path fill="#005EB8" d="M0 7V0h72v7H0Zm0 43v-8h72v8H0Z" />
        <path fill="#005EB8" d="M0 0h36v35H0z" />
        <path fill="#F5F7F8" d="M0 21v-7h36v7H0Z" />
        <path fill="#F5F7F8" d="M14 0h8v35h-8V0Z" />
      </g>
    </CountrySymbol>
  );
});

export default GR_Sharp;
