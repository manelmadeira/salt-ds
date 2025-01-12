// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type MU_SharpProps = CountrySymbolProps;

const MU_Sharp = forwardRef<SVGSVGElement, MU_SharpProps>(function MU_Sharp(
  props: MU_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="MU_Sharp"
      aria-label="Mauritius"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-MU-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-MU-a)`}>
        <path fill="#009B77" d="M0 50V38h72v12z" />
        <path fill="#004692" d="M0 25V12h72v13z" />
        <path fill="#DD2033" d="M0 12V0h72v12z" />
        <path fill="#FBD381" d="M0 38V25h72v13z" />
      </g>
    </CountrySymbol>
  );
});

export default MU_Sharp;
