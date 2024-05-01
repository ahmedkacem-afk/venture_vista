import { campgroundsData } from "../utils/CampsData";
import Campcard from "../components/Campcard";
import CampsMain from "../components/CampsMain";

const Campgrounds = () => {
  return (
    <div className="my-20">
      <CampsMain />
      <div className="flex flex-wrap justify-center">
        {campgroundsData.map((camp) => {
          return (
            <Campcard
              key={camp.id}
              title={camp.title}
              image={camp.image}
              name={camp.name}
              campgroundId={camp.campgroundId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Campgrounds;
