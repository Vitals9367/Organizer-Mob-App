import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Circle,
  G,
  Ellipse,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function RegisteredImage(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1009.54 766.62"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={625.8}
          y1={769.51}
          x2={625.8}
          y2={88.59}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </LinearGradient>
      </Defs>
      <Path
        d="M239.82 639.76c-8.5-.86-17.38-1.78-25.43.47s-14.72 8.82-12.33 15.1c5.34 14 36.68 4.25 51.13 13.82 5.16 3.42 7.17 8.8 11.2 13 6.52 6.82 17.73 10 28.55 11.75 65 10.51 139.1-16.54 196.07 9.51 18.45 8.44 33 21.87 53.23 27.5 26.8 7.46 56.15-.51 83.88-5.62a410.28 410.28 0 01104.89-5.5c25.93 2 60.42 2.67 68.72-16.16 5.34-12.11-5.96-25.59-20.96-31.32s-32.56-5.55-49.31-5c-32.33 1.16-64.67 3.5-97 2.36-62.52-2.22-121.58-27-182.46-27.82-70.9-.86-138.95 5.09-210.18-2.09zM174.09 326.31c-10 10.11-10.61 25.61-10.61 25.61s15.49-.88 25.45-11 10.62-25.61 10.62-25.61-15.5.91-25.46 11zM214.34 76.55c3.53 13.75 16.48 22.3 16.48 22.3s7.23-13.73 3.7-27.48-16.48-22.29-16.48-22.29-7.27 13.73-3.7 27.47zM799.18 114.37c-10 10.11-10.62 25.61-10.62 25.61s15.5-.88 25.46-11 10.61-25.62 10.61-25.62-15.49.95-25.45 11.01zM494.39 256.05c-1.16 14.14 8.27 26.46 8.27 26.46s11.33-10.61 12.49-24.76-8.27-26.44-8.27-26.44-11.33 10.59-12.49 24.74zM822.45 454.36c-1.16 14.14 8.27 26.46 8.27 26.46s11.33-10.61 12.49-24.75-8.27-26.46-8.27-26.46-11.33 10.61-12.49 24.75z"
        fill="#00beb3"
        opacity={0.1}
      />
      <Path
        d="M586.55 96.38c-64.72-1.95-126.36-20-185.22-39.8S284.17 14.89 221 4.41c-40.63-6.74-87.1-7.69-119.83 11.16C69.66 33.7 59.48 65.01 54.01 94.06c-4.12 21.85-6.54 44.85 4.74 65.31 7.84 14.21 21.74 26.15 31.36 39.75 33.47 47.35 9.81 105.73-26.45 152-17 21.69-36.75 42.37-49.88 65.46s-19.2 49.53-7.71 73.07c11.38 23.34 38.51 40.87 67.9 53.2 59.69 25 130 32.21 198.61 36.27 151.83 9 304.46 5.1 456.69 1.2 56.34-1.44 112.92-2.9 168.34-10.44 30.78-4.18 62.55-10.82 84.9-26.86 28.36-20.36 35.39-54.83 16.38-80.36-31.88-42.81-120-53.45-142.31-99.4-12.26-25.29.33-53.46 18.16-76.92 38.24-50.32 102.33-94.47 105.7-152 2.32-39.5-28.49-79.06-76.13-97.75-49.93-19.6-119.18-17.13-156 15.3-37.95 33.35-104.61 46.2-161.76 44.49z"
        fill="#00beb3"
        opacity={0.1}
      />
      <Path
        d="M896.32 351.32a9 9 0 00-6.14 5.41l-1-.16-3.73-.6s-19.76-1.63-23.45-1.38-6-3.39-6-3.39l-14.69-12.43-1.14-1c1.59-.6 2.58-.91 2.58-.91s-39.42-49-47.92-49.95-22.55-12.39-22.69-12.5l-.15-.78c-.31-1.65-.54-3.32-.71-5l2.09 1.28c0-.58 0-1.16.06-1.74a31.64 31.64 0 015.88-16.8c4.11-5.7 10.19-10.18 12.62-16.75a24.21 24.21 0 001.29-8.79 29.3 29.3 0 00-4.1-15.29 19.1 19.1 0 00-12.9-8.9c-1.4-.22-2.83-.25-4.21-.57-8.21-1.93-11.23-12.94-19.21-15.64-3.72-1.26-7.86-.43-11.45 1.13s-6.84 3.8-10.35 5.53-7.49 3-10.68 5.45c-.33.25-.68.55-1 .86l-.63.61a22.64 22.64 0 00-3.41 4.45l-.15.25c-.1.17-.19.35-.28.53s-.15.28-.21.42-.16.32-.23.48l-.21.48-.18.46c-.06.17-.13.34-.18.52s-.1.29-.14.44l-.15.53-.09.43c0 .18-.07.37-.1.55s0 .27 0 .4V210.8a6.09 6.09 0 00.18.87c.54 1.84 2.4 3.72 3.82 5.36-.16.15-.32.29-.48.45a34.86 34.86 0 00-10.67 25.11 34.4 34.4 0 00.57 6.21 33.32 33.32 0 00-5.83-3.53 50.89 50.89 0 00-21.69-5c-12.25-.14-29.46-4.74-29.46-4.74a11.7 11.7 0 011 2.65c-.75-.43-1.56-.89-2.45-1.37a71.82 71.82 0 00-23-7.7s-5.1.71-5.78-10a45.41 45.41 0 00-1.8-9.87 168.22 168.22 0 01-6.06-30L610 163.52s7.7-41 3.07-58.48c1.49-5.48.65-10.5-4.26-14.11-19.37-14.26-38.91 41.24-38.91 41.24l-7.26 7.05a15.58 15.58 0 00-6.16-2.35s-3.91 4-6.63 14.92c-1.44 5.79-11.28 15.46-20.18 23.25-6.32 5.53-12.42 11.28-18.51 17.05-4.5 4.28-14.53 10.4-36.41 13.86-3.43.54-6.55 1.05-9.4 1.52a29.33 29.33 0 001.1-7.94 29.78 29.78 0 00-23.36-28.93 7.46 7.46 0 000-2.11 8.74 8.74 0 00-2.21-4c-4.61-5.7-9.61-11.56-16.47-14.26a21.45 21.45 0 00-8.89-1.43h-2.44a22.78 22.78 0 00-16.66 8.68c-2.46 3.29-3.94 7.19-6.06 10.7-3.94 6.5-10 11.51-16.57 15.47-3.95 2.39-8.1 4.45-11.83 7.16-13.53 9.83-19.77 28-16.37 44.24 1.5 7.13 4.67 14.15 3.82 21.38-.67 5.61-3.69 10.65-6.77 15.41s-6.34 9.6-7.56 15.11.06 12 4.68 15.34c1.7 1.22 3.76 2 5.21 3.48a16.7 16.7 0 012.4 3.76 37.42 37.42 0 0023.27 18.08 17 17 0 004.76.52h.48c3.67.23 7.43-.75 8.66-4a9.08 9.08 0 01.83-2.12 2.49 2.49 0 011.45-1 13.32 13.32 0 013.39 1.28 43.12 43.12 0 0016.48 4.71 23.2 23.2 0 002.89.05 12.78 12.78 0 005.89-.84 12.62 12.62 0 004.53-3.88c.26-.33.5-.68.75-1a82.71 82.71 0 01-7.38 23s-6 10-5.57 20.08a20.17 20.17 0 002.25 10.6s.17-.44.52-1.13c1.72 2.88 7.36 12.09 11.06 15.32.18 9.51.14 21.42-1.05 23.87-2 4.19-8.32 34 18.86 54.33l6.27 13.73-25.81 1.83c-2.61-.36-36.36-4.9-36.53 1.71-.17 6.87 5.1 73.77 22.6 69.24 16.31-4.22 10.93-23.73 10.12-26.35l.58-.16-.64-.18 13.05-12.37a5.78 5.78 0 00-1-4.29l.13-.07 31.52 1.41 7.41 16.1s12.57 19.12 2.38 35.21-20.73 41.25-22.43 56.51c-1.39 12.48-10.63 24.74-13.94 28.78-5.91 2-28.58 10.9-19.53 24.37 10.36 15.42 44 44.77 57.6 43.76s8.15-10.9 8.15-10.9L468 694.71s-2-23.48-1.19-30.35c.44-3.57-2.19-6.14-5-7.23 1.07-7.65 3.78-22.15 9.6-30.16 8.15-11.24 34.32-60.7 34.32-60.7s8.32-7.38 6.45-29.34a504.59 504.59 0 01-1.41-22.79l29.62 1.33s31.77-3.19 10.19-37.23-67.45-67.4-67.45-67.4l-.41-21.07c2.08.52 3.3.78 3.3.78s-.18-.76-.48-2.12l.48.11s-6.63-28.69-8.67-51.5l1.87.86c19.71 22.81 33 3.53 33 3.53s41.63-58.52 37.55-55.84a3.54 3.54 0 01-2.74.17l3-9.56s12.29-18.78-5.55-29.34c-14.56-8.62-14.18 18.4-13.55 28.61l-.72-.61s-13.93 21-21.41 32.7-13.76 4-13.76 4l-9.45-10.65a37.41 37.41 0 002.25-13.32 22.63 22.63 0 00-6.39-17.28c-7.21-7.35-9.32-14.47-9.54-19.95a21.12 21.12 0 011.89-8.22l49.11-26s10.36.16 24.29-21.3a368.42 368.42 0 0129.74-39.23s-.29-.42-.79-1.11c.5-.59.79-.91.79-.91s-.57-.83-1.54-2.11l7.57-8.73a112 112 0 00-.09 11.85l3.92 13.25 2.2 73.77s-2.38 7 12.92 14.09c12.94 6 33.44 16 39.42 18.95-.22.54-.35.83-.35.83l1.78-.12.26.12c29.89-2.68 28.87 27.16 28.87 27.16s2 60.7-7.13 81.83-7.82 47.28-7.82 47.28.91-4.46 6 1.37c-.1.51-.21 1.06-.33 1.63-2.92 14.63-9 45.75-10.13 58.37a204.52 204.52 0 01-6.63 34l-3 55.83 19.11.93-.21 2a6.28 6.28 0 01-3.24 4.87c-6.54 3.55-22 16-20.76 54.42l-.66 6.18a77.64 77.64 0 01-9.33 29.81c-.44.78-.83 1.53-1.16 2.25a1.84 1.84 0 01.52-1.07s-9.93 2.06-7.89 28.89 5.1 31.52 9.18 31.85 24 5.2 22.93-4.69-2-31.86-.68-35.21 6.74-12.39 1.6-14.57a76.64 76.64 0 002.15-18.8s10-15.76 17.15-21.63 11-15.84 13.59-28.67c.18-.84 21.07-14.76 18-26.32-.54-2-.93-3.77-1.23-5.37-.13-.71-.24-1.38-.34-2h.37l4.25-25.49v24.82l2.52.33-.09 2-1.07 23.8a39.18 39.18 0 01-3 13.48c-4.5 10.65-12.8 34.36-10.54 60l-.24 22.86c-.72.14-11.1 2.59-9.13 28.5 2 26.82 5.09 31.52 9.17 31.85s24 5.2 22.94-4.69-2-31.86-.68-35.21 3.7-12.21-1.44-14.39a19.16 19.16 0 012.14-8.63c2.24-3.81 9.72-21.92 15.35-35.85a128.31 128.31 0 009.45-44.33v-.51a41.56 41.56 0 013.25-14.93 96.28 96.28 0 005.44-16.41c.14-.67.25-1.32.35-2l4.88.65 16.66-72.1s4.56-39.08 2.33-56.73c-.09-.73-.19-1.4-.31-2.05l1 .09s3.4-8.71 2.38-45.94 6.8-49 6.8-49c4.22-13.38 8.88-17.86 11.6-19.36a4.91 4.91 0 012.33-.76l12.61 14.43 2.32 2.66a.86.86 0 000-.16l1 1.17a10.78 10.78 0 01-.08-1.79c6.73 3.91 22.28 13.05 31.56 19.61 12.1 8.55 15.42 7.55 26 6.66 6.42-.53 15.1-4.13 20.92-6.87l.53-.25a25.54 25.54 0 004.92 2s17.08 14.47 18.73-11.94-20.49-20.03-20.49-20.03zm-443 307.56a24.7 24.7 0 01-5-2.11zM426.58 373l.06 3.75-.26.12c.08-1.32.14-2.62.2-3.87zm267.14 334.72v1.46a1.07 1.07 0 010-1.46z"
        transform="translate(-95.23 -66.69)"
        fill="url(#prefix__a)"
      />
      <Path fill="#ff7590" d="M624.01 201.63h29v30.5h-29z" />
      <Path
        d="M588.77 553.8c-2.55 12.75-6.33 22.66-13.33 28.5s-16.83 21.5-16.83 21.5c-.17 20.83-5.67 27.16-5.67 27.16l-5.67 1.5h-14s-2.5-7-3-11.16c-.17-1.39.82-3.72 2.2-6.22a77.92 77.92 0 009.15-29.63l.65-6.15c-1.18-38.17 14-50.56 20.37-54.09a6.24 6.24 0 003.17-4.84l1.13-10.91 37.66 1.85s-.8 3.32.63 11c.29 1.59.68 3.36 1.2 5.33 3 11.49-17.5 25.32-17.66 26.16zM652.63 527.44a97.09 97.09 0 01-5.33 16.31 41.88 41.88 0 00-3.2 14.84v.51a129.17 129.17 0 01-9.27 44.06c-5.53 13.84-12.86 31.85-15.06 35.64-3.66 6.33-1.5 17-1.5 17l-21.2-1.5.37-35.67c-2.21-25.47 5.93-49 10.34-59.63a39.08 39.08 0 003-13.39l1-23.66.31-7s37.48-5.33 40.64 3.17c.87 2.25.66 5.6-.1 9.32z"
        fill="#8e5362"
      />
      <Path
        d="M605.23 522.31l-39.46-1.94 1.13-10.91 37.7 1.85s-.83 3.31.63 11zM652.63 527.44l-40.86-5.49.31-7s37.48-5.33 40.64 3.17c.88 2.25.67 5.6-.09 9.32z"
        opacity={0.1}
      />
      <Path
        d="M674.1 454.46l-16.33 71.67-48.33-6.5v-24.67l-4.18 25.35-58-2.84 3-55.5a205.85 205.85 0 006.5-33.83c1.13-12.54 7.07-43.47 9.94-58 1-4.79 1.56-7.81 1.56-7.81s99.34 20.66 105.84 28.16c1.11 1.28 1.84 4 2.29 7.61 2.18 17.52-2.29 56.36-2.29 56.36z"
        fill="#bdd2e8"
      />
      <Path
        d="M558.1 459.13s39.1-20.5 48.63-16.17zM579.43 392.13s32.5 24.67 33.5 31.33zM570.6 477.13s23.5-1 31 5zM612.93 450.75s11.17 36.56 6.33 46.56-9.83-2.34-9.83-2.34z"
        opacity={0.1}
      />
      <Path
        d="M597.24 641.31s-11 1.67-9 28.33 5 31.34 9 31.67 23.5 5.17 22.5-4.67-2-31.66-.67-35 3.63-12.13-1.41-14.3l-1.09 5.14s-10.67-9.84-17-2.67a27.7 27.7 0 00-1.31-5.13c-.63-1.56-2.01-2.37-1.02-3.37z"
        fill="#494457"
      />
      <Path
        d="M798.55 314.13s-2.52 1.41-6.22 3.17c-5.71 2.72-14.22 6.3-20.52 6.83-10.38.88-13.63 1.88-25.5-6.62-9.11-6.52-24.36-15.61-31-19.49l-2.89-1.71-.29-.17v-.12l5.51-15.14 19.5-10.37 4.84 4.15 14.41 12.35s2.25 3.62 5.88 3.37 23 1.37 23 1.37l3.66.6 7.71 1.28z"
        fill="#8e5362"
      />
      <Path
        d="M798.55 314.13s-2.52 1.41-6.22 3.17c-3.91-2-8.77-5.75-6.9-11.92 1.69-5.55 2.15-9.88 3.54-13l7.71 1.28z"
        opacity={0.1}
      />
      <Path
        d="M795.93 287.13s21.75-6.25 20.13 20-18.38 11.88-18.38 11.88-14.25-3.75-11.25-13.63 2.13-15.87 9.5-18.25zM570.43 202.13l-22.66 9.52-.35.15-.25-.12-1.41-.71c-5.86-2.92-26-12.91-38.67-18.84-15-7-12.67-14-12.67-14l-2.16-73.33-3.84-13.17s-2.71-44.64 19-55.83 7.67 64.66 7.67 64.66l1.68 15.76a168.78 168.78 0 005.95 29.77 46.24 46.24 0 011.76 9.81c.67 10.66 5.67 9.95 5.67 9.95a69.61 69.61 0 0122.54 7.66 56.38 56.38 0 017.46 4.72zM651.1 237.13l-19.34-2s5.7-8.48 8.21-16.73a28.42 28.42 0 00.85-3.45c.58-3.27.43-6.3-1.06-8.49-5.66-8.33 33.67-20 33.67-20a96.07 96.07 0 00-.43 13.88 70.23 70.23 0 001 9.61c1.19 6.47 3.56 12.56 8.08 15.68 12.35 8.5-30.98 11.5-30.98 11.5z"
        fill="#8e5362"
      />
      <Path
        d="M651.1 237.13l-19.34-2s5.7-8.48 8.21-16.73c2.23 3.17 3 3.1 6.13 3.73 0 0 19.52 2.89 27.92-12.18 1.19 6.47 3.56 12.56 8.08 15.68 12.33 8.5-31 11.5-31 11.5zM715.35 298.02a10.71 10.71 0 00.08 1.78l-3-3.49-.25-.29 5.51-15.14 19.5-10.37 4.84 4.15c-6.93 2.65-26.37 11.06-26.68 23.36zM570.43 202.13l-22.66 9.52h-.6l-1.75.12s.13-.29.34-.83c1.89-4.59 10.66-27 6.87-37.56a56.38 56.38 0 017.46 4.72zM676.39 398.07c-8.82-.79-97.06-8.95-105.29-21.94a45.64 45.64 0 00-4.4-6c1-4.79 1.56-7.81 1.56-7.81s99.34 20.66 105.84 28.16c1.11 1.26 1.84 3.97 2.29 7.59z"
        opacity={0.1}
      />
      <Path
        d="M646.1 223.13s19.73 2.92 28.07-12.41c0 0 13.93 11.44 22.26 12.42s47 49.66 47 49.66-31 10-29 26l-14.67-17s-7.33-.34-13.66 20c0 0-7.67 11.66-6.67 48.66s-2.33 45.67-2.33 45.67-97.34-8.33-106-22-10-7-10-7-1.34-26 7.66-47 7-81.33 7-81.33 1-29.67-28.33-27c0 0 12.33-28.67 6.67-39.67 0 0 16.87 4.58 28.89 4.72a49.42 49.42 0 0121.28 5c3.61 1.77 6.94 4 8.83 6.66 5.66 8 15 4.34 15 4.34a151.41 151.41 0 008.7 21.33c.39.73.78 1.45 1.18 2.14.58 1 1.18 2 1.78 2.82 2.4 3.43 3.08 3.34 6.34 3.99z"
        fill="#ff7590"
      />
      <Path
        d="M673 200.31a34.24 34.24 0 01-3.54 4.25 34.89 34.89 0 01-25 10.54 35.91 35.91 0 01-3.61-.18c.58-3.27.43-6.3-1.06-8.49-5.66-8.33 33.67-20 33.67-20a96.07 96.07 0 00-.46 13.88z"
        opacity={0.1}
      />
      <Path
        d="M679.43 179.13a35 35 0 11-35-35 34.87 34.87 0 0135 35z"
        fill="#8e5362"
      />
      <Path
        d="M696.77 259.13l.72 23.42s10.45-8.42 10.78-16.42-11.5-7-11.5-7zM612.43 282.55s27.5 37.75 43.5 41.58-37.5-29.34-43.5-41.58zM641.6 286.48s15.33 17.32 26.33 19.48zM587.6 330.13s28 27.5 44 29.17zM679.43 179.13a34.87 34.87 0 01-10 24.46l-3.84-2.39a10.62 10.62 0 01-3.74-3.25c-1.27-2.12-.9-4.78-.8-7.25.21-5.23-1.23-10.89-5.32-14.16-6.63-5.31-17.26-2.37-24-7.58a23.66 23.66 0 01-4.25-4.73l-6.32-8.47c-.38-.5-.84-1-1.33-1.59a35 35 0 0159.54 25z"
        opacity={0.1}
      />
      <Path
        d="M623.34 134.31c3.13-2.39 6.95-3.65 10.47-5.41s6.63-4 10.15-5.5 7.59-2.38 11.24-1.13c7.83 2.69 10.79 13.63 18.84 15.55 1.36.32 2.76.35 4.13.56a18.8 18.8 0 0112.65 8.85 29.46 29.46 0 014 15.21 24.37 24.37 0 01-1.27 8.73c-2.38 6.53-8.35 11-12.38 16.65a31.66 31.66 0 00-5.79 18.49l-9.76-6.07a10.52 10.52 0 01-3.74-3.25c-1.27-2.12-.9-4.78-.8-7.25.21-5.23-1.23-10.89-5.31-14.16-6.64-5.31-17.27-2.37-24-7.58a23.66 23.66 0 01-4.25-4.73l-6.32-8.47c-1.37-1.84-4-4.13-4.6-6.37-1.33-4.82 3.22-11.41 6.74-14.12z"
        fill="#362133"
      />
      <Path
        d="M666.71 199.11a10.52 10.52 0 01-3.74-3.25c-1.27-2.12-.9-4.78-.8-7.25.21-5.23-1.23-10.89-5.32-14.16-6.63-5.31-17.26-2.37-24-7.58a23.66 23.66 0 01-4.25-4.73l-6.32-8.47c-1.38-1.84-4-4.13-4.6-6.37-1.09-3.86 1.67-8.89 4.62-12.11-3.31 3.06-6.94 8.87-5.71 13.2.64 2.24 3.23 4.53 4.6 6.37l6.32 8.47a23.66 23.66 0 004.25 4.73c6.71 5.21 17.34 2.27 24 7.58 4.08 3.27 5.52 8.93 5.31 14.16-.1 2.47-.47 5.13.8 7.25a10.52 10.52 0 003.74 3.25l9.76 6.07c0-.58 0-1.16.06-1.73z"
        opacity={0.1}
      />
      <Path
        d="M531.84 616.25s-9.74 2-7.74 28.71 5 31.34 9 31.67 23.5 5.17 22.5-4.67-2-31.66-.67-35 6.61-12.31 1.57-14.48l-4.07 5.32s-10.67-9.84-17-2.67c0 0-5.92-6.55-3.59-8.88z"
        fill="#494457"
      />
      <Path
        d="M538 632.81c2.11 1 4.08 2.22 6.18 3.22a13.87 13.87 0 006.71 1.58 4.68 4.68 0 002.74-.95M602.1 658.93c1.25 1.15 2.22 2.62 3.63 3.57 2 1.34 4.56 1.42 7 1.45a2.84 2.84 0 001.2-.15 2.92 2.92 0 001.07-1l1.31-1.69"
        opacity={0.1}
      />
      <Path
        d="M437.77 215.46s-4.5-42.66 13-32.16 5.45 29.16 5.45 29.16l-4.11 13.17zM465.77 79.13l10-9.82s19.17-55.17 38.17-41-24.08 50-24.08 50l-11.42 13.33z"
        fill="#ffc1c7"
      />
      <Path
        d="M319.43 297.31l-.5 11.33s9.17 16 13 17.17 3.5-33.84 3.5-33.84z"
        fill="#ff5374"
      />
      <Path
        d="M319.43 297.31l-.5 11.33s9.17 16 13 17.17 3.5-33.84 3.5-33.84z"
        opacity={0.1}
      />
      <Path
        fill="#ffc1c7"
        d="M334.76 284.87l.68 41.76h46.49l-3.5-24.33-43.67-17.43z"
      />
      <Path
        d="M345.6 389.13l2.17 13.33 27.17 60.34s12.33 19 2.33 35-20.33 41-22 56.16-14.83 30-14.83 30l28.67 12.17s2-23.83 10-35 33.66-60.33 33.66-60.33 8.17-7.34 6.34-29.17-1.67-37.17-1.67-37.17l-2.83-34.83z"
        fill="#575988"
      />
      <Path
        d="M345.6 389.13l2.17 13.33 27.17 60.34s12.33 19 2.33 35-20.33 41-22 56.16-14.83 30-14.83 30l28.67 12.17s2-23.83 10-35 33.66-60.33 33.66-60.33 8.17-7.34 6.34-29.17-1.67-37.17-1.67-37.17l-2.83-34.83z"
        opacity={0.1}
      />
      <Path
        d="M342.93 582.13s-30.67 9.33-20.5 24.67 43.17 44.5 56.5 43.5 8-10.84 8-10.84l-11.17-11s-2-23.33-1.16-30.16-9.5-10-10.84-6-20.83-10.17-20.83-10.17z"
        fill="#c4747b"
      />
      <Path
        d="M362.26 308.89l-24.31 2.69a8.72 8.72 0 00-7.76 8.89c.26 9.72.43 25.18-.93 28-2 4.17-8.16 33.84 18.5 54l36.17 11.5-58 4.17 1.84 32.17 9-5 110 5s31.17-3.17 10-37-66.16-67-66.16-67l-.5-26.34-3.34-7.66z"
        fill="#575988"
      />
      <Path d="M392.43 413.46a31.24 31.24 0 0125 0z" opacity={0.1} />
      <Path
        d="M328.77 417.96s-35.83-5.16-36 1.67 5 73.33 22.17 68.83 9.83-26.5 9.83-26.5l12.84-12.33s1.33-6.83-7.17-6.17z"
        fill="#c4747b"
      />
      <Path
        d="M388.1 231.46l14.16 16.17s6.17 7.67 13.5-4 21-32.5 21-32.5 15.17 13.33 19.17 10.67-36.83 55.51-36.83 55.51-13 19.16-32.34-3.5l-5.66-2.67z"
        fill="#ff5374"
      />
      <Path
        d="M388.1 231.46l14.16 16.17s6.17 7.67 13.5-4 21-32.5 21-32.5 15.17 13.33 19.17 10.67-36.83 55.51-36.83 55.51-13 19.16-32.34-3.5l-5.66-2.67z"
        opacity={0.1}
      />
      <Circle cx={344.78} cy={136.25} r={29.5} fill="#ffc1c7" />
      <Path
        d="M344.77 152.13s-25.35 12-22.35 33 3.5 47.5 3.5 47.5 11.51 17-3.75 49.5c0 0-9.75 16.5-3.25 28.5 0 0 7.21-19 25.85-5s48.65 20.5 48.65 20.5-15.5-68-6-77.5c0 0 16.5-24.5 1.5-40s-7.5-30-7.5-30l48.17-25.83s10.16.16 23.83-21.17a367.33 367.33 0 0129.17-39s-10.34-15.5-20-16.67c0 0-3.84 4-6.5 14.84-1.42 5.75-11.07 15.36-19.8 23.11-6.2 5.5-12.18 11.21-18.15 17-4.42 4.25-14.26 10.33-35.72 13.77-35.32 5.63-37.65 7.45-37.65 7.45z"
        opacity={0.1}
      />
      <Path
        d="M344.77 150.13s-25.35 12-22.35 33 3.5 47.5 3.5 47.5 11.51 17-3.75 49.5c0 0-9.75 16.5-3.25 28.5 0 0 7.21-19 25.85-5s48.65 20.5 48.65 20.5-15.5-68-6-77.5c0 0 16.5-24.5 1.5-40s-7.5-30-7.5-30l48.17-25.83s10.16.16 23.83-21.17a367.33 367.33 0 0129.17-39s-10.34-15.5-20-16.67c0 0-3.84 4-6.5 14.84-1.42 5.75-11.07 15.36-19.8 23.11-6.2 5.5-12.18 11.21-18.15 17-4.42 4.25-14.26 10.33-35.72 13.77-35.32 5.63-37.65 7.45-37.65 7.45z"
        fill="#ff5374"
      />
      <Path
        d="M366.6 275.8s19.66 29 20.16 34c.01 0-2.99-31.17-20.16-34zM340.77 178.13s13.71 16.5 33.52 2.67a42.49 42.49 0 01-33.52-2.67z"
        opacity={0.1}
      />
      <Path
        d="M351.4 105.4a8.85 8.85 0 00-2.16-4c-4.52-5.67-9.43-11.49-16.16-14.18a22.34 22.34 0 00-25.49 7.26c-2.42 3.26-3.86 7.14-5.95 10.63-3.86 6.46-9.83 11.44-16.25 15.38-3.87 2.37-7.95 4.42-11.6 7.11-13.27 9.77-19.4 27.83-16.06 44 1.47 7.08 4.58 14.06 3.74 21.25-.65 5.58-3.62 10.58-6.63 15.32s-6.22 9.54-7.42 15 .06 11.93 4.59 15.24c1.67 1.22 3.68 2 5.11 3.46a16.61 16.61 0 012.35 3.74 36.77 36.77 0 0022.83 18c4.3 1.13 10.07.72 11.64-3.44a9 9 0 01.81-2.11c1.42-2 4.55-.88 6.75.27a41.79 41.79 0 0016.13 4.63 13.45 13.45 0 006.61-.79 12.21 12.21 0 004.45-3.85c5.26-6.85 6.77-15.8 7.67-24.39.59-5.59 1-11.28-.07-16.8-1.7-8.86-7.09-17.14-6.29-26.12.85-9.6 8.64-17.45 9.83-27a20.59 20.59 0 00-3.51-14.19 20.29 20.29 0 01-2.67-4.18 4.15 4.15 0 01.8-4.59 7 7 0 012.08-1c6.43-2.47 9.86-8.91 10.32-15.5.18-2.5 0-4.8.69-7.24 1.1-3.77 4.43-7.89 3.86-11.91z"
        opacity={0.1}
      />
      <Path
        d="M349.4 105.4a8.85 8.85 0 00-2.16-4c-4.52-5.67-9.43-11.49-16.16-14.18a22.34 22.34 0 00-25.49 7.26c-2.42 3.26-3.86 7.14-5.95 10.63-3.86 6.46-9.83 11.44-16.25 15.38-3.87 2.37-7.95 4.42-11.6 7.11-13.27 9.77-19.4 27.83-16.06 44 1.47 7.08 4.58 14.06 3.74 21.25-.65 5.58-3.62 10.58-6.63 15.32s-6.22 9.54-7.42 15 .06 11.93 4.59 15.24c1.67 1.22 3.68 2 5.11 3.46a16.61 16.61 0 012.35 3.74 36.77 36.77 0 0022.83 18c4.3 1.13 10.07.72 11.64-3.44a9 9 0 01.81-2.11c1.42-2 4.55-.88 6.75.27a41.79 41.79 0 0016.13 4.63 13.45 13.45 0 006.61-.79 12.21 12.21 0 004.45-3.85c5.26-6.85 6.77-15.8 7.67-24.39.59-5.59 1-11.28-.07-16.8-1.7-8.86-7.09-17.14-6.29-26.12.85-9.6 8.64-17.45 9.83-27a20.59 20.59 0 00-3.51-14.19 20.29 20.29 0 01-2.67-4.18 4.15 4.15 0 01.8-4.59 7 7 0 012.08-1c6.43-2.47 9.86-8.91 10.32-15.5.18-2.5 0-4.8.69-7.24 1.1-3.77 4.43-7.89 3.86-11.91z"
        fill="#bb7684"
      />
      <G opacity={0.1}>
        <Path d="M289.77 258.01a9.43 9.43 0 00-.82 2.11c-.93 2.48-3.36 3.62-6.07 3.9 3.77.38 7.8-.53 9.07-3.9a9.43 9.43 0 01.82-2.11 2.5 2.5 0 011-.85c-1.52-.44-3.08-.42-4 .85zM349.45 105.39a8.63 8.63 0 00-2.16-4c-4.52-5.67-9.43-11.49-16.16-14.18a21 21 0 00-9.2-1.38 20.42 20.42 0 016.2 1.38c6.73 2.69 11.64 8.51 16.16 14.18a8.63 8.63 0 012.16 4c.57 4-2.75 8.15-3.85 11.85-.73 2.44-.52 4.73-.69 7.24-.47 6.58-3.89 13-10.33 15.5a7 7 0 00-2.08 1 4.15 4.15 0 00-.79 4.6 20.24 20.24 0 002.66 4.18 20.57 20.57 0 013.52 14.18c-1.2 9.57-9 17.41-9.84 27-.8 9 4.6 17.26 6.29 26.11 1.06 5.52.66 11.21.07 16.8-.9 8.59-2.4 17.55-7.67 24.39a12.17 12.17 0 01-4.44 3.85 9.94 9.94 0 01-3.27.81 12.93 12.93 0 006.27-.81 12.17 12.17 0 004.47-3.78c5.27-6.84 6.77-15.8 7.67-24.39.59-5.59 1-11.28-.07-16.8-1.69-8.85-7.09-17.14-6.29-26.11.86-9.61 8.64-17.45 9.84-27a20.57 20.57 0 00-3.52-14.18 20.24 20.24 0 01-2.66-4.18 4.15 4.15 0 01.79-4.6 7 7 0 012.08-1c6.44-2.48 9.86-8.92 10.33-15.5.17-2.51 0-4.8.69-7.24 1.07-3.77 4.39-7.89 3.82-11.92z" />
      </G>
      <Path
        d="M311.59 458.31a13.51 13.51 0 0013.83 3.82M375.67 629.31a8.49 8.49 0 01-6.9 1.74"
        opacity={0.1}
      />
      <Ellipse
        cx={105.15}
        cy={655.8}
        rx={26.93}
        ry={4.55}
        fill="#00beb3"
        opacity={0.1}
      />
      <Ellipse cx={842.43} cy={746.4} rx={26.93} ry={4.55} fill="#00beb3" />
      <Ellipse
        cx={842.43}
        cy={658.82}
        rx={26.93}
        ry={4.55}
        fill="#00beb3"
        opacity={0.1}
      />
      <Ellipse
        cx={181.51}
        cy={698.05}
        rx={26.93}
        ry={4.55}
        fill="#00beb3"
        opacity={0.1}
      />
      <Ellipse cx={927.6} cy={698.05} rx={40.21} ry={6.8} fill="#00beb3" />
      <Ellipse
        cx={349.46}
        cy={751.28}
        rx={90.76}
        ry={15.34}
        fill="#00beb3"
        opacity={0.1}
      />
      <Path
        d="M944.22 686.93a11.73 11.73 0 003.84-5.79c.49-2.3-.49-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.49s-4.28 3.68-6.89 3.32a10.47 10.47 0 003.24-9.81 4.11 4.11 0 00-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.09-7s-.66-5-2.64-6.23a8.07 8.07 0 00-4-1c-2.34-.08-4.94.15-6.54 1.86-2 2.13-1.47 5.69.26 8s4.35 3.8 6.76 5.42a15 15 0 014.84 4.61 5.08 5.08 0 01.36.82h14.65a40.73 40.73 0 009.03-6.2zM859.06 735.52a11.71 11.71 0 003.83-5.79c.49-2.3-.48-5-2.68-5.89-2.46-.94-5.09.76-7.08 2.49s-4.28 3.68-6.89 3.32a10.47 10.47 0 003.24-9.81 4 4 0 00-.9-2c-1.36-1.46-3.84-.83-5.47.32-5.2 3.66-6.65 10.72-6.68 17.08-.53-2.29-.09-4.68-.1-7s-.66-5-2.64-6.23a8 8 0 00-4-.95c-2.34-.08-4.94.15-6.54 1.86-2 2.13-1.47 5.69.26 8s4.35 3.8 6.77 5.42a15 15 0 014.83 4.61 5.08 5.08 0 01.36.82h14.65a41 41 0 009.04-6.25z"
        fill="#00beb3"
      />
      <Path
        d="M212.01 645.31s-14.05-47.71 2.64-82.82a75.36 75.36 0 006.12-47.3 126.56 126.56 0 00-6.69-22.19"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <Path
        d="M224.43 470.81c0 5.85-10.59 22.8-10.59 22.8s-10.58-16.95-10.58-22.8a10.59 10.59 0 1121.17 0zM241.93 503.2c-3.18 4.9-21.28 13.38-21.28 13.38s.33-20 3.51-24.89a10.59 10.59 0 0117.77 11.51zM241.17 558.54c-5.22 2.64-25.13.82-25.13.82s10.37-17.09 15.59-19.72a10.59 10.59 0 019.54 18.9zM231.16 600.31c-4.7 3.47-24.63 5-24.63 5s7.34-18.6 12-22.08a10.59 10.59 0 0112.59 17zM198.42 517.72c4.2 4.07 23.73 8.29 23.73 8.29s-4.78-19.41-9-23.48a10.59 10.59 0 00-14.75 15.19zM187.34 566.69c5.22 2.63 25.12.81 25.12.81s-10.37-17.09-15.59-19.72a10.59 10.59 0 00-9.53 18.91zM183.09 615.76c4.7 3.48 24.63 5 24.63 5s-7.34-18.6-12-22.07a10.59 10.59 0 00-12.59 17z"
        fill="#00beb3"
      />
      <Path
        d="M178.77 642.31s17.11-3.4 21.68-7.93 25.09-12.45 27.37-6.79 30.8 24.91 11.41 28.31-45.63 4.53-51.33 2.27-9.13-15.86-9.13-15.86z"
        fill="#a8a8a8"
      />
      <Path
        d="M239.26 653.77c-19.39 3.4-45.63 4.53-51.33 2.26-4.35-1.72-7.37-10-8.56-13.87l-.6.15s3.42 13.59 9.13 15.86 31.94 1.13 51.33-2.27c5.6-1 7.2-3.28 6.6-6.2-.45 1.87-2.4 3.34-6.57 4.07z"
        opacity={0.2}
      />
      <Path
        d="M847.94 593.22s5.5 7.19-2.53 18-14.65 20-12 26.77c0 0 12.12-20.15 22-20.43s3.36-12.25-7.47-24.34z"
        fill="#00beb3"
      />
      <Path
        d="M847.94 593.22a9 9 0 011.13 2.26c9.62 11.3 14.74 21.85 5.49 22.11-8.61.25-18.94 15.65-21.42 19.54a9.24 9.24 0 00.29.89s12.12-20.15 22-20.43 3.34-12.28-7.49-24.37z"
        opacity={0.1}
      />
      <Path
        d="M858.16 602.38c0 2.53-.29 4.58-.64 4.58s-.63-2-.63-4.58.35-1.34.7-1.34.57-1.19.57 1.34z"
        fill="#ffd037"
      />
      <Path
        d="M861.66 605.4c-2.22 1.21-4.16 1.94-4.32 1.63s1.49-1.53 3.71-2.74 1.35-.33 1.52 0 1.31-.1-.91 1.11z"
        fill="#ffd037"
      />
      <Path
        d="M818.93 593.22s-5.5 7.19 2.53 18 14.65 20 12 26.77c0 0-12.11-20.15-22-20.43s-3.38-12.25 7.47-24.34z"
        fill="#00beb3"
      />
      <Path
        d="M818.93 593.22a9 9 0 00-1.13 2.26c-9.62 11.3-14.74 21.85-5.49 22.11 8.61.25 18.94 15.65 21.42 19.54a7.16 7.16 0 01-.3.89s-12.11-20.15-22-20.43-3.35-12.28 7.5-24.37z"
        opacity={0.1}
      />
      <Path
        d="M808.71 602.38c0 2.53.29 4.58.64 4.58s.63-2 .63-4.58-.35-1.34-.7-1.34-.57-1.19-.57 1.34z"
        fill="#ffd037"
      />
      <Path
        d="M805.21 605.4c2.22 1.21 4.15 1.94 4.32 1.63s-1.49-1.53-3.71-2.74-1.35-.33-1.52 0-1.31-.1.91 1.11z"
        fill="#ffd037"
      />
      <Path
        d="M810.46 637.08s15.36-.48 20-3.77 23.63-7.23 24.78-2 23.08 26.29 5.74 26.43-40.29-2.7-44.91-5.51-5.61-15.15-5.61-15.15z"
        fill="#a8a8a8"
      />
      <Path
        d="M861.28 655.95c-17.34.14-40.29-2.7-44.91-5.51-3.52-2.14-4.93-9.83-5.39-13.38h-.52s1 12.39 5.6 15.2 27.57 5.65 44.91 5.51c5 0 6.73-1.82 6.64-4.45-.7 1.61-2.61 2.6-6.33 2.63z"
        opacity={0.2}
      />
    </Svg>
  )
}

export default RegisteredImage
