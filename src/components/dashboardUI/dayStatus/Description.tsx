const Description = () => {
  const Description = ({title, colorSсheme} : {title: string, colorSсheme: 'blue' | 'red' | 'green'}) => {
    return(
      <div className="flex items-center gap-1">
        <div 
          className={`
            w-3 h-3 rounded-sm 
            ${colorSсheme === 'blue' && 'bg-blue-300'}
            ${colorSсheme === 'red' && ' bg-red-400'}
            ${colorSсheme === 'green' && 'bg-green-400'}
          `}
        >
        </div>
        <div className="text-sm font-light">{title}</div>
      </div>
    )
  }

  return (  
    <div className="flex items-start gap-7">
      <Description title="Percentage of Completed Tasks" colorSсheme="blue"/>
      <Description title="Work Efficiency" colorSсheme="red"/>
      <Description title="Learning Achievement" colorSсheme="green"/>
    </div>
  );
}
 
export default Description;