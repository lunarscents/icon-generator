import * as React from 'react';

const SvgNight = (props: React.FC<Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'>>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <defs>
      <path
        id="night_svg__a"
        d="M7.64 4.13a9.288 9.288 0 00-.316 2.41c0 4.96 3.884 8.975 8.667 8.975 1.33 0 2.615-.31 3.784-.898a.5.5 0 01.708.576c-1.15 4.283-4.942 7.307-9.317 7.307-5.342 0-9.666-4.47-9.666-9.976 0-3.852 2.135-7.31 5.432-8.97a.5.5 0 01.708.576zm11.283-2.12l.877 1.692 1.88.312a1.04 1.04 0 01.572 1.754l-1.304 1.334-.036.043-.001-.001.009.08.278 1.788a1.04 1.04 0 01-1.494 1.084L18 9.243l-1.704.853a1.04 1.04 0 01-1.493-1.085l.284-1.884-1.338-1.358a1.04 1.04 0 01.57-1.755l1.88-.312.878-1.692a1.04 1.04 0 011.846 0zm1.988 5.123c-.004.008-.005.012-.004.014l.004-.003v-.011z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="night_svg__b" fill="#fff">
        <use xlinkHref="#night_svg__a" />
      </mask>
      <use fill="#333" fillRule="nonzero" xlinkHref="#night_svg__a" />
      <g fill="#333" mask="url(#night_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgNight;
