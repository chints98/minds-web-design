import * as React from "react"

//react imports
import { AnimatePresence, animate, motion } from "framer-motion"

import { Link } from 'react-router-dom'

import { Grid, Row, Col } from "react-flexbox-grid"

import MindsLogoIcon from '../mindsLogoLight.svg'
import ArrowIcon from '../arrow-right.svg'

const GoldText = "#7F661D"
//rough inline styles here
const styles = {

  pageContainer: {
    backgroundColor: '#fff'

  } as const,


  docsContainer: {
    width: "100%",
    backgroundColor: '#fff',
    marginTop: "96px"
  } as const,


  docsHeaderLarge: {
    color: "#1C1D1F",
    fontSize: "34px",
    lineHeight: "48px",
    fontWeight: "700",

  } as const,

  docsHeaderMedium: {
    color: "#1C1D1F",
    fontSize: "28px",
    lineHeight: "39px",
    fontWeight: "700",

  } as const,
  docsHeaderSmall: {
    color: "#1C1D1F",
    fontSize: "23px",
    lineHeight: "32px",
    fontWeight: "700",

  } as const,

  docsBodyNormal: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "400",

  } as const,


  navTopContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    height: "72px",
    border: "1px solid #E8E8EA",
  } as const,

  navBottomContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    border: "1px solid #E8E8EA",
    marginBottom: "-72px"
  } as const,


  navTopText: {
    fontSize: "19px",
    lineHeight: "32px",
    fontWeight: "700",
    color: "#1C1D1F",
  } as const,

  navTopLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "24px 24px 24px 24px",
    gap: "0px",
    minHeight: "32px",
    flexOrder: "1",

  } as const,

  navTopLeftImg: {
    maxWidth: "100%",
    overflow: "visible",
    height: "24px",
    marginRight: "12px",
  } as const,

  navTopRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "24px 24px 24px 24px",
    gap: "12px",
    minHeight: "32px",
    flexOrder: "1",
  } as const,

  navTopLinkDefault: {
    fontSize: "16px",
    lineHeight: "22px",
  } as const,

  navTopLinkLeft: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "500",
  } as const,

  navTopLinkActive: {
    fontSize: "16px",
    lineHeight: "22px",
    textDecoration: "underline",
  } as const,

  footerContainer: {} as const,

  footerLeft: {} as const,

  footerRight: {} as const,

  navLeftContainer: {
    width: "100%",
    backgroundColor: '#fff',
    marginTop: "96px",
    maxHeight: "80%",
    overflow: "hidden",
    overflowY: "scroll"

  } as const,


  navLeftTextContainer: {
    paddingLeft: "16px",
    maxWidth: "172px",

  } as const,

  navLeftTextContainerInner: {
    display: "flex",
    flexDirection: "row",
    padding: "4px 172px 4px 16px",
    gap: "8px",
    maxWidth: "100%",
    backgroundColor: "#FFECB6",
    marginBottom: "12px",
    borderRadius: "2px",

  } as const,

  navLeftTextContainerActive: {
    display: "flex",
    flexDirection: "row",
    padding: "4px 172px 4px 16px",
    gap: "8px",
    maxWidth: "100%",
    backgroundColor: "#FFECB6",
    marginBottom: "12px",
    borderRadius: "2px",

  } as const,

  navLeftTextContainerIter: {
    display: "flex",
    flexDirection: "row",
    padding: "4px 172px 4px 16px",
    gap: "8px",
    maxWidth: "100%",
    backgroundColor: "#FFECB6",
    marginBottom: "12px",
    borderRadius: "2px",

  } as const,

  navLeftTextContainerHover: {
    paddingLeft: "16px",
    height: "24px",
    maxWidth: "100%",
    backgroundColor: "#FFFAED",
    borderRadius: "2px",

  } as const,

  navLeftHeader: {
    color: "#1C1D1F",
    fontSize: "19px",
    lineHeight: "27px",

  } as const,

  navLeftText: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "400",


  } as const,

  navLeftTextHover: {
    color: "#7F661D",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "400",

  } as const,

  navLeftTextActive: {
    color: "#7F661D",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "700",

  } as const,


  navRightContainer: {
    width: "100%",
    backgroundColor: '#fff',
    borderLeft: "2px solid #7F661D",
    marginTop: "96px"
  } as const,


  navRightActive: {
    color: "#7F661D",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "700",

  } as const,

  docsActionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "52px",
    padding: "8px 8px 8px 8px",
    marginTop: "64px",
    gap: "8px",

  } as const,

  docsActionInnerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "52px",
    padding: "8px 8px 8px 8px",
    marginTop: "64px",
    gap: "8px",

  } as const,

  buttonPrimaryAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    minWidth: "52px",
    maxHeight: "38px",
    padding: "8px 24px",
    gap: "8px",
    border: "1px solid #FFD048",
    backgroundColor: "#FFD048",
    borderRadius: "100px",
  } as const,

  buttonPrimaryText: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "700",
    letterSpacing: "0.16px"

  } as const,

  buttonPrimaryHoverText: {

  } as const,

  buttonOutlineAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxHeight: "38px",
    minWidth: "52px",
    padding: "8px 24px",
    gap: "8px",
    border: "1px solid #D0D2D5",
    borderRadius: "100px",
  } as const,


  buttonSecondaryAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxHeight: "38px",
    minWidth: "52px",
    padding: "8px 24px",
    gap: "8px",
    backgroundColor: "#fff",
    border: "1px solid #FFD048",
    borderRadius: "100px",

  } as const,

}

