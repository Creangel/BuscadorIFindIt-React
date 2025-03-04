export const DrawNoResultsText = ({ query }) => {
    return (
      <div className="row">
        <div>
          Su búsqueda - "<b>{query}</b>" - no produjo ningún documento.
          <br />
          No se encontraron páginas que contengan "<b>{query}</b>".
          <br />
          <br />
          Sugerencias:
          <br />- Asegúrese de que todas las palabras están escritas correctamente.
          <br />- Intente usar otras palabras.
          <br />- Intente usar palabras más generales.
          <br />
          <br />
        </div>
      </div>
    );
  };