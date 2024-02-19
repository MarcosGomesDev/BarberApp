import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '../../components/Icon/Icon';

export function UserFillIcon({ size = 20, color = 'black' }: IconBase) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512.000000 512.000000"
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="none">
      <Path
        fill={color}
        d="M2335 5105 c-273 -42 -517 -172 -708 -375 -210 -223 -319 -481 -334
        -790 -21 -432 191 -845 557 -1084 180 -118 353 -178 563 -195 389 -30 721 92
        989 365 213 216 321 452 347 753 36 402 -116 776 -419 1038 -196 168 -376 252
        -625 288 -120 17 -260 18 -370 0z"
      />
      <Path
        fill={color}
        d="M1427 2639 c-452 -48 -766 -372 -912 -944 -97 -381 -122 -839 -60
        -1090 51 -201 218 -405 411 -503 87 -44 212 -80 317 -92 62 -8 534 -10 1437
        -8 l1345 3 85 24 c316 86 532 298 611 596 41 155 36 525 -12 817 -105 650
        -371 1040 -792 1162 -96 28 -268 49 -319 39 -49 -9 -117 -45 -271 -144 -164
        -106 -187 -118 -310 -164 -142 -53 -259 -76 -396 -76 -140 0 -248 20 -390 70
        -134 48 -140 51 -350 184 -110 70 -192 115 -224 124 -56 14 -56 14 -170 2z"
      />
    </Svg>
  );
}
