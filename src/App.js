import { useState, useEffect ,useRef} from 'react'
import { InputGroup, FormControl, Row, Col, Container, Button } from 'react-bootstrap'
import Navibar from './components/Navibar'
// import ReactToPrint from 'react-to-print';
import Slip from './components/Slip'
import ImageUploading from 'react-images-uploading';
import './App.css';

function App() {

  // const componentRef = useRef();
  const [details, setDetails] = useState({
    name: "",
    landlordName: "",
    startDate: '',
    endDate: '',
    address: '',
    rent: '',
    rentInWords: '',
    ownerPan: '',
    signature:'',
    includeStamp: false,
    includeDate: false,
    previewSlip: false
  })
  const ids = ['1']
  const [images, setImages] = useState([]);
  const [printable,setPrintable]=useState(false)
  const maxNumber = 1;
 


  useEffect(() => {
    if(printable)
    {
    window.print()}
    setTimeout(()=>setPrintable(false),1000)
    console.log(printable)
  }, [printable])

  const inputHandler = (e) => {
    e.target.name === 'includeStamp'||e.target.name ==='includeDate' ?
      setDetails({ ...details, [e.target.name]: e.target.checked }) :
      setDetails({ ...details, [e.target.name]: e.target.value })

  }

  const printHandler=()=>{
    setPrintable(true)
  }

//   const signatureHandler =(e)=>{
//     const reader= new FileReader();
//     reader.onload=() =>{
//       if(reader.readystate===2)
//       setDetails({...details,[e.target.name]:reader.result})

// reader.readAsDataURL(e.target.files[0])
//     }

//   }

const signatureHandler = (imageList, addUpdateIndex) => {
  // data for submit
  console.log(imageList, addUpdateIndex);
  setImages(imageList);
};

  return (
    <>
      <Navibar></Navibar>
      <Container>
        <div className={printable?"hidden":"notHidden"}>
        <marquee style={{
          marginTop: '2%',
          marginBottom: '2%',
          backgroundColor: 'orange'
        }}>These are sample reciepts , to be used at own RISK!!! </marquee>
        <Row>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Your Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="name"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={details.name}
                placeholder='Your Name with Initials Mr/Ms/Mrs'
                onChange={inputHandler} />
            </InputGroup>
          </Col>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">LandLord Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="landlordName"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={details.landlordName}
                placeholder='Your LandLord Name with Initials Mr/Ms/Mrs'
                onChange={inputHandler} />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Address </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="address"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={details.address}
                placeholder='Pune,India'
                onChange={inputHandler} />
            </InputGroup>
          </Col>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Owner PAN  </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="ownerPan"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={details.ownerPan}
                placeholder='BZNPB7XXXX  - optional'
                onChange={inputHandler} />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Rent </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="rent"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={details.rent}
                placeholder='10000'
                onChange={inputHandler} />
            </InputGroup>
          </Col>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Rent In Words</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="rentInWords"
                aria-label="Default"
                placeholder='Ten Thousand only'
                aria-describedby="inputGroup-sizing-default"
                value={details.rentInWords}

                onChange={inputHandler} />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Start Date </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="startDate"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={details.startDate}
                placeholder='01-APR-2021'
                onChange={inputHandler} />
            </InputGroup>
          </Col>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">End Date</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name="endDate"
                aria-label="Default"
                placeholder='30-APR-2021'
                aria-describedby="inputGroup-sizing-default"
                value={details.endDate}

                onChange={inputHandler} />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <input type='checkbox' name="includeStamp" onChange={inputHandler} />&nbsp;Include Stamp? (not recommended!)
          </Col>
          <Col md={6} sm={12} xs={12} lg={6} xl={6}>
            <input type='checkbox' name="includeDate" onChange={inputHandler} />&nbsp;Include today's Date?
          </Col>
        </Row>
        <Row>
          <Col className="my-3" md={6} sm={12} xs={12} lg={6} xl={6}>
          <ImageUploading
        multiple
        value={images}
        onChange={signatureHandler}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button className="text-center" variant="success"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload sign - optional
            </Button>
            &nbsp;
            <Button className="text-center" variant="warning" onClick={onImageRemoveAll}>Remove sign</Button>
          </div>
        )}
      </ImageUploading>
          </Col>
          </Row>
        <Row className="mt-3">
          <Col xs={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>
            <Button className="text-center" variant="primary" onClick={printHandler} block>Print Slips<h6> Compatible : Windows, IOS</h6></Button>
          </Col>
          </Row>
          </div>
          {/* <Row>
          <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
          </Row> */}
        <Row>
          <div className={printable?"no-reciept":"reciept"}>
        
          <Slip 
            name={details.name}
            landlordName={details.landlordName}
            address={details.address}
            startDate={details.startDate}
            rent={details.rent}
            rentInWords={details.rentInWords}
            endDate={details.endDate}
            ownerPan={details.ownerPan}
            includeStamp={details.includeStamp}
            includeDate={details.includeDate}
            signature={details.signature}
            images={images}
          ></Slip>
          </div>
           
          
        </Row>
      </Container>
    </>
  );
}

export default App;
