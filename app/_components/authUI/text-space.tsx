const TextSpace = ({
  text
}:{
  text: string
}) => {
  return ( 
    <div className="max-w-[270px] text-center">
      {text}
    </div>
   );
}
 
export default TextSpace;