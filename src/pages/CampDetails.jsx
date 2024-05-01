import { Link, useParams } from "react-router-dom";
import { campgroundsData, reviews } from "../utils/CampsData.js";
import chatImage from "../images/chatBubble.svg";

const CampDetails = () => {
  let params = useParams();
  let currentCamp,
    currentReviews = [];

  campgroundsData.forEach((campground) => {
    if (campground.campgroundId === params.campgroundId) {
      currentCamp = campground;
    }
  });

  reviews.forEach((review) => {
    if (review.campgroundId === params.campgroundId) {
      currentReviews.push(review);
    }
  });

  return (
    <div className="flex  flex-wrap my-24 justify-around ">
      <section className="flex  flex-col  p-8 rounded-md shadow border-2  w-1/3">
        <img
          className="rounded-md  w-200"
          src={currentCamp.image}
          alt={currentCamp.name}
        />
        <div className="grid grid-flow-row items-center">
          <h1 className="font-bold text-2xl">{currentCamp.name}</h1>
          <h1 className="text-xl">${currentCamp.price}/night</h1>
        </div>
        <p className="text-Makara  text-xl leading-relaxed">
          {currentCamp.description}
        </p>
        <p className="text-Makara text-xl italic ">
          Submitted By {currentCamp.submittedBy}
        </p>
      </section>
      <section className=" flex flex-col rounded-md shadow border-2 w-1/3 h-full">
        {currentReviews.map((review) => (
          <div key={review.id} className="grid grid-flow-row ">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl">{review.userName}</h1>
              <h1 className="text-lg">{review.createdAt}</h1>
            </div>
            <p className="text-Makara text-xl leading-relaxed pb-4 border-b-2">
              {review.description}
            </p>
          </div>
        ))}
        <button className="flex justify-around w-2/3 items-center mt-3 h-20 rounded-md bg-black text-white p-5 font-semibold text-xl tracking-wider">
          <img src={chatImage} alt="Leave a review" />{" "}
          <Link to="new-comment">Leave a Review</Link>
        </button>
      </section>
      <div className=" p-8 rounded-md shadow border-2 w-1/5 h-1/2">
        <img className="w-full rounded-md" src={currentCamp.map} alt="Map" />
      </div>
    </div>
  );
};

export default CampDetails;
