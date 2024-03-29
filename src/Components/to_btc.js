import React from "react";  
import { TypeAnimation } from 'react-type-animation';
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes,Link,Navigate } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { sha256 } from 'js-sha256';
import { Carousel } from 'react-responsive-carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import './main1.css'

const TO_BTC= ({reverse,value2,change1,value3,value4,value5,value6,value7,value10,value11,changetodoge,changetoltc,changetobtc,changetodoge4,changetoltc4,changetobtc4,event1,value500,from1,to1,value71,value72,value73,value74,value75,value76,call,value1500,value1006,backtohome,changetoxmr,value738,changetoxmr2,value739,value740,value741,changetobnb1,changetobnb2,value750,value751,changetobch1,changetobch2,changetotrx1,value760,value761,value7610,value501,value10070,value1600,changetorose1,event105,changetorose2,changetodash1,send2,first56,first66,changetoavax1,changetoada1,changetovet1,changetoxtz1,value81,changetoeth1,value859,changetosol1,theme,value8591,changetoetc1,changetodark,value1008,value10091,value10092,bg1,value10081,value10082,value10083,changetolight,value10085,logo_value,value10087,value10088,value100910,value10059,value100912,value10057,value100915,changetologin,changetosignup,orderid1,value0200,value0201,value0789,value_bg,value_img,value_img2})=>{
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);
    const [lgShow31, setLgShow31] = useState(false);
    const [lgShow2, setLgShow2] = useState('');
	const [lgShow233, setLgShow233] = useState('');
    const [lgShow5, setLgShow5] = useState('');
	const [lgShow6, setLgShow6] = useState('');
	const [lgShow7, setLgShow7] = useState('');
    const [isActive, setActive] = useState("false");
    const [isActive2, setActive2] = useState("false");
    const [isActive3, setActive3] = useState("false");
    const [isActive4, setActive4] = useState("false");
    const [isActive5, setActive5] = useState("false");
    const [isActive6, setActive6] = useState("false");
	const [isActive7, setActive7] = useState("false");
	const [isActive8, setActive8] = useState("false");
	const [isActive9, setActive9] = useState("false");
	const [isActive10, setActive10] = useState("false");
	const [isActive11, setActive11] = useState("false");
	const [isActive12, setActive12] = useState("false");
	const [isActive14, setActive14] = useState("false");
	const [isActive120, setActive120] = useState("false");
	const [isActive17, setActive17] = useState("false");
	

    useEffect(() => {
		
		fetch("https://rich-tan-lovebird-coat.cyclic.app/price25",{
			'method':'post',
			'headers':{'Content-type':'application/json'},
			'body': JSON.stringify({
				from:`${value3}`, 
				to:`${value4}`
			})
		}).then(res => res.json()).then(data20 => {
            if (true) {
                setLgShow5(data20.rate3)
            }
        })
    },[])


  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return(
        <div>
        <Row className='d-flex justify-content-end  align-items-center row_0' style={{'background-color':`${value10085}`}} >
        
        <Col className='col-md-3 d-flex justify-content-center align-items-center flex-row' > <a className="btn45 mt-1 me-2 f6 grow no-underline ba bw1 ph2 pv1 mb1 dib b text-white pt-1" onClick={orderid1}>Search</a>
        <p className='b text-white text-center fs-6  justify-content-end  align-items-center mt-2' style={{'display':`${value0200}`}} >Please Enter a order id</p>
        <input id="name" placeholder='Your Order ID' onChange={value0201} className="b input-reset ba b--black-20 pt-2 pb-2 ps-2 db w-60" type="text" aria-describedby="name-desc" /> </Col>
        
        </Row>
          <Row className='d-flex justify-content-end  align-items-center'>
        <Navbar bg={theme} expand="lg">
        <Container fluid>
                        <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center mt-1">
                            <img src={require(`./images/logo.png`)} alt='bitbarter_logo' className='img25 ms-5' onClick={backtohome} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" style={{'background-color':`${value100915}`}} >
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                        <Nav.Link href="#home" style={{'color':`${value1008}`}} className=' b text-white d-flex justify-content-center align-items-center navlink'>Wallets <img src={require(`./images/green.png`)}   className='ms-2' width={'17px'}/>
                        <span className="b span45 text-white d-flex justify-content-center align-items-center" style={{'color':`${value10092}`}} >Working</span>
                        </Nav.Link>
                        <Nav.Link href="#home" style={{'color':`${value1008}`}} className='b text-white  d-flex justify-content-center align-items-center navlink'>System Status <img src={require(`./images/green.png`)} className='ms-2' width={'17px'}/>
                        <span className="b text-white span45 d-flex justify-content-center align-items-center" style={{'color':`${value10092}`}} >Working</span></Nav.Link>
                        
                      
                 
                            
                            <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>
                            
                            <Dropdown>
                            
                            <Dropdown.Toggle id="dropdown-basic">
                            <img src={require(`./images/lang2.png`)} width="70px" style={{'display':`${value10082}`}}  />
                            <img src={require(`./images/lang2.png`)} width="70px" style={{'display':`${value10083}`}}  />
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu style={{'background-color':`${value100910}`,'border':`${value10057}`}}>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://www.hi.indusbit.org" target="_blank">हिंदी    <img src={require(`./images/india.jpg`)} className='flag1' width='30px' /> </Dropdown.Item>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://www.jp.indusbit.org" target="_blank">日本語 <img src={require(`./images/japan.png`)} className='flag2' width='30px' /> </Dropdown.Item>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://www.cn.indusbit.org" target="_blank">中文 <img src={require(`./images/china.png`)} className='flag3' width='30px' /> </Dropdown.Item>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://www.ru.indusbit.org" target="_blank">руский <img src={require(`./images/russia.png`)} className='flag4' width='30px' /> </Dropdown.Item>
                            <Dropdown.Item style={{'color':`${value10059}`}} href="https://www.indusbit.org" target="_blank">English </Dropdown.Item>
                            </Dropdown.Menu>
                            
                            </Dropdown>
                            
                            </Nav.Link>
                                            
                            <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>
                            <img src={require(`./images/1664849-200.png`)} width="50px" style={{'display':`${value10082}`}} onClick={changetodark} />
                            </Nav.Link>      
                            
                                                        <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>
                            <svg onClick={changetolight}  style={{'display':`${value10083}`}} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi text-white bi-brightness-high-fill" viewBox="0 0 16 16">
                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                            </svg>
                            </Nav.Link>    
                            
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                     </Row>

        <Row className='d-flex justify-content-center align-items-center main_row' style={{'background-color':`${value0789}`}} >
        <Col className='col-md-6'>

			<article className={`vh-100 dt w-100 pt-5 pb-5`}  >
            <div className="dtc v-mid tc white ph3 ph4-l">
            <article className="mw6 center br3 pa2 pa4-ns mv3 ba b--black-10 shadow-3" style={{'background-color':`${value100910}`,'border':`${value10057}`}}  >
            <Container>
            
            <Row className='tc text-center justify-content-center align-items-center'>
                <Col className='col-md-5 text-black'>
                <Button className={'btn1 b shadow-3'} style={{'background-color':`${value100912}`, 'color':`${value10059}`, 'border':`${value10057}`} } >Variable Rate</Button>
                </Col>
                
            </Row>

            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
            <p className='b para1' style={{'color':`${value10059}`}} >1 <span className='title1' >{value3}</span> = <span className='value'></span>{lgShow5} <span className='title2'>{value4}</span></p>
                </Col>
            </Row>

            <Row className='mt-3 justify-content-center align-items-center'>


                <Col className='col-sm-2 col-12 tc text-center col13'>
                
                                <Col className='col-md-5 col-12 text-center tc col10'>
                <article style={{'background-color':`${value100910}`,'border':`${value10057}`}} className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3" onClick={() => {
					setLgShow(true)
					setLgShow2('SEND')
				}}>
                <img src={require(`./images/litecoin.png`)} className='img_special2' />
                <h3 className='b fs-5 mt-2' style={{'color':`${value10059}`}} >YOU SEND</h3>
                <p className='b fs-6' style={{'color':`${value10059}`}} >LTC (Litecoin)</p>
                </article>
                </Col>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" style={{'color':`${value10059}`}} className="bi bi-arrow-left-right svg1" viewBox="0 0 16 16" onClick={reverse}>
                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                </Col>

                <Col className='col-md-5 col-12 text-center tc col10'>
                <article style={{'background-color':`${value100910}`,'border':`${value10057}`}} className="mw7 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3" onClick={() => {
					setLgShow3(true)
					setLgShow2('RECEIVE')
				}}>
                <img src={require(`./images/bitcoin.png`)} className='img_special2' />
                <h3 className='b fs-5 mt-2' style={{'color':`${value10059}`}} >YOU RECEIVE</h3>
                <p className='b fs-6' style={{'color':`${value10059}`}} >BTC (Bitcoin)</p>
                </article>
                </Col>
            </Row>
            
            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
            <p className='b para258' style={{'color':`${value10059}`}}>Enter the amount that you will send</p>
            <input id="name2" style={{'color':`white`, 'background-color':`black`}} className="b input-reset ba b--black-20 pa3 mb2 db w-100 tc text-center" type="number" aria-describedby="name-desc" onFocus={value10070} onChange={send2} />
            <p className='b text-red text-center tc para3000' style={{'display':`${value501}`}} >Min. {value3} Amount is {lgShow233}</p>
            <p className='b text-red text-center tc para3000' style={{'display':`${value1600}`}} >Please Enter a Amount</p>
            </Col>
            </Row>
            
            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
            <p style={{'color':`${value10059}`}} className='b para10'>Receiving address</p>
                </Col>
            </Row>


            <Row className='mt-0'>
            <Col className='col-md-12 text-black'>
            <input id="name" className="input_address b  text-center tc input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder={`Your ${value4} Address`} onChange={event1} onFocus={value1006} />
            <p className='b text-red text-center tc para3000' style={{'display':`${value500}`}} >Please Enter a Valid {value4} address</p>
            <p className='b text-red text-center tc para3000' style={{'display':`${value1500}`}} >Please Enter a address</p>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='col-md-12 text-black'>
                <Button className='btn2 b shadow-3' style={{'background-color':`${value100910}`,'border':`${value10057}`,'color':`${value10059}`}}  onClick={call}>EXCHANGE</Button>
                </Col>
            </Row>
            
                  <Modal
        size="lg"
        show={lgShow3}
        onHide={() => setLgShow3(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
      <Modal.Title>
      <Row>
      <Col className='col-md-12 tc text-center'>
      <h3 className='b tc text-black'>YOU {lgShow2} </h3>
      </Col>
      </Row>
      </Modal.Title>
      </Modal.Header>
        <Modal.Body >
            <Row className='justify-content-center align-items-center'>
        <ul>
          <li>
            <Link to="/ltc/btc">LTC</Link>
          </li>
          <li>
            <Link to="/eth/btc">ETH</Link>
          </li>
             <li>
            <Link to="/usdt/btc">USDT</Link>
          </li>
        <li>
            <Link to="/bnb/btc">BNB</Link>
          </li>
        <li>
            <Link to="/xrp/btc">XRP</Link>
          </li>

          
        </ul>
            </Row>

        </Modal.Body>
      </Modal>


      <Modal
        size="lg"
        show={lgShow3}
        onHide={() => setLgShow3(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
      <Modal.Title>
      <Row>
      <Col className='col-md-12 tc text-center'>
      <h3 className='b tc text-black'>YOU {lgShow2} </h3>
      </Col>
      </Row>
      </Modal.Title>
      </Modal.Header>
        <Modal.Body >
            <Row className='justify-content-center align-items-center'>
        <ul>
          <li>
            <Link to="/ltc/btc">LTC</Link>
          </li>
          <li>
            <Link to="/eth/btc">ETH</Link>
          </li>
             <li>
            <Link to="/usdt/btc">USDT</Link>
          </li>
        <li>
            <Link to="/bnb/btc">BNB</Link>
          </li>
        <li>
            <Link to="/xrp/btc">XRP</Link>
          </li>

          
        </ul>
            </Row>

        </Modal.Body>
      </Modal>
    </Container>
            </article>
            </div>
            </article>
                    </Col>
            <Col className='col-md-6 justify-content-center align-items-center text-center tc pt-5 pb-5'>
            <Row>
        <img src={require(`./images/r1.png`)} width="500px" />
            </Row>
             <Row>
             <h1 className='b text-white tc text-center'>SWAP ANY CRYPTO YOU WANT</h1>
             </Row>

    
            </Col>
                    </Row>
            <Row className='d-flex row589 justify-content-center align-items-center' style={{'background-color':`${value10087}`,'color':`${value10088}`}}>
            <Col className='col-md-12'>
            <h2 className='tc b fs-2 mt-4 text-center'>How to Exchange Crypto</h2>
            <p className='b fs-4 tc text-cente br'>Exchanging crypto is simple & easy on IndusBit.</p>
            <p className='b fs-4 tc text-center'>Follow the four steps</p>
            <Row className='d-flex mt-5 mb-5 justify-content-center align-items-center tc text-center'>
            
            <Col className='col-md-3 mt-3 mb-3 col-12 justify-content-center align-items-center'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi mt-3 mb-3 bi-hand-index-thumb-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"/>
            </svg>
            <h6 className='b fs-6'>Choose the Crypto - Pair you like.</h6>
            </Col>
            
            <Col className='col-md-3 col-12 mt-3 mb-3'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi mt-3 mb-3 bi-wallet2" viewBox="0 0 16 16">
            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
            </svg>
            <h6 className='b fs-6'>Enter your crypto wallet address</h6>
            </Col>
            <Col className='col-md-3 col-12 mt-3 mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="mt-3 mb-3 bi bi-cursor-fill" viewBox="0 0 16 16">
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
            </svg>
            <h6 className='b fs-6'>Click on Exchange</h6>
            </Col>
            <Col className='col-md-3 col-12 mt-3 mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="mt-3 mb-3 bi bi-currency-dollar" viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
            </svg>
            <h6 className='b fs-6'>Receive your crypto in seconds</h6>
            </Col>
            </Row>
            </Col>
            </Row>
            <Row className='pt-3 d-flex justify-content-center align-items-center text-center tc' style={{'background-color':`${value_bg}`}} >
            <Col className='col-md-12'>
            <h3 className='text-white b text-center tc' >IndusBit © 2023</h3>
            </Col>
            </Row>
        </div>
    )
}

export default TO_BTC
