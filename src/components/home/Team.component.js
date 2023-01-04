export default function TeamComponent(){
    return(
        <div className="container-fluid py-5">
          <div className="container py-5">
              <h1 className="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
              <div className="owl-carousel team-carousel position-relative" style={{paddingLeft: '30px'}}>
                  <div className="team-item rounded overflow-hidden">
                      <div className="position-relative">
                          <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                          <div className="team-overlay">
                              <div className="d-flex align-items-center justify-content-start">
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="bg-light text-center p-4">
                          <h4 className="text-uppercase">John Doe</h4>
                          <p className="m-0">CEO, Founder</p>
                      </div>
                  </div>
                  <div className="team-item rounded overflow-hidden">
                      <div className="position-relative">
                          <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                          <div className="team-overlay">
                              <div className="d-flex align-items-center justify-content-start">
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="bg-light text-center p-4">
                          <h4 className="text-uppercase">Kate Wilson</h4>
                          <p className="m-0">Designer</p>
                      </div>
                  </div>
                  <div className="team-item rounded overflow-hidden">
                      <div className="position-relative">
                          <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                          <div className="team-overlay">
                              <div className="d-flex align-items-center justify-content-start">
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="bg-light text-center p-4">
                          <h4 className="text-uppercase">John Brown</h4>
                          <p className="m-0">Developer</p>
                      </div>
                  </div>
                  <div className="team-item rounded overflow-hidden">
                      <div className="position-relative">
                          <img className="img-fluid w-100" src="img/team-4.jpg" alt="" />
                          <div className="team-overlay">
                              <div className="d-flex align-items-center justify-content-start">
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="bg-light text-center p-4">
                          <h4 className="text-uppercase">Paul Watson</h4>
                          <p className="m-0">Marketer</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}