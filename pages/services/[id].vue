<script setup lang="ts">
import data from "~/assets/static/services.json";

const serviceData = ref<any>(null);
const route = useRoute();
useSeoMeta({
  title: "Businessyaari | Services",
});

onMounted(() => {
  console.log(data);
  const id: string = route.params.id as string;
  const serviceFind = data.find(
    (serviceItem: any) => serviceItem.id === parseInt(id)
  );
  serviceData.value = serviceFind;
  console.log("servicesData ::", serviceFind);
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
        <h2>{{ serviceData?.name }}</h2>
        <nav style="--bs-breadcrumb-divider: '/'" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
            <!-- <li class="breadcrumb-item active">Services</li> -->
            <li class="breadcrumb-item">
              <NuxtLink to="/services">Services</NuxtLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ serviceData?.name }}
            </li>
          </ol>
        </nav>
      </div>
      <div class="page-header__shape">
        <span class="page-header__shape-item page-header__shape-item--1"
          ><img src="assets/images/icon/page-header/1.png" alt="shpae-icon"
        /></span>
        <span class="page-header__shape-item page-header__shape-item--2"
          ><img src="assets/images/icon/page-header/2.png" alt="shpae-icon"
        /></span>
        <span class="page-header__shape-item page-header__shape-item--3"
          ><img src="assets/images/icon/page-header/3.png" alt="shpae-icon"
        /></span>
      </div>
    </div>
  </section>
  <!-- ================> Page header end here <================== -->

  <!-- ===============>> Service section start here <<================= -->
  <div class="service-details padding-top padding-bottom bg-color-6">
    <div class="container">
      <div class="service-details__wrapper">
        <div class="row flex-lg-row-reverse g-5">
          <div class="col-lg-8">
            <div class="service-details__item">
              <div class="service-details__item-inner">
                <div
                  class="service-details__thumb mb-40"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="service-details__thumb-inner">
                    <img :src="serviceData?.poster" alt="service-icon" />
                  </div>
                </div>
                <div
                  class="service-details__content"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <h3 class="mb-0 d-flex justify-content-between">
                    <a class="stretched-link" href="#">{{
                      serviceData?.name
                    }}</a>
                    <NuxtLink
                      to="/contact"
                      class="trk-btn trk-btn--border trk-btn--primary1"
                    >
                      <span>Talk To Expert</span>
                    </NuxtLink>
                  </h3>
                  <p class="mb-15 text-dark" style="width: 70%">
                    {{ serviceData?.description }}
                  </p>
                  <p class="mb-0">
                    {{ serviceData?.details }}
                  </p>
                </div>
                <div
                  class="service-details__faq mt-55"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div class="faq">
                    <div class="faq__wrapper">
                      <div
                        class="accordion accordion--style1"
                        id="faqAccordion1"
                      >
                        <div class="row">
                          <template
                            v-for="(faq, index) in serviceData?.faq"
                            :key="index"
                          >
                            <div class="col-12">
                              <div class="accordion__item">
                                <div
                                  class="accordion__header"
                                  :id="`faq${index}`"
                                >
                                  <button
                                    :class="`accordion__button accordion__button--style2 ${
                                      index === 0 ? '' : 'collapsed'
                                    }`"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    :data-bs-target="`#faqBody${index}`"
                                    aria-expanded="false"
                                    :aria-controls="`faqBody${index}`"
                                  >
                                    <span class="accordion__button-content">{{
                                      faq.ques
                                    }}</span>
                                    <span
                                      class="accordion__button-plusicon"
                                    ></span>
                                  </button>
                                </div>
                                <div
                                  :id="`faqBody${index}`"
                                  :class="`accordion-collapse collapse ${
                                    index == 0 ? 'show' : ''
                                  }`"
                                  :aria-labelledby="`faq${index}`"
                                  :data-bs-parent="`#faqAccordion${index}`"
                                >
                                  <div class="accordion__body">
                                    <p class="mb-15">
                                      {{ faq.ans }}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-8 col-12">
            <div class="sidebar">
              <div class="row g-4">
                <!-- <div class="col-12">
                  <div
                    class="sidebar__search"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <h6 class="mb-10">Search Here</h6>
                    <div class="sidebar__search-body">
                      <form class="" action="#">
                        <div class="input">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search articles"
                          />
                          <button type="submit" class="search-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div
                    class="sidebar__categorie"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div class="sidebar__head">
                      <h6>Categories</h6>
                    </div>
                    <div class="sidebar__categorie-body">
                      <div class="sidebar__social-content">
                        <ul>
                          <li class="active">
                            <a href="#"> Strategy consulting</a>
                          </li>
                          <li>
                            <a href="#"> Financial advisory</a>
                          </li>
                          <li>
                            <a href="#"> Operations management</a>
                          </li>
                          <li>
                            <a href="#"> Supply chain optimization</a>
                          </li>
                          <li>
                            <a href="#"> Human resource consulting</a>
                          </li>
                          <li>
                            <a href="#"> Marketing and PR consulting</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> -->
                <div class="col-12">
                  <div
                    class="sidebar__social"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <div class="sidebar__head">
                      <h6>Social Links</h6>
                    </div>
                    <div class="sidebar__social-body">
                      <div class="sidebar__social-content">
                        <ul class="social mt-25">
                          <li class="social__item">
                            <a
                              href="#"
                              class="social__link social__link--style1"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a
                              href="#"
                              class="social__link social__link--style1"
                              ><i class="fab fa-instagram"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a
                              href="#"
                              class="social__link social__link--style1"
                              ><i class="fa-brands fa-linkedin-in"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a
                              href="#"
                              class="social__link social__link--style1"
                              ><i class="fab fa-youtube"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a
                              href="signin.html"
                              class="social__link social__link--style1 d-sm-none d-md-block"
                              ><i class="fab fa-twitter"></i
                            ></a>
                          </li>
                        </ul>
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
  <!-- ===============>> Service section start here <<================= -->
</template>
