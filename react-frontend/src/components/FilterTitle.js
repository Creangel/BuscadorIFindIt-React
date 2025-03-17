import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

export const FilterTitle = ({ filter, setOpen, open, stylesConfiguration, searchable, setShowFilterSearchBar, showFilterSearchBar }) => {

    const onClick = () => {
        console.log("Click sobre filtro!");
        setOpen(!open);
    };

    const onFilterSearch = (event) => {
        console.log("Click sobre simbolo de busqueda!");
        setShowFilterSearchBar(!showFilterSearchBar);        
    };

    return (
        <>
            {
                filter.collapsable ? ( 
                    <ListItemButton onClick={onClick}>
                        <Grid size={2} justifyContent="space-between">
                            <ListItemIcon>
                                <FilterAltIcon sx={{ color: stylesConfiguration.color }}/>
                            </ListItemIcon>
                        </Grid>
                        <Grid container size={10}>
                            <Grid size={10}>
                                <ListItemText
                                    disableTypography
                                    primary={
                                        <Typography sx={ stylesConfiguration }>
                                            { filter.title }
                                        </Typography>
                                    }
                                />
                            </Grid>
                            <Grid size={1}>
                                {
                                    searchable && (
                                            <ListItemIcon>
                                                <SearchIcon sx={{ color: stylesConfiguration.color }}
                                                            onClick={onFilterSearch}
                                                />
                                            </ListItemIcon>
                                    ) 
                                }
                            </Grid>
                        </Grid>
                        <Grid>
                            { open ? <ExpandLess /> : <ExpandMore />}
                        </Grid>
                    </ListItemButton>
                ) : (
                    <ListItem >
                        <ListItemIcon>
                            <FilterAltIcon sx={{ color: stylesConfiguration.color }} />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography sx={ stylesConfiguration }>
                                    { filter.title }
                                </Typography>
                            }
                        />
                         {
                            searchable && (
                                <ListItemButton onClick={onClick} sx={{padding: "0"}}>
                                    <ListItemIcon>
                                        <SearchIcon sx={{ color: stylesConfiguration.color }}/>
                                    </ListItemIcon>
                                </ListItemButton>
                            ) 
                        }
                    </ListItem>
                )
            }
        </>
    );


}