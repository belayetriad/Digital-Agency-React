export default function ServicesComponent(){
    return(
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
              <h1 className="display-4 text-uppercase text-center mb-5">Our Creative Services</h1>
              <div className="row">
                  <div className="col-lg-3 mb-2">
                      <div className="service-item rounded p-5 mb-4">
                          <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                          <h4 className="text-uppercase mb-4">Web <span className="d-block text-body">Design</span></h4>
                          <p className="m-0">Vero amet vero eos kasd justo ipsum diam sed elitr</p>
                      </div>
                  </div>
                  <div className="col-lg-3 mb-2">
                      <div className="service-item rounded p-5 mb-4">
                          <i className="fa fa-3x fa-code text-primary mb-4"></i>
                          <h4 className="text-uppercase mb-4">Web <span className="d-block text-body">Development</span></h4>
                          <p className="m-0">Vero amet vero eos kasd justo ipsum diam sed elitr</p>
                      </div>
                  </div>
                  <div className="col-lg-3 mb-2">
                      <div className="service-item rounded p-5 mb-4">
                          <i className="fa fa-3x fa-envelope-open-text text-primary mb-4"></i>
                          <h4 className="text-uppercase mb-4">Digital <span className="d-block text-body">Marketing</span></h4>
                          <p className="m-0">Vero amet vero eos kasd justo ipsum diam sed elitr</p>
                      </div>
                  </div>
                  <div className="col-lg-3 mb-2">
                      <div className="service-item rounded p-5 mb-4">
                          <i className="fa fa-3x fa-edit text-primary mb-4"></i>
                          <h4 className="text-uppercase mb-4">Content <span className="d-block text-body">Writing</span></h4>
                          <p className="m-0">Vero amet vero eos kasd justo ipsum diam sed elitr</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}