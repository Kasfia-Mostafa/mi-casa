import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Card = ({ plot }) => {
  const { property_image, property_location, property_price, property_title,_id } =
    plot || [];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-[#4fa5dd] to-[#acdeff]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <img
          src={property_image}
          style={{
            transform: "translateZ(50px)",
          }}
          className="p-4 rounded-3xl"
        ></img>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold font-DM text-sky-700"
        >
          {property_title}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-sm font-DM text-gray-500"
        >
          {property_location}
        </p>
        <div className="flex justify-center gap-2">
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-sm font-DM text-gray-500"
          >
            {property_price}
          </p>
          <RiVerifiedBadgeFill className="text-green-500 text-xl" />
        </div>
        <div className="flex justify-center mt-5">
          <Link to={`/allProperties/${_id}`}>
            {" "}
            <button
              style={{
                transform: "translateZ(50px)",
              }}
              className="text-white font-semibold font-DM w-20 bg-gradient-to-r from-[#4fa5dd] to-[#97cef4] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
