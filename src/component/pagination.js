import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const Pagination = ({ newmoviesListlength, postsPerPage, pagination }) => {
  let pages = [];

  for (
    let i = 1;
    i <= Math.ceil(newmoviesListlength.length / postsPerPage);
    i++
  ) {
    pages.push(i);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          {pages.map((page, index) => {
            return (
              <Button
                variant="outline-primary"
                onClick={() => pagination(page)}
                key={index}
              >
                {page}
              </Button>
            );
          })}
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
};
export default Pagination;