//variants for propagating animations via fremer-motion
const navLeftContainerVar = {
  default: {
    backgroundColor: "#fff"
  }, active: {
    backgroundColor: "#FFECB6"

  }, hover: {
    backgroundColor: "#FFECB6",
    transition: {
      type: "tween",
      duration: 0.14,
    },
  },
}

const navLeftLinkVar = {
  default: {
    color: "#1C1D1F"
  },
  hover: {
    color: '#7F661D',
    transition: {
      type: "tween",
      duration: 0.14,
    },
  }
}

const topLinkVar = {
  default: {
    color: "#1C1D1F",
    textDecoration: "none"
  }, active: {
    color: "#7F661D",
    textDecoration: "underline",
  }, hover: {
    color: "#7F661D",
    transition: {
      type: "tween",
      duration: 0.12,
    },
    textDecoration: "underline",

  },

}

const buttonPrimaryVar = {
  default: {
    backgroundColor: "#FFD048",

  }, hover: {
    backgroundColor: "#fff",
    transition: {
      type: "tween",
      duration: 0.14,
    }
  },

}

const buttonSecondaryVar = {
  default: {
    backgroundColor: "#fff",


  }, hover: {
    backgroundColor: "#FFD048",
    transition: {
      type: "tween",
      duration: 0.14,
    }
  },

}


const buttonBaseVar = {
  default: {
    opacity: 1,

  }, hover: {
    backgroundColor: "#D0D2D5",
    transition: {
      type: "tween",
      duration: 0.14,
    }

  },
}


//style rough layout and docs page here.

