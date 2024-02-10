<template>
  <!-- ===============>> Preloader start here <<================= -->
  <div class="preloader">
    <img src="/assets/images/logo/preloader.png" alt="preloader icon" />
  </div>
  <!-- ===============>> Preloader end here <<================= -->

  <!-- ===============>> light&dark switch start here <<================= -->
  <div class="lightdark-switch">
    <span class="dark-btn" id="btnSwitch"
      ><img
        src="/assets/images/icon/moon.svg"
        alt="lightdark-switch"
        class="swtich-icon"
    /></span>
  </div>
  <!-- ===============>> light&dark switch start here <<================= -->

  <!-- ===============>> Header section start here <<================= -->
  <Header />
  <!-- ===============>> Header section end here <<================= -->

  <!-- ===============>> Banner section start here <<================= -->
  <section
    class="banner banner--style1 bg--cover bg-color-3"
    style="background-image: url('/assets/images/bg/4.png')"
  >
    <div class="container">
      <div class="banner__wrapper">
        <div class="row gy-5 gx-4">
          <div class="col-lg-6 col-md-6">
            <div
              class="banner__content"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1 class="banner__content-heading">
                we help to grow your business
              </h1>
              <p class="banner__content-moto">
                Anyone can invest money to different currency to increase their
                earnings by the help of tradingo through online.
              </p>
              <div class="banner__content-btngroup">
                <a
                  href="signin.html"
                  class="trk-btn trk-btn--border trk-btn--primary1 trk-btn--arrow"
                  >Get Started
                  <span><i class="fa-solid fa-arrow-right"></i></span>
                </a>
                <a href="" class="playbtn" data-fslightbox>
                  <span class="playbtn__thumb"
                    ><i class="fa-solid fa-play"></i
                  ></span>
                  <span class="playbtn__content">Watch Video</span>
                </a>
              </div>
              <div class="banner__content-social">
                <p>Follow Us</p>
                <ul class="social">
                  <li class="social__item">
                    <a href="#" class="social__link social__link--style1 active"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li class="social__item">
                    <a href="#" class="social__link social__link--style1"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li class="social__item">
                    <a href="#" class="social__link social__link--style1"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li class="social__item">
                    <a href="#" class="social__link social__link--style1"
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                  <li class="social__item">
                    <a
                      href="signin.html"
                      class="social__link social__link--style1"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="banner__thumb">
              <img src="/assets/images/bg/5.png" alt="banner-thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner__shape">
      <span class="banner__shape-item banner__shape-item--1"
        ><img src="/assets/images/banner/shape/1.png" alt="shape icon"
      /></span>
      <span class="banner__shape-item banner__shape-item--2"
        ><img src="/assets/images/banner/shape/2.png" alt="shape icon"
      /></span>
      <span class="banner__shape-item banner__shape-item--3"
        ><img src="/assets/images/banner/shape/3.png" alt="shape icon"
      /></span>
      <span class="banner__shape-item banner__shape-item--4"
        ><img src="/assets/images/banner/shape/4.png" alt="shape icon"
      /></span>
      <span class="banner__shape-item banner__shape-item--5"
        ><img src="/assets/images/banner/shape/5.png" alt="shape icon"
      /></span>
    </div>
  </section>
  <!-- ===============>> Banner section end here <<================= -->

  <!-- ===============>> partner section start here <<================= -->
  <div class="partner partner--gradient">
    <div class="container">
      <div class="partner__wrapper">
        <div class="partner__slider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="partner__item">
                <div class="partner__item-inner">
                  <img
                    src="/assets/images/partner/light/1.png"
                    alt="partner logo"
                  />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="partner__item">
                <div class="partner__item-inner">
                  <img
                    src="/assets/images/partner/light/2.png"
                    alt="partner logo"
                  />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="partner__item">
                <div class="partner__item-inner">
                  <img
                    src="/assets/images/partner/light/3.png"
                    alt="partner logo"
                  />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="partner__item">
                <div class="partner__item-inner">
                  <img
                    src="/assets/images/partner/light/4.png"
                    alt="partner logo"
                  />
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="partner__item">
                <div class="partner__item-inner">
                  <img
                    src="/assets/images/partner/light/5.png"
                    alt="partner logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ===============>> partner section end here <<================= -->

  <!-- ===============>> About section start here <<================= -->
  <section class="about about--style1 bg-color-2">
    <div class="container">
      <div class="about__wrapper">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div
              class="about__thumb"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div class="about__thumb-inner">
                <div class="about__thumb-image floating-content">
                  <img
                    class="dark"
                    src="/assets/images/about/1.png"
                    alt="about-image"
                  />
                  <div class="floating-content__top-left">
                    <div class="floating-content__item">
                      <h3>
                        <span
                          class="purecounter"
                          data-purecounter-start="0"
                          data-purecounter-end="10"
                          >30</span
                        >
                        Years
                      </h3>
                      <p>Consulting Experience</p>
                    </div>
                  </div>
                  <div class="floating-content__bottom-right">
                    <div class="floating-content__item">
                      <h3>
                        <span
                          class="purecounter"
                          data-purecounter-start="0"
                          data-purecounter-end="25"
                          >25K</span
                        >K+
                      </h3>
                      <p>Satisfied Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="about__content"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div class="about__content-inner">
                <div class="section-header section-header--max18 mb-1">
                  <h2>Learn More About <span>our company </span></h2>
                </div>
                <p class="mb-0">
                  Hey there! So glad you stopped by to Meet Our Company. Don't
                  miss out on this opportunity to learn about what we do and the
                  amazing team that makes it all happen!
                </p>
                <p class="mb-0">
                  Our company is all about creating innovative solutions and
                  providing top-notch services to our clients. From start to
                  finish, we're dedicated to delivering results that exceed
                  expectations.
                </p>
                <a
                  href="about.html"
                  class="trk-btn trk-btn--border trk-btn--primary1 mt-25"
                  >Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about__shape about__shape--style1">
      <span class="about__shape-item"
        ><img src="/assets/images/about/2.png" alt="shpae-icon"
      /></span>
    </div>
  </section>
  <!-- ===============>> About section start here <<================= -->

  <!-- ===============>> feature section start here <<================= -->
  <section class="feature bg-color-4">
    <div class="container">
      <div class="feature__wrapper">
        <div class="row g-5 align-items-center justify-content-between">
          <div class="col-md-6 col-lg-5">
            <div
              class="feature__content"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div class="feature__content-inner">
                <div class="section-header">
                  <h2 class="mb-15"><span>benefits </span>We offer</h2>
                  <p class="mb-0">
                    Unlock the full potential of our product with our amazing
                    features and top-notch.
                  </p>
                </div>

                <div class="feature__nav">
                  <div
                    class="nav nav--feature flex-column nav-pills"
                    id="feat-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <div
                      class="nav-link active"
                      id="feat-pills-one-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#feat-pills-one"
                      role="tab"
                      aria-controls="feat-pills-one"
                      aria-selected="true"
                    >
                      <div class="feature__item">
                        <div class="feature__item-inner">
                          <div class="feature__item-content">
                            <h6>
                              up to date with market trends and best practices
                              in your industry.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="nav-link"
                      id="feat-pills-two-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#feat-pills-two"
                      role="tab"
                      aria-controls="feat-pills-two"
                      aria-selected="false"
                    >
                      <div class="feature__item">
                        <div class="feature__item-inner">
                          <div class="feature__item-content">
                            <h6>
                              Get help from pros with diverse industry
                              experience.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="nav-link"
                      id="feat-pills-three-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#feat-pills-three"
                      role="tab"
                      aria-controls="feat-pills-three"
                      aria-selected="false"
                    >
                      <div class="feature__item">
                        <div class="feature__item-inner">
                          <div class="feature__item-content">
                            <h6>
                              Get personalized advice for your business needs.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="nav-link"
                      id="feat-pills-four-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#feat-pills-four"
                      role="tab"
                      aria-controls="feat-pills-four"
                      aria-selected="false"
                    >
                      <div class="feature__item">
                        <div class="feature__item-inner">
                          <div class="feature__item-content">
                            <h6>
                              All transactions are free for Pro Traders members.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6">
            <div
              class="feature__thumb"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div class="feature__thumb-inner">
                <div class="tab-content" id="feat-pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="feat-pills-one"
                    role="tabpanel"
                    aria-labelledby="feat-pills-one-tab"
                    tabindex="0"
                  >
                    <div class="feature__image floating-content">
                      <img
                        src="/assets/images/feature/1.png"
                        alt="Feature image"
                      />
                      <div
                        class="floating-content__left-top floating-content__left-top--style2"
                      >
                        <div class="floating-content__item text-center p-20">
                          <img
                            class="mb-15"
                            src="/assets/images/feature/5.png"
                            alt="rating"
                          />
                          <p class="style2">Success Rate</p>
                        </div>
                      </div>
                      <div
                        class="floating-content__bottom-right floating-content__bottom-right--style2"
                      >
                        <div
                          class="floating-content__item floating-content__item--style2 d-flex align-items-center"
                        >
                          <h3>
                            <span
                              class="purecounter"
                              data-purecounter-start="0"
                              data-purecounter-end="24"
                              >25K</span
                            >/7
                          </h3>
                          <p class="ms-3 style2">Online service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="feat-pills-two"
                    role="tabpanel"
                    aria-labelledby="feat-pills-two-tab"
                    tabindex="0"
                  >
                    <div class="feature__image floating-content">
                      <img
                        src="/assets/images/feature/2.png"
                        alt="Feature image"
                      />
                      <div class="floating-content__left-top">
                        <div class="floating-content__item text-center p-20">
                          <img
                            class="mb-15"
                            src="/assets/images/feature/5.png"
                            alt="rating"
                          />
                          <p class="style2">Success Rate</p>
                        </div>
                      </div>
                      <div class="floating-content__bottom-right">
                        <div
                          class="floating-content__item floating-content__item--style2 d-flex align-items-center"
                        >
                          <h3>
                            <span
                              class="purecounter"
                              data-purecounter-start="0"
                              data-purecounter-end="24"
                              >25K</span
                            >/7
                          </h3>
                          <p class="ms-3 style2">Online service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="feat-pills-three"
                    role="tabpanel"
                    aria-labelledby="feat-pills-three-tab"
                    tabindex="0"
                  >
                    <div class="feature__image floating-content">
                      <img
                        src="/assets/images/feature/3.png"
                        alt="Feature image"
                      />
                      <div class="floating-content__left-top">
                        <div class="floating-content__item text-center p-20">
                          <img
                            class="mb-15"
                            src="/assets/images/feature/5.png"
                            alt="rating"
                          />
                          <p class="style2">Success Rate</p>
                        </div>
                      </div>
                      <div class="floating-content__bottom-right">
                        <div
                          class="floating-content__item floating-content__item--style2 d-flex align-items-center"
                        >
                          <h3>
                            <span
                              class="purecounter"
                              data-purecounter-start="0"
                              data-purecounter-end="24"
                              >25K</span
                            >/7
                          </h3>
                          <p class="ms-3 style2">Online service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="feat-pills-four"
                    role="tabpanel"
                    aria-labelledby="feat-pills-four-tab"
                    tabindex="0"
                  >
                    <div class="feature__image floating-content">
                      <img
                        src="/assets/images/feature/4.png"
                        alt="Feature image"
                      />
                      <div class="floating-content__left-top">
                        <div class="floating-content__item text-center p-20">
                          <img
                            class="mb-15"
                            src="/assets/images/feature/5.png"
                            alt="rating"
                          />
                          <p class="style2">Success Rate</p>
                        </div>
                      </div>
                      <div class="floating-content__bottom-right">
                        <div
                          class="floating-content__item floating-content__item--style2 d-flex align-items-center"
                        >
                          <h3>
                            <span
                              class="purecounter"
                              data-purecounter-start="0"
                              data-purecounter-end="24"
                              >25K</span
                            >/7
                          </h3>
                          <p class="ms-3 style2">Online service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="feature__shape">
      <span class="feature__shape-item feature__shape-item--1"
        ><img src="/assets/images/about/shape/1.png" alt="shpae-icon"
      /></span>
      <span class="feature__shape-item feature__shape-item--2"
        ><img src="/assets/images/about/shape/2.png" alt="shpae-icon"
      /></span>
      <span class="feature__shape-item feature__shape-item--3"
        ><img src="/assets/images/about/shape/3.png" alt="shpae-icon"
      /></span>
      <span class="feature__shape-item feature__shape-item--4"
        ><img src="/assets/images/about/shape/4.png" alt="shpae-icon"
      /></span>
    </div>
  </section>
  <!-- ===============>> feature section end here <<================= -->

  <!-- ===============>> Service section start here <<================= -->
  <section class="service padding-top padding-bottom bg-color-2">
    <div class="section-header section-header--max50">
      <h2 class="mb-15 mt-minus-10"><span>services </span>We offer</h2>
      <p>
        We offer the best services around - from installations to repairs,
        maintenance, and more!
      </p>
    </div>
    <div class="container">
      <div class="service__wrapper">
        <div class="row g-4 align-items-center">
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div
              class="service__item"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div class="service__item-inner text-center">
                <div class="service__thumb mb-30">
                  <div class="service__thumb-inner">
                    <img
                      class="dark"
                      src="/assets/images/service/1.png"
                      alt="service-icon"
                    />
                  </div>
                </div>
                <div class="service__content">
                  <h5 class="mb-15">
                    <a class="stretched-link" href="service-details.html"
                      >Strategy Consulting</a
                    >
                  </h5>
                  <p class="mb-0">
                    A social assistant that's flexible can accommodate your
                    schedule and needs, making life easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="service__item"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="service__item-inner text-center">
                <div class="service__thumb mb-30">
                  <div class="service__thumb-inner">
                    <img
                      class="dark"
                      src="/assets/images/service/2.png"
                      alt="service-icon"
                    />
                  </div>
                </div>
                <div class="service__content">
                  <h5 class="mb-15">
                    <a class="stretched-link" href="service-details.html">
                      Financial Advisory</a
                    >
                  </h5>
                  <p class="mb-0">
                    Modules transform smart trading by automating processes and
                    improving decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="service__item"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div class="service__item-inner text-center">
                <div class="service__thumb mb-30">
                  <div class="service__thumb-inner">
                    <img
                      class="dark"
                      src="/assets/images/service/3.png"
                      alt="service-icon"
                    />
                  </div>
                </div>
                <div class="service__content">
                  <h5 class="mb-15">
                    <a class="stretched-link" href="service-details.html"
                      >Management</a
                    >
                  </h5>
                  <p class="mb-0">
                    There, it's me, your friendly neighborhood reporter's news
                    analyst processes and improving
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="service__item"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div class="service__item-inner text-center">
                <div class="service__thumb mb-30">
                  <div class="service__thumb-inner">
                    <img
                      class="dark"
                      src="/assets/images/service/4.png"
                      alt="service-icon"
                    />
                  </div>
                </div>
                <div class="service__content">
                  <h5 class="mb-15">
                    <a class="stretched-link" href="service-details.html"
                      >Supply Optimization
                    </a>
                  </h5>
                  <p class="mb-0">
                    Hey, have you checked out that new cryptocurrency platform?
                    It's pretty cool and easy to use!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="service__item"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="service__item-inner text-center">
                <div class="service__thumb mb-30">
                  <div class="service__thumb-inner">
                    <img
                      class="dark"
                      src="/assets/images/service/5.png"
                      alt="service-icon"
                    />
                  </div>
                </div>
                <div class="service__content">
                  <h5 class="mb-15">
                    <a class="stretched-link" href="service-details.html"
                      >HR consulting</a
                    >
                  </h5>
                  <p class="mb-0">
                    Hey guys, just a quick update on exchange orders. There have
                    been some changes currency!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="service__item"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div class="service__item-inner text-center">
                <div class="service__thumb mb-30">
                  <div class="service__thumb-inner">
                    <img
                      class="dark"
                      src="/assets/images/service/6.png"
                      alt="service-icon"
                    />
                  </div>
                </div>
                <div class="service__content">
                  <h5 class="mb-15">
                    <a class="stretched-link" href="service-details.html"
                      >Marketing consulting</a
                    >
                  </h5>
                  <p class="mb-0">
                    Hey! Just wanted to let you know that the price notification
                    module processes is now live!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service__shape">
      <span class="service__shape-item"
        ><img src="/assets/images/about/2.png" alt="shpae-icon"
      /></span>
    </div>
  </section>
  <!-- ===============>> Service section start here <<================= -->

  <!-- ===============>> Pricing section start here <<================= -->
  <section class="pricing padding-top padding-bottom bg-color-4">
    <div class="section-header section-header--max50">
      <h2 class="mb-15 mt-minus-10"><span>pricings </span>We offer</h2>
      <p>
        We offer the best pricings around - from installations to repairs,
        maintenance, and more!
      </p>
    </div>
    <div class="container">
      <div class="pricing__wrapper">
        <div class="row g-4 align-items-center">
          <div class="col-md-6 col-lg-4">
            <div
              class="pricing__item"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div class="pricing__item-inner">
                <div class="pricing__item-content">
                  <!-- pricing top part -->
                  <div class="pricing__item-top">
                    <h6 class="mb-15">Basic</h6>
                    <h3 class="mb-25">$99/<span>Monthly</span></h3>
                  </div>

                  <!-- pricing middle part -->
                  <div class="pricing__item-middle">
                    <ul class="pricing__list">
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Weekly online meeting
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Unlimited learning access
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        24/7 technical support
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Personal training
                      </li>
                    </ul>
                  </div>

                  <!-- pricing bottom part -->
                  <div class="pricing__item-bottom">
                    <a href="signup.html" class="trk-btn trk-btn--outline"
                      >Choose Plan</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div
              class="pricing__item"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="pricing__item-inner active">
                <div class="pricing__item-content">
                  <!-- pricing top part -->
                  <div class="pricing__item-top">
                    <h6 class="mb-15">standard</h6>
                    <h3 class="mb-25">$149/<span>Monthly</span></h3>
                  </div>

                  <!-- pricing middle part -->
                  <div class="pricing__item-middle">
                    <ul class="pricing__list">
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Weekly online meeting
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Unlimited learning access
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        24/7 technical support
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Personal training
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Business analysis
                      </li>
                    </ul>
                  </div>

                  <!-- pricing bottom part -->
                  <div class="pricing__item-bottom">
                    <a
                      href="signup.html"
                      class="trk-btn trk-btn--outline active"
                      >Choose Plan</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div
              class="pricing__item"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div class="pricing__item-inner">
                <div class="pricing__item-content">
                  <!-- pricing top part -->
                  <div class="pricing__item-top">
                    <h6 class="mb-15">premium</h6>
                    <h3 class="mb-25">$199/<span>Monthly</span></h3>
                  </div>

                  <!-- pricing middle part -->
                  <div class="pricing__item-middle">
                    <ul class="pricing__list">
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        With all standard features
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Unlimited learning access
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        24/7 technical support
                      </li>
                      <li class="pricing__list-item">
                        <span
                          ><img
                            src="/assets/images/icon/check.svg"
                            alt="check"
                            class="dark"
                        /></span>
                        Personal training
                      </li>
                    </ul>
                  </div>

                  <!-- pricing bottom part -->
                  <div class="pricing__item-bottom">
                    <a href="signup.html" class="trk-btn trk-btn--outline"
                      >Choose Plan</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ===============>> Pricing section start here <<================= -->

  <!-- ===============>> Team section start here <<================= -->
  <section class="team padding-top padding-bottom bg-color-2">
    <div class="section-header section-header--max50">
      <h2 class="mb-15 mt-minus-10">Meet our <span>advisers</span></h2>
      <p>
        Hey everyone, meet our amazing advisers! They're here to help and guide
        us through anything.
      </p>
    </div>
    <div class="container">
      <div class="team__wrapper">
        <div class="row g-4 align-items-center">
          <div class="col-sm-6 col-lg-3">
            <div
              class="team__item team__item--shape"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div class="team__item-inner team__item-inner--shape">
                <div class="team__item-thumb team__item-thumb--style1">
                  <img src="/assets/images/team/1.png" alt="Team Image" />
                </div>
                <div class="team__item-content team__item-content--style1">
                  <div class="team__item-author team__item-author--style1">
                    <div class="team__item-authorinfo">
                      <h6 class="mb-1">
                        <a href="team-details.html" class="stretched-link"
                          >Dianne Russell</a
                        >
                      </h6>
                      <p class="mb-0">Business Consultant</p>
                    </div>
                  </div>
                </div>
                <div class="team__item-shape">
                  <span class="team__item-shape1"
                    ><img src="/assets/images/team/icon/1.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape2"
                    ><img src="/assets/images/team/icon/2.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape3"
                    ><img src="/assets/images/team/icon/3.png" alt="shpae-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="team__item team__item--shape"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <div class="team__item-inner team__item-inner--shape">
                <div class="team__item-thumb team__item-thumb--style1">
                  <img src="/assets/images/team/2.png" alt="Team Image" />
                </div>
                <div class="team__item-content team__item-content--style1">
                  <div class="team__item-author team__item-author--style1">
                    <div class="team__item-authorinfo">
                      <h6 class="mb-1">
                        <a href="team-details.html" class="stretched-link"
                          >Theresa Webb</a
                        >
                      </h6>
                      <p class="mb-0">Strategic Advisor</p>
                    </div>
                  </div>
                </div>
                <div class="team__item-shape">
                  <span class="team__item-shape1"
                    ><img src="/assets/images/team/icon/1.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape2"
                    ><img src="/assets/images/team/icon/2.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape3"
                    ><img src="/assets/images/team/icon/3.png" alt="shpae-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="team__item team__item--shape"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="team__item-inner team__item-inner--shape">
                <div class="team__item-thumb team__item-thumb--style1">
                  <img src="/assets/images/team/3.png" alt="Team Image" />
                </div>
                <div class="team__item-content team__item-content--style1">
                  <div class="team__item-author team__item-author--style1">
                    <div class="team__item-authorinfo">
                      <h6 class="mb-1">
                        <a href="team-details.html" class="stretched-link"
                          >Courtney Henry</a
                        >
                      </h6>
                      <p class="mb-0">Management Consultant</p>
                    </div>
                  </div>
                </div>
                <div class="team__item-shape">
                  <span class="team__item-shape1"
                    ><img src="/assets/images/team/icon/1.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape2"
                    ><img src="/assets/images/team/icon/2.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape3"
                    ><img src="/assets/images/team/icon/3.png" alt="shpae-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="team__item team__item--shape"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <div class="team__item-inner team__item-inner--shape">
                <div class="team__item-thumb team__item-thumb--style1">
                  <img src="/assets/images/team/4.png" alt="Team Image" />
                </div>
                <div class="team__item-content team__item-content--style1">
                  <div class="team__item-author team__item-author--style1">
                    <div class="team__item-authorinfo">
                      <h6 class="mb-1">
                        <a href="team-details.html" class="stretched-link"
                          >Albert Flores</a
                        >
                      </h6>
                      <p class="mb-0">Development Specialist</p>
                    </div>
                  </div>
                </div>
                <div class="team__item-shape">
                  <span class="team__item-shape1"
                    ><img src="/assets/images/team/icon/1.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape2"
                    ><img src="/assets/images/team/icon/2.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape3"
                    ><img src="/assets/images/team/icon/3.png" alt="shpae-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="team__item team__item--shape"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div class="team__item-inner team__item-inner--shape">
                <div class="team__item-thumb team__item-thumb--style1">
                  <img src="/assets/images/team/5.png" alt="Team Image" />
                </div>
                <div class="team__item-content team__item-content--style1">
                  <div class="team__item-author team__item-author--style1">
                    <div class="team__item-authorinfo">
                      <h6 class="mb-1">
                        <a href="team-details.html" class="stretched-link"
                          >Darrell Steward</a
                        >
                      </h6>
                      <p class="mb-0">Growth Strategist</p>
                    </div>
                  </div>
                </div>
                <div class="team__item-shape">
                  <span class="team__item-shape1"
                    ><img src="/assets/images/team/icon/1.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape2"
                    ><img src="/assets/images/team/icon/2.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape3"
                    ><img src="/assets/images/team/icon/3.png" alt="shpae-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="team__item team__item--shape"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <div class="team__item-inner team__item-inner--shape">
                <div class="team__item-thumb team__item-thumb--style1">
                  <img src="/assets/images/team/6.png" alt="Team Image" />
                </div>
                <div class="team__item-content team__item-content--style1">
                  <div class="team__item-author team__item-author--style1">
                    <div class="team__item-authorinfo">
                      <h6 class="mb-1">
                        <a href="team-details.html" class="stretched-link"
                          >Wade Warren</a
                        >
                      </h6>
                      <p class="mb-0">Marketing Consultant</p>
                    </div>
                  </div>
                </div>
                <div class="team__item-shape">
                  <span class="team__item-shape1"
                    ><img src="/assets/images/team/icon/1.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape2"
                    ><img src="/assets/images/team/icon/2.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape3"
                    ><img src="/assets/images/team/icon/3.png" alt="shpae-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="team__item team__item--shape"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="team__item-inner team__item-inner--shape">
                <div class="team__item-thumb team__item-thumb--style1">
                  <img src="/assets/images/team/7.png" alt="Team Image" />
                </div>
                <div class="team__item-content team__item-content--style1">
                  <div class="team__item-author team__item-author--style1">
                    <div class="team__item-authorinfo">
                      <h6 class="mb-1">
                        <a href="team-details.html" class="stretched-link"
                          >Cody Fisher</a
                        >
                      </h6>
                      <p class="mb-0">HR Consultant</p>
                    </div>
                  </div>
                </div>
                <div class="team__item-shape">
                  <span class="team__item-shape1"
                    ><img src="/assets/images/team/icon/1.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape2"
                    ><img src="/assets/images/team/icon/2.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape3"
                    ><img src="/assets/images/team/icon/3.png" alt="shpae-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="team__item team__item--shape"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <div class="team__item-inner team__item-inner--shape">
                <div class="team__item-thumb team__item-thumb--style1">
                  <img src="/assets/images/team/8.png" alt="Team Image" />
                </div>
                <div class="team__item-content team__item-content--style1">
                  <div class="team__item-author team__item-author--style1">
                    <div class="team__item-authorinfo">
                      <h6 class="mb-1">
                        <a href="team-details.html" class="stretched-link"
                          >Bessie Cooper</a
                        >
                      </h6>
                      <p class="mb-0">Financial Advisor</p>
                    </div>
                  </div>
                </div>
                <div class="team__item-shape">
                  <span class="team__item-shape1"
                    ><img src="/assets/images/team/icon/1.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape2"
                    ><img src="/assets/images/team/icon/2.png" alt="shpae-icon"
                  /></span>
                  <span class="team__item-shape3"
                    ><img src="/assets/images/team/icon/3.png" alt="shpae-icon"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              href="team.html"
              class="trk-btn trk-btn--border trk-btn--primary1 mt-25"
              >View more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ===============>> Team section start here <<================= -->

  <!-- ===============>> Blog section start here <<================= -->
  <section class="blog padding-top padding-bottom bg-color-4">
    <div class="container">
      <div
        class="section-header d-md-flex align-items-center justify-content-between"
      >
        <div class="section-header__content">
          <h2 class="mb-15 mt-minus-10"><span>articles</span> for business</h2>
          <p class="mb-0">
            Hey there pro traders, check out these articles with tips to take
            your trading game to the next level!
          </p>
        </div>
        <div class="section-header__action">
          <div class="swiper-nav swiper-nav--style1">
            <button class="swiper-nav__btn blog__slider-prev">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button class="swiper-nav__btn blog__slider-next active">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="blog__wrapper" data-aos="fade-up" data-aos-duration="1000">
        <div class="blog__slider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="blog__item blog__item--style2">
                <div class="blog__item-inner">
                  <div class="blog__thumb">
                    <img src="/assets/images/blog/1.png" alt="blog Images" />
                  </div>

                  <div class="blog__content">
                    <div class="blog__meta">
                      <span class="blog__meta-tag blog__meta-tag--style1"
                        >Art & Design</span
                      >
                    </div>
                    <h5 class="10">
                      <a href="blog-details.html">the importance of trends.</a>
                    </h5>

                    <p class="mb-15">
                      Trends matter because they shape our new culture and help
                      us stay relevant in ariving constantly changing world.
                    </p>

                    <div class="blog__writer">
                      <div class="blog__writer-thumb">
                        <img
                          src="/assets/images/blog/author/1.png"
                          alt="writer"
                        />
                      </div>
                      <div class="blog__writer-designation">
                        <p class="mb-0">Vasha Gueye</p>
                        <span>20 May, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="blog__item blog__item--style2">
                <div class="blog__item-inner">
                  <div class="blog__thumb">
                    <img src="/assets/images/blog/2.png" alt="blog Images" />
                  </div>

                  <div class="blog__content">
                    <div class="blog__meta">
                      <span class="blog__meta-tag blog__meta-tag--style1"
                        >Marketing</span
                      >
                    </div>
                    <h5 class="10">
                      <a href="blog-details.html">How to Grow Business?</a>
                    </h5>

                    <p class="mb-15">
                      Growing your business? Focus for customer satisfaction,
                      marketing, networking, always be open.
                    </p>

                    <div class="blog__writer">
                      <div class="blog__writer-thumb">
                        <img
                          src="/assets/images/blog/author/2.png"
                          alt="writer"
                        />
                      </div>
                      <div class="blog__writer-designation">
                        <p class="mb-0">Abhivibha Kanmani</p>
                        <span>30 June, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="blog__item blog__item--style2">
                <div class="blog__item-inner">
                  <div class="blog__thumb">
                    <img src="/assets/images/blog/3.png" alt="blog Images" />
                  </div>

                  <div class="blog__content">
                    <div class="blog__meta">
                      <span class="blog__meta-tag blog__meta-tag--style1"
                        >business</span
                      >
                    </div>
                    <h5 class="10">
                      <a href="blog-details.html">How to increase sales?</a>
                    </h5>

                    <p class="mb-15">
                      Hey there! Struggling with your business off Need someone
                      to guide you? Contact me, I'm an experienced consultant.
                    </p>

                    <div class="blog__writer">
                      <div class="blog__writer-thumb">
                        <img
                          src="/assets/images/blog/author/3.png"
                          alt="writer"
                        />
                      </div>
                      <div class="blog__writer-designation">
                        <p class="mb-0">Hulya Aydin</p>
                        <span>12 April, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a
          href="blogs.html"
          class="trk-btn trk-btn--border trk-btn--primary1 mt-15"
          >View more
        </a>
      </div>
    </div>
  </section>
  <!-- ===============>> Blog section start here <<================= -->

  <!-- ===============>> Testimonial section start here <<================= -->
  <section class="testimonial padding-top padding-bottom bg-color-2">
    <div class="container">
      <div
        class="section-header d-md-flex align-items-center justify-content-between"
      >
        <div class="section-header__content">
          <h2 class="mb-15 mt-minus-10">Meet our <span>Clients </span></h2>
          <p class="mb-0">
            Our clients are as diverse as they are amazing, ranging from
            startups to established businesses.
          </p>
        </div>
        <div class="section-header__action">
          <div class="swiper-nav swiper-nav--style1">
            <button class="swiper-nav__btn testimonial__slider-prev">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button class="swiper-nav__btn testimonial__slider-next active">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        class="testimonial__wrapper"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="testimonial__slider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial__item testimonial__item--style1">
                <div class="testimonial__item-inner">
                  <div class="testimonial__item-content">
                    <p class="mb-0">
                      The above testimonial is about Martha Chumo, who taught
                      herself to code in one summer. This testimonial example
                      works because it allows prospective customers to see
                      themselves in Codeacademy’s current customer base.
                    </p>
                    <div class="testimonial__footer">
                      <div class="testimonial__author">
                        <div class="testimonial__author-thumb">
                          <img
                            src="/assets/images/testimonial/1.png"
                            alt="author"
                          />
                        </div>
                        <div class="testimonial__author-designation">
                          <h6>Mobarok Hossain</h6>
                          <span>Marketing Coordinator</span>
                        </div>
                      </div>
                      <div class="testimonial__quote">
                        <span><i class="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__item testimonial__item--style1">
                <div class="testimonial__item-inner">
                  <div class="testimonial__item-content">
                    <p class="mb-0">
                      In the above testimonial, a customer named Jeanine shares
                      her experience with Briogeo’s products. While the post is
                      scattered with too many product mentions, it takes full
                      advantage of its real estate by allowing the writer to
                      tell
                    </p>
                    <div class="testimonial__footer">
                      <div class="testimonial__author">
                        <div class="testimonial__author-thumb">
                          <img
                            src="/assets/images/testimonial/2.png"
                            alt="author"
                          />
                        </div>
                        <div class="testimonial__author-designation">
                          <h6>Guy Hawkins</h6>
                          <span>President of Sales</span>
                        </div>
                      </div>
                      <div class="testimonial__quote">
                        <span><i class="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__item testimonial__item--style1">
                <div class="testimonial__item-inner">
                  <div class="testimonial__item-content">
                    <p class="mb-0">
                      The above testimonial is about Martha Chumo, who taught
                      herself to code in one summer. This testimonial example
                      works because it allows prospective customers to see
                      themselves in Codeacademy’s current customer base.
                    </p>
                    <div class="testimonial__footer">
                      <div class="testimonial__author">
                        <div class="testimonial__author-thumb">
                          <img
                            src="/assets/images/testimonial/6.png"
                            alt="author"
                          />
                        </div>
                        <div class="testimonial__author-designation">
                          <h6>Belal Hossain</h6>
                          <span>Marketing Manager</span>
                        </div>
                      </div>
                      <div class="testimonial__quote">
                        <span><i class="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ===============>> Testimonial section start here <<================= -->

  <!-- ===============>> FAQ section start here <<================= -->
  <section class="faq padding-top padding-bottom of-hidden bg-color-4">
    <div class="section-header section-header--max57">
      <h2 class="mb-15 mt-minus-10"><span>Frequently</span> Asked questions</h2>
      <p>
        Hey there! Got questions? We've got answers. Check out our FAQ page for
        all the deets. Still not satisfied? Hit us up.
      </p>
    </div>
    <div class="container">
      <div class="faq__wrapper">
        <div class="row g-5 align-items-center justify-content-between">
          <div class="col-lg-6">
            <div
              class="accordion accordion--style1"
              id="faqAccordion1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div class="row">
                <div class="col-12">
                  <div class="accordion__item">
                    <div class="accordion__header" id="faq1">
                      <button
                        class="accordion__button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqBody1"
                        aria-expanded="false"
                        aria-controls="faqBody1"
                      >
                        <span class="accordion__button-content"
                          >What does this tool do?</span
                        >
                        <span class="accordion__button-plusicon"></span>
                      </button>
                    </div>
                    <div
                      id="faqBody1"
                      class="accordion-collapse collapse show"
                      aria-labelledby="faq1"
                      data-bs-parent="#faqAccordion1"
                    >
                      <div class="accordion__body">
                        <p class="mb-15">
                          This is an artificial intelligence integrated tool by
                          which you can automate your PTE and IELTS mock test
                          systems in your educational systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="accordion__item">
                    <div class="accordion__header" id="faq2">
                      <button
                        class="accordion__button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqBody2"
                        aria-expanded="true"
                        aria-controls="faqBody2"
                      >
                        <span class="accordion__button-content"
                          >What are the disadvantages of online trading?</span
                        >
                        <span class="accordion__button-plusicon"></span>
                      </button>
                    </div>
                    <div
                      id="faqBody2"
                      class="accordion-collapse collapse"
                      aria-labelledby="faq2"
                      data-bs-parent="#faqAccordion1"
                    >
                      <div class="accordion__body">
                        <p class="mb-15">
                          You don’t need to worry, the interface is
                          user-friendly. Anyone can use it smoothly. Our user
                          manual will help you to solve your problem. If you do
                          find yourself needing some help, feel free to reach
                          out to our support team through our Contact page, or
                          visit our Support Center.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="accordion__item">
                    <div class="accordion__header" id="faq3">
                      <button
                        class="accordion__button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqBody3"
                        aria-expanded="false"
                        aria-controls="faqBody3"
                      >
                        <span class="accordion__button-content"
                          >Is online trading safe?</span
                        >
                        <span class="accordion__button-plusicon"></span>
                      </button>
                    </div>
                    <div
                      id="faqBody3"
                      class="accordion-collapse collapse"
                      aria-labelledby="faq3"
                      data-bs-parent="#faqAccordion1"
                    >
                      <div class="accordion__body">
                        <p class="mb-15">
                          Definitely, you can give permission to all of your
                          team members and can set their roles based on their
                          position to manage it in your institution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="accordion__item">
                    <div class="accordion__header" id="faq4">
                      <button
                        class="accordion__button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqBody4"
                        aria-expanded="false"
                        aria-controls="faqBody4"
                      >
                        <span class="accordion__button-content"
                          >What is online trading, and how does it work?</span
                        >
                        <span class="accordion__button-plusicon"></span>
                      </button>
                    </div>
                    <div
                      id="faqBody4"
                      class="accordion-collapse collapse"
                      aria-labelledby="faq4"
                      data-bs-parent="#faqAccordion1"
                    >
                      <div class="accordion__body">
                        <p class="mb-15">
                          Definitely, you can give permission to all of your
                          team members and can set their roles based on their
                          position to manage it in your institution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="accordion__item">
                    <div class="accordion__header" id="faq5">
                      <button
                        class="accordion__button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqBody5"
                        aria-expanded="false"
                        aria-controls="faqBody5"
                      >
                        <span class="accordion__button-content"
                          >Which app is best for online trading?</span
                        >
                        <span class="accordion__button-plusicon"></span>
                      </button>
                    </div>
                    <div
                      id="faqBody5"
                      class="accordion-collapse collapse"
                      aria-labelledby="faq5"
                      data-bs-parent="#faqAccordion1"
                    >
                      <div class="accordion__body">
                        <p class="mb-15">
                          Definitely, you can give permission to all of your
                          team members and can set their roles based on their
                          position to manage it in your institution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="accordion__item border-0">
                    <div class="accordion__header" id="faq6">
                      <button
                        class="accordion__button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqBody6"
                        aria-expanded="false"
                        aria-controls="faqBody6"
                      >
                        <span class="accordion__button-content">
                          How to create a trading account?</span
                        >
                        <span class="accordion__button-plusicon"></span>
                      </button>
                    </div>
                    <div
                      id="faqBody6"
                      class="accordion-collapse collapse"
                      aria-labelledby="faq6"
                      data-bs-parent="#faqAccordion1"
                    >
                      <div class="accordion__body">
                        <p class="mb-15">
                          Definitely, you can give permission to all of your
                          team members and can set their roles based on their
                          position to manage it in your institution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="faq__thumb"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                class="dark"
                src="/assets/images/others/1.png"
                alt="faq-thumb"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ===============>> FAQ section start here <<================= -->

  <!-- ===============>> cta section start here <<================= -->
  <section
    class="cta cta--style1 padding-top padding-bottom of-hidden bg-color-2"
  >
    <div class="container">
      <div class="cta__wrapper">
        <div class="row gx-4">
          <div class="col-md-5">
            <div class="cta__thumb">
              <img src="/assets/images/cta/1.png" alt="cta-thumb" />
            </div>
          </div>
          <div class="col-md-7">
            <div class="cta__content">
              <div
                class="cta__content-inner"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h2>Subscribe <span>our newsletter</span></h2>
                <p>
                  Hey! Are you tired of missing out on our updates? Subscribe to
                  our news now and stay in the loop!
                </p>
                <form class="cta-form form-subscribe" action="#">
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control form-control--style1"
                      placeholder="Email Address"
                    />
                    <button
                      class="trk-btn cta-btn trk-btn--primary2"
                      type="submit"
                    >
                      Submit
                    </button>
                    <span class="input-group-btn"> </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cta__shape">
      <span class="cta__shape-item cta__shape-item--1"
        ><img src="/assets/images/cta/2.png" alt="shape icon"
      /></span>
      <span class="cta__shape-item cta__shape-item--2"
        ><img src="/assets/images/cta/3.png" alt="shape icon"
      /></span>
      <span class="cta__shape-item cta__shape-item--3"
        ><img src="/assets/images/cta/4.png" alt="shape icon"
      /></span>
    </div>
  </section>
  <!-- ===============>> cta section start here <<================= -->

  <!-- ===============>> footer start here <<================= -->
  <Footer />
  <!-- ===============>> footer end here <<================= -->

  <!-- ===============>> scrollToTop start here <<================= -->
  <a href="#" class="scrollToTop scrollToTop--home1"
    ><i class="fa-solid fa-arrow-up-from-bracket"></i
  ></a>
  <!-- ===============>> scrollToTop ending here <<================= -->
</template>
