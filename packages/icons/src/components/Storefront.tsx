// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type StorefrontIconProps = IconProps;

export const StorefrontIcon = forwardRef<SVGSVGElement, StorefrontIconProps>(
  function StorefrontIcon(props: StorefrontIconProps, ref) {
    return (
      <Icon
        data-testid="StorefrontIcon"
        aria-label="storefront"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M.736 5.368a2.43 2.43 0 0 0 .764.124C2.367 5.492 3 5 3 5s.617.492 1.5.492S6 5 6 5s.633.492 1.5.492S9 5 9 5s.648.492 1.5.492a2.398 2.398 0 0 0 .778-.13A2.8 2.8 0 0 0 12 5l-2-4H2L0 5s.285.222.736.368ZM9.382 2l1.243 2.486a1.268 1.268 0 0 1-.125.006 1.6 1.6 0 0 1-.653-.155A1.846 1.846 0 0 1 9.6 4.2l-.002-.002-.605-.46-.6.467a1.716 1.716 0 0 1-.894.288 1.717 1.717 0 0 1-.893-.287l-.614-.479-.607.484a1.598 1.598 0 0 1-.226.128 1.58 1.58 0 0 1-.659.153 1.58 1.58 0 0 1-.66-.153 1.598 1.598 0 0 1-.225-.128l-.607-.484-.614.478a1.717 1.717 0 0 1-.894.288 1.29 1.29 0 0 1-.125-.007L2.618 2h6.764Z"
          clipRule="evenodd"
        />
        <path d="M3 9V8h3v1H3Z" />
        <path
          fillRule="evenodd"
          d="M11 11V6H1v5H0v1h12v-1h-1Zm-9 0h5V7H2v4Zm6 0h2V7H8v4Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);