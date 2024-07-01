const SubTitle = ({
  text
}:{
  text: string
}) => {
  return ( 
    <h2 className="text-2xl">
      {text}
    </h2>
  );
}
 
export default SubTitle;