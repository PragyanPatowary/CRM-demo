import React from 'react'






const Test = () => {
  return (
    <>
        
    {/* Top Bar Start */}
    <div className="topbar d-print-none">
      <div className="container-xxl">
        <nav className="topbar-custom d-flex justify-content-between" id="topbar-custom">    
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">                        
            {/* <li>
              <button className="nav-link mobile-menu-btn nav-icon" id="togglemenu">
                <i className="iconoir-menu-scale" />
              </button>
            </li>  */}
            <li className="mx-3 welcome-text">
              <h3 className="mb-0 fw-bold text-truncate">Good Morning, James!</h3>
              {/* <h6 class="mb-0 fw-normal text-muted text-truncate fs-14">Here's your overview this week.</h6> */}
            </li>                   
          </ul>
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <li className="hide-phone app-search">
              <form role="search" action="#" method="get">
                <input type="search" name="search" className="form-control top-search mb-0" placeholder="Search here..." />
                <button type="submit"><i className="iconoir-search" /></button>
              </form>
            </li>     
            <li className="topbar-item">


             <a
                className="nav-link nav-icon"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // Toggle light/dark theme logic here
                const html = document.documentElement;
                const currentTheme = html.getAttribute("data-bs-theme");
                html.setAttribute("data-bs-theme", currentTheme === "light" ? "dark" : "light");
            }}
>
              <i className="icofont-moon dark-mode" />
                <i className="icofont-sun light-mode" />
