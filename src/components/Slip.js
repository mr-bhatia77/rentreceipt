import React from 'react'
import moment from 'moment';
import { Row, Col } from 'react-bootstrap'
import stamp from '../images/stamp.PNG'
// import ReactToPdf from 'react-to-pdf'


const Slip = ({ name,images, ownerPan, landlordName, address, rent, rentInWords, startDate, endDate, includeStamp, includeDate,signDate }) => {
    
    // const ref = React.createRef();
    
    return (

    <div className="ml-3">
            <h1 className="text-center mb-3">House Rent Reciept</h1>
            <p className="text-center mb-3">{address}</p>
            <h3 className="text-center mb-5"><u><i>{landlordName} {ownerPan ? `- ${ownerPan}` : ''}</i></u></h3>
            <p className="text-left mb-5" style={{ textAlign: 'left' }}>Received with thanks from <strong>{name}</strong> sum of Rs.<strong>{rent}</strong>/- (<strong>{rentInWords}</strong> Only). Being the amount of Rent from <strong>{startDate}</strong> to <strong>{endDate}</strong> for Occupation of Residential Premises at <strong>{address}</strong>.</p>
            <Row className="my-5">
        {includeDate?
            <Col >
                Date:{signDate}
                </Col>:null}
    <Col className='text-right'><u><strong>{rent}/-</strong></u></Col>
        
        </Row>
        <Row>
            <Col>{images.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="150" />
              </div>
            ))}</Col>
            {includeStamp?
            <Col className="text-right">
            <img src={stamp} className="stamp" alt="Stamp here"></img>
            </Col>:null}
        </Row>
        
        </div>
    )}
export default Slip
