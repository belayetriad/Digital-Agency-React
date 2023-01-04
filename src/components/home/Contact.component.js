export default function ContactComponent(){
    return(
        <div className="container-fluid py-5 px-0">
          <div className="row mt-5 mx-0">
              <div className="col-12 px-0" style={{height: '500px'}}>
                  <div className="position-relative h-100">
                      {/* <iframe className="position-relative w-100 h-100"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                          frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                          tabindex="0"></iframe> */}
                  </div>
              </div>
          </div>
          <div className="row mx-0 justify-content-center" style={{marginTop: '-200px'}}>
              <div className="col-lg-6 col-md-8 col-sm-10 px-0">
                  <div className="contact-form bg-white rounded p-5">
                      <div id="success"></div>
                      <form name="sentMessage" id="contactForm" noValidate="novalidate">
                          <div className="form-row">
                              <div className="col-md-6">
                                  <div className="control-group">
                                      <input type="text" className="form-control bg-light border-0 p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                      <p className="help-block text-danger"></p>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="control-group">
                                      <input type="email" className="form-control bg-light border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                      <p className="help-block text-danger"></p>
                                  </div>
                              </div>
                          </div>
                          <div className="control-group">
                              <input type="text" className="form-control bg-light border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                              <p className="help-block text-danger"></p>
                          </div>
                          <div className="control-group">
                              <textarea className="form-control bg-light border-0 py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                              <p className="help-block text-danger"></p>
                          </div>
                          <div className="text-center">
                              <button className="btn btn-primary text-uppercase py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}