<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸{" "}
          </span>{" "}
=======
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouse, waterfalls, and the beauty of nature",
    },
  ];

  const handleClick = (item) => {
    console.log(item);
    return item
  };

  return (
    <header>
      <h2>
      <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
>>>>>>> 445fd485f8e34b60bbf156da7ded9884f1fb8261
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
<<<<<<< HEAD
            <a data-test-id="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                on
                onClick={() => {
                  setCurrentCategory(category);
=======
          <a data-testid="about" href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick();
>>>>>>> 445fd485f8e34b60bbf156da7ded9884f1fb8261
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
