import React, { FC, SVGProps } from "react";

interface IcoDashboardProps extends SVGProps<SVGSVGElement> {}

const IcoVideo: FC<IcoDashboardProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M3 3.025h1.976V5H3V3.025ZM28.024 3.024H30V5h-1.976V3.024ZM6.558 3.024h19.884V5H6.558V3.024ZM28.024 20.933H30v1.976h-1.976v-1.976ZM3 20.933h1.976v1.976H3v-1.976ZM15.571 11.358v3.217l2.786-1.608-2.786-1.609Z" />
      <path d="M4.779 6.583V19.35H28.22V6.583H4.779Zm9.21 2.035 7.532 4.349-7.532 4.348V8.618ZM17.29 22.909h9.152v-1.976H6.558v1.976h9.15v2.051a2.574 2.574 0 0 0-1.778 2.445 2.573 2.573 0 0 0 2.57 2.57 2.573 2.573 0 0 0 2.57-2.57c0-1.141-.748-2.11-1.78-2.445v-2.052Zm-.79 5.484a.99.99 0 0 1 0-1.976.989.989 0 0 1 0 1.976Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M3 3h27v27H3z" />
      </clipPath>
    </defs>
  </svg>
)
export default IcoVideo
