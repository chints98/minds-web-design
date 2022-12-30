import * as React from "react"

//react imports
import { AnimatePresence, animate, motion } from "framer-motion"

import { Link } from 'react-router-dom'

import { Grid, Row, Col } from "react-flexbox-grid"

import MindsLogoIcon from '../bulb.svg'
import ArrowIcon from '../arrow-right.svg'
import ArrowLeft from '../arrow-left.svg'
//adding support for IBM Plex Mono as a font.

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
    backgroundColor: "#E8E8EA",
    minHeight: "52px",
  } as const,


  navTopLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "24px 24px 24px 24px",
    gap: "12px",
    minHeight: "32px",
    flexOrder: "1",

  } as const,

  navTopLeftImg: {
    maxWidth: "100%",
    overflow: "visible",
    maxHeight: "32px",
    marginRight: "24px",
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
    color: "#1C1D1F",
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

    color: "#1C1D1F",
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
    marginTop: "96px"

  } as const,


  navLeftTextContainer: {
    paddingLeft: "16px",
    maxWidth: "172px",


  } as const,

  navLeftTextContainerInner: {
    paddingLeft: "16px",
    height: "24px",
    maxWidth: "100%",
    backgroundColor: "#FFECB6",
    borderRadius: "2px",

  } as const,

  navLeftTextContainerActive: {
    paddingLeft: "16px",

    height: "24px",
    maxWidth: "100%",
    backgroundColor: "#FFECB6",
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
    maxHeight: "36px",
    minWidth: "52px",
    padding: "8px 12px",
    gap: "8px",
    border: "1px solid #FFD048",
    backgroundColor: "#FFD048",
    borderRadius: "100px",
  } as const,

  buttonPrimaryText: {
    color: "#1C1D1F",
    fontSize: "19px",
    lineHeight: "27px",
    fontWeight: "700",
    textAlign: "center",

  } as const,

  buttonPrimaryHoverText: {

  } as const,

  buttonOutlineAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxHeight: "36px",
    minWidth: "52px",
    padding: "8px 12px",
    gap: "8px",
    border: "1px solid #D0D2D5",
    borderRadius: "100px",
  } as const,


  buttonSecondaryAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxHeight: "36px",
    minWidth: "52px",
    padding: "8px 12px",
    gap: "8px",
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
      duration: 0.12,
    },
  }
}

const topLinkVar = {
  default: {
    textDecoration: "none"
  }, active: {}, hover: {
    textDecoration: "underline",
    transition: {
      type: "ease",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.15,
    }
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

function DocsTemplate(): JSX.Element {
  return (
    <motion.div>
      <motion.div style={styles.navTopContainer}>
        <motion.div style={styles.navTopLeft}>
          <img style={styles.navTopLeftImg} src={MindsLogoIcon} />
          <motion.a style={styles.navTopLinkLeft}
            variants={topLinkVar}
            initial="default"
            whileHover="hover"

          >back to minds.com</motion.a>

        </motion.div>
        <motion.div style={styles.navTopRight}>
          <motion.a style={styles.navTopLinkActive}
                      variants={topLinkVar}
                      initial="default"
                      whileHover="hover"
          
          >Home</motion.a>
          <motion.a style={styles.navTopLinkActive}
          >Docs</motion.a>
          <motion.a style={styles.navTopLinkDefault}
            variants={topLinkVar}
            initial="default"
            whileHover="hover"

          >Contribute</motion.a>
          <motion.a style={styles.navTopLinkDefault}
            variants={topLinkVar}
            initial="default"
            whileHover="hover"

          >Repositories</motion.a>

        </motion.div>
      </motion.div>
      <Grid fluid={true}>
        <Row around="xs">
          <Col xs={2}>
            <motion.div style={styles.navLeftContainer}>
              <motion.div style={styles.navLeftTextContainer}>
                <h2 style={styles.navLeftHeader}>Getting Started</h2>

                <motion.div
                  style={styles.navLeftTextContainerActive}>
                  <motion.p style={styles.navLeftTextActive}>Introduction</motion.p>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.p style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >Installation</motion.p>
                </motion.div>
                <motion.div style={styles.navLeftTextContainerInner}
                  variants={navLeftContainerVar}
                  initial="default"
                  whileHover="hover"
                >
                  <motion.p style={styles.navLeftText}
                    variants={navLeftLinkVar}
                    initial="default"
                    whileHover="hover"
                  >
                    Troubleshooting
                  </motion.p>
                </motion.div>

              </motion.div>

            </motion.div>
          </Col>
          <Col xs={8}>
            <motion.div style={styles.docsContainer}>
              <motion.div>
                <h1 style={styles.docsHeaderLarge}>This is an example of a large header</h1>
                <p style={styles.docsBodyNormal}>Minds is a free & open-source, encrypted and reward-based social networking platform. Our roadmap, code, project management system, and more all reside in GitLab.</p>
                <h3 style={styles.docsHeaderSmall}>This is a small header</h3>
                <p style={styles.docsBodyNormal}>The Minds repository contains multiple git submodule repositories:</p>
                <p style={styles.docsBodyNormal}>
                  <ul>
                    <li>Engine - Backend code & APIs</li>
                    <li>Front - Client side Angular2 web app</li>
                    <li>Sockets - WebSocket server for real-time communications</li>
                    <li>Mobile - React Native mobile apps</li>
                  </ul>
                </p>
                <h2 style={styles.docsHeaderMedium}>This is a medium header</h2>
                <h3 style={styles.docsHeaderSmall}>Another small header</h3>
                <p style={styles.docsBodyNormal}>
                  <ul>
                    <li>Any modern x86_64 multi-core CPU that supports virtualization.</li>
                    <li>16GB of RAM (of which around 7.5GB should be devoted to Docker VM on macOS and Windows).</li>
                    <li>3GB storage for Minds repositories and packages, and at least 20GB for Docker VM/Images.</li>
                    <li>Internet connectivity (only needed for downloading and provisioning the stack).</li>
                  </ul>
                </p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>
                <p style={styles.docsBodyNormal}></p>

              </motion.div>

              <motion.div style={styles.docsActionContainer}>
                <motion.div style={styles.buttonOutlineAction}
                  variants={buttonBaseVar}
                  initial="default"
                  whileHover="hover"
                >
                  <a style={styles.buttonPrimaryText}>Edit</a>
                </motion.div>

                <motion.div style={styles.buttonSecondaryAction}
                  variants={buttonSecondaryVar}
                  initial="default"
                  whileHover="hover"
                >
                                      <img src={ArrowLeft}></img>

                  <Link to= '/Pages/ExampleLayout' style={{textDecoration: 'none'}}>
                  <a style={styles.buttonPrimaryText}>Intro page</a>
                  </Link>
                </motion.div>

                <motion.div style={styles.buttonPrimaryAction}
                  variants={buttonPrimaryVar}
                  initial="default"
                  whileHover="hover"
                >
                  <Link to= '/Pages/DocsTemplate' style={{textDecoration: 'none'}}>
                  <a style={styles.buttonPrimaryText}>Template page 2</a>
                  </Link>
                  <img src={ArrowIcon}></img>
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


    </motion.div>

  )

}
export default DocsTemplate;
