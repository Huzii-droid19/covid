import React from "react";

function Progressbar(props) {
  const { completed } = props;

  const containerStyles = {
    justifyContent: "center",
    height: 50,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "rgb(154,220,255,0.3)",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 0.2s ease-in-out",
  };

  const labelStyles = {
    padding: 10,
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
}

export default Progressbar;
