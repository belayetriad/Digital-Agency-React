import { useState } from "react";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { HomeData } from "../../.data/Home";

export default function PortfolioComponent(){

    const [filterPortfolio, setFilterPortfolio] = useState('');
    const [lightBox, setLightBox ] = useState({isOpen: false, src: ''});

    
    return(
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
              <h1 className="display-4 text-uppercase text-center mb-5">Visit Our Projects</h1>
              <div className="row">
                  <div className="col-12 text-center mb-2">
                      <ul className="list-inline mb-4" id="portfolio-flters">
                          <li className="btn btn-outline-dark text-uppercase py-2 px-4 active" onClick={()=> {setFilterPortfolio('')}}>
                              <i className="fa fa-star text-primary mr-2"></i>All
                          </li>
                          <li className="btn btn-outline-dark text-uppercase py-2 px-4" onClick={()=> {setFilterPortfolio('design')}}>
                              <i className="fa fa-laptop-code text-primary mr-2"></i>Design
                          </li>
                          <li className="btn btn-outline-dark text-uppercase py-2 px-4" onClick={()=> {setFilterPortfolio('development')}}>
                              <i className="fa fa-mobile-alt text-primary mr-2"></i>Development
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="row portfolio-container">
                  {
                    HomeData.portfolios.map((portfolio, index)=> {
                        return (
                            (filterPortfolio === '' || filterPortfolio === portfolio.type)  && 
                            <div key={index} className="col-lg-4 col-md-6 mb-4 portfolio-item">
                                <div className="position-relative rounded overflow-hidden mb-2">
                                    <img className="img-fluid w-100" src={portfolio.img} alt={portfolio.title} />
                                    <div className="portfolio-btn d-flex align-items-center justify-content-center">
                                        <button onClick={()=> {
                                            setLightBox({isOpen: true, src: portfolio.img})
                                        }}>
                                            <i className="fa fa-4x fa-plus text-primary"></i>
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })
                  }

                  {
                    lightBox.isOpen && 
                    <Lightbox mainSrc={lightBox.src}  onCloseRequest={() => setLightBox({isOpen: false, src: ''})} />
                  }

                    
                  
                  
              </div>
          </div>
      </div>
    )
}