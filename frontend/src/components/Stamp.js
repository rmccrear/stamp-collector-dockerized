function Stamp({ stamp }) {
  return ( 
    <div className="stamp">
      <img src={stamp.image} alt={stamp.name} />
      <h3>{stamp.name}</h3>
      <p>{stamp.description}</p>
    </div>
  );
}

export default Stamp;