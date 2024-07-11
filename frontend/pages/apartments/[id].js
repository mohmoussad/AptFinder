import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Carousel from "react-bootstrap/Carousel";

const ApartmentDetails = () => {
  const [apartment, setApartment] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.API_BASE_URL}/api/apartments/${id}`)
        .then((response) => setApartment(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!apartment) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          margin: "auto",
          paddingTop: "10px",
          height: "80vh"
        }}
      >
        <div style={{width: "30vw"}}>
          <h2 style={{ textAlign: "center" }}>{apartment.title}</h2>
          <p style={{ textAlign: "center" }}>{apartment.description}</p>
          <p style={{ textAlign: "center" }}>
            {apartment.price} <strong>EGP</strong>
          </p>
        </div>
        <div>
          <Carousel slide={false}>
            {!!apartment?.images.length &&
              apartment.images.map((image) => {
                return (
                  <Carousel.Item>
                    <img style={{ width: "40vw", objectFit: "cover" }} src={image.url} alt='' />
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
