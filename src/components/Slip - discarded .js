import React from 'react'
import moment from 'moment';
import { Row, Col } from 'react-bootstrap'
import stamp from '../images/stamp.PNG'


export default class Slip extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="ml-3">
            <h1 className="text-center mb-3">House Rent Reciept</h1>
            <p className="text-center mb-3">{this.props.address}</p>
            <h3 className="text-center mb-5"><u><i>{this.props.landlordName} {this.props.ownerPan ? `- ${this.props.ownerPan}` : ''}</i></u></h3>
            <p className="text-left mb-5" style={{ textAlign: 'left' }}>Received with thanks from <strong>{this.props.name}</strong> sum of Rs.<strong>{this.props.rent}</strong>/- (<strong>{this.props.rentInWords}</strong> Only). Being the amount of Rent from <strong>{this.props.startDate}</strong> to <strong>{this.props.endDate}</strong> for Occupation of Residential Premises at <strong>{this.props.address}</strong>.</p>
            <Row className="my-5">
        {this.props.includeDate?
            <Col >
                Date:{moment().format('DD-MM-YYYY')}
                </Col>:null}
    <Col className='text-right'><u><strong>{this.props.rent}/-</strong></u></Col>
        
        </Row>
        <Row>
            <Col>{this.props.images.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="150" />
              </div>
            ))}</Col>
            {this.props.includeStamp?
            <Col className="text-right">
            <img src={stamp} className="stamp" alt="Stamp here"></img>
            </Col>:null}
        </Row>
        <Row>
        
        </Row>
        </div>
    
            </div>
        )
    }
}
