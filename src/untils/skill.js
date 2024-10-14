const SkillItem = ({ name, filled, total }) => {
  return (
      <li className="flex items-center">
          <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
          <p className="text-xl font-medium mr-4 w-24">{name}</p>
          <div className="flex space-x-1 ml-10">
              {Array.from({ length: filled }).map((_, index) => (
                  <div key={index} className="w-6 h-6 rounded-full bg-yellow-500"></div>
              ))}
              {Array.from({ length: total - filled }).map((_, index) => (
                  <div key={index + filled} className="w-6 h-6 rounded-full border-2 border-yellow-500"></div>
              ))}
          </div>
      </li>
  );
};

export default SkillItem;