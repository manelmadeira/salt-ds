// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CC_SharpProps = CountrySymbolProps;

const CC_Sharp = forwardRef<SVGSVGElement, CC_SharpProps>(function CC_Sharp(
  props: CC_SharpProps,
  ref
) {
  const uid = useId(props.id);

  const { className, ...rest } = props;

  return (
    <CountrySymbol
      data-testid="CC_Sharp"
      aria-label="Cocos (Keeling) Islands (the)"
      viewBox="0 0 72 50"
      ref={ref}
      className={clsx(className, { "saltCountrySymbol-sharp": true })}
      {...rest}
    >
      <mask
        id={`${uid}-CC-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-CC-a)`}>
        <path fill="#008259" d="M0 0h72v50H0z" />
        <circle cx="14.4" cy="13" r="9" fill="#F1B434" />
        <path fill="#936846" d="M13.4 12h2v8h-2z" />
        <path
          fill="#009B77"
          d="m14.4 6 .984 2.112 2.224-.527-.996 2.106 1.788 1.454-2.226.514L16.18 14l-1.78-1.464L12.62 14l.006-2.34-2.226-.515 1.788-1.454-.996-2.106 2.223.527L14.4 6Z"
        />
        <path
          fill="#F1B434"
          d="M56.384 7.112 55.4 5l-.985 2.112-2.223-.527.996 2.106-1.788 1.454 2.226.514L53.62 13l1.78-1.464L57.18 13l-.006-2.34 2.226-.515-1.788-1.454.996-2.106-2.224.527ZM37.9 14.5a7.55 7.55 0 0 1 1.784.213A9 9 0 1 0 34.4 31a8.96 8.96 0 0 0 5.284-1.713A7.5 7.5 0 1 1 37.9 14.5Zm8.484 6.612L45.4 19l-.985 2.112-2.223-.527.996 2.106-1.788 1.454 2.226.515L43.62 27l1.78-1.464L47.18 27l-.006-2.34 2.226-.515-1.788-1.454.996-2.106-2.224.527ZM52.4 38l.984 2.112 2.224-.527-.996 2.106 1.788 1.454-2.226.514L54.18 46l-1.78-1.464L50.62 46l.006-2.34-2.226-.515 1.788-1.454-.996-2.106 2.223.527L52.4 38Zm11-20 .984 2.112 2.224-.527-.996 2.106 1.788 1.454-2.226.515.006 2.34-1.78-1.464L61.62 26l.006-2.34-2.226-.515 1.788-1.454-.996-2.106 2.223.527L63.4 18Zm-4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default CC_Sharp;
