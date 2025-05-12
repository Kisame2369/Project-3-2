const Options = ({ onValue, total, onReset}) => { 
    return (
      <div>
        <button onClick={() => onValue('good')}>Good</button>
        <button onClick={() => onValue('neutral')}>Neutral</button>
        <button onClick={() => onValue('bad')}>Bad</button>
        {total !== 0 && (
        <button onClick={onReset}>Reset</button>
        )}
      </div>
    );
  };
  
  export default Options;
  