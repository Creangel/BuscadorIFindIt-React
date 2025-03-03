export const FooterItem = ({ item, itemName }) => {
  if (!item) {
    return null;
  }

  return (
    <li key={itemName}>
      {
        item.fieldLink ? 
          (
            <a href={ item.fieldLink } > { item.title } </a>
          ) 
        : 
          (
            <span> { item.title } </span>
          )
      }
    </li>
  );
};

