import useProperty from "../../../Hooks/useProperty";
import Card from "./Card";

const Cards = () => {
  const [property] = useProperty();

  return (
   <div className="bg-white py-16">
    <h2 className="text-6xl font-DM text-center mb-16 p-4 text-sky-800 bg-sky-100">Our Top Properties</h2>
     <div className="max-w-screen-md mx-auto ">
      <div className="grid grid-cols-2 gap-10">
        {property.slice(0, 4).map((plot) => (
          <Card key={plot._id} plot={plot}></Card>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Cards;
