// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GAProps = CountrySymbolProps;

const GA = forwardRef<SVGSVGElement, GAProps>(function GA(props: GAProps, ref) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="GA"
      aria-label="Gabon"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-GA-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-GA-a)`}>
        <path fill="#005EB8" d="M0 72V48h72v24z" />
        <path fill="#FBD381" d="M0 48V24h72v24z" />
        <path fill="#009B77" d="M0 24V0h72v24z" />
      </g>
    </CountrySymbol>
  );
});

export default GA;