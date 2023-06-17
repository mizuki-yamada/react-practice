import React from "react";

const CreateText = (props) => {
   const { color, children }=props;
  const contentAStyle = {
    color: color,
    fontSize: "32px",
  };

  return (
    <>
          <p style={contentAStyle}>{children}</p>
    </>
  );
};

export default CreateText;
