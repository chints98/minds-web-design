import * as React from "react"

//react imports
import { AnimatePresence, animate, motion } from "framer-motion"

import { Link } from 'react-router-dom'

import { Grid, Row, Col } from "react-flexbox-grid"

import MindsLogoIcon from '../mindsLogoLight.svg'
import ArrowIcon from '../arrow-right.svg'

import landingPicOne from '../standing-23.png'
import landingPicTwo from '../standing-24.png'
import Spline from '@splinetool/react-spline';


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
    gap: "12px",

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

  //other, LANDING PAGE based styles

  heroContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "32px 48px",
    width: "100%",
    minHeight: "440px",
    //border: "1px solid black"


  } as const,

  heroContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "24px",
    paddingLeft: "64px",
    maxWidth: "80%",
    minHeight: "380px",
    //border: "1px solid black"



  } as const,

  heroContentHeader: {
    color: "#1C1D1F",
    fontSize: "34px",
    lineHeight: "48px",
    fontWeight: "700",
    letterSpacing: "0.16px"


  } as const,

  heroContentText: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "400",
    letterSpacing: "0px"
  } as const,

  heroContentLink: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "400",
    letterSpacing: "0px",
    textDecoration: "underline"

  } as const,

  heroImgContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "8px 18px 8px 8px",
    gap: "8px",
    minWidth: "100%",
    minHeight: "90%"
    //border: "1px solid black"



  } as const,

  heroImg: {
    maxWidth: "100%",
    maxHeight: "900px",
    overflow: "hidden",
    margin: "24px 24px 0px 0px",
    paddingLeft: "48px"
  } as const,

  sectionContainer: {
    //border: "1px solid black"
    minHeight: "600px",
    padding: "48px 64px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  } as const,


  landingCardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "24px",
    gap: "8px",
    border: "2px solid #1C1D1F",
    //backgroundColor: "#1C1D1F",
    borderRadius: "4px",
  } as const,

  landingCardTextContainer: {
    flex: "none",
    padding: "24px",
    order: "0",
    flexGrow: "0"
  } as const,

  landingCardActionContainer: {
    flex: "none",
    paddingLeft: "24px",
    order: "1",
    flexGrow: "0"


  } as const,

  altActionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "8px 8px 8px 8px",
    gap: "8px",

  } as const,

  altActionInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: "8px 8px 16px 8px",
    gap: "8px",
  } as const,

  cardTitle: {
    color: "#1C1D1F",
    fontSize: "34px",
    lineHeight: "48px",
    fontWeight: "700",
    letterSpacing: "0.16px"
  } as const,

  cardSubtitle: {
    color: "#1C1D1F",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "700",

  } as const,

  cardText: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "400",
    letterSpacing: "0px"

  } as const,

  cardTextBold: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "700",
    letterSpacing: "0px"

  } as const,


  bodyTextBold: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "700",
    letterSpacing: "0px"

  } as const,

  cardLink: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "700",
    letterSpacing: "0px",
    textDecoration: "underline"
  } as const,

  cardLinkLight: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "400",
    letterSpacing: "0px",
    textDecoration: "underline"

  } as const,


  layoutSectionContainer: {
    //border: "1px solid black"
    padding: "48px 64px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  } as const,

  fullWidthCardContainer: {
    //border: "1px solid black"
    minHeight: "440px",
    padding: "24px",
    margin: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  } as const,

  sectionCardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px",
    gap: "32px",
    height: "456px",
    minWidth: "756px",
    //border: "1px solid black"
  } as const,

  sectionImgContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "8px 18px 8px 8px",
    gap: "8px",
    height: "456px",
    minWidth: "756px",
    //border: "1px solid black"

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


