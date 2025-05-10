import React from 'react'

const Test = () => {
  return (
    <>
        
    {/* Top Bar Start */}
    <div className="topbar d-print-none">
      <div className="container-xxl">
        <nav className="topbar-custom d-flex justify-content-between" id="topbar-custom">    
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">                        
            <li>
              <button className="nav-link mobile-menu-btn nav-icon" id="togglemenu">
                <i className="iconoir-menu-scale" />
              </button>
            </li> 
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
            <li className="dropdown">
              <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <img src="assets/images/flags/us_flag.jpg" alt className="thumb-sm rounded-circle" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"><img src="assets/images/flags/us_flag.jpg" alt height={15} className="me-2" />English</a>
                <a className="dropdown-item" href="#"><img src="assets/images/flags/spain_flag.jpg" alt height={15} className="me-2" />Spanish</a>
                <a className="dropdown-item" href="#"><img src="assets/images/flags/germany_flag.jpg" alt height={15} className="me-2" />German</a>
                <a className="dropdown-item" href="#"><img src="assets/images/flags/french_flag.jpg" alt height={15} className="me-2" />French</a>
              </div>
            </li>{/*end topbar-language*/}
            <li className="topbar-item">
              <a className="nav-link nav-icon" href="javascript:void(0);" id="light-dark-mode">
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
                  Notifications <a href="#" className="badge text-body-tertiary badge-pill">
                    <i className="iconoir-plus-circle fs-4" />
                  </a>
                </h5>
                <ul className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link mx-0 active" data-bs-toggle="tab" href="#All" role="tab" aria-selected="true">
                      All <span className="badge bg-primary-subtle text-primary badge-pill ms-1">24</span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link mx-0" data-bs-toggle="tab" href="#Projects" role="tab" aria-selected="false" tabIndex={-1}>
                      Projects
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link mx-0" data-bs-toggle="tab" href="#Teams" role="tab" aria-selected="false" tabIndex={-1}>
                      Team
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
                <img src="assets/images/users/avatar-1.jpg" alt className="thumb-lg rounded-circle" />
              </a>
              <div className="dropdown-menu dropdown-menu-end py-0">
                <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                  <div className="flex-shrink-0">
                    <img src="assets/images/users/avatar-1.jpg" alt className="thumb-md rounded-circle" />
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
          <img src="assets/images/logo-sm.png" alt="logo-small" className="logo-sm" />
        </span>
        <span className>
          <img src="assets/images/logo-light.png" alt="logo-large" className="logo-lg logo-light" />
          <img src="assets/images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark" />
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
                    <a className="nav-link" href="ecommerce-index.html">Ecommerce</a>
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
                        <li className="nav-item">
                          <a className="nav-link" href="projects-team.html">Team</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-project.html">Project</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-task.html">Task</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-kanban-board.html">Kanban Board</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-chat.html">Chat</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-users.html">Users</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-create.html">Project Create</a>
                        </li>{/*end nav-item*/} 
                      </ul>{/*end nav*/}
                    </div>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="#sidebarEcommerce" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEcommerce">                                        
                      <span>Ecommerce</span>
                    </a>
                    <div className="collapse " id="sidebarEcommerce">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="ecommerce-products.html">Products</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="ecommerce-customers.html">Customers</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="ecommerce-customer-details.html">Customer Details</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="ecommerce-orders.html">Orders</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="ecommerce-order-details.html">Order Details</a>
                        </li>{/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="ecommerce-refunds.html">Refunds</a>
                        </li>{/*end nav-item*/}
                      </ul>{/*end nav*/}
                    </div>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="apps-chat.html">Chat</a>
                  </li>{/*end nav-item*/} 
                  <li className="nav-item">
                    <a className="nav-link" href="apps-contact-list.html">Contact List</a>
                  </li>{/*end nav-item*/} 
                  <li className="nav-item">
                    <a className="nav-link" href="apps-calendar.html">Calendar</a>
                  </li>{/*end nav-item*/}  
                  <li className="nav-item">
                    <a className="nav-link" href="apps-invoice.html">Invoice</a>
                  </li>{/*end nav-item*/}                                
                </ul>{/*end nav*/}
              </div>{/*end startbarApplications*/}
            </li>{/*end nav-item*/}
            <li className="menu-label mt-2">
              <small className="label-border">
                <div className="border_left hidden-xs" />
                <div className="border_right" />
              </small>
              <span>Components</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sidebarElements" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarElements">
                <i className="iconoir-compact-disc menu-icon" />
                <span>UI Elements</span>
              </a>
              <div className="collapse " id="sidebarElements">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="ui-alerts.html">Alerts</a>
                  </li>{/*end nav-item*/} 
                  <li className="nav-item">
                    <a className="nav-link" href="ui-avatar.html">Avatar</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-buttons.html">Buttons</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-badges.html">Badges</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-cards.html">Cards</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-carousels.html">Carousels</a>
                  </li>{/*end nav-item*/}                                
                  <li className="nav-item">
                    <a className="nav-link" href="ui-dropdowns.html">Dropdowns</a>
                  </li>{/*end nav-item*/}                                   
                  <li className="nav-item">
                    <a className="nav-link" href="ui-grids.html">Grids</a>
                  </li>{/*end nav-item*/}                                
                  <li className="nav-item">
                    <a className="nav-link" href="ui-images.html">Images</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-list.html">List</a>
                  </li>{/*end nav-item*/}                                   
                  <li className="nav-item">
                    <a className="nav-link" href="ui-modals.html">Modals</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-navs.html">Navs</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-navbar.html">Navbar</a>
                  </li>{/*end nav-item*/} 
                  <li className="nav-item">
                    <a className="nav-link" href="ui-paginations.html">Paginations</a>
                  </li>{/*end nav-item*/}   
                  <li className="nav-item">
                    <a className="nav-link" href="ui-popover-tooltips.html">Popover &amp; Tooltips</a>
                  </li>{/*end nav-item*/}                                
                  <li className="nav-item">
                    <a className="nav-link" href="ui-progress.html">Progress</a>
                  </li>{/*end nav-item*/}                                
                  <li className="nav-item">
                    <a className="nav-link" href="ui-spinners.html">Spinners</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
                  </li>{/*end nav-item*/}                               
                  <li className="nav-item">
                    <a className="nav-link" href="ui-typography.html">Typography</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-videos.html">Videos</a>
                  </li>{/*end nav-item*/} 
                </ul>{/*end nav*/}
              </div>{/*end startbarElements*/}
            </li>{/*end nav-item*/}
            <li className="nav-item">
              <a className="nav-link" href="#sidebarAdvancedUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAdvancedUI">
                <i className="iconoir-peace-hand menu-icon" />
                <span>Advanced UI</span><span className="badge rounded text-success bg-success-subtle ms-1">New</span>
              </a>
              <div className="collapse " id="sidebarAdvancedUI">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-animation.html">Animation</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-clipboard.html">Clip Board</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-dragula.html">Dragula</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-files.html">File Manager</a>
                  </li>{/*end nav-item*/} 
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-highlight.html">Highlight</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-rangeslider.html">Range Slider</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-ratings.html">Ratings</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-ribbons.html">Ribbons</a>
                  </li>{/*end nav-item*/}                                  
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-sweetalerts.html">Sweet Alerts</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-toasts.html">Toasts</a>
                  </li>{/*end nav-item*/}
                </ul>{/*end nav*/}
              </div>{/*end startbarAdvancedUI*/}
            </li>{/*end nav-item*/}
            <li className="nav-item">
              <a className="nav-link" href="#sidebarForms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarForms">
                <i className="iconoir-journal-page menu-icon" />
                <span>Forms</span>
              </a>
              <div className="collapse " id="sidebarForms">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="forms-elements.html">Basic Elements</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-advanced.html">Advance Elements</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-validation.html">Validation</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-wizard.html">Wizard</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-editors.html">Editors</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-uploads.html">File Upload</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-img-crop.html">Image Crop</a>
                  </li>{/*end nav-item*/}
                </ul>{/*end nav*/}
              </div>{/*end startbarForms*/}
            </li>{/*end nav-item*/}
            <li className="nav-item">
              <a className="nav-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCharts">
                <i className="iconoir-candlestick-chart menu-icon" />
                <span>Charts</span>
              </a>
              <div className="collapse " id="sidebarCharts">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="charts-apex.html">Apex</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="charts-justgage.html">JustGage</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="charts-chartjs.html">Chartjs</a>
                  </li>{/*end nav-item*/} 
                  <li className="nav-item">
                    <a className="nav-link" href="charts-toast-ui.html">Toast</a>
                  </li>{/*end nav-item*/} 
                </ul>{/*end nav*/}
              </div>{/*end startbarCharts*/}
            </li>{/*end nav-item*/}
            <li className="nav-item">
              <a className="nav-link" href="#sidebarTables" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTables">
                <i className="iconoir-table-rows menu-icon" />
                <span>Tables</span>
              </a>
              <div className="collapse " id="sidebarTables">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="tables-basic.html">Basic</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="tables-datatable.html">Datatables</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="tables-editable.html">Editable</a>
                  </li>{/*end nav-item*/} 
                </ul>{/*end nav*/}
              </div>{/*end startbarTables*/}
            </li>{/*end nav-item*/}
            <li className="nav-item">
              <a className="nav-link" href="#sidebarIcons" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarIcons">
                <i className="iconoir-trophy menu-icon" />
                <span>Icons</span>
              </a>
              <div className="collapse " id="sidebarIcons">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="icons-fontawesome.html">Font Awesome</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="icons-lineawesome.html">Line Awesome</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="icons-icofont.html">Icofont</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="icons-iconoir.html">Iconoir</a>
                  </li>{/*end nav-item*/}
                </ul>{/*end nav*/}
              </div>{/*end startbarIcons*/}
            </li>{/*end nav-item*/}
            <li className="nav-item">
              <a className="nav-link" href="#sidebarMaps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMaps">
                <i className="iconoir-navigator-alt menu-icon" />
                <span>Maps</span>
              </a>
              <div className="collapse " id="sidebarMaps">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="maps-google.html">Google Maps</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="maps-leaflet.html">Leaflet Maps</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="maps-vector.html">Vector Maps</a>
                  </li>{/*end nav-item*/} 
                </ul>{/*end nav*/}
              </div>{/*end startbarMaps*/}
            </li>{/*end nav-item*/}
            <li className="nav-item">
              <a className="nav-link" href="#sidebarEmailTemplates" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEmailTemplates">
                <i className="iconoir-send-mail menu-icon" />
                <span>Email Templates</span>
              </a>
              <div className="collapse " id="sidebarEmailTemplates">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="email-templates-basic.html">Basic Action Email</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="email-templates-alert.html">Alert Email</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="email-templates-billing.html">Billing Email</a>
                  </li>{/*end nav-item*/}  
                </ul>{/*end nav*/}
              </div>{/*end startbarEmailTemplates*/}
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
                  <li className="nav-item">
                    <a className="nav-link" href="pages-timeline.html">Timeline</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-treeview.html">Treeview</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-starter.html">Starter Page</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-pricing.html">Pricing</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-blogs.html">Blogs</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-faq.html">FAQs</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-gallery.html">Gallery</a>
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
                  <li className="nav-item">
                    <a className="nav-link" href="auth-recover-pw.html">Re-Password</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-lock-screen.html">Lock Screen</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-maintenance.html">Maintenance</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-404.html">Error 404</a>
                  </li>{/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-500.html">Error 500</a>
                  </li>{/*end nav-item*/}
                </ul>{/*end nav*/}
              </div>{/*end startbarAuthentication*/}
            </li>{/*end nav-item*/}
          </ul>{/*end navbar-nav-*/}
          <div className="update-msg text-center"> 
            <div className="d-flex justify-content-center align-items-center thumb-lg update-icon-box  rounded-circle mx-auto">
              <i className="iconoir-peace-hand h3 align-self-center mb-0 text-primary" />
            </div>                   
            <h5 className="mt-3">Mannat Themes</h5>
            <p className="mb-3 text-muted">Rizz is a high quality web applications.</p>
            <a href="javascript: void(0);" className="btn text-primary shadow-sm rounded-pill">Upgrade your plan</a>
          </div>
        </div>
      </div>{/*end startbar-collapse*/}
    </div>{/*end startbar-menu*/}    
  </div>{/*end startbar*/}
  <div className="startbar-overlay d-print-none" />
  {/* end leftbar-tab-menu*/}
</div>

                


</>
)

}

export default Test;