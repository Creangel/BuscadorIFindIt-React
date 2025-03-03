export const FooterImage = ({ footerImgName, footerImage }) => {
  if (!footerImage) {
    return null;
  }

  const imageUrl = `data:image/png;base64,${footerImage}`;

  return (
    <div key={ footerImage }>
      <img src={ imageUrl } alt={ footerImgName } />
    </div>
  );
};

