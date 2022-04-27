import { useForm } from "react-hook-form";
import axios from "axios";
const AddEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (events) => {
    // fetch("http://localhost:5000/events", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(events),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    axios.post("http://localhost:5000/events", events).then((res) => {
      const { data } = res;
      if (data?.insertedId) {
        alert("Thank you for order");
      }
    });

    reset();
  };

  return (
    <div className="pt-5 pb-20">
      <h2 className="text-center font-bold text-3xl mb-6">Add event</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-5 justify-center items-start bg-white rounded-2xl p-10 ">
          <div className="w-full">
            <div className="form-group w-full">
              <label className="text-xl" htmlFor="name">
                Event Title
              </label>
              <input
                type="text"
                id="name"
                placeholder="Event Name"
                {...register("name", { required: true })}
                className="w-full border-2 p-2 rounded-md my-2 border-slate-700"
              />
              <p className="text-red-500">
                {errors.eventName && <span>This field is required</span>}
              </p>
            </div>
            <div className="form-group w-full">
              <label className="text-xl" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full border-2 p-2 rounded-md my-2 border-slate-700"
                type="text"
                id="description"
                placeholder="Description"
                {...register("description", { required: true })}
              />
              <p className="text-red-500">
                {errors.description && <span>This field is required</span>}
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="form-group w-full">
              <label className="text-xl" htmlFor="date">
                Event Date
              </label>
              <input
                type="text"
                id="date"
                placeholder="20-04-2022"
                {...register("date", { required: true })}
                className="w-full border-2 p-2 rounded-md my-2 border-slate-700"
              />
              <p className="text-red-500">
                {errors.date && <span>This field is required</span>}
              </p>
            </div>
            <div className="form-group w-full">
              <label className="text-xl" htmlFor="image">
                Photo Url
              </label>
              <input
                type="text"
                id="image"
                placeholder="Image Url"
                {...register("image", { required: true })}
                className="w-full border-2 p-2 rounded-md my-2 border-slate-700"
              />
              <p className="text-red-500">
                {errors.image && <span>This field is required</span>}
              </p>
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
