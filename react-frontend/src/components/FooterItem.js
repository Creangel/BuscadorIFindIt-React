export const FooterItem = ({ item, itemName, position }) => {
  if (!item) {
    return null;
  }

  return (
    <li key={itemName}>
      {
        item.fieldLink ? 
          (
            <a href={ item.fieldLink } style={{ textDecoration: "none" }}  > { item.title } </a>
          ) 
        : position === 0 ? 
          (
            <span> <strong> { item.title } </strong> </span>
          )
          : 
            (
              <span> { item.title } </span>
            )  
      }
    </li>
  );
};

