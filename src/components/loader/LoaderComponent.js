import React from "react";
import Loader from "react-loader-spinner";
import { LoaderComponentStyled } from "./LoaderComponentStyled";

const LoaderComponent = () => {
  return (
    <LoaderComponentStyled>
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </LoaderComponentStyled>
  );
};

export default LoaderComponent;
