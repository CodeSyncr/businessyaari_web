<template>
  <Header />
  <!-- <Toaster title="Success" message="hello" /> -->
  <!-- ================> Page header start here <================== -->
  <section class="page-header bg-color-1">
    <div class="container">
      <div
        class="page-header__content"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2>Contact Us</h2>
        <nav style="--bs-breadcrumb-divider: '/'" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Contact</li>
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

  <!-- ===============>> Contact section start here <<================= -->
  <div class="contact padding-top padding-bottom">
    <div class="container">
      <div class="contact__wrapper">
        <div class="row g-5">
          <div class="col-md-5">
            <div
              class="contact__info"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div class="contact__social">
                <h3>let’s <span>get in touch</span> with us</h3>
                <ul class="social">
                  <li class="social__item">
                    <a href="#" class="social__link social__link--style1"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li class="social__item">
                    <a href="#" class="social__link social__link--style1"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li class="social__item">
                    <a href="#" class="social__link social__link--style1"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li class="social__item">
                    <a
                      href="#"
                      class="social__link social__link--style1 d-sm-none d-xl-block"
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                  <li class="social__item">
                    <a
                      href="signin.html"
                      class="social__link social__link--style1 d-sm-none d-xl-block"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="contact__details">
                <div
                  class="contact__item"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div class="contact__item-inner">
                    <div class="contact__item-thumb">
                      <span
                        ><img
                          src="/assets/images/contact/1.png"
                          alt="contact-icon"
                      /></span>
                    </div>
                    <div class="contact__item-content">
                      <p>09834032940</p>
                      <p>07004491831</p>
                    </div>
                  </div>
                </div>
                <div
                  class="contact__item"
                  data-aos="fade-right"
                  data-aos-duration="1100"
                >
                  <div class="contact__item-inner">
                    <div class="contact__item-thumb">
                      <span
                        ><img
                          src="/assets/images/contact/2.png"
                          alt="contact-icon"
                      /></span>
                    </div>
                    <div class="contact__item-content">
                      <p>businessyaari@gmail.com</p>
                      <p>amar@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div
                  class="contact__item"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div class="contact__item-inner">
                    <div class="contact__item-thumb">
                      <span
                        ><img
                          src="/assets/images/contact/3.png"
                          alt="contact-icon"
                      /></span>
                    </div>
                    <div class="contact__item-content">
                      <p>Tilkamanji, Bhagalpur</p>
                      <p>Bapu Road, Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="contact__form">
              <form
                action=""
                method="POST"
                @submit.prevent="onSubmit"
                data-aos="fade-left"
                data-aos-duration="1000"
                novalidate
              >
                <div class="row g-4">
                  <div class="col-12">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="name"
                    >
                      <label for="name" class="form-label">Name</label>
                      <input
                        v-model="field.value"
                        :disabled="isSubmitting"
                        class="form-control"
                        type="text"
                        id="name"
                        placeholder="Full Name"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                      <p class="p-0 pt-1 text-danger fs-9" v-if="errorMessage">
                        {{ errorMessage }}
                      </p>
                    </Field>
                  </div>
                  <div class="col-12">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="email"
                    >
                      <label for="email" class="form-label">Email</label>
                      <input
                        v-model="field.value"
                        :disabled="isSubmitting"
                        class="form-control"
                        type="email"
                        id="email"
                        placeholder="Email here"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                      <p class="p-0 pt-1 text-danger fs-9" v-if="errorMessage">
                        {{ errorMessage }}
                      </p>
                    </Field>
                  </div>
                  <div class="col-12">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="mobile"
                    >
                      <label for="textarea" class="form-label"
                        >Phone Number</label
                      >
                      <input
                        v-model="field.value"
                        :disabled="isSubmitting"
                        class="form-control"
                        type="text"
                        id="mobile"
                        placeholder="Phone Number here"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                      <p class="p-0 pt-1 text-danger fs-9" v-if="errorMessage">
                        {{ errorMessage }}
                      </p>
                    </Field>
                  </div>
                  <div class="col-12">
                    <Field
                      v-slot="{ field, handleChange, handleBlur }"
                      name="service"
                    >
                      <label for="service" class="form-label">Service</label>
                      <input
                        v-model="field.value"
                        :disabled="isSubmitting"
                        class="form-control"
                        type="text"
                        id="service"
                        placeholder="Service here"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </Field>
                  </div>
                </div>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  :loading="isSubmitting"
                  class="trk-btn trk-btn--border trk-btn--primary1 mt-4 d-block"
                >
                  contact us now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ===============>> Contact section start here <<================= -->

  <Footer />
</template>
<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";
import { Field, useForm } from "vee-validate";
import { z } from "zod";

useSeoMeta({
  title: "Businessyaari | Contact Us",
});

const snackbar = useSnackbar();

const VALIDATION_TEXT = {
  VALID_EMAIL: "Enter valid email",
  NAME_REQUIRED: "Name is required",
  MOBILE_REQUIRED: "Phone Number is required",
  VALID_MOBILE: "Enter valid mobile number",
  SERVICE_REQUIRED: "Service is required",
};
// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  name: z.string().min(1, VALIDATION_TEXT.NAME_REQUIRED),
  email: z.string().email(VALIDATION_TEXT.VALID_EMAIL),
  mobile: z
    .string()
    .min(1, VALIDATION_TEXT.MOBILE_REQUIRED)
    .min(10, VALIDATION_TEXT.VALID_MOBILE)
    .max(10, VALIDATION_TEXT.VALID_MOBILE)
    .regex(
      new RegExp(/^(?!(\d)\1{9})[6-9]\d{9}$/),
      VALIDATION_TEXT.VALID_MOBILE
    ),
  service: z.string().min(1, VALIDATION_TEXT.SERVICE_REQUIRED),
});

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>;

const validationSchema = toTypedSchema(zodSchema);
const initialValues: any = computed<FormInput>(() => ({
  name: "",
  email: "",
  mobile: "",
  service: "",
}));

const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
});

const onSubmit = handleSubmit(async (values: any) => {
  try {
    console.log("values ::", values);
    const client = useSupabaseClient();

    const { error } = await client.from("leads").insert(values).select();

    snackbar.add({
      type: "success",
      text: "Thankyou! We will get back to you shortly",
    });
  } catch (error: any) {
    console.log("error ::", error);
    snackbar.add({
      type: "error",
      text: `error : ${error}`,
    });
    // toaster.show({
    //   title: "Error",
    //   message: `Something went wrong`,
    //   color: "danger",
    //   icon: "ph:user-circle-fill",
    //   closable: true,
    // });
  }
});
</script>
~/composables/toaster
