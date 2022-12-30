import * as React from "react"

//react imports
import { motion } from "framer-motion"

import { Link } from 'react-router-dom'

import { Grid, Row, Col } from "react-flexbox-grid"


//adding support for IBM Plex Mono as a font.

//rough inline styles here
const styles = {

  pageContainer: {
    backgroundColor: '#fff'

  } as const,


  docsContainer: {
    width: "100%",
    backgroundColor: '#fff', 
    border: "1px solid black",
    marginTop: "96px"
  } as const,

navTop: {

} as const,

navLeftContainer: { 
  width: "100%",
  backgroundColor: '#fff', 
  border: "1px solid black",
  marginTop: "96px"

} as const,

navRightContainer: {
  width: "100%",
  backgroundColor: '#fff', 
  border: "1px solid black",
  marginTop: "96px"
} as const,

buttonPrimary: {

} as const,

buttonSecondary: {
  
} as const,


}

//style rough layout and docs page here.

function ExampleLayout():JSX.Element {
    return (
          <Grid fluid={true}>
            <Row around="xs">
              <Col xs={2}>
                <motion.div style={styles.navLeftContainer}>
                <h2>Primary docs nav bar</h2>
                  <motion.div>
                    <h3>Getting started</h3>
                  </motion.div>
                  <motion.div>
                    <p>Introduction</p>
                  </motion.div>
                  <motion.div>
                    <p>Installation</p>
                  </motion.div>
                  <motion.div>
                    <p>Troubleshooting</p>
                  </motion.div>

                </motion.div>
              </Col>
              <Col xs={8}>
                <motion.div style={styles.docsContainer}>
                <h1>Welcome to the Minds stack</h1>
                <p>Minds is a free & open-source, encrypted and reward-based social networking platform. Our roadmap, code, project management system, and more all reside in GitLab.</p>
                <h3>Repositories</h3>
                <p>The Minds repository contains multiple git submodule repositories:</p>
                <p>
                  <ul>
                    <li>Engine - Backend code & APIs</li>
                    <li>Front - Client side Angular2 web app</li>
                    <li>Sockets - WebSocket server for real-time communications</li>
                    <li>Mobile - React Native mobile apps</li>
                  </ul>
                  </p>
                <h2>Installation</h2>
                <h3>Development System Requirements</h3>
                <p>
                  <ul>
                    <li>Any modern x86_64 multi-core CPU that supports virtualization.</li>
                    <li>16GB of RAM (of which around 7.5GB should be devoted to Docker VM on macOS and Windows).</li>
                    <li>3GB storage for Minds repositories and packages, and at least 20GB for Docker VM/Images.</li>
                    <li>Internet connectivity (only needed for downloading and provisioning the stack).</li>
                  </ul>
                  </p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                </motion.div>
              </Col>
              <Col xs={2}>
                <motion.div style={styles.navRightContainer}>
                  <motion.div>
                      <p>Repositories</p>
                  </motion.div>
                  <motion.div>
                      <p>Installation</p>
                  </motion.div>
                  <motion.div>
                      <p>System requirements</p>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Grid>
      )
    
}
export default ExampleLayout;
