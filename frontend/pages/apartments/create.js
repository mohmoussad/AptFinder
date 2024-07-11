import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateApartment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const validate = () => {
    const errors = {};

    if (!title) {
      errors.title = "Title is required";
    } else if (title.length < 3) {
      errors.title = "Title must be at least 3 characters long";
    }

    if (!description) {
      errors.description = "Description is required";
    }

    if (!price) {
      errors.price = "Price is required";
    } else if (isNaN(price) || price <= 0) {
      errors.price = "Price must be a positive number";
    }

    if (images.length === 0) {
      errors.images = "At least one image is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      await axios.post(`${process.env.API_BASE_URL}/api/apartments`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/apartments");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh" }}>
        <Form onSubmit={handleSubmit} style={{ width: "60%", margin: "auto" }}>
          <h5>Add Apartment</h5>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Apartment Title *</Form.Label>
            <Form.Control
              type="text"
              placeholder="My Apartment"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={!!errors.title}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              isInvalid={!!errors.description}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price *</Form.Label>
            <Form.Control
              type="number"
              placeholder="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              isInvalid={!!errors.price}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Images *</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={handleImageChange}
              isInvalid={!!errors.images}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.images}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="dark" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateApartment;
