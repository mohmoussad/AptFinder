import Navbar from "../components/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh" }}>
        <Form style={{ width: "60%", margin: "auto" }}>
          <h5>Contact Us</h5>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email *</Form.Label>
            <Form.Control type='email' placeholder='example@example.com' required />
          </Form.Group>

          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message *</Form.Label>
            <Form.Control as='textarea' rows={3} required />
          </Form.Group>

          <Form.Group controlId='formFileMultiple' className='mb-3'>
            <Form.Label>Attachments</Form.Label>
            <Form.Control type='file' multiple required />
          </Form.Group>

          <Button variant='dark' type='submit'>
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Contact;