const heroLinkVar = {
  default: {
    textDecoration: "underline",
    color: "#1C1D1F"
  }, hover: {
    textDecoration: "none",
    color: "#1C1D1F",
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



function ExampleLandingDocs(): JSX.Element {
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
              initial="active"
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
        <Row between="xs">
          <Row>
            <motion.div style={styles.heroContainer}>
              <Col>
                <motion.div style={styles.heroContentContainer}>
                  <motion.h1 style={styles.heroContentHeader}>
                    Minds for Developers
                  </motion.h1>
                  <motion.p style={styles.heroContentText}>
                    Welcome to the Minds developer portal. Find everything you need to start contributing to Minds, work with any of the projects in the Minds stack, or get familiar with our product roadmap.
                  </motion.p>
                  <motion.p style={styles.bodyTextBold}>If you’re looking for design tokens and UI resources, check out <motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover" href="https://zeroheight.com/3d3fe81da/p/85c368" target="_blank">design.minds.com</motion.a></motion.p>
                </motion.div>
              </Col>
              <Col>

                <motion.div>
                  <Spline style={styles.heroImgContainer} scene="https://prod.spline.design/od2U43kR8huT1vOn/scene.splinecode" />
                </motion.div>
              </Col>
            </motion.div>
          </Row>


          <motion.div style={styles.sectionContainer}>
            <Col>
              <motion.div style={styles.landingCardContainer}>
                <motion.div style={styles.landingCardTextContainer}>
                  <motion.h1 style={styles.cardTitle}>Get started</motion.h1>
                  <motion.p style={styles.cardText}>Install a version of Minds on your local machine, and troubleshoot any potential issues at install.</motion.p>
                  <motion.p style={styles.cardText}>The Minds repository contains multiple git submodule repositories</motion.p>

                  <motion.p style={styles.cardText}>
                    <ul>
                      <li>Engine</li>
                      <li>Front</li>
                      <li>Mobile</li>
                      <li>Sockets</li>
                    </ul>
                  </motion.p>
                  <motion.p style={styles.cardText}>However, for install, you only need to clone the following repositories</motion.p>
                  <motion.p style={styles.cardTextBold}>SSH</motion.p>
                  <motion.p style={styles.cardText}>git@gitlab.com:minds/minds.git</motion.p>
                  <motion.p style={styles.cardTextBold}>HTTP</motion.p>
                  <motion.p style={styles.cardText}>https://gitlab.com/minds/minds.git</motion.p>
                  <motion.p style={styles.cardText}>The Minds repository contains multiple git submodule repositories</motion.p>

                </motion.div>

                <motion.div style={styles.altActionContainer}>
                  <motion.div style={styles.altActionInner}>
                    <motion.div style={styles.buttonPrimaryAction}
                      variants={buttonPrimaryVar}
                      initial="default"
                      whileHover="hover"
                    >
                      <Link to="/Pages/ExampleLayout" style={{ textDecoration: "none" }}>
                        <motion.a style={styles.buttonPrimaryText}>
                          Action
                        </motion.a>

                      </Link>

                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Col>

            <Col>
              <motion.div style={styles.landingCardContainer}>
                <motion.div style={styles.landingCardTextContainer}>
                  <motion.h1 style={styles.cardTitle}>Get started</motion.h1>
                  <motion.p style={styles.cardText}>Install a version of Minds on your local machine, and troubleshoot any potential issues at install.</motion.p>
                  <motion.p style={styles.cardText}>The Minds repository contains multiple git submodule repositories</motion.p>

                  <motion.p style={styles.cardText}>
                    <ul>
                      <li>Engine</li>
                      <li>Front</li>
                      <li>Mobile</li>
                      <li>Sockets</li>
                    </ul>
                  </motion.p>
                  <motion.p style={styles.cardText}>However, for install, you only need to clone the following repositories</motion.p>
                  <motion.p style={styles.cardTextBold}>SSH</motion.p>
                  <motion.p style={styles.cardText}>git@gitlab.com:minds/minds.git</motion.p>
                  <motion.p style={styles.cardTextBold}>HTTP</motion.p>
                  <motion.p style={styles.cardText}>https://gitlab.com/minds/minds.git</motion.p>
                  <motion.p style={styles.cardText}>The Minds repository contains multiple git submodule repositories</motion.p>

                </motion.div>

                <motion.div style={styles.altActionContainer}>
                  <motion.div style={styles.altActionInner}>
                    <motion.div style={styles.buttonPrimaryAction}
                      variants={buttonPrimaryVar}
                      initial="default"
                      whileHover="hover"
                    >
                      <Link to="/Pages/ExampleLayout" style={{ textDecoration: "none" }}>
                        <motion.a style={styles.buttonPrimaryText}>
                          Action
                        </motion.a>

                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>




              </motion.div>
            </Col>


          </motion.div>




          <motion.div style={styles.sectionContainer}>
            <Col>
              <motion.div style={styles.landingCardContainer}>
                <motion.div style={styles.landingCardTextContainer}>
                  <motion.h1 style={styles.cardTitle}>Get started</motion.h1>
                  <motion.p style={styles.cardText}>Install a version of Minds on your local machine, and troubleshoot any potential issues at install.</motion.p>
                  <motion.p style={styles.cardText}>The Minds repository contains multiple git submodule repositories</motion.p>

                  <motion.p style={styles.cardText}>
                    <ul>
                      <li>Engine</li>
                      <li>Front</li>
                      <li>Mobile</li>
                      <li>Sockets</li>
                    </ul>
                  </motion.p>
                  <motion.p style={styles.cardText}>However, for install, you only need to clone the following repositories</motion.p>
                  <motion.p style={styles.cardTextBold}>SSH</motion.p>
                  <motion.p style={styles.cardText}>git@gitlab.com:minds/minds.git</motion.p>
                  <motion.p style={styles.cardTextBold}>HTTP</motion.p>
                  <motion.p style={styles.cardText}>https://gitlab.com/minds/minds.git</motion.p>
                  <motion.p style={styles.cardText}>The Minds repository contains multiple git submodule repositories</motion.p>

                </motion.div>

                <motion.div style={styles.altActionContainer}>
                  <motion.div style={styles.altActionInner}>
                    <motion.div style={styles.buttonPrimaryAction}
                      variants={buttonPrimaryVar}
                      initial="default"
                      whileHover="hover"
                    >
                      <Link to="/Pages/ExampleLayout" style={{ textDecoration: "none" }}>
                        <motion.a style={styles.buttonPrimaryText}>
                          Action
                        </motion.a>

                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Col>

            <Col>
              <motion.div style={styles.landingCardContainer}>
                <motion.div style={styles.landingCardTextContainer}>
                  <motion.h1 style={styles.cardTitle}>Get started</motion.h1>
                  <motion.p style={styles.cardText}>Install a version of Minds on your local machine, and troubleshoot any potential issues at install.</motion.p>
                  <motion.p style={styles.cardText}>The Minds repository contains multiple git submodule repositories</motion.p>

                  <motion.p style={styles.cardText}>
                    <ul>
                      <li>Engine</li>
                      <li>Front</li>
                      <li>Mobile</li>
                      <li>Sockets</li>
                    </ul>
                  </motion.p>
                  <motion.p style={styles.cardText}>However, for install, you only need to clone the following repositories</motion.p>
                  <motion.p style={styles.cardTextBold}>SSH</motion.p>
                  <motion.p style={styles.cardText}>git@gitlab.com:minds/minds.git</motion.p>
                  <motion.p style={styles.cardTextBold}>HTTP</motion.p>
                  <motion.p style={styles.cardText}>https://gitlab.com/minds/minds.git</motion.p>
                  <motion.p style={styles.cardText}>The Minds repository contains multiple git submodule repositories</motion.p>

                </motion.div>

                <motion.div style={styles.altActionContainer}>
                  <motion.div style={styles.altActionInner}>
                    <motion.div style={styles.buttonPrimaryAction}
                      variants={buttonPrimaryVar}
                      initial="default"
                      whileHover="hover"
                    >
                      <Link to="/Pages/ExampleLayout" style={{ textDecoration: "none" }}>
                        <motion.a style={styles.buttonPrimaryText}>
                          Action
                        </motion.a>

                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>




              </motion.div>
            </Col>


          </motion.div>

          <motion.div style={styles.layoutSectionContainer}>
            <Col>
              <motion.div style={styles.sectionCardContainer}>
                <motion.h1 style={styles.cardTitle}> How we work</motion.h1>
                <motion.p style={styles.cardText}>Minds is a distributed team located on both sides of the Atlantic. We communicate via Minds Chat and Gitlab.</motion.p>
                <motion.p style={styles.cardText}>Our workflow aims to provide a continuous and iterative development model that continuously deploys code, drives momentum to reliably ships products, enables developers to be creative and gives product level responsibilities to small teams.</motion.p>

                <motion.div style={styles.buttonPrimaryAction}
                  variants={buttonPrimaryVar}
                  initial="default"
                  whileHover="hover"
                >
                      <Link to="/Pages/ExampleLayout" style={{ textDecoration: "none" }}>
                        <motion.a style={styles.buttonPrimaryText}>
                          Action
                        </motion.a>

                      </Link>
                </motion.div>

              </motion.div>
            </Col>
            <Col>
              <motion.div style={styles.sectionImgContainer}>
                <img style={styles.heroImg} src={landingPicOne} />
              </motion.div>
            </Col>
          </motion.div>

          <motion.div style={styles.layoutSectionContainer}>
            <Col>
              <motion.div style={styles.sectionImgContainer}>
                <img style={styles.heroImg} src={landingPicTwo} />

              </motion.div>
            </Col>
            <Col>
              <motion.div style={styles.sectionCardContainer}>
                <motion.h1 style={styles.cardTitle}> Minds+</motion.h1>
                <motion.p style={styles.cardText}>Minds is a distributed team located on both sides of the Atlantic. We communicate via Minds Chat and Gitlab.</motion.p>
                <motion.p style={styles.cardText}>Minds is a distributed team located on both sides of the Atlantic. We communicate via Minds Chat and Gitlab.</motion.p>
                <motion.div style={styles.buttonPrimaryAction}
                  variants={buttonPrimaryVar}
                  initial="default"
                  whileHover="hover"
                >
                      <Link to="/Pages/ExampleLayout" style={{ textDecoration: "none" }}>
                        <motion.a style={styles.buttonPrimaryText}>
                          Action
                        </motion.a>

                      </Link>
                </motion.div>

              </motion.div>
            </Col>
          </motion.div>

          <motion.div style={styles.fullWidthCardContainer}>
            <motion.h1 style={styles.cardTitle}>Resources</motion.h1>

            <motion.p style={styles.cardSubtitle}> Pinned repositories</motion.p>

            <motion.p style={styles.cardText}><motion.a style={styles.cardLinkLight} variants={heroLinkVar} initial="default" whileHover="hover" href="https://gitlab.com/minds" target="_blank">Minds frontend</motion.a></motion.p>
            <motion.p style={styles.cardText}><motion.a style={styles.cardLinkLight} variants={heroLinkVar} initial="default" whileHover="hover" href="https://gitlab.com/minds" target="_blank">Minds engine</motion.a></motion.p>
            <motion.p style={styles.cardText}><motion.a style={styles.cardLinkLight} variants={heroLinkVar} initial="default" whileHover="hover" href="https://gitlab.com/minds" target="_blank">Minds mobile</motion.a></motion.p>
            <motion.p style={styles.cardText}><motion.a style={styles.cardLinkLight} variants={heroLinkVar} initial="default" whileHover="hover" href="https://gitlab.com/minds" target="_blank">Minds sockets</motion.a></motion.p>
            <motion.p style={styles.cardSubtitle}> Design resources</motion.p>
            <motion.p style={styles.cardText}><motion.a style={styles.cardLinkLight} variants={heroLinkVar} initial="default" whileHover="hover" href="https://zeroheight.com/3d3fe81da/p/85c368" target="_blank">design.minds.com</motion.a></motion.p>

          </motion.div>



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
export default ExampleLandingDocs;
