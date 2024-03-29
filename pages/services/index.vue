<script setup lang="ts">
import data from "~/assets/static/services.json";

const servicesData = ref(data);
useSeoMeta({
  title: "Businessyaari | Services",
});
</script>
<template>
  <!-- ===============>> Header section start here <<================= -->
  <Header />
  <!-- ===============>> Header section end here <<================= -->

  <!-- ================> Page header start here <================== -->
  <section class="page-header bg-color-1">
    <div class="container">
      <div
        class="page-header__content"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2>Services</h2>
        <nav style="--bs-breadcrumb-divider: '/'" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="breadcrumb-item active" aria-current="page">Services</li>
          </ol>
        </nav>
      </div>
      <div class="page-header__shape">
        <span class="page-header__shape-item page-header__shape-item--1"
          ><img src="/assets/images/icon/page-header/1.png" alt="shpae-icon"
        /></span>
        <span class="page-header__shape-item page-header__shape-item--2"
          ><img src="/assets/images/icon/page-header/2.png" alt="shpae-icon"
        /></span>
        <span class="page-header__shape-item page-header__shape-item--3"
          ><img src="/assets/images/icon/page-header/3.png" alt="shpae-icon"
        /></span>
      </div>
    </div>
  </section>
  <!-- ================> Page header end here <================== -->

  <!-- ===============>> Service section start here <<================= -->
  <section class="service padding-top padding-bottom bg-color-2">
    <div class="section-header section-header--max50">
      <h2 class="mb-15 mt-minus-10"><span>services </span>We offer</h2>
      <p>
        Comprehensive Financial & Legal Services: Income Tax, GST, Trademark,
        Registration, Compliance, and Specialized Offerings like PF and ESL
        Registration!
      </p>
    </div>
    <div class="container">
      <div class="service__wrapper">
        <div class="row g-4 align-items-center">
          <template v-for="(service, index) in servicesData" :key="index">
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
                        :src="service.image"
                        alt="service-icon"
                      />
                    </div>
                  </div>
                  <div class="service__content">
                    <h5 class="mb-15">
                      <NuxtLink
                        class="stretched-link"
                        :to="'/services/' + service.id"
                        >{{ service.name }}</NuxtLink
                      >
                    </h5>
                    <p class="mb-0">
                      {{ service.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
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

  <!-- ===============>> Testimonial section start here <<================= -->
  <section class="testimonial padding-top padding-bottom bg-color-6">
    <div class="container">
      <div
        class="section-header d-flex align-items-center justify-content-between"
      >
        <div class="section-header__content">
          <h2 class="mb-0">Meet our <span>Clients </span></h2>
        </div>
        <div class="section-header__action">
          <div class="mt-15 mt-sm-0">
            <a href="#" class="trk-btn trk-btn--border trk-btn--primary1"
              >View All</a
            >
          </div>
        </div>
      </div>
      <div class="testimonial__wrapper">
        <Swiper
          class="testimonial__slider2"
          style="position: static"
          :slides-per-view="3"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide>
            <div class="testimonial__item testimonial__item--style2">
              <div class="testimonial__item-inner">
                <div class="testimonial__item-content">
                  <p class="mb-0">
                    The above testimonial is about Martha Chumo, who taught
                    herself to code in one summer. This testimonial example
                    works because it allows prospective.
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
                        <h6>Song Yoo-mee</h6>
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
          </SwiperSlide>
          <SwiperSlide>
            <div class="testimonial__item testimonial__item--style2">
              <div class="testimonial__item-inner">
                <div class="testimonial__item-content">
                  <p class="mb-0">
                    We love the approachable format and the fact that it chose
                    to feature customers that users can relate to. When you
                    click into any story see all.
                  </p>
                  <div class="testimonial__footer">
                    <div class="testimonial__author">
                      <div class="testimonial__author-thumb">
                        <img
                          src="/assets/images/testimonial/4.png"
                          alt="author"
                        />
                      </div>
                      <div class="testimonial__author-designation">
                        <h6>Bemra Ram</h6>
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
          </SwiperSlide>
          <SwiperSlide>
            <div class="testimonial__item testimonial__item--style2">
              <div class="testimonial__item-inner">
                <div class="testimonial__item-content">
                  <p class="mb-0">
                    In the above testimonial, a customer named Jeanine shares
                    her experience with Briogeo’s products. While the post is
                    scattered with too many product.
                  </p>
                  <div class="testimonial__footer">
                    <div class="testimonial__author">
                      <div class="testimonial__author-thumb">
                        <img
                          src="/assets/images/testimonial/5.png"
                          alt="author"
                        />
                      </div>
                      <div class="testimonial__author-designation">
                        <h6>Harsi Kosanam</h6>
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
          </SwiperSlide>
          <SwiperSlide>
            <div class="testimonial__item testimonial__item--style2">
              <div class="testimonial__item-inner">
                <div class="testimonial__item-content">
                  <p class="mb-0">
                    The above testimonial is about Martha Chumo, who taught
                    herself to code in one summer. This testimonial example
                    works because it allows prospective.
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
                        <h6>Song Yoo-mee</h6>
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
          </SwiperSlide>
          <SwiperSlide>
            <div class="testimonial__item testimonial__item--style2">
              <div class="testimonial__item-inner">
                <div class="testimonial__item-content">
                  <p class="mb-0">
                    We love the approachable format and the fact that it chose
                    to feature customers that users can relate to. When you
                    click into any story see all.
                  </p>
                  <div class="testimonial__footer">
                    <div class="testimonial__author">
                      <div class="testimonial__author-thumb">
                        <img
                          src="/assets/images/testimonial/4.png"
                          alt="author"
                        />
                      </div>
                      <div class="testimonial__author-designation">
                        <h6>Bemra Ram</h6>
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
          </SwiperSlide>
          <SwiperSlide>
            <div class="testimonial__item testimonial__item--style2">
              <div class="testimonial__item-inner">
                <div class="testimonial__item-content">
                  <p class="mb-0">
                    In the above testimonial, a customer named Jeanine shares
                    her experience with Briogeo’s products. While the post is
                    scattered with too many product.
                  </p>
                  <div class="testimonial__footer">
                    <div class="testimonial__author">
                      <div class="testimonial__author-thumb">
                        <img
                          src="/assets/images/testimonial/5.png"
                          alt="author"
                        />
                      </div>
                      <div class="testimonial__author-designation">
                        <h6>Harsi Kosanam</h6>
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
          </SwiperSlide>
          <div class="swiper-nav swiper-nav--style2">
            <button
              class="swiper-nav__btn active swiper-nav__btn-prev testimonial__slider-prev"
            >
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button
              class="swiper-nav__btn swiper-nav__btn-next testimonial__slider-next"
            >
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </Swiper>
        <!-- <div class="testimonial__slider2 swiper"> -->

        <!-- <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
          </div> -->
        <!-- </div> -->
        <!-- <div class="swiper-nav swiper-nav--style2">
          <button
            class="swiper-nav__btn active swiper-nav__btn-prev testimonial__slider-prev"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button
            class="swiper-nav__btn swiper-nav__btn-next testimonial__slider-next"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div> -->
      </div>
    </div>
  </section>
  <!-- ===============>> Testimonial section start here <<================= -->

  <!-- ===============>> cta section start here <<================= -->
  <section
    class="cta cta--style1 padding-bottom padding-top of-hidden bg-color-2"
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

  <!-- vendor plugins -->
</template>
