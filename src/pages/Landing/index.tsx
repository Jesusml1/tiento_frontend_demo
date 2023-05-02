// import './webflow.css';
// import "./styles.css";

function Landing() {
  return (
    <div>
      <div className="body-dark">
        <div className="page_wrapper page_dark">
          <div className="html_global w-embed">
            <div className="img-noise"></div>
            <div className="main_wrapper">
              <div className="navbar-blur"></div>
              <div className="section s-nav">
                <div
                  data-animation="default"
                  data-collapse="none"
                  data-duration="400"
                  data-easing="ease"
                  data-easing2="ease"
                  role="banner"
                  className="navbar w-nav"
                >
                  <div className="container">
                    <div className="c-navigation">
                      <a
                        href="/"
                        aria-current="page"
                        className="img_brand_nav w-inline-block w--current"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/6377b9810b2bd69c1eef0297_HLV%20Logo%20Update.svg"
                          loading="eager"
                          alt=""
                          className="img_brand"
                        />
                      </a>
                      <nav role="navigation" className="nav-menu w-nav-menu">
                        <div className="socials-parent">
                          <div className="c-socials">
                            <a
                              href="https://twitter.com/HLV_XYZ"
                              target="_blank"
                              className="footer_social twitter w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                  }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://hlv-xyz.medium.com/"
                              target="_blank"
                              className="footer_social medium w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="30"
                                  height="18"
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/company/horizen-labs-ventures/"
                              target="_blank"
                              className="footer_social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                  }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <a
                          data-w-id="58c130a3-7ca6-9401-c423-aca10c73c38a"
                          href="#"
                          className="button button--nav w-inline-block"
                        >
                          <div>contact us</div>
                          <div className="noise-button"></div>
                        </a>
                      </nav>
                      <div className="w-nav-button">
                        <div className="w-icon-nav-menu"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-w-id="0e88a75d-5e6f-be2e-ab76-35345ddcc7b5"
                className="section s-home-v1"
              >
                <div className="container c-hero">
                  <div className="c-home-v1">
                    <h1
                      data-w-id="26b3f65c-4161-b6b3-47d5-c80f7860e28f"
                      className="h1-hero animation-h1-hero"
                    >
                      The Web3 advisory and solutions platform
                    </h1>
                    <p
                      data-w-id="290573ff-f217-f1d5-9c3e-49a9dda9297f"
                      className="animation-p-hero"
                    >
                      We are pushing the boundaries of what&#x27;s possible.
                    </p>
                  </div>
                </div>
                {/* <div
                  data-w-id="f487b015-c894-a15f-150f-c44292d678f9"
                  className="c-home-logos animation-c-home-logos"
                >
                  <div className="logos-side">
                    <div className="swiper-container swiper-logos w-dyn-list">
                      <div role="list" className="swiper-wrapper w-dyn-items">
                        <div
                          role="listitem"
                          className="swiper-slide slide_logo w-dyn-item"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f3ca80fa0f3f70250f9b7f_ApeCoin.svg"
                            loading="eager"
                            alt=""
                            className="img-logo"
                          />
                        </div>
                        <div
                          role="listitem"
                          className="swiper-slide slide_logo w-dyn-item"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f3cc2fa7086e4fafc541c3_Sandbox.svg"
                            loading="eager"
                            alt=""
                            className="img-logo"
                          />
                        </div>
                        <div
                          role="listitem"
                          className="swiper-slide slide_logo w-dyn-item"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f3ca8d6cd64bd9cb9f26f0_Jamcity.svg"
                            loading="eager"
                            alt=""
                            className="img-logo"
                          />
                        </div>
                        <div
                          role="listitem"
                          className="swiper-slide slide_logo w-dyn-item"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f3caa020265c60165af9c6_Yuga.svg"
                            loading="eager"
                            alt=""
                            className="img-logo"
                          />
                        </div>
                        <div
                          role="listitem"
                          className="swiper-slide slide_logo w-dyn-item"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f66b3a03f00d5869b411da_63f3ca8d6cd64bd9cb9f26f0_Dust.svg"
                            loading="eager"
                            alt=""
                            className="img-logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="logo-fade-left"></div>
                    <div className="logo-fade-right"></div>
                  </div>
                </div> */}
                <div className="c-home-accents">
                  <div
                    data-w-id="4a2383f2-362b-2c44-9c9b-d965b18f0339"
                    style={{ opacity: 0 }}
                    className="img_gradient"
                  ></div>
                  <div
                    data-w-id="75fde432-7f3d-3769-412a-02167d970d80"
                    className="img_glare_parent"
                  >
                    <div id="glare-overlay" className="img_glare"></div>
                  </div>
                </div>
                <div className="c-spacer-parent">
                  <div className="c-spacer-home-v1">
                    <img
                      className="img_homev1-logo animation-img_homev1-logo"
                      src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63ceee3a28066f39cb8310eb_img_homelogo_02.webp"
                      width="1069"
                      alt=""
                      sizes="69vw"
                      data-w-id="1f69c61f-7792-1192-8860-ec8f146a0556"
                      loading="eager"
                      srcSet="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63ceee3a28066f39cb8310eb_img_homelogo_02-p-500.webp 500w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63ceee3a28066f39cb8310eb_img_homelogo_02-p-800.webp 800w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63ceee3a28066f39cb8310eb_img_homelogo_02-p-1080.webp 1080w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63ceee3a28066f39cb8310eb_img_homelogo_02-p-1600.webp 1600w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63ceee3a28066f39cb8310eb_img_homelogo_02.webp 2138w"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom.webp"
                      loading="eager"
                      data-w-id="045abd5c-92f2-f223-58d6-b8c8d5d8dd39"
                      sizes="100vw"
                      srcSet="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-500.webp 500w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-800.webp 800w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-1080.webp 1080w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-1600.webp 1600w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-2000.webp 2000w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom.webp 2880w"
                      alt=""
                      className="img_mountains"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle.webp"
                      loading="eager"
                      data-w-id="633f1149-4806-87b3-cffb-fff887f3ce28"
                      sizes="100vw"
                      srcSet="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-500.webp 500w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-800.webp 800w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-1080.webp 1080w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-1600.webp 1600w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-2000.webp 2000w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle.webp 2880w"
                      alt=""
                      className="img_mountains_02"
                    />
                    <img
                      src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top.webp"
                      loading="eager"
                      data-w-id="fd96d106-d929-4193-58b0-9bfd03a2df7a"
                      sizes="100vw"
                      srcSet="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-500.webp 500w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-800.webp 800w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-1080.webp 1080w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-1600.webp 1600w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-2000.webp 2000w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-2600.webp 2600w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top.webp 2880w"
                      alt=""
                      className="img_mountains_03"
                    />
                    <div className="mountain-gradient"></div>
                    <div className="mountain-gradient offset"></div>
                  </div>
                </div>
                <div className="c-spacer-bg"></div>
              </div>
              <div className="section s-home-content">
                <div className="container c-advise-content">
                  <div className="grid-2column grid-advise">
                    <div
                      id="w-node-_89a7c9ce-a962-9a15-bc24-8bb2213d9351-7652d437"
                      data-w-id="89a7c9ce-a962-9a15-bc24-8bb2213d9351"
                      className="c-advise-illustration"
                    >
                      <div className="c-advise-illustration-inner">
                        <div className="c-advise">
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf15fb8646db3fbae9aae6_Advise-Shape.webp"
                            loading="lazy"
                            width="198"
                            alt=""
                            className="img_advise_gradient animation-img_advise_gradient"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf2d1c60751959e88cbee5_Rectangle%2035.svg"
                            loading="lazy"
                            alt=""
                            className="img_advise_gradient_corner-small animation-img_advise_gradient_corner-small corner-02 shadow"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf2d9b49619a584acda47b_corner-top.svg"
                            loading="lazy"
                            alt=""
                            className="img_advise_gradient_corner-small-top animation-img_advise_gradient_corner-small-top top shadow"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf2d9b49619a584acda47b_corner-top.svg"
                            loading="lazy"
                            alt=""
                            className="img_advise_gradient_corner animation-img_advise_gradient_corner-1 top"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf2d1c60751959e88cbee5_Rectangle%2035.svg"
                            loading="lazy"
                            alt=""
                            className="img_advise_gradient_corner animation-img_advise_gradient_corner-2"
                          />
                          <div className="c-advise-box animation-c-advise-box"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_60d25835-0a6e-3a1f-a758-1117034a3eda-7652d437"
                      className="c-content-stack"
                    >
                      <h2 className="h1">We Advise</h2>
                      <p>
                        a select number of high caliber projects. Whether you
                        are looking to enter and/or accelerate your journey into
                        Web3, we are here to support you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container c-build-content">
                  <div className="grid-2column grid-build">
                    <div
                      id="w-node-c0e9dd47-92fc-93fc-6a41-25350f79ea8b-7652d437"
                      className="c-content-stack"
                    >
                      <h2 className="h1">We Build</h2>
                      <p>
                        scalable tools and products that solve for a clearly
                        identified set of problems and have a large addressable
                        market.
                      </p>
                    </div>
                    <div
                      id="w-node-c0e9dd47-92fc-93fc-6a41-25350f79ea82-7652d437"
                      data-w-id="c0e9dd47-92fc-93fc-6a41-25350f79ea82"
                      className="c-build"
                    >
                      <div className="c-build-inner">
                        <div className="c-build-parent">
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf15fb73394bf63c53da65_Build-Shape.webp"
                            loading="lazy"
                            alt=""
                            className="img_build-gradient animation-img_build-gradient"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf3052c3644a5c90e70378_Rectangle%2030.svg"
                            loading="lazy"
                            alt=""
                            className="img_build_corner-02 animation-img_build_corner-02"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf3064c3644a9ff4e7053d_Rectangle%2029.svg"
                            loading="lazy"
                            alt=""
                            className="img_build_corner"
                          />
                          <div className="c-build-box-01 animation-c-build-box-01"></div>
                          <div className="c-build-box-02"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container c-invest-content">
                  <div className="grid-2column grid-invest">
                    <div
                      id="w-node-_78f483ef-571c-3909-68f3-1e5c3a3cd950-7652d437"
                      data-w-id="78f483ef-571c-3909-68f3-1e5c3a3cd950"
                      className="c-invest"
                    >
                      <div className="c-invest-inner">
                        <div className="c-build-parent">
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c014e70fc062377644a5b0_Invest-Shape.webp"
                            loading="lazy"
                            alt=""
                            className="img_invest-gradient animation-img_invest-gradient"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c0155733a4b8ce96daf04c_Frame%20590%2002.svg"
                            loading="lazy"
                            alt=""
                            className="img_invest-corner animation-img_invest-corner"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c014e73ecb8a3e50831886_Rectangle%2032.svg"
                            loading="lazy"
                            alt=""
                            className="img_invest-corner-02 animation-img_invest-corner-02"
                          />
                          <div className="c-invest-box-01 animation-c-invest-box-01"></div>
                          <div className="c-invest-box-01 _02"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_78f483ef-571c-3909-68f3-1e5c3a3cd94b-7652d437"
                      className="c-content-stack"
                    >
                      <h2 className="h1">We Invest</h2>
                      <p>
                        strategically in early stage founders and teams building
                        disruptive Web3 products, platforms, and infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container c-connect-content">
                  <div className="grid-2column grid-connect">
                    <div
                      id="w-node-_9c7b6438-9914-bcd5-cd4f-f635e7ebaa17-7652d437"
                      className="c-content-stack c-we-conect"
                    >
                      <h2 className="h1">We Connect</h2>
                      <p>
                        clients to our network of ecosystem partners who act as
                        the force multipliers for success.
                      </p>
                    </div>
                    <div
                      id="w-node-_9c7b6438-9914-bcd5-cd4f-f635e7ebaa1c-7652d437"
                      data-w-id="9c7b6438-9914-bcd5-cd4f-f635e7ebaa1c"
                      className="c-connect"
                    >
                      <div className="c-connect-inner">
                        <div className="c-connect-parent">
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c02350c3dabbfd8c446199_Connect-Shape.webp"
                            loading="lazy"
                            alt=""
                            className="img_connect-gradient animation-img_connect-gradient"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c02350be3fbf82fb7c38e9_Rectangle%2045.svg"
                            loading="lazy"
                            alt=""
                            className="img_connect-arrow-02 animation-img_connect-arrow-02"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c02350ccb1e184d53a4686_Rectangle%2044.svg"
                            loading="lazy"
                            alt=""
                            className="img_connect-arrow-04 animation-img_connect-arrow-04"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c023503ecb8a7dad840b41_Rectangle%2042.svg"
                            loading="lazy"
                            alt=""
                            className="img_connect-arrow-03 animation-img_connect-arrow-03"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c0235000c9a25b459db256_Rectangle%2043.svg"
                            loading="lazy"
                            alt=""
                            className="img_connect-arrow-01 animation-img_connect-arrow-01"
                          />
                          <div className="c-connect-box-02 animation-c-connect-box-02"></div>
                          <div className="c-connect-box-01 animation-c-connect-box-01"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section s-team">
                <div className="container c-center">
                  <div className="c-content-stack c-content-center">
                    <h2 className="h1">Our team</h2>
                    <p>Professionals in the room. Degens at heart.</p>
                  </div>
                </div>
                <div className="container c-team-lists">
                  <div className="w-dyn-list">
                    <div role="list" className="list-team-top w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div
                          data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddbad0124b0db1ec54bb_Dean%20Steinbeck.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddbad0124b0db1ec54bb_Dean%20Steinbeck-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddbad0124b0db1ec54bb_Dean%20Steinbeck.webp 800w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content">
                              <div className="c-team-name">
                                <h4>Dean Steinbeck</h4>
                                <div className="team-title">
                                  Co-Founder and Managing Director
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/Crypto_Counsel"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/dean-steinbeck/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div
                          data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddda414a041cea3b58c5_Liat%20Aaronson.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddda414a041cea3b58c5_Liat%20Aaronson-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddda414a041cea3b58c5_Liat%20Aaronson.webp 800w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content">
                              <div className="c-team-name">
                                <h4>Liat Aaronson</h4>
                                <div className="team-title">
                                  Co-Founder and Managing Director
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/liataaronson"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/liataaronson/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div
                          data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddefe7d0ea2bba709890_Rohan%20Handa.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddefe7d0ea2bba709890_Rohan%20Handa-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddefe7d0ea2bba709890_Rohan%20Handa.webp 800w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content">
                              <div className="c-team-name">
                                <h4>Rohan Handa</h4>
                                <div className="team-title">
                                  SVP of Business Development
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/Parzival_0x"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/rohanhanda/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div
                          data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddffe7d0ea113a709944_Maurizio%20Binello.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddffe7d0ea113a709944_Maurizio%20Binello-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddffe7d0ea113a709944_Maurizio%20Binello.webp 800w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content">
                              <div className="c-team-name">
                                <h4>Maurizio Binello</h4>
                                <div className="team-title">
                                  SVP of Technology
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/ITpirc"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/maurizio-binello-87b442/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div
                          data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f663d0db7d7db4246095d5_6881.png"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f663d0db7d7db4246095d5_6881-p-500.png 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f663d0db7d7db4246095d5_6881-p-800.png 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f663d0db7d7db4246095d5_6881-p-1080.png 1080w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f663d0db7d7db4246095d5_6881-p-1600.png 1600w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f663d0db7d7db4246095d5_6881-p-2000.png 2000w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f663d0db7d7db4246095d5_6881-p-2600.png 2600w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63f663d0db7d7db4246095d5_6881.png 3000w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content">
                              <div className="c-team-name">
                                <h4>Scott Cohen</h4>
                                <div className="team-title">
                                  SVP of Legal/General Counsel
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/_ScottCohen"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/cohen-scott/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div
                          data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de1b0637d77fc08c6804_Eric%20Lee%201.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de1b0637d77fc08c6804_Eric%20Lee%201-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de1b0637d77fc08c6804_Eric%20Lee%201.webp 800w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content">
                              <div className="c-team-name">
                                <h4>Eric Lee</h4>
                                <div className="team-title">
                                  SVP of Finance &amp; Asset Management
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="#"
                                  className="link-social w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/ericleecpa/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="list-team-bottom w-dyn-items">
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de2a80019b64390e3da8_Justin%20Kalland.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de2a80019b64390e3da8_Justin%20Kalland-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de2a80019b64390e3da8_Justin%20Kalland-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de2a80019b64390e3da8_Justin%20Kalland.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Justin Kalland</h6>
                                <div className="team-title small-title">
                                  VP of Product Innovation
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/nix_eth"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/justinkalland/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de3bb0553402c5615265_Kevin%20Jung.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de3bb0553402c5615265_Kevin%20Jung-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de3bb0553402c5615265_Kevin%20Jung-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de3bb0553402c5615265_Kevin%20Jung.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Kevin Jung</h6>
                                <div className="team-title small-title">
                                  VP of Strategic Partnerships
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/_pizzabox"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/kevinhjung/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de4a0637d74c728c6ab2_Kaspars%20Rekis.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de4a0637d74c728c6ab2_Kaspars%20Rekis-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de4a0637d74c728c6ab2_Kaspars%20Rekis-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de4a0637d74c728c6ab2_Kaspars%20Rekis.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Kaspars Rekis</h6>
                                <div className="team-title small-title">
                                  VP of Strategic Partnerships
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/keiaar/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/rekisk/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de5b41be023b2a948fb3_Avani%20Patel.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de5b41be023b2a948fb3_Avani%20Patel-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de5b41be023b2a948fb3_Avani%20Patel-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de5b41be023b2a948fb3_Avani%20Patel.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Avani Patel</h6>
                                <div className="team-title small-title">
                                  Solutions Architect
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/avap1506"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/avani-patel-bba73018/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de67ba61c544414d41a4_Vano%20Narimanidze.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de67ba61c544414d41a4_Vano%20Narimanidze-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de67ba61c544414d41a4_Vano%20Narimanidze-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de67ba61c544414d41a4_Vano%20Narimanidze.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Vano Narimanidze</h6>
                                <div className="team-title small-title">
                                  DevOps Engineer
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/PowerVANO"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/powervano/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de77ce23884a5b465af0_Matt%20Solomon.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de77ce23884a5b465af0_Matt%20Solomon-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de77ce23884a5b465af0_Matt%20Solomon-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de77ce23884a5b465af0_Matt%20Solomon.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Matt Solomon</h6>
                                <div className="team-title small-title">
                                  Associate, Metaverse Strategy
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/Degentraland"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/matt-solomon-b57925111/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de8f40bc6581386f1588_Vincent%20Ramsey.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de8f40bc6581386f1588_Vincent%20Ramsey-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de8f40bc6581386f1588_Vincent%20Ramsey-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6de8f40bc6581386f1588_Vincent%20Ramsey.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Vincent Ramsey</h6>
                                <div className="team-title small-title">
                                  Associate, Token Design and Strategy
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="https://twitter.com/themetavince"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/vincentramsey7/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6dea918d8eafe10f0c28b_Michelle%20Finn.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6dea918d8eafe10f0c28b_Michelle%20Finn-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6dea918d8eafe10f0c28b_Michelle%20Finn-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6dea918d8eafe10f0c28b_Michelle%20Finn.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Michelle Finn</h6>
                                <div className="team-title small-title">
                                  Chief of Staff
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="#"
                                  className="link-social w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/michellebfinn/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                      <div
                        role="listitem"
                        className="item-team-bottomw w-dyn-item"
                      >
                        <div
                          data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                          className="item_team-top"
                        >
                          <div className="item_team-photo">
                            <img
                              src="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6debb80019bb1640e4832_Erynne%20Mercado.webp"
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet="https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6debb80019bb1640e4832_Erynne%20Mercado-p-500.webp 500w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6debb80019bb1640e4832_Erynne%20Mercado-p-800.webp 800w, https://uploads-ssl.webflow.com/63c6daa5d1d2ee0b7fe8f04e/63c6debb80019bb1640e4832_Erynne%20Mercado.webp 896w"
                              className="img_coverphoto"
                            />
                          </div>
                          <div
                            style={{ display: "none" }}
                            className="item_team-content_parent"
                          >
                            <div className="item_team-content content-bottom">
                              <div className="c-team-name">
                                <h6 className="h6-team">Erynne Mercado</h6>
                                <div className="team-title small-title">
                                  Operational Accounting Manager
                                </div>
                              </div>
                              <div className="c-team-socials">
                                <a
                                  href="#"
                                  className="link-social w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 16 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="link-social medium w-inline-block w-condition-invisible"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="30"
                                      height="18"
                                      viewBox="0 0 30 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/erynne-mercado-b9225416/"
                                  target="_blank"
                                  className="link-social w-inline-block"
                                >
                                  <div className="w-embed">
                                    <svg
                                      width="100%"
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                      viewBox="0 0 14 14"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="item-content-gradient-bg"></div>
                          </div>
                        </div>
                        {/* <div className="w-embed">
                                    <style>
                                        .item_team-top:hover .item-content-gradient-bg {
                                            background: linear-gradient(45deg, #ff8084, #ff8084, #6146ff, #6146ff, #6146ff);
                                            background-size: 400% 400%;
                                            animation: gradient 5s ease;
                                            height: 100vh;
                                        }

                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }

                                            100% {
                                                background-position: 55% 50%;
                                            }
                                    </style>
                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section s-footer">
                <div className="container">
                  <div className="grid-footer">
                    <div id="w-node-_3c95a335-f73a-c92a-fbd1-d62762e896cf-62e896cc">
                      <div>
                        HLV Inc.
                        <br />
                        <a href="mailto:info@hlv.xyz">info@hlv.xyz</a>
                      </div>
                    </div>
                    <div id="w-node-_3c95a335-f73a-c92a-fbd1-d62762e896d5-62e896cc">
                      <img
                        src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63bf15fac5159ae1b691d70e_LogoHomepage.svg"
                        loading="lazy"
                        alt=""
                        className="img-brand-footer"
                      />
                    </div>
                    <div id="w-node-_3c95a335-f73a-c92a-fbd1-d62762e896d7-62e896cc">
                      <div>
                        <a href="/privacy">
                          Privacy Policy
                          <br />
                        </a>
                        <a href="/terms">Terms and Conditions</a>
                      </div>
                    </div>
                    <div
                      id="w-node-e4b7fdfd-2578-93c1-4625-9d0882e6e0c1-62e896cc"
                      className="footer_mobile-social"
                    >
                      <div className="c-socials">
                        <a
                          href="https://twitter.com/HLV_XYZ"
                          target="_blank"
                          className="footer_social twitter w-inline-block"
                        >
                          <div className="w-embed">
                            <svg
                              width="100%"
                              style={{ maxWidth: "100%", maxHeight: "100%" }}
                              viewBox="0 0 16 14"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://hlv-xyz.medium.com/"
                          target="_blank"
                          className="footer_social medium w-inline-block"
                        >
                          <div className="w-embed">
                            <svg
                              width="30"
                              height="18"
                              viewBox="0 0 30 18"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/horizen-labs-ventures/"
                          target="_blank"
                          className="footer_social w-inline-block"
                        >
                          <div className="w-embed">
                            <svg
                              width="100%"
                              style={{ maxWidth: "100%", maxHeight: "100%" }}
                              viewBox="0 0 14 14"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-footer-bg-parent">
                  <img
                    src="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg-p-500.png 500w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg-p-800.png 800w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg-p-1080.png 1080w, https://uploads-ssl.webflow.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg.png 1440w"
                    alt=""
                    className="img-footer-bg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
