import React, { useState, useEffect } from "react";
//import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
//import Carousal from "../components/Carousal";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoofCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Parse the response
    const data = await response.json();

    // Debugging
    //console.log(data);

    // Set state
    setFoodItem(data[0]);
    setFoofCat(data[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption" style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      {
                        setSearch(e.target.value);
                      }
                    }}
                  />
                  <button
                    className="btn btn-outline-success text-white bg-success"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/294/670/477/baked-goods-pastry-bakery-breakfast-wallpaper-preview.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container m-3">
        {foodCat.length !== 0 ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3 g-4 ">
                {" "}
                <div key={data._id} className="fs-3 mb-3 ">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem.length !== 0 ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name
                          .toLowerCase()
                          .includes((search || "").toLocaleLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                            imgSrc={filterItems.img}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>No such data</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No Categories Found</div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
