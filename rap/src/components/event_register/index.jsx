import React from "react";

const EventModal = ({
  handleClose,
  handleSubmit,
  handleChange,
  handleImageChange,
  newEvent,
}) => (
  <ModalBackground onClick={handleClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newEvent.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newEvent.description}
          onChange={handleChange}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add Event</button>
      </form>
    </ModalContent>
  </ModalBackground>
);

export default EventModal;
