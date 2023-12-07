import React from "react";

const Country = (props) => {
  const { name, population, region, flag, flags } = props.country;
  console.log(props.country);
  return (
    <>
      <div style={{ border: "1px solid yellow", marginBottom: "1rem" }}>
        <h4 style={{ margin: "0", padding: "20px 0px" }}>
          This is {name.common}
        </h4>
        <div>
          <img
            src={flags.png}
            alt=""
            style={{ height: "100px", width: "150px" }}
          />
        </div>
        <p style={{ margin: "0", padding: "20px 0px" }}>
          population : {population}
        </p>
        <p style={{ margin: "0", padding: "20px 0px" }}>
          <small>Region: {region} </small>
        </p>
      </div>
    </>
  );
};

export default Country;
