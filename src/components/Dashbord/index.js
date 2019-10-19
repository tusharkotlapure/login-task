import React from 'react';
import { Row, Col, Modal } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import If from '../../components/If';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// creating dynamic number array
function createArray(number) {
    return Array(number).fill(0).map((e, i) => i + 1);
}

export default class Dashbord extends React.Component {
    state={
        selectedSlide: '',
        submit: false,
    };

    onSubmit = () => {
        this.setState({
            submit: true,
        });
    }

    onSelectSlides = (e) => {
        const {
            value
        } = e.target;
        this.setState({
            selectedSlide: value,
        })
    }

    render() {
        const {
            selectedSlide,
            submit,
        } = this.state;
        const dropdown = createArray(20);
        const showSlides = createArray(Number(selectedSlide));
        return(
            <Row>
                <Col xs="12">
                    <label>
                        Select slides
                        <select onChange={this.onSelectSlides}>
                            {
                                dropdown.map(d => (<option key={`key-${d}`} value={d}>{d}</option>))
                            }
                        </select>
                    </label>
                    <If condition={selectedSlide}>
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            dynamicHeight={false}
                        >
                            {
                                showSlides.map(d => (<img key={`keyslide-${d}`} src={`https://via.placeholder.com/250X250?text=${d}`} alt={d} />))
                            }
                        </Carousel>
                        <button onClick={this.onSubmit}>Submit</button>
                    </If>
                    <Modal isOpen={submit}>
                        <span>{`You have selected   ${selectedSlide} slides`}</span>
                    </Modal>
                </Col>
            </Row>
        )
    }

}
