import React from "react";

const AddEvent = () => {
  return (
    <div className="py-10">
      <form className="">
        <div className="md:flex gap-5 justify-center items-start bg-white rounded-2xl p-10 ">
          <div className="w-full">
            <div className="form-group w-full">
              <label className="text-xl" htmlFor="event">
                Event Title
              </label>
              <input
                className="w-full border-2 p-2 rounded-md my-2 border-slate-700"
                type="text"
                name="event"
                id="event"
                placeholder="Event Name"
              />
            </div>
            <div className="form-group w-full">
              <label className="text-xl" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full border-2 p-2 rounded-md my-2 border-slate-700"
                type="text"
                name="description"
                id="event"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-group w-full">
              <label className="text-xl" htmlFor="date">
                Event Date
              </label>
              <input
                className="w-full border-2 p-2 rounded-md my-2 border-slate-700"
                type="text"
                name="event"
                id="date"
                placeholder="27-04-2022"
              />
            </div>
            <div className="form-group w-full">
              <label className="text-xl" htmlFor="image">
                Photo Url
              </label>
              <input
                className="w-full border-2 p-2 rounded-md my-2 border-slate-700"
                type="text"
                name="image"
                id="event"
                placeholder="Image Url"
              />
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <input
            className="md:right-2 md:left-auto left-2 cursor-pointer p-2 bg-blue-400 my-3 rounded-md text-white hover:text-blue-400 hover:bg-transparent border-2 border-blue-400 absolute"
            type="submit"
            value="Add Event"
          />
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
