const Title = ({
  text
}:{
  text: string
}) => {
  return ( 
    <h2 className="text-3xl font-semibold">{text}</h2>
   );
}
 
export default Title; 