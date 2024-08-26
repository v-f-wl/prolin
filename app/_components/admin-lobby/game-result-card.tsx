const ResultCard = ({
  title,
  value
}: {
  title: string,
  value: string
}) => {
  return ( 
    <div className="bg-gray-300/20 rounded-xl inline-flex items-center justify-center gap-2 px-4 py-2">
      <div className="">
        {title}
      </div>
      <div className="font-normal">
        {value}
      </div>
    </div>
  );
}
 
export default ResultCard;