import axios from "axios";
import React, { useEffect, useState } from "react";
import Event from "./Event/Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const url = `http://localhost:5000/events`;
      try {
        const { data } = await axios(url);
        setEvents(data);
      } catch (error) {
        alert(error?.message);
      }
    };
    getEvents();
  }, []);
  return (
    <div className="m-10">
      Events{events?.length}
      <div className="grid md:grid-cols-4 gap-5 max-w-[1080px] mx-auto">
        {events?.map((eventItem) => (
          <Event keys={eventItem._id} eventItem={eventItem}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
