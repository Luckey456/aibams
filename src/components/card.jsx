const Card = ({ icon, title, description }) => {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-80">
        <div className="text-xl font-semibold flex items-center space-x-2">
          <span className="text-purple-400">{icon}</span>
          <span>{title}</span>
        </div>
        <p className="text-gray-300 mt-2">{description}</p>
        <button className="text-purple-400 mt-4 hover:underline">View More</button>
      </div>
    );
  };
  
  export default Card;
  