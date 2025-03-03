export const HeaderImage = ({ headerName, headerImage }) => {
  const imageUrl = `data:image/png;base64,${headerImage}`;

  return (
    <div>
      <img src={ imageUrl } alt={ headerName } />
    </div>
  );
};

