// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type MLProps = CountrySymbolProps;

const ML = forwardRef<SVGSVGElement, MLProps>(function ML(props: MLProps, ref) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="ML"
      aria-label="Mali"
      viewBox="0 0 72 72"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": false })}
      {...rest}
    >
      <mask
        id={`${uid}-ML-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="matrix(0 -1 -1 0 72 72)"
        />
      </mask>
      <g mask={`url(#${uid}-ML-a)`}>
        <path fill="#009B77" d="M0 72h24V0H0z" />
        <path fill="#FBD381" d="M24 72h24V0H24z" />
        <path fill="#DD2033" d="M48 72h24V0H48z" />
      </g>
    </CountrySymbol>
  );
});

export default ML;
