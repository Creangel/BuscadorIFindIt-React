import { useState } from "react";
import { HeaderImage } from "./HeaderImage";
import { SearchBox } from "./SearchBox";
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import { Filters } from "./Filters";
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';

export const Header = ({ disposition, onSearch, finderData, isSmallScreen, handleToggleFilters, filtersOpen, filtersExist, findResponse }) => {
    
    const [header, setHeader] = useState(disposition.header);
    const stylesConfiguration = disposition.header.stylesConfiguration || {};
    const [anchorEl, setAnchorEl] = useState(null);
    const searchBarIcon = `data:image/png;base64,${disposition.searchBox.searchBarIcon}`;

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <header style={stylesConfiguration}>
            <Grid id="header_grid" 
                container
                size={4}
                spacing={2}   
                direction={{ xs: 'column', md: 'row' }} 
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: '100%', // Ensure the grid takes the full height of the header
                    width: '100%', // Ensure the grid takes the full width of the header
                    paddingBottom: '5px' // Ensure the grid takes the full height of the header
                }}>
                {   
                    Object.keys(header).map(key => {
                        // Perform actions based on the header key object name
                        if (key === "headerTitle") {
                            return <title key={key}>{header[key]}</title>;
                        } else if (key.includes("headerImg") && header[key] !== null) {
                            return (
                                <Grid id={`grid_headerImg${key}`}
                                      container
                                      key={key} 
                                      xs={5} 
                                      md={4} 
                                      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px'}}>
                                    <HeaderImage 
                                        headerName={key}  
                                        headerImage={header[key]} 
                                    />
                                </Grid>
                            );      
                        }
                        return null;
                    })
                }
                { isSmallScreen ? 
                    (
                        <Grid container size={10}>
                            <Grid size={{ xs: 2 }} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}} >
                                <Button onClick={handleClick}>
                                    <FilterListIcon sx={{ color: stylesConfiguration.color }}/>
                                </Button>
                                <Popover id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                >
                                    {filtersExist && (
                                        <Filters finderData={finderData} findResponse={findResponse} onSearch={onSearch} />
                                    )}
                                </Popover>
                            </Grid>
                            <Grid size={{xs: 10}} sx={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                                <Button onClick={handleClick}>
                                    <img src={searchBarIcon} alt='' />
                                </Button>
                                <Popover id={`${id}-search`}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'rigth',
                                        }}
                                >
                                    Hola
                                </Popover>   
                            </Grid>
                        </Grid>
                    ) : (
                        "searchBox" in disposition &&
                        (
                            <Grid container size={3} xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <SearchBox searchBox={disposition.searchBox}
                                    onSearch={onSearch}
                                    finderData={finderData}
                                />
                            </Grid>    
                        )
                    )
                }
            </Grid>
        </header>
    );
};