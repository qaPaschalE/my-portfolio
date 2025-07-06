import React from "react";
const TypescriptIcon: React.FC<{ color?: string }> = ({
  color = "currentColor",
}) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    height="1em"
    width="1em"
  >
    <title>TypeScript</title>
    <path d="M1.5 0 h21 v21 h-21Z M3.2 1.7 h17.5 v17.5 h-17.5Z m.2 14.9v-1.1h4.4v-1.3h-4.4v-1.1h4.4v-1.2h-4.4v-1.1h4.4v-1.2h-4.4v-1.1 h4.4v-1.2h-4.4v-1.1h4.4v-1.2h-4.4v-1.1h4.4v-1.2h-4.4v-1.1h4.4V1.8h1.1v14.8Z M13.8 14.2c.4 0 .7-.1 1-.3.3-.2.5-.4.6-.7s.2-.6.2-1v-4.4h1.1v4.4c0 .6-.1 1.1-.3 1.6-.2.5-.5.8-.9 1.1-.4.3-.9.5-1.5.5s-1.1-.2-1.5-.5c-.4-.3-.7-.7-1-1.1-.2-.4-.3-1-.3-1.6v-4.4h1.1v4.4c0 .4.1.7.2 1 .1.3.3.5.6.7.3.2.6.3 1 .3Z" />
  </svg>
);
export default TypescriptIcon;
