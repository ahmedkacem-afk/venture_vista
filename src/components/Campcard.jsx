import { Link } from "react-router-dom";

const Campcard = ({ name, title, image, campgroundId }) => {
  return (
    <div className="rounded-lg m-6 p-6 flex flex-col border-2 w-80  ">
      <img className=" rounded-md w-80" src={image} alt={name} />
      <div className=" text-center">
        <div className="p-4">
          <h2 className="text-2xl   font-semibold mb-2">{name}</h2>

          <p className="mb-4 text-Makara text-xl">{title}</p>
        </div>
        <button
          className="
        font-bold
        border-2
        px-4
        py-6
        rounded
        text-xl
      "
          type="button"
        >
          <Link to={campgroundId}>View Campground</Link>
        </button>
      </div>
    </div>
  );
};

export default Campcard;
