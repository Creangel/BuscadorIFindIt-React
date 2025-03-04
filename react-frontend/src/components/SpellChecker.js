export const SpellChecker = ({ finderData, onSearch }) => {

    const onClick = (event) => {
      event.preventDefault();
      console.log( "Corrected Term: ", event.target.dataset.value );
      finderData.query = event.target.dataset.value;
      onSearch( finderData );
    }

    return (
      <div id="ob_corrector" style={{ display: 'none' }}>
        <div style={{ fontSize: '13px' }} > 
          Se muestran resultados de: 
          <a id="queriedTerm"> { finderData.query } </a>
        </div>
        <div style={{ fontSize: '13px' }} > 
          Buscar, en cambio, 
          <a id="correctedTerm" onClick={ onClick } href="#" data-value="">  </a>
        </div>
      </div>
    );
  };