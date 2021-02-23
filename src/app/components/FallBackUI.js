import React, { Component } from "react";
import { toAbsoluteUrl } from "../utils/UtilMethods";
import { Spinner } from "react-bootstrap";
import "./FallBackUi.scss";

class FallBackUi extends Component {
  render() {
    return (
      <>
        <div
          className={
            "align-items-center justify-content-center row col-md-12 fall-back-ui-container"
          }
        >
          <img
            src={toAbsoluteUrl("/images/Money_Mentor_Small.jpg")}
            alt={"Money Mentor Fs Logo"}
          />
          <div
            className={
              "col-md-12 row align-items-center justify-content-center"
            }
          >
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        </div>
      </>
    );
  }
}

export default FallBackUi;
