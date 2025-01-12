// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type UYProps = CountrySymbolProps;

const UY = forwardRef<SVGSVGElement, UYProps>(function UY(props: UYProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="UY"
      aria-label="Uruguay"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-UY-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-UY-a)`}>
        <path fill="#F5F7F8" d="M0 72V0h72v72z" />
        <path
          fill="#004692"
          d="M36 18V9h36v9H36Zm0 18v-9h36v9H36ZM0 54v-9h72v9H0Zm0 18v-9h72v9H0Z"
        />
        <path
          fill="#F1B434"
          d="m30 25-4.495 2.223 2.394 4.576-4.881-.982L22.4 36 19 32.188 15.6 36l-.618-5.183-4.88.981 2.393-4.576L8 25l4.495-2.223-2.394-4.575 4.88.981.62-5.183L19 17.812 22.4 14l.618 5.183 4.88-.981-2.393 4.576L30 25Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default UY;
