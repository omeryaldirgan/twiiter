import * as React from "react";

function SvgArrow(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12.946 17.363l7.395-7.604a1 1 0 00-1.434-1.394l-6.697 6.887-6.888-6.697a1 1 0 00-1.394 1.433l7.604 7.395a1 1 0 001.414-.02z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrow;
