import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

export const FilterTitle = ({ filter, setOpen, open, stylesConfiguration }) => {

    const onClick = () => {
        setOpen(!open);
    };

    return (
        <>
            {
                filter.collapsable ? ( 
                    <ListItemButton onClick={onClick} >
                        <ListItemIcon>
                            <FilterAltIcon sx={{ color: stylesConfiguration.color }}/>
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography sx={{ 
                                    fontSize: stylesConfiguration.fontSize,
                                    fontFamily: stylesConfiguration.fontFamily,
                                    fontWeight: stylesConfiguration.fontWeight,
                                    fontStyle: stylesConfiguration.fontStyle,
                                }}>
                                    { filter.title }
                                </Typography>
                            }
                        />
                        { open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                ) : (
                    <ListItem >
                        <ListItemIcon>
                            <FilterAltIcon sx={{ color: stylesConfiguration.color }} />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography sx={{ 
                                    fontSize: stylesConfiguration.fontSize,
                                    fontFamily: stylesConfiguration.fontFamily,
                                    fontWeight: stylesConfiguration.fontWeight,
                                    fontStyle: stylesConfiguration.fontStyle,
                                }}>
                                    { filter.title }
                                </Typography>
                            }
                        />
                    </ListItem>
                )
            }
        </>
    );


}