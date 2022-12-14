// __tests__/Modal.test.js with hard coded categories
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum color sit amet, consectetur adispiscing elit. Nunc ultricie",
  index: 1,
};

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    // baseline render component test
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
  });

  //snapshot testw

  it("matches snapshot DOM node structure", () => {
    // Arrange the snapshot - declare variables
    const { asFragment } = render(
      <Modal
        // Assert the match
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
  it("calls onClose handler", () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    fireEvent.click(getByText("Close this modal"));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
