import * as React from "react"

//react imports
import { AnimatePresence, animate, motion } from "framer-motion"

import { Link } from 'react-router-dom'

import { Grid, Row, Col } from "react-flexbox-grid"

import MindsLogoIcon from '../bulb.svg'
import ArrowIcon from '../arrow-right.svg'
import heroVideo from '../cloner-cube-binary.mp4'

import landingPicOne from '../standing-23.png'
import landingPicTwo from '../standing-24.png'


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
    gap: "12px",

  } as const,


  buttonPrimaryAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxHeight: "36px",
    minWidth: "52px",
    padding: "8px 24px",
    gap: "8px",
    border: "1px solid #FFD048",
    backgroundColor: "#FFD048",
    borderRadius: "100px",
  } as const,

  buttonPrimaryText: {
    color: "#1C1D1F",
    fontSize: "19px",
    lineHeight: "28px",
    fontWeight: "700",
    letterSpacing: "0.16px"

  } as const,

  buttonPrimaryHoverText: {

  } as const,

  buttonOutlineAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxHeight: "36px",
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
    maxHeight: "36px",
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
    padding: "32px 48px",
    width: "100%",
    minHeight: "440px",
    //border: "1px solid black"


  } as const,

  heroContentContainer: {

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px 8px",
    gap: "24px",
    minWidth: "480px",
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
    maxHeight: "380px",
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
    width: "376px",
    minHeight: "472px",
    //border: "2px solid #7F661D",
    backgroundColor: "#FFD048",
  } as const,

  landingCardTextContainer: {
    flex: "none",
    paddingLeft: "24px",
    order: "0",
    flexGrow: "0"
  } as const,

  landingCardActionContainer: {
    flex: "none",
    paddingLeft: "24px",
    order: "1",
    flexGrow: "0"


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

  cardLink: {
    color: "#1C1D1F",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "700",
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
          <motion.a style={styles.navTopLinkLeft}
            variants={topLinkVar}
            initial="default"
            whileHover="hover"

          >back to minds.com</motion.a>

        </motion.div>
        <motion.div style={styles.navTopRight}>

          <motion.a style={styles.navTopLinkActive}>Home</motion.a>
          <motion.a style={styles.navTopLinkDefault}
            variants={topLinkVar}
            initial="default"
            whileHover="hover"

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
                  <motion.p style={styles.cardTextBold}>If you’re looking for design tokens and UI resources, check out <motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">design.minds.com</motion.a></motion.p>
                </motion.div>
              </Col>
              <Col>
                <motion.div style={styles.heroImgContainer}>
                  <video style={styles.heroImg} src={heroVideo} controls autoPlay loop></video>
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

                <motion.div style={styles.landingCardActionContainer}>
                <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Get started</motion.a></motion.p>

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

                <motion.div style={styles.landingCardActionContainer}>
                <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Get started</motion.a></motion.p>

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

                <motion.div style={styles.landingCardActionContainer}>
                <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Get started</motion.a></motion.p>

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
                <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Learn more</motion.a></motion.p>
              </motion.div>
            </Col>
            <Col>
              <motion.div style={styles.sectionImgContainer}>
                <img style={styles.heroImg} src={landingPicOne}/>
              </motion.div>
            </Col>
          </motion.div>

          <motion.div style={styles.layoutSectionContainer}>
            <Col>
              <motion.div style={styles.sectionImgContainer}>
              <img style={styles.heroImg} src={landingPicTwo}/>

              </motion.div>
            </Col>
            <Col>
              <motion.div style={styles.sectionCardContainer}>
                <motion.h1 style={styles.cardTitle}> Minds+</motion.h1>
                <motion.p style={styles.cardText}>Minds is a distributed team located on both sides of the Atlantic. We communicate via Minds Chat and Gitlab.</motion.p>
                <motion.p style={styles.cardText}>Minds is a distributed team located on both sides of the Atlantic. We communicate via Minds Chat and Gitlab.</motion.p>

                <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Learn more</motion.a></motion.p>

              </motion.div>
            </Col>
          </motion.div>

          <motion.div style={styles.fullWidthCardContainer}>
            <motion.h1 style={styles.cardTitle}>Resources</motion.h1>

            <motion.p style={styles.cardSubtitle}> Pinned repositories</motion.p>

            <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Minds frontend</motion.a></motion.p>
            <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Minds engine</motion.a></motion.p>
            <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Minds mobile</motion.a></motion.p>
            <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">Minds sockets</motion.a></motion.p>
            <motion.p style={styles.cardSubtitle}> Design resources</motion.p>
            <motion.p style={styles.cardText}><motion.a style={styles.cardLink} variants={heroLinkVar} initial="default" whileHover="hover">design.minds.com</motion.a></motion.p>

          </motion.div>



        </Row>
      </Grid>


    </motion.div>
  )

}
export default ExampleLandingDocs;
