import starSVG from "../assets/star.svg";

const Rating = ({ rating }) => {
  const stars = Array(rating).fill(starSVG);

  return (
    <>
      {stars.map((star, index) => (
        <img src={star} alt="star" key={index} />
      ))}
    </>
  );
};

export default Rating;