</a>                   


            </li>
            <li className="dropdown topbar-item">
              <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="icofont-bell-alt" />
                <span className="alert-badge" />
              </a>
              <div className="dropdown-menu stop dropdown-menu-end dropdown-lg py-0">
                <h5 className="dropdown-item-text m-0 py-3 d-flex justify-content-between align-items-center">
                  Notifications
                </h5>
                <ul className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link mx-0 active" data-bs-toggle="tab" href="#All" role="tab" aria-selected="true">
                      All <span className="badge bg-primary-subtle text-primary badge-pill ms-1">24</span>
                    </a>
                  </li>
                </ul>
                <div className="ms-0" style={{maxHeight: 230}} data-simplebar>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="All" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">2 min ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i className="iconoir-wolf fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                            <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">10 min ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i className="iconoir-apple-swift fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">Meeting with designers</h6>
                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">40 min ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">                                                    
                            <i className="iconoir-birthday-cake fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">UX 3 Task complete.</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">1 hr ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i className="iconoir-drone fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">2 hrs ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i className="iconoir-user fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">Payment Successfull</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                    </div>
                    <div className="tab-pane fade" id="Projects" role="tabpanel" aria-labelledby="projects-tab" tabIndex={0}>
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">40 min ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">                                                    
                            <i className="iconoir-birthday-cake fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">UX 3 Task complete.</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">1 hr ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i className="iconoir-drone fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">2 hrs ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i className="iconoir-user fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">Payment Successfull</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                    </div>
                    <div className="tab-pane fade" id="Teams" role="tabpanel" aria-labelledby="teams-tab" tabIndex={0}>
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">1 hr ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i className="iconoir-drone fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-end text-muted ps-2">2 hrs ago</small>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i className="iconoir-user fs-4" />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h6 className="my-0 fw-normal text-dark fs-13">Payment Successfull</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>{/*end media-body*/}
                        </div>{/*end media*/}
                      </a>{/*end-item*/}
                    </div>
                  </div>
                </div>
                {/* All*/}
                <a href="pages-notifications.html" className="dropdown-item text-center text-dark fs-13 py-2">
                  View All <i className="fi-arrow-right" />
                </a>
              </div>
            </li>
            <li className="dropdown topbar-item">
              <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <img src="src/assets/images/users/avatar-1.jpg" alt className="thumb-lg rounded-circle" />
              </a>
              <div className="dropdown-menu dropdown-menu-end py-0">
                <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                  <div className="flex-shrink-0">
                    <img src="src/assets/images/users/avatar-1.jpg" alt className="thumb-md rounded-circle" />
                  </div>
                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                    <h6 className="my-0 fw-medium text-dark fs-13">William Martin</h6>
                    <small className="text-muted mb-0">Front End Developer</small>
                  </div>{/*end media-body*/}
                </div>
                <div className="dropdown-divider mt-0" />
                <small className="text-muted px-2 pb-1 d-block">Account</small>
                <a className="dropdown-item" href="pages-profile.html"><i className="las la-user fs-18 me-1 align-text-bottom" /> Profile</a>
                <a className="dropdown-item" href="pages-faq.html"><i className="las la-wallet fs-18 me-1 align-text-bottom" /> Earning</a>
                <small className="text-muted px-2 py-1 d-block">Settings</small>                        
                <a className="dropdown-item" href="pages-profile.html"><i className="las la-cog fs-18 me-1 align-text-bottom" />Account Settings</a>
                <a className="dropdown-item" href="pages-profile.html"><i className="las la-lock fs-18 me-1 align-text-bottom" /> Security</a>
                <a className="dropdown-item" href="pages-faq.html"><i className="las la-question-circle fs-18 me-1 align-text-bottom" /> Help Center</a>                       
                <div className="dropdown-divider mb-0" />
                <a className="dropdown-item text-danger" href="auth-login.html"><i className="las la-power-off fs-18 me-1 align-text-bottom" /> Logout</a>
              </div>
            </li>
          </ul>{/*end topbar-nav*/}
        </nav>
        {/* end navbar*/}
      </div>
    </div>
    {/* Top Bar End */}


 <div>
  {/* leftbar-tab-menu */}
  <div className="startbar d-print-none">
    {/*start brand*/}
    <div className="brand">
      <a href="index.html" className="logo">
        <span>
          <img src="src/assets/images/logo-sm.png" alt="logo-small" className="logo-sm" />
        </span>
        <span className>
          <img src="src/assets/images/logo-light.png" alt="logo-large" className="logo-lg logo-light" />
          <img src="src/assets/images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark" />
        </span>
      </a>
    </div>
    {/*end brand*/}
    {/*start startbar-menu*/}
    <div className="startbar-menu">
      <div className="startbar-collapse" id="startbarCollapse" data-simplebar>
        <div className="d-flex align-items-start flex-column w-100">
          {/* Navigation */}
          <ul className="navbar-nav mb-auto w-100">
            <li className="menu-label pt-0 mt-0">
              {/* <small class="label-border">
                          <div class="border_left hidden-xs"></div>
                          <div class="border_right"></div>
                      </small> */}
              <span>Main Menu</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                <i className="iconoir-home-simple menu-icon" />
                <span>Dashboards</span>
              </a>
              <div className="collapse " id="sidebarDashboards">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">Analytics</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" hre ="ecommerce-index.html">Ecommerce</a>
                  </li>{/*end nav-item*/}
                </ul>{/*end nav*/}
              </div>{/*end startbarDashboards*/}
            </li>{/*end nav-item*/}
            <li className="nav-item">
              <a className="nav-link" href="#sidebarApplications" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApplications">
                <i className="iconoir-view-grid menu-icon" />
                <span>Applications</span>
              </a>
              <div className="collapse " id="sidebarApplications">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#sidebarAnalytics" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAnalytics">                                        
                      <span>Analytics</span>
                    </a>
                    <div className="collapse " id="sidebarAnalytics">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a href="analytics-customers.html" className="nav-link ">Customers</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a href="analytics-reports.html" className="nav-link ">Reports</a>
                        </li>{/*end nav-item*/}
                      </ul>{/*end nav*/}
                    </div>
                  </li>{/*end nav-item*/}                                
                  <li className="nav-item">
                    <a className="nav-link" href="#sidebarProjects" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProjects">                                        
                      <span>Projects</span>
                    </a>
                    <div className="collapse " id="sidebarProjects">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="projects-clients.html">Clients</a>
                        </li>{/*end nav-item*/}
                      </ul>{/*end nav*/}
                    </div>
                  </li>{/*end nav-item*/}                          
                </ul>{/*end nav*/}
              </div>{/*end startbarApplications*/}
            </li>{/*end nav-item*/}

            
          
          
             
            <li className="menu-label mt-2">
              <small className="label-border">
                <div className="border_left hidden-xs" />
                <div className="border_right" />
              </small>
              <span>Crafted</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sidebarPages" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPages">
                <i className="iconoir-page-star menu-icon" />
                <span>Pages</span>
              </a>
              <div className="collapse " id="sidebarPages">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="pages-profile.html">Profile</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-notifications.html">Notifications</a>
                  </li>{/*end nav-item*/}
                </ul>{/*end nav*/}
              </div>{/*end startbarPages*/}
            </li>{/*end nav-item*/}


            <li className="nav-item">
              <a className="nav-link" href="#sidebarAuthentication" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuthentication">
                <i className="iconoir-fingerprint-lock-circle menu-icon" />
                <span>Authentication</span>
              </a>
              <div className="collapse " id="sidebarAuthentication">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="auth-login.html">Log in</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-register.html">Register</a>
                  </li>{/*end nav-item*/}
                </ul>{/*end nav*/}
              </div>{/*end startbarAuthentication*/}
            </li>{/*end nav-item*/}
          </ul>{/*end navbar-nav-*/}                 
        </div>
      </div>{/*end startbar-collapse*/}
    </div>{/*end startbar-menu*/}    
  </div>{/*end startbar*/}
  {/* end leftbar-tab-menu*/}
</div>

                


</>
)

}

export default Test;