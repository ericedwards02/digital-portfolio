export const icons: Record<string, React.JSX.Element> = {
  ChevronUp: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-up"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  ),
  ChevronDown: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-down"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  typescript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g
        fill="none"
        stroke="#8aadf4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <path d="M4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5" />
        <path d="M12.5 8.75c0-.69-.54-1.25-1.2-1.25h-.6c-.66 0-1.2.56-1.2 1.25S10.04 10 10.7 10h.6c.66 0 1.2.56 1.2 1.25s-.54 1.25-1.2 1.25h-.6c-.66 0-1.2-.56-1.2-1.25m-3-3.75v5M5 7.5h3" />
      </g>
    </svg>
  ),
  react: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g
        fill="none"
        stroke="#8aadf4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <path d="M8 11.3c4.14 0 7.5-1.28 7.5-2.86S12.14 5.58 8 5.58S.5 6.86.5 8.44s3.36 2.87 7.5 2.87Z" />
        <path d="M5.52 9.87c2.07 3.6 4.86 5.86 6.23 5.07c1.37-.8.8-4.34-1.27-7.93S5.62 1.16 4.25 1.95s-.8 4.34 1.27 7.92" />
        <path d="M5.52 7.01c-2.07 3.59-2.64 7.14-1.27 7.93s4.16-1.48 6.23-5.07c2.07-3.58 2.64-7.13 1.27-7.92c-1.37-.8-4.16 1.47-6.23 5.06" />
        <path d="M8.5 8.44a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5" />
      </g>
    </svg>
  ),
  vite: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          stroke="#c6a0f6"
          d="m11 5.5l3.5-1l-6.5 11l-6.5-11l3.5 1"
          strokeWidth="1"
        />
        <path
          stroke="#eed49f"
          d="m6 1.5l-.5 5l2-1l-1 3L8 8v3l4-7.5l-2 .5L11.5.5Z"
          strokeWidth="1"
        />
      </g>
    </svg>
  ),
  go: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="#7dc4e4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.48 8.06l-4.85.48m4.85-.48a4.98 4.98 0 0 1-4.54 5.42a5 5 0 1 1 2.95-8.66l-1.7 1.84a2.5 2.5 0 0 0-4.18 2.06c.05.57.3 1.1.69 1.51c.25.27 1 .83 1.78.82c.8-.02 1.58-.25 2.07-.81c0 0 .8-.96.68-1.88M2.5 8.5l-2 .01m1.5 2h1.5m-2-3.99l2-.02"
        strokeWidth="1"
      />
    </svg>
  ),
  tailwind: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="#7dc4e4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 2.5q-3 0-3.75 3.33C5 4.73 5.88 4.31 6.87 4.58c.58.16.98.62 1.43 1.13c.74.83 1.6 1.79 3.45 1.79q3 0 3.75-3.33c-.75 1.1-1.63 1.52-2.63 1.25c-.57-.16-.97-.62-1.42-1.13C10.7 3.46 9.85 2.5 8 2.5m-3.75 6q-3 0-3.75 3.33c.75-1.1 1.63-1.52 2.63-1.25c.57.16.97.62 1.42 1.13c.74.83 1.6 1.79 3.45 1.79q3 0 3.75-3.33c-.75 1.1-1.63 1.52-2.62 1.25c-.58-.16-.98-.62-1.43-1.13c-.74-.83-1.6-1.79-3.45-1.79"
        strokeWidth="1"
      />
    </svg>
  ),
  javascript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
    >
      <g
        fill="none"
        stroke="#eed49f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      >
        <path d="M4.5 11a1.5 1.5 0 0 0 3 0V7.5m5 1.25c0-.69-.537-1.25-1.2-1.25h-.6c-.663 0-1.2.56-1.2 1.25S10.037 10 10.7 10h.6c.663 0 1.2.56 1.2 1.25s-.537 1.25-1.2 1.25h-.6c-.663 0-1.2-.56-1.2-1.25"></path>
        <path d="M4 1.5h8c1.385 0 2.5 1.115 2.5 2.5v8c0 1.385-1.115 2.5-2.5 2.5H4A2.495 2.495 0 0 1 1.5 12V4c0-1.385 1.115-2.5 2.5-2.5"></path>
      </g>
    </svg>
  ),
  html: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          stroke="#f5a97f"
          d="M1.5 1.5h13L13 13l-5 2l-5-2z"
          strokeWidth={1}
        ></path>
        <path
          stroke="#cad3f5"
          d="M11 4.5H5l.25 3h5.5l-.25 3l-2.5 1l-2.5-1l-.08-1"
          strokeWidth={1}
        ></path>
      </g>
    </svg>
  ),
  docker: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="#8aadf4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M.5 8.5H11l.75-.5a5.35 5.35 0 0 1 0-3.5c1 .6 1 1.88 1.74 2c.77-.09 1.23.01 2 .52c0 0-.97 1.77-2.5 1.98c-1.93 3.65-4.5 5.5-6.98 5.5C0 14.5.5 8.5.5 8.5m1 0v-2m0 0h8m-6 2v-4m0 0h4m-2-2h2m-2 6v-6m2 6v-6m2 6v-2"
        strokeWidth={1}
      ></path>
    </svg>
  ),
  php: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="#8aadf4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M.5 12.5v.74c0 .76.774 1.26 1.5 1.26c.938 0 1.5-.5 1.5-1.255V6c0-1.715 1.494-3.478 3.65-3.501c2.344 0 3.85 1.558 3.85 3c.166 2.99-1.422 4.137-3.504 5v4h8.002V9c.041-.635-.56-1.844-1.367-2.5c-.937-.692-2.073-.997-3.131-1m.5 9v-3M6 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"
        strokeWidth={1}
      ></path>
    </svg>
  ),
  python: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          stroke="#8aadf4"
          d="M8.5 5.5h-3m6 0V3c0-.8-.7-1.5-1.5-1.5H7c-.8 0-1.5.7-1.5 1.5v2.5H3c-.8 0-1.5.7-1.5 1.5v2c0 .8.7 1.5 1.48 1.5"
          strokeWidth={1}
        ></path>
        <path
          stroke="#eed49f"
          d="M10.5 10.5h-3m-3 0V13c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-2.5H13c.8 0 1.5-.7 1.5-1.5V7c0-.8-.7-1.5-1.48-1.5H11.5c0 1.5 0 2-1 2h-2"
          strokeWidth={1}
        ></path>
        <path
          stroke="#8aadf4"
          d="M2.98 10.5H4.5c0-1.5 0-2 1-2h2m0-5"
          strokeWidth={1}
        ></path>
      </g>
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
} as const;