function ExampleLayout(): JSX.Element {
  return (
    <motion.div>
      <motion.div style={styles.navTopContainer}>
        <motion.div style={styles.navTopLeft}>
          <img style={styles.navTopLeftImg} src={MindsLogoIcon} />
          <motion.a style={styles.navTopText}>Developers</motion.a>

        </motion.div>
        <motion.div style={styles.navTopRight}>
          <Link to="/Pages/ExampleLandingDocs" style={{ textDecoration: "none" }}>
            <motion.a style={styles.navTopLinkActive}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"
              href="/Pages/ExampleLayout"

            >Home</motion.a>
          </Link>

          <Link to="/Pages/ExampleLayout" style={{ textDecoration: "none" }}>
            <motion.a style={styles.navTopLinkActive}
              variants={topLinkVar}
              initial="active"
              whileHover="hover"

            >Docs</motion.a>
          </Link>




          <Link to="/Pages/DocsTemplate" style={{ textDecoration: "none" }}>
            <motion.a style={styles.navTopLinkDefault}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"

            >Contribute</motion.a>

          </Link>



          <motion.a style={styles.navTopLinkDefault}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"
              href="https://gitlab.com/minds"
              target="_blank"

            >Repositories</motion.a>



          <motion.a style={styles.navTopLinkDefault}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"
              href="https://www.minds.com"
              target="_blank"

            >Minds.com</motion.a>




        </motion.div>
      </motion.div>
      <Grid fluid={true}>
        <Row around="xs">
          <Col xs={2}>
            <motion.div style={styles.navLeftContainer}>
              <motion.div style={styles.navLeftTextContainer}>
                <motion.h2 style={styles.navLeftHeader}>Getting Started</motion.h2>
                <motion.div
                  style={styles.navLeftTextContainerActive}>
                  <motion.a style={styles.navLeftTextActive}>Introduction</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <Link to="/Pages/DocsTemplate" style={{ textDecoration: "none" }}>
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Template</motion.a>

                  </Link>

                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >
                    Example
                  </motion.a>

                </motion.div>

                <motion.h2 style={styles.navLeftHeader}>Example topic</motion.h2>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>

                <motion.h2 style={styles.navLeftHeader}>Example topic</motion.h2>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>

                <motion.h2 style={styles.navLeftHeader}>Example topic</motion.h2>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.a style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Example</motion.a>
                </motion.div>

                <motion.h2 style={styles.navLeftHeader}>Example topic</motion.h2>
              </motion.div>
            </motion.div>


          </Col>

          <Col xs={8}>
            <motion.div style={styles.docsContainer}>
              <motion.div>
                <h1 style={styles.docsHeaderLarge}>Welcome to the Minds stack</h1>
                <p style={styles.docsBodyNormal}>Minds is a free & open-source, encrypted and reward-based social networking platform. Our roadmap, code, project management system, and more all reside in GitLab.</p>
                <h3 style={styles.docsHeaderSmall}>Repositories</h3>
                <p style={styles.docsBodyNormal}>The Minds repository contains multiple git submodule repositories:</p>
                <p style={styles.docsBodyNormal}>
                  <ul>
                    <li>Engine - Backend code & APIs</li>
                    <li>Front - Client side Angular2 web app</li>
                    <li>Sockets - WebSocket server for real-time communications</li>
                    <li>Mobile - React Native mobile apps</li>
                  </ul>
                </p>
                <h2 style={styles.docsHeaderMedium}>Installation</h2>
                <h3 style={styles.docsHeaderSmall}>Development System Requirements</h3>
                <p style={styles.docsBodyNormal}>
                  <ul>
                    <li>Any modern x86_64 multi-core CPU that supports virtualization.</li>
                    <li>16GB of RAM (of which around 7.5GB should be devoted to Docker VM on macOS and Windows).</li>
                    <li>3GB storage for Minds repositories and packages, and at least 20GB for Docker VM/Images.</li>
                    <li>Internet connectivity (only needed for downloading and provisioning the stack).</li>
                  </ul>
                </p>
              </motion.div>

              <motion.div style={styles.docsActionContainer}>
                <motion.div style={styles.docsActionInnerContainer}>
                  <motion.div style={styles.buttonOutlineAction}
                    variants={buttonBaseVar}
                    initial="default"
                    whileHover="hover"
                  >
                    <a style={styles.buttonPrimaryText}>Edit</a>
                  </motion.div>
                </motion.div>
                <motion.div style={styles.docsActionInnerContainer}>
                  <motion.div style={styles.buttonPrimaryAction}
                    variants={buttonPrimaryVar}
                    initial="default"
                    whileHover="hover"
                  >
                    <Link to='/Pages/DocsTemplate' style={{ textDecoration: "none" }}>
                      <a style={styles.buttonPrimaryText}>Template</a>
                    </Link>
                    <img src={ArrowIcon} style={{ height: "20px" }}></img>
                  </motion.div>
                </motion.div>
              </motion.div>




            </motion.div>
          </Col>


          <Col xs={2}>
            <motion.div style={styles.navRightContainer}>
              <motion.div style={styles.navLeftTextContainer}>
                <motion.p style={styles.navLeftTextActive}>Repositories</motion.p>
                <motion.p
                  style={styles.navLeftText}
                  variants={navLeftLinkVar}
                  initial="default"
                  whileHover="hover"

                >Installation</motion.p>
                <motion.p style={styles.navLeftText}
                  variants={navLeftLinkVar}
                  initial="default"
                  whileHover="hover"

                >System requirements</motion.p>

              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Grid>

      <motion.div style={styles.navBottomContainer}>
        <motion.div style={styles.navTopLeft}>
          <img style={styles.navTopLeftImg} src={MindsLogoIcon} />
          <motion.a style={styles.navTopText}>Developers</motion.a>

        </motion.div>
        <motion.div style={styles.navTopRight}>
          <Link to="/Pages/ExampleLandingDocs" style={{ textDecoration: "none" }}>
            <motion.a style={styles.navTopLinkActive}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"
              href="/Pages/ExampleLayout"

            >Home</motion.a>
          </Link>

          <Link to="/Pages/ExampleLayout" style={{ textDecoration: "none" }}>
            <motion.a style={styles.navTopLinkActive}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"

            >Docs</motion.a>
          </Link>




          <Link to="/Pages/ExampleLandingDocs" style={{ textDecoration: "none" }}>
            <motion.a style={styles.navTopLinkDefault}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"

            >Bounties</motion.a>

          </Link>


            <motion.a style={styles.navTopLinkDefault}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"
              href="https://gitlab.com/minds"
              target="_blank"

            >Repositories</motion.a>
            <motion.a style={styles.navTopLinkDefault}
              variants={topLinkVar}
              initial="default"
              whileHover="hover"
              href="https://www.minds.com"
              target="_blank"
            >Minds.com</motion.a>



        </motion.div>
      </motion.div>


    </motion.div>

  )

}
export default ExampleLayout;
