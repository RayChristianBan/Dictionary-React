const Example = ({ mean }) => {
    return (
      <div>
        {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
          <div key={def.example}>
            {def.example ? <li className="text-[#F0F8FF]">{def.example}</li> : ''}
          </div>
        ))))}
      </div>
    );
  };
  
  export default Example;