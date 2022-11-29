import "./ColorBox.css";

const ColorBox = ({ color, hexValue, isDarkText }) => {
  return (
    <section
      className="box"
      style={{ 
        backgroundColor: color,
        color: isDarkText ? "#000" : "#fff" 
        }}>
      
      <p>{color ? color : "Empty value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

ColorBox.defaultProps = {
  color: "Empty value"
}

export default ColorBox;
