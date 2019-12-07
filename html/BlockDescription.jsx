import React from 'react';

// files
import logo__dark__img from '../../../media/logo/Beans_logo_dark.svg'

// style
import { Col, Row, Container } from 'reactstrap';
import classNameNamees from './BlockDescription.module.css';
import classNameNameesCommon from '../../app/App.module.css';

const { shop, shop__girl, shop__text } = classNameNamees;
const { title, beanslogo } = classNameNameesCommon;

const BlockDescription = (props) => {

    const { image } = props;

    return (
        <section className={shop}>
            <Container>
                <Row>
                    <Col lg={{ size: '4', offset: 2 }}>
                        <img className={shop__girl} src={image} alt="girl" />
                    </Col>
                    <Col lg='4'>
                        <div className={title}>About our beans</div>
                        <img className={beanslogo} src={logo__dark__img} alt="Beans logo" />
                        <div className={shop__text}>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br />
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            <br />
                            so questions.
                             <br />
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            <br />
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            <br />
                            is song that held help face.
                        </div>
                    </Col>
                </Row>
            </Container >
        </section>
    )
}

export default BlockDescription;