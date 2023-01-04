export default function PricingPlanComponent(){
    return(
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
              <h1 className="display-4 text-uppercase text-center mb-5">Competitive Pricing</h1>
              <div className="row">
                  <div className="col-lg-4 mb-2">
                      <div className="bg-light rounded text-center pt-5 mt-lg-5 mb-4">
                          <h2 className="text-uppercase">Basic</h2>
                          <h6 className="text-uppercase text-body mb-5">The Best Choice</h6>
                          <div className="text-center bg-dark rounded-circle p-4 mb-2">
                              <h1 className="display-4 text-white mb-0">
                                  <small className="align-top"
                                      style={{fontSize: "22px", lineHeight: '45px'}}>$</small>49<small
                                      className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/
                                      Mo</small>
                              </h1>
                          </div>
                          <div className="text-center py-4">
                              <p>HTML5 & CSS3</p>
                              <p>Bootstrap v4</p>
                              <p>Responsive Layout</p>
                              <p>Compatible With All Browsers</p>
                              <a href="/" className="btn btn-dark text-uppercase py-2 px-4 my-3">Order Now</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 mb-2">
                      <div className="bg-dark rounded text-center pt-5 mb-4">
                          <h2 className="text-uppercase text-white">Standard</h2>
                          <h6 className="text-uppercase text-secondary mb-5">The Best Choice</h6>
                          <div className="text-center bg-primary rounded-circle p-4 mb-2">
                              <h1 className="display-4 mb-0">
                                  <small className="align-top"
                                      style={{fontSize: "22px", lineHeight: '45px'}}>$</small>99<small
                                      className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/
                                      Mo</small>
                              </h1>
                          </div>
                          <div className="text-center text-secondary py-4">
                              <p>HTML5 & CSS3</p>
                              <p>Bootstrap v4</p>
                              <p>Responsive Layout</p>
                              <p>Compatible With All Browsers</p>
                              <a href="/" className="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 mb-2">
                      <div className="bg-light rounded text-center pt-5 mt-lg-5 mb-4">
                          <h2 className=" text-uppercase">Extended</h2>
                          <h6 className="text-uppercase text-body mb-5">The Best Choice</h6>
                          <div className="text-center bg-dark rounded-circle p-4 mb-2">
                              <h1 className="display-4 text-white mb-0">
                                  <small className="align-top"
                                      style={{fontSize: "22px", lineHeight: '45px'}}>$</small>149<small
                                      className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/
                                      Mo</small>
                              </h1>
                          </div>
                          <div className="text-center py-4">
                              <p>HTML5 & CSS3</p>
                              <p>Bootstrap v4</p>
                              <p>Responsive Layout</p>
                              <p>Compatible With All Browsers</p>
                              <a href="/" className="btn btn-dark text-uppercase py-2 px-4 my-3">Order Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}