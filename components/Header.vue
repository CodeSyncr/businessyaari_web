<template>
  <Preloader />
  <ColorSwitch />
  <header class="header-section bg-color-3">
    <div class="header-bottom">
      <div class="container">
        <div class="header-wrapper">
          <div class="logo">
            <NuxtLink to="/">
              <img class="dark" src="/assets/images/logo/logo.png" alt="logo" />
            </NuxtLink>
          </div>
          <div class="menu-area">
            <ul class="menu menu--style1">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
                <!-- <ul class="submenu">
                  <li><a href="index-2.html">Home One</a></li>
                  <li>
                    <a href="index1-light.html"
                      >Home Light <span class="style1">Light</span></a
                    >
                  </li>
                  <li>
                    <a href="index1-dark.html"
                      >Home Dark <span class="style2">Dark</span>
                    </a>
                  </li>
                  <li><a href="index-3.html">Home Two</a></li>
                  <li>
                    <a href="index-2-light.html"
                      >Home Light <span class="style1">Light</span></a
                    >
                  </li>
                  <li>
                    <a href="index-2-dark.html"
                      >Home Dark <span class="style2">Dark</span>
                    </a>
                  </li>
                </ul> -->
              </li>
              <li>
                <NuxtLink to="services">Services</NuxtLink>
                <!-- <ul class="submenu">
                  <li><NuxtLink to="services">Services</NuxtLink></li>
                  <li><a href="service-details.html">Services Details</a></li>
                </ul> -->
              </li>
              <li>
                <NuxtLink to="about">About</NuxtLink>
                <!-- <ul class="submenu">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="price.html">Price</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="team-2.html">Team 2</a></li>
                  <li><a href="team-details.html">Team Details</a></li>
                </ul> -->
              </li>

              <!-- <li>
                <a href="#0">Pages</a>
                <ul class="submenu">
                  <li><a href="blogs.html">Blogs</a></li>
                  <li><a href="blog-sidebar.html">Blog - Side Bar</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                  <li><a href="signup.html">Sign Up</a></li>
                  <li><a href="signup-2.html">Sign Up 2</a></li>
                  <li><a href="signin.html">Sign In</a></li>
                  <li><a href="signin-2.html">Sign In 2</a></li>
                  <li><a href="forgot-pass.html">Reset Password</a></li>
                  <li><a href="forgot-pass-2.html">Reset Password 2</a></li>
                  <li><a href="404.html">404 Error</a></li>
                </ul>
              </li> -->
              <li>
                <NuxtLink to="contact">Contact Us</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="header-action">
            <div class="menu-area">
              <div class="header-btn">
                <NuxtLink
                  to="/contact"
                  class="trk-btn trk-btn--border trk-btn--primary1"
                >
                  <span>Talk To Expert</span>
                </NuxtLink>
              </div>

              <!-- toggle icons -->
              <div class="header-bar d-lg-none header-bar--style1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
