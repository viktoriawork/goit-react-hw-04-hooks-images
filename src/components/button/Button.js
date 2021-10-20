import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./ButtonStyled";

const Button = ({ onLoadMore }) => {
  return (
    <div className="WrapperForBtn">
      <ButtonStyled type="button" onClick={onLoadMore}>
        Load more
      </ButtonStyled>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
