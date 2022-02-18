import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.css";

const SearchBar = (props) => {
  const parks = props.parks;
  const selectedPark = props.selectedPark;
  const setSelectedPark = props.setSelectedPark;
  const setTrails = props.setTrails;

  const [filteredParks, setFilteredParks] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = parks.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredParks([]);
    } else {
      setFilteredParks(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredParks([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter Park"
          value={selectedPark ? selectedPark.name : wordEntered}
          onChange={handleFilter}
        />
        <div className="clearBtn">
          {(wordEntered || selectedPark) && (
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => {
                clearInput();
                setSelectedPark(null);
                setTrails([]);
              }}
            />
          )}
        </div>
      </div>
      {filteredParks.length !== 0 && (
        <div className="dataResult">
          {filteredParks.map((park) => {
            return (
              <div
                className="dataItem"
                key={park.id}
                onClick={() => {
                  setSelectedPark(park);
                  clearInput();
                }}
              >
                <div>{park.name}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
