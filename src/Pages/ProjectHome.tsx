
import * as React from "react"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from "react-flexbox-grid"




function ProjectHome():JSX.Element {

    return (
        <div>
            <Grid fluid={true}>
                <Row>
                    <Row>
                    <Col xs>
                    <h1>Project root quick links</h1>
                    </Col>
                    </Row>
                </Row>
                <Row around = "xs">
                    <Col xs><Link to="/Pages/ExampleLayout" target={'_blank'}><a>Link to example layout</a> </Link></Col>
                    <Col xs><Link to="/Components/Playground" target={'_blank'}><a>Link to component playground</a> </Link></Col>
                    <Col xs><Link to="/Pages/DocsPage/DocsHome" target={'_blank'}><a>Link to DocsHome</a> </Link></Col>
                    <Col xs><Link to="/Pages/ProductPages/ProductHome" target={'_blank'}><a>Link to ProductHome</a> </Link></Col>
                    <Col xs><Link to="/Pages/ExampleLandingDocs" target={'_blank'}><a>Link to Docs landing page (rough)</a> </Link></Col>
                    <Col xs><Link to="/Pages/ExampleLandingProduct" target={'_blank'}><a>Link to Product landing page (rough)</a> </Link></Col>

                </Row>
            </Grid>
        </div>

    )


}

export default ProjectHome