const ResultCard = ({
  title,
  value
}: {
  title: string,
  value: string
}) => {
  return ( 
    <div className="bg-gray-300/20 rounded-xl h-36 flex flex-col items-center justify-center gap-5 w-full">
      <div className="text-xl">
        {title}
      </div>
      <div className="font-normal text-3xl text-indigo-500">
        {value}
      </div>
    </div>
  );
}
 
export default ResultCard;