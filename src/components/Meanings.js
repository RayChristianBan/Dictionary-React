
const Meanings = ({ mean }) => {
    return (
      <div>
        {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
          <div key={def.definition}>
            <li className="text-[#F0F8FF]">{def.definition}</li>
          </div>
        ))))}
      </div>
    );
  };
  
  export default Meanings;