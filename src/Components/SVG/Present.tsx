const Present = ({ color }: { color: string }) => {
  return (
    <svg
      //   width="264"
      //   height="264"
      viewBox="0 0 264 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M89.5136 5V259H60C29.6243 259 5 234.376 5 204V60C5 29.6243 29.6243 5 60 5H89.5136ZM99.5136 5H204C234.376 5 259 29.6243 259 60V204C259 234.376 234.376 259 204 259H99.5136V5ZM118.5 106.293H237V96.2931H118.5V106.293ZM132 177.278H222.5V167.278H132V177.278Z"
        fill="#fff"
        stroke={color}
        strokeWidth="10"
      />
      <path
        d="M0 60C0 26.8629 26.8629 0 60 0H96V264H60C26.8629 264 0 237.137 0 204V60Z"
        fill={color}
      />
    </svg>
  );
};

export default Present;
