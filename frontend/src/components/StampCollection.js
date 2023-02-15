import Stamp from './Stamp';

function StampCollection({ stamps }) {
  return (
    <div className="stamp-collection">
      {stamps.map((stamp) => (
        <Stamp key={stamp.id} stamp={stamp} />
      ))}
    </div>
  );
}

export default StampCollection;