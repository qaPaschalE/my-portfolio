import React from "react";
const DockerIcon: React.FC<{ color?: string }> = ({
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
    <title>Docker</title>
    <path d="M23.15 10.49a4.32 4.32 0 00-3.58-2.3H17.5V3.34H6.38V8.2H4.43a4.32 4.32 0 00-3.58 2.3 4.2 4.2 0 00.37 4.6l.02.02a4.2 4.2 0 004.22 2.31h.5v-2.23h- .5a2.01 2.01 0 01-2.01-2v-.02a2.01 2.01 0 011.63-1.95l.4-.08v-3.7H9.5v3.7h1.9V8.2h1.2v3.7h1.9V8.2h1.2v3.7h1.9v-3.7h3.1v3.7l.4.08a2.01 2.01 0 011.63 1.95v.02a2.01 2.01 0 01-2.01 2h-.5v2.23h.5a4.2 4.2 0 004.22-2.31l.02-.02a4.2 4.2 0 00.37-4.6zM6.38 7.09V5.94h1.19v1.15H6.38zm2.39 0V5.94h1.19v1.15H8.77zm2.38 0V5.94h1.19v1.15h-1.19zm2.38 0V5.94h1.19v1.15h-1.19z" />
  </svg>
);
export default DockerIcon;
