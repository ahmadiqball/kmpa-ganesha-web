import type { HTMLProps } from 'react';

import classNames from 'classnames';

import type { PickPageComponent } from '~/sanity/lib/page-component.entity';

const DIVIDER_MAP = {
  type1: Divider1,
  type2: Divider2,
};

export function BlockDivider({ type, baseColor, orientation }: PickPageComponent<'divider'>) {
  const Divider = DIVIDER_MAP[type];

  return (
    <section
      className={ classNames('w-full h-fit', orientation === 'top' ? '-scale-y-100 -mt-[1px]' : '-mb-[1px]') }

    >
      <Divider
        className="h-25 w-full"
        style={{ color: baseColor?.hex || '#FFFFFF' }}
      />
    </section>
  );
}

function Divider1(props: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      height="271"
      preserveAspectRatio="none"
      viewBox="0 0 2560 271"
      width="2560"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        clip-rule="evenodd"
        d="M0 0.5C0 0.5 214.489 217.993 533 217.993C851.511 217.993 1071.68 8.143 1429 34.5C1787 69 1851.36 161.49 2160.2 181.799C2505 193.5 2559.5 185 2559.5 185V270.5H0V0.5Z"
        fill="currentColor"
        fill-opacity="0.21"
        fill-rule="evenodd"
      />

      <path
        clip-rule="evenodd"
        d="M2560 220.5C2560 220.5 2560 220.5 2560 161.5C2389 161.5 2340.4 37.3238 1984.96 82.3448C1629.51 127.366 1631.5 221 1333.5 237C989.5 198.5 925.969 -128.521 412.841 92.6368C75.0001 206 2.00008 138.5 2.00008 138.5L2 270H2560V220.5Z"
        fill="currentColor"
        fill-opacity="0.2"
        fill-rule="evenodd"
      />

      <path
        clip-rule="evenodd"
        d="M0.5 77C0.5 77 96 176.5 349 185.5C629.773 185.5 693 31.5001 999 31.5C1305 31.4999 1319.5 148.5 1765.5 222.799C2295 262.299 2559.5 156.5 2559.5 156.5V270.5H0.5V77Z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>

  );
}

function Divider2(props: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      height="37"
      preserveAspectRatio="none"
      viewBox="0 0 279 37"
      width="279"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M0 15.5349C14.5522 7.49424 21.0755 4.00466 36.1295 4.00466C52.6888 6.10106 83.8556 17.5873 99.3561 15.5349C114.856 13.4825 135.486 5.8036 150.54 2.25323C166.095 -1.41548 175.622 -0.443914 191.122 4.00466C206.623 8.45323 222.289 11.7802 237.789 11.3421C252.843 11.3421 263.5 9.58323 279 8.83062V37C263.5 37 248 37 232.5 37C217 37 201.5 37 186 37C170.5 37 155 37 139.5 37C124 37 108.5 37 93.0003 37C77.4998 37 62.0002 37 46.4997 37C31.0001 37 15.4996 37 0 37V15.5349Z"
        fill="currentColor"
        fill-opacity="0.19"
      />

      <path
        d="M0 19.933C15.4995 21.1568 31.0001 22.3805 46.4996 19.933C62.0001 17.4845 77.4997 11.3637 93.0002 10.451C108.5 9.53836 124.001 13.8327 139.5 14.244C155 14.6543 170.5 11.1816 186 8.55506C201.5 5.92748 214.762 5.27466 230.262 6.83811C245.762 8.40053 263.5 15.0258 279 19.933V37C263.5 37 248 37 232.5 37C217 37 201.5 37 186 37C170.5 37 155 37 139.5 37C124.001 37 108.5 37 93.0002 37C77.4997 37 62.0001 37 46.4996 37C31.0001 37 15.4995 37 0 37V19.933Z"
        fill="currentColor"
        fill-opacity="0.19"
      />

      <path
        d="M0 8C15.4995 8.79347 18.5037 6.53523 44.5972 11.7847C59.6511 14.8132 68.1817 17.8437 91.2644 21.1236C105.817 23.1913 132.412 16.076 153.989 16.8322C169.489 17.7256 179.839 19.6251 195.137 22.8892C211.696 26.4225 217.216 26.9272 232.5 24.8385C248 22.1007 263.5 15.9862 279 9.87061V37C263.5 37 248 37 232.5 37C217 37 201.5 37 186 37C170.5 37 155 37 139.5 37C124.001 37 108.5 37 93.0002 37C77.4997 37 62.0001 37 46.4996 37C31.0001 37 15.4995 37 0 37V8Z"
        fill="currentColor"
      />
    </svg>

  );
}
