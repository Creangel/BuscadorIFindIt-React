export const HeaderImage = ({ headerName, headerImage }) => {
  const imageUrl = `data:image/png;base64,${headerImage}`;

  return (
    <img 
        src={imageUrl} 
        alt={headerName} 
        style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            objectFit: 'contain' 
        }} 
    />
);
};

