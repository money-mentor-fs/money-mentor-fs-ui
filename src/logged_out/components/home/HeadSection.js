import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Box,
  Card,
  Grid,
  isWidthUp,
  Typography,
  withStyles,
  withWidth,
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import { appConfig } from "../../../app/configs/appConfigs";
import ZoomImage from "../../../shared/components/ZoomImage";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    // backgroundColor: "#91afdc",
    backgroundColor: "#3b77a1",
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        {/*<Typography*/}
                        {/*  variant={isWidthUp("lg", width) ? "h3" : "h4"}*/}
                        {/*>*/}
                        {/*  {appConfig.appName}*/}
                        {/*</Typography>*/}
                        <Typography variant={"h5"}>
                          We provide One stop Solution for all your financial
                          needs!
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                            style={{ textAlign: "justify" }}
                          >
                            We at {appConfig.appName} Services LLP with our
                            expertise in financial domain along with execution
                            capabilities operate as an independent advisor to
                            Mid size and Emerging corporates by developing and
                            executing customised solutions to help them achieve
                            their financial objectives.
                          </Typography>
                          <br />
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                            style={{ textAlign: "justify" }}
                          >
                            We provide various advisory services such as Debt
                            Syndication, Project Financing, Working Capital
                            Financing, Retail Loans, Credit Rating Advisory, Tax
                            Advisory, Book-keeping services and Business and
                            Management Support Services.
                          </Typography>
                          <br />
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Mission and Vision
                            <ul>
                              <li>
                                Committed to High-quality Financial Solutions
                              </li>
                              <li>
                                Customer satisfaction is our most priority
                              </li>
                            </ul>
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                  {/*<Hidden smDown>*/}
                  <Grid item md={6}>
                    <ZoomImage
                      src={`${process.env.PUBLIC_URL}/images/T-finance-photo-2.jpeg`}
                      className={classes.image}
                      alt="header example"
                    />
                  </Grid>
                  {/*</Hidden>*/}
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        // upperColor={"#6784b3"}
        upperColor={"#476d70"}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
