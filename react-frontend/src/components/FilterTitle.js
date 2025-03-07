import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const FilterTitle = ({ filter, setOpen, open }) => {

    const onClick = () => {
        setOpen(!open);
    };

    return (
        <>
            {
                filter.collapsable ? ( 
                    <ListItemButton onClick={onClick}>
                        <ListItemIcon>
                            <FilterAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={ filter.title } />
                        { open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                ) : (
                    <ListItem>
                        <ListItemIcon>
                            <FilterAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={ filter.title } />
                    </ListItem>
                )
            }
        </>
    );


}