import { NavMenu } from "../../../.data/NavMenu"

export default function NavBar(){
    return (
        <div className="container-fluid bg-white position-relative">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
              <a href="index.html" className="navbar-brand text-secondary">
                  <h1 className="display-4 text-uppercase">DOT.NET</h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ml-auto py-0 pr-3 border-right">
                    {
                        NavMenu.map((nav, index)=> {
                            return (
                                nav.subMenu?
                                    <div key={index} className="nav-item dropdown">
                                        <a href={nav.href} className="nav-link dropdown-toggle" data-toggle="dropdown">{nav.title}</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            {
                                                nav?.subMenu.map((subNav, subIndex)=>{
                                                    return (
                                                        <a key={subIndex} href={subNav.href} className="dropdown-item">{subNav.title}</a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> 
                                :
                                <a key={index} href={nav.href} className="nav-item nav-link active">{nav.title}</a>
                            )
                        })
                        
                    } 

                    
                     
                    
                  </div>
                  <div className="d-none d-lg-flex align-items-center pl-4">
                      <i className="fa fa-2x fa-mobile-alt text-primary mr-3"></i>
                      <div>
                          <h6 className="text-body text-uppercase mb-1"><small>Call Anytime</small></h6>
                          <h6 className="m-0">+012 345 6789</h6>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
    )
}