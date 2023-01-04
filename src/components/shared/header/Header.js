export default function Header(){
    return (
        <div className="container-fluid bg-primary py-5 px-0" style={{marginBottom: '90px'}}>
          <div className="row mx-0 align-items-center">
              <div className="col-lg-6 px-md-5 text-center text-lg-left">
                  <h1 className="display-2 text-uppercase mb-3">Best Digital Marketing Agency</h1>
                  <p className="text-dark mb-4">Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit.
                      Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita
                      lorem dolore sed stet et est justo dolore.</p>
                  <a href="/" className="btn btn-dark text-uppercase mt-1 py-3 px-5">Learn More</a>
              </div>
              <div className="col-lg-6 px-0 text-right">
                  <img className="img-fluid mt-5 mt-lg-0" src="img/header.png" alt="" />
              </div>
          </div>
      </div>
    )
}