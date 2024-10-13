const SkillItem = ({ name, filled, total }) => {
    return (
      <li className="flex items-center">
        <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mr-2" />
        <p className="text-xl font-medium mr-4 w-24">{name}</p>
        <div className="flex space-x-1 ml-6">
          {[...Array(total)].map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full ${index < filled ? 'bg-yellow-500' : 'border-2 border-yellow-500'}`}
            />
          ))}
        </div>
      </li>
    );
  };
  
  export default SkillItem;
  