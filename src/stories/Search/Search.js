// import React from "react";
// import PropTypes from "prop-types";
// import "./search.css";

// export const Search = ({
//   type,
//   label,
//   backgroundColor,
//   size,
//   color,
//   ...props
// }) => {
//   return (
//     <div
//       className={[
//         "storybook-search",
//         `storybook-search--${size}`,
//         `storybook-search--${type}`,
//       ].join(" ")}
//       style={(backgroundColor && { backgroundColor }, color && { color })}
//       {...props}
//     >
//       {label}
//     </div>
//   );
// };

// Search.propTypes = {
//   label: PropTypes.string,

//   backgroundColor: PropTypes.string,

//   type: PropTypes.oneOf(["success", "info", "warning", "error"]),

//   size: PropTypes.oneOf(["large", "small"]),

//   color: PropTypes.string,
// };

// Search.defaultProps = {
//   backgroundColor: "green",
//   type: "success",
//   size: "large",
//   color: "black",
// };
