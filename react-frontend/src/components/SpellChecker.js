export const SpellChecker = ({ finderData, onSearch, stylesConfiguration }) => {

    const onClick = (event) => {
      event.preventDefault();
      console.log( "Corrected Term: ", event.target.dataset.value );
      finderData.query = event.target.dataset.value;
      onSearch( finderData );
    }

    return (
      <div id="ob_corrector" 
          style={{ fontSize: stylesConfiguration.fontSize,
                   fontFamily: stylesConfiguration.fontFamily,
                   fontWeight: stylesConfiguration.fontWeight,
                   fontStyle: stylesConfiguration.fontStyle,
                   display: 'none' }}
      >
        <div style={{ fontSize: '13px' }} > 
          Se muestran resultados de: 
          <a id="queriedTerm"> { finderData.query } </a>
        </div>
        <div style={{ fontSize: '13px' }} > 
          Buscar en cambio:&nbsp;               
          <a id="correctedTerm" onClick={ onClick } href="#" data-value="">  </a>
        </div>
      </div>
    );
  };