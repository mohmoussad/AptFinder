import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useRouter } from "next/router";

const ApartmentsList = () => {
  const [apartments, setApartments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}/api/apartments`)
      .then((response) => setApartments(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <CardGroup>
        {apartments.length == 0 && <h3 style={{margin:"30px"}}>No apartmens added.</h3>}
        {apartments.map((apartment) => (
          <Card
            style={{ border: "0.25px solid gray", margin: "20px", maxWidth: "20rem", minWidth: "15rem" }}
            key={apartment.id}
          >
            <Card.Img style={{ height: "14rem", objectFit: "cover" }} variant='top' src={apartment.images[0].url} />
            <Card.Header as='h5'>{apartment.title}</Card.Header>
            <Card.Body style={{ padding: "0" }}>
              <Card.Text
                style={{ margin: "20px 20px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
              >
                {apartment.description}
              </Card.Text>
              <Card.Text style={{ margin: "0px 20px" }}>
                {apartment.price} <strong>EGP</strong>
              </Card.Text>
              <Button
                style={{ margin: "20px 20px" }}
                variant='dark'
                onClick={() => router.push(`/apartments/${apartment.id}`)}
              >
                Explore
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default ApartmentsList;
