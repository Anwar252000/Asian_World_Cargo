// import React from 'react'

const Blogpage = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#E3F5FF" }}>
      <div className="row justify-content-center">
        {/* Card Section */}
        <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
          <div
            className="card mt-3"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "0 50px 0 0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              className="card-body d-flex flex-column justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <h3 className="text-center">
                The Lifecycle of a Mushroom: A Unique Journey
              </h3>
              <p className="fw-light text-center">
                Mushrooms are fungi that begin life as spores. Once germinated,
                they grow into a network called mycelium, which scavenges the
                soil for nutrients. Mature mycelium produces mushrooms that
                release spores to continue the lifecycle.
              </p>
              <p className="fw-light text-center">
                These fungi are also vital for the ecosystem, acting as
                decomposers that recycle nutrients in the soil. In addition to
                their ecological roles, mushrooms are a popular food source,
                celebrated for their diverse flavors and health benefits.
              </p>
              <h4 className="text-center mt-3">
                Health Benefits & Culinary Uses
              </h4>
              <p className="fw-light text-center">
                Mushrooms are low in calories and packed with nutrients,
                including vitamins D and B, antioxidants, and fiber. They can
                boost the immune system and promote gut health.
              </p>
              <p className="fw-light text-center">
                In cooking, they are versatile: add them to soups, stir-fries,
                salads, or as a pizza topping. Their unique umami flavor makes
                them a favorite in various cuisines around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-7 mb-4 d-flex justify-content-center">
          <div className="mt-3">
            <img
              src="/Mushroom3.jpeg"
              alt="Mushroom"
              style={{
                width: "100%",
                maxWidth: "850px",
                height: "auto",
                borderRadius: "50px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
