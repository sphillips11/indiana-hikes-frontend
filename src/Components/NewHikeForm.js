import { React, useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Searchbar from "./Searchbar";
import "../index.css";

const NewHikeForm = (props) => {
  const currentHiker = props.currentHiker;
  const parks = props.parks;
  const recordHike = props.recordHike;
  const selectedPark = props.selectedPark;
  const setSelectedPark = props.setSelectedPark;
  const date = props.date;
  const setDate = props.setDate;
  const trails = props.trails;
  const setTrails = props.setTrails;

  parks.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  trails.sort(function (a, b) {
    return a["id"] - b["id"];
  });

  console.log(trails);

  // const submitHike = (event) => {
  //   event.preventDefault();
  //   props.recordHike({
  //     hiker_id: currentHiker.id,
  //     park_id: selectedPark.id,
  //     date: date,
  //     distance: distance,
  //     notes: notes,
  //     trails: trails,
  //     // EDIT
  //   });
  //   setFormFields({
  //     park_id: null,
  //     date: date,
  //     distance: distance,
  //     notes: notes,
  //     trails: trails,
  //     // EDIT
  //   });
  // };

  return (
    <Form className="border border-3 rounded shadow py-4 px-5 mt-5">
      {/* onSubmit={submitHike} */}
      <h2 className="text-center text-green3 p-2">Record Your Hike</h2>
      <Form.Group controlId="Park visited" className="text-green3 mb-3">
        <Form.Label className="font-weight-bold">Park</Form.Label>
        <Searchbar
          parks={parks}
          selectedPark={selectedPark}
          setSelectedPark={setSelectedPark}
          setTrails={setTrails}
        />
      </Form.Group>

      <Form.Group controlId="Date of hike" className="text-green3 mb-3">
        <Form.Label>Date of Hike</Form.Label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </Form.Group>

      <Form.Group controlId="Distance hiked" className="text-green3 mb-3">
        <Form.Label>Distance Hiked</Form.Label>
        <div>
          <input type="number" min={0} step={0.1} placeholder="0.0" />
          <span> miles</span>
        </div>
      </Form.Group>

      <Form.Group controlId="Trails hiked" className="text-green3 mb-3">
        <Form.Label>Trails Hiked</Form.Label>
        <div className="list-container text-green3">
          {trails.map((trail) => (
            <div key={trail.id}>
              <input value={trail} type="checkbox" />
              <span> {trail.name}</span>
            </div>
          ))}
        </div>
      </Form.Group>

      <Form.Group controlId="Notes" className="text-green3 mb-3">
        <Form.Label>Notes (optional)</Form.Label>
        <textarea className="form-control" rows="3"></textarea>
      </Form.Group>

      <div className="text-center">
        <input
          type="submit"
          value="Record Hike"
          className="btn bg-green2 border-0 text-green1 mt-3 me-5"
        />
      </div>
    </Form>
  );
};

export default NewHikeForm;
