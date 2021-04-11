import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Typography, withStyles} from "@material-ui/core";

import {Accordion, Button} from "react-bootstrap";

const styles = (theme) => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5,
  },
});

function shadeColor(hex, percent) {
  const f = parseInt(hex.slice(1), 16);

  const t = percent < 0 ? 0 : 255;

  const p = percent < 0 ? percent * -1 : percent;

  const R = f >> 16;

  const G = (f >> 8) & 0x00ff;

  const B = f & 0x0000ff;
  return `#${(
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)}`;
}

function FeatureCard(props) {
  const { classes, Icon, color, headline, text } = props;
  return (
    <Fragment>
      <Accordion>
        <Accordion.Toggle variant="link" eventKey="0" as={Button}>
          <Typography variant="h5" paragraph>
            {headline}
          </Typography>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Typography
            variant="h5"
            color="textSecondary"
            style={{ textAlign: "justify" }}
            className={
              "text-align-center align-items-center justify-content-center d-flex flex-row"
            }
          >
            {text}
          </Typography>
        </Accordion.Collapse>
      </Accordion>
    </Fragment>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(FeatureCard);
