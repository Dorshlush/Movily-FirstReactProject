import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import { useState } from "react";

function ChoosePages({ ChangePostsPerPage }) {
  const [event, setEvent] = useState([]);
  return (
    <div
      style={{
        position: "absolute",

        left: "30%",
        transform: "translate(-45%, -75%)",
      }}
    >
      <InputGroup className="mb-3">
        <Button
          onClick={() => ChangePostsPerPage(event)}
          variant="outline-dark"
          id="button-addon1"
        >
          MoviePerPage
        </Button>
        <Form.Control
          onChange={(e) => setEvent(e.target.value)}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
}
export default ChoosePages;
