import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

export const FilterTitle = ({ filter, setOpen, open, stylesConfiguration, searchable, setShowFilterSearchBar, showFilterSearchBar }) => {

    const onClick = () => {
        setOpen(!open);
        if(showFilterSearchBar) {
            setShowFilterSearchBar(!showFilterSearchBar);
        }
    };

    const onShowFilterSearchBar = (event) => {
        setShowFilterSearchBar(!showFilterSearchBar);        
    };

    return (
        <>
            {
                filter.collapsable ? ( 
                    <ListItemButton sx={{padding: "0"}}>
                        <Grid container className="collapsable_filter_button_grid" size={12} sx={{ ...stylesConfiguration }}>
                            <Grid size={1}>
                                <ListItemIcon onClick={onClick}>
                                    <FilterAltIcon sx={{ color: stylesConfiguration.color }}/>
                                </ListItemIcon>
                            </Grid>
                            <Grid container spacing={2} size={10} >    
                                <Grid size={10} >
                                    <ListItemText
                                        className="collapsable_filter_button_text"
                                        disableTypography
                                        primary={
                                            <Typography sx={ stylesConfiguration }>
                                                { filter.title }
                                            </Typography>
                                        }
                                        onClick={onClick}
                                    />
                                </Grid>
                                <Grid size={2} className="collapsable_filter_button_search_icon_grid">
                                    {
                                        <ListItemIcon >
                                            {
                                                searchable && (
                                                    <SearchIcon sx={{ color: stylesConfiguration.color }}
                                                                onClick={onShowFilterSearchBar}
                                                    />
                                                ) 
                                            }
                                        </ListItemIcon>
                                    }
                                </Grid>
                            </Grid>
                            <Grid size={1}>
                                { open ? <ExpandLess onClick={onClick} /> : <ExpandMore onClick={onClick} />}   
                            </Grid>
                        </Grid>
                    </ListItemButton>
                ) : (
                    <ListItem>
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
                                <ListItemButton onClick={onShowFilterSearchBar} sx={{padding: "0"}}>
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