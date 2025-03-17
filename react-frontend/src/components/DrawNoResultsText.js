import { useState } from "react";

export const DrawNoResultsText = ({ query, stylesConfiguration }) => {

    const [queryValue, setQueryValue] = useState(query);
    const contentStyle = stylesConfiguration.filter((style) => style.name === "result_content")[0];  

    return (
      <div className="row" style={contentStyle}>
        <div>
          Su búsqueda - "<b>{queryValue}</b>" - no produjo ningún documento.
          <br />
          No se encontraron páginas que contengan "<b>{queryValue}</b>".
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