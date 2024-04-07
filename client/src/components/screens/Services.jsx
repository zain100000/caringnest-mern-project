import React, { useEffect } from "react";
import "./css/Services.css";

const Services = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <section id="SERVICES" style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-5">
          <h1 className="title">Our Services</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6" style={{ padding: 50 }}>
          <div className="content-box mb-75 d-block d-sm-flex text-left">
            <div className="mr-sm-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                viewBox="0 0 16 16"
                width="64"
                enable-background="new 0 0 64 64"
                className="mb-10 icon svg-primary"
                srcset=""
                style={{ marginRight: 20 }}
              >
                <path
                  d="m8 8c-2.209139 0-4-1.790861-4-4s1.790861-4 4-4 4 1.790861 4 4-1.790861 4-4 4zm-6 2h12c1.1045695 0 2 .8954305 2 2v4h-16v-4c0-1.1045695.8954305-2 2-2z"
                  fill-rule="evenodd"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="">
              <h4 className="mb-20 text-success">
                <strong className="">Personalized Attention</strong>
              </h4>
              <p className="mb-0">
                We offer many services to assist our residents, including
                counseling, job search assistance, community access and much
                more.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6" style={{ padding: 50 }}>
          <div className="content-box mb-75 d-block d-sm-flex text-left">
            <div className="mr-sm-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 448 512"
                enable-background="new 0 0 64 64"
                className="mb-10 icon svg-primary"
                srcset=""
                style={{ marginRight: 20 }}
              >
                <path d="M96 128C96 57.308 153.308 0 224 0s128 57.308 128 128-57.308 128-128 128S96 198.692 96 128zm256 160v33.61c36.471 7.433 64 39.756 64 78.39v49.441c0 11.44-8.075 21.29-19.293 23.534l-21.802 4.361c-6.499 1.3-12.821-2.915-14.12-9.414l-1.569-7.845c-1.3-6.499 2.915-12.821 9.414-14.12l15.37-3.074v-42.078c0-26.283-20.793-48.297-47.071-48.797C310.039 351.498 288 373.224 288 400v42.883l15.371 3.074c6.499 1.3 10.713 7.622 9.414 14.12l-1.569 7.845c-1.3 6.499-7.622 10.714-14.12 9.414l-21.802-4.361C264.075 470.732 256 460.882 256 449.441V400c0-38.634 27.529-70.957 64-78.39V288h-22.624c-45.669 20.945-99.331 21.749-146.752 0H128v66.025c28.495 7.361 49.359 33.906 47.931 64.977-1.506 32.778-28.097 59.392-60.874 60.926C78.383 481.644 48 452.303 48 416c0-29.767 20.427-54.852 48-61.975V288c-53.019 0-96 42.981-96 96v104c0 13.255 10.745 24 24 24h400c13.255 0 24-10.745 24-24V384c0-53.019-42.981-96-96-96zM80 416c0 17.645 14.355 32 32 32s32-14.355 32-32-14.355-32-32-32-32 14.355-32 32z"></path>
              </svg>
            </div>
            <div className="">
              <h4 className="mb-20 text-success">
                <strong className="">Registered Nurse Service!</strong>
              </h4>
              <p className="mb-0">
                Our registered nurses perform a variety of duties including
                Medication administration, taking vital signs, head-to-toe
                physical assessments, assisting with mobility and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6" style={{ padding: 50 }}>
          <div className="content-box mb-75 d-block d-sm-flex text-left">
            <div className="mr-sm-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 448 512"
                enable-background="new 0 0 64 64"
                class="mb-10 icon svg-primary"
                srcset=""
                style={{ marginRight: 20 }}
              >
                <path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"></path>
              </svg>
            </div>
            <div className="">
              <h4 className="mb-20 text-success">
                <strong className="">Medication Distribution</strong>
              </h4>
              <p className="mb-0">
                we offer professional, reliable Medication Distribution services
                to all of our patients. Our medical home care services take all
                your specific requests and demands into consideration and
                guarantee personalized attention.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6" style={{ padding: 50 }}>
          <div className="content-box mb-75 d-block d-sm-flex text-left">
            <div className="mr-sm-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 512 512"
                enable-background="new 0 0 64 64"
                class="mb-10 icon svg-primary"
                srcset=""
                style={{ marginRight: 20 }}
              >
                <path
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"
                  class=""
                ></path>
              </svg>
            </div>
            <div className="">
              <h4 className="mb-20 text-success">
                <strong className="">24-Hour Care!</strong>
              </h4>
              <p className="mb-0">
                With our 24-Hour Care services, patients can feel confident that
                their health matters will be addressed in a timely manner,
                without sacrificing their normal daily routines.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: 100 }}>
        <div className="col-lg-12">
          <h2 className="title text-center">Waiver Service We Provide</h2>
        </div>
      </div>

      <div className="row p-5">
        <div className="col-md-12 col-lg-6">
          <h4>Community Access for Disability Inclusion (CADI)</h4>
          <p className="description">
            The Community Access for Disability Inclusion (CADI) Waiver provides
            funding for home and community-based services for children and
            adults, who would otherwise require the level of care provided in a
            nursing facility.
          </p>
          <p className="description">
            CADI Waiver services may be provided in a person's own home, in
            his/her biological or adoptive family's home, in a relative's home
            (e.g. sibling, aunt, grandparent etc.), a family foster care home or
            corporate foster care home, a board and lodging facility or in an
            assisted living facility. If married, a person may receive CADI
            Waiver services while living at home with his or her spouse. At Bond
            Home Care, we provide CADI Waiver services at our assisted living
            facility.
          </p>
        </div>
        <div className="col-md-12 col-lg-6">
          <h4>Elderly Waiver (EW)</h4>
          <p className="description">
            The Developmental Disabilities(DD) Waiver provides funding for home
            and community-based services for children and adults with
            developmental disabilities or related conditions.
          </p>
          <p className="description">
            Assessed waiver service needs, as identified in the person's service
            plan, may be provided in a person's own home, in his/her biological
            or adoptive family's home, in a relative's home (e.g., sibling,
            aunt, grandparent, etc.), in a family foster care home or corporate
            foster care home. At Bond Home Care, we provide CADI Waiver services
            at our assisted living facility.
          </p>
        </div>
      </div>

      <div className="row" style={{ marginTop: 80 }}>
        <div className="col-lg-12">
          <h4 className="text-center">Brain Injury (BI)</h4>
        </div>
      </div>

      <div className="row p-3">
        <div className="col-lg-12">
          <p className="text-center text-muted">
            A Brain Injury (BI) waiver, often referred to as a Brain Injury
            Medicaid waiver or simply a BI waiver, is a specialized Medicaid
            program in the United States designed to provide home and
            community-based services to individuals who have sustained a
            traumatic brain injury (TBI) or acquired brain injury (ABI).
          </p>
          <p className="text-center text-muted">
            The goal of the BI waiver program is to help individuals with brain
            injuries avoid or transition out of institutional care settings
            (such as nursing homes) and receive the care and support they need
            in their homes or communities.
          </p>
        </div>
      </div>

      <div className="row" style={{ marginTop: 80 }}>
        <div className="col-lg-12">
          <h4 className="text-center">We Accept Private Pay</h4>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-lg-12">
          <p className="text-center text-muted">
            We accept CADI wavier, CAC wavier, TBI wavier, DD wavier and private
            pay.
          </p>
        </div>
      </div>

      <hr />
    </section>
  );
};

export default Services;
