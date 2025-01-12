// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SCProps = CountrySymbolProps;

const SC = forwardRef<SVGSVGElement, SCProps>(function SC(props: SCProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="SC"
      aria-label="Seychelles"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-SC-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-SC-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#009B77" d="M71.8 72V20l-62 52h62Z" />
        <path
          fill="#FBD381"
          d="m13.671 64.983-1.97-1.971L37.51-3l27.072 7.071L13.67 64.983Z"
        />
        <path
          fill="#DD2033"
          d="m15.688 67-2.017-2.017L65.201 2.5l12.453 23.642L15.689 67Z"
        />
        <path
          fill="#F5F7F8"
          d="M16.627 69.47 15.2 67l62.354-41 5 13.66-65.927 29.81Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default SC;
