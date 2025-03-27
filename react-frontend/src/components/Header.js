import { useState } from "react";
import { HeaderImage } from "./HeaderImage";
import { SearchBox } from "./SearchBox";
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import { Filters } from "./Filters";
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '@mui/material/Popover';

export const Header = ({ disposition, onSearch, finderData, isSmallScreen, filtersExist, findResponse }) => {
    
    const [header, setHeader] = useState(disposition.header);
    const stylesConfiguration = disposition.header.stylesConfiguration || {};
    const [anchorElFilters, setAnchorElFilters] = useState(null);
    const [anchorElSearchBox, setAnchorElSearchBox] = useState(null);
    const searchBarIcon = `data:image/png;base64,${disposition.searchBox.searchBarIcon}`;

    const onShowFilters = (event) => {
      setAnchorElFilters(event.currentTarget);
    };
    
    const onShowSearchBox = (event) => {
      setAnchorElSearchBox(event.currentTarget);
    };
  
    const handleCloseFilters = () => {
      setAnchorElFilters(null);
    };
    
    const handleCloseSearchBox = () => {
      setAnchorElSearchBox(null);
    };
  
    const openFilters = Boolean(anchorElFilters);
    const openSearchBox = Boolean(anchorElSearchBox);

    return (
        <header style={stylesConfiguration}>
            <Grid className="header_grid" container size={4} spacing={2} direction={{ xs: 'column', md: 'row' }} >
                {   
                    Object.keys(header).map(key => {
                        // Perform actions based on the header key object name
                        if (key === "headerTitle") {
                            return <title key={key}>{header[key]}</title>;
                        } else if (key.includes("headerImg") && header[key] !== null) {
                            return (
                                <Grid key={`grid_container_${key}`} container direction={{ xs: 'row'}}>
                                    {
                                        isSmallScreen && key.includes("Center") && (
                                            <Grid className="filter_list_icon_grid" size={{ xs: 2 }}>
                                                <Button onClick={onShowFilters}>
                                                    <FilterListIcon sx={{ color: stylesConfiguration.color }}/>
                                                </Button>
                                                <Popover id={"popover-filters"}
                                                        open={openFilters}
                                                        anchorEl={anchorElFilters}
                                                        onClose={handleCloseFilters}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        }}
                                                        disableScrollLock={true} 
                                                >
                                                    {filtersExist && (
                                                        <Grid size={12}>
                                                            <Filters finderData={finderData} findResponse={findResponse} onSearch={onSearch} />
                                                        </Grid>
                                                    )}
                                                </Popover>
                                            </Grid>
                                        ) 
                                    }
                                    <Grid id={`grid_${key}`}
                                        className="header_image_grid"
                                        container
                                        key={key}
                                        size={{ xs: isSmallScreen && key.includes("Center") ? 8 : 12 }}
                                        sx={{ display: isSmallScreen && key.includes("Right") ? 'none' : 'flex' }}
                                    >
                                        <HeaderImage
                                            headerName={key}  
                                            headerImage={header[key]} 
                                        />
                                    </Grid>
                                    {
                                        isSmallScreen && key.includes("Center") && (
                                            <Grid className="search_icon_grid" size={{xs: 2}} >
                                                <Button onClick={onShowSearchBox}>
                                                    <img src={searchBarIcon} alt='' />
                                                </Button>
                                                <Popover id={`popover-searchbox`}
                                                        open={openSearchBox}
                                                        anchorEl={anchorElSearchBox}
                                                        onClose={handleCloseSearchBox}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'rigth',
                                                        }}
                                                        disableScrollLock={true} 
                                                >
                                                    <SearchBox searchBox={disposition.searchBox}
                                                            onSearch={onSearch}
                                                            finderData={finderData}
                                                    />
                                                </Popover>   
                                            </Grid>
                                        )
                                    }
                                </Grid>
                            );      
                        } else if (header[key] === null){
                            return (
                                isSmallScreen && key.includes("Center") && (
                                    <Grid container direction={{ xs: 'row'}}>
                                        <Grid  className="filter_list_icon_grid" size={{ xs: 2 }} >
                                            <Button onClick={onShowFilters}>
                                                <FilterListIcon sx={{ color: stylesConfiguration.color }}/>
                                            </Button>
                                            <Popover id={"popover-filters"}
                                                    open={openFilters}
                                                    anchorEl={anchorElFilters}
                                                    onClose={handleCloseFilters}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                    }}
                                                    disableScrollLock={true} 
                                            >
                                                {filtersExist && (
                                                    <Grid size={12}>
                                                        <Filters finderData={finderData} findResponse={findResponse} onSearch={onSearch} />
                                                    </Grid>
                                                )}
                                            </Popover>
                                        </Grid>
                                        <Grid className="search_icon_grid" size={{xs: 10}} >
                                            <Button onClick={onShowSearchBox}>
                                                <img src={searchBarIcon} alt='' />
                                            </Button>
                                            <Popover id={`popover-searchbox`}
                                                    open={openSearchBox}
                                                    anchorEl={anchorElSearchBox}
                                                    onClose={handleCloseSearchBox}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'rigth',
                                                    }}
                                                    disableScrollLock={true} 
                                            >
                                                <SearchBox searchBox={disposition.searchBox}
                                                        onSearch={onSearch}
                                                        finderData={finderData}
                                                />
                                            </Popover>   
                                        </Grid>
                                    </Grid>
                                ) 
                            )
                        }
                        return null;
                    })
                }
                { 
                    !isSmallScreen && 
                        (
                            "searchBox" in disposition &&
                            (
                                <Grid className="searchbox_grid" container size={3} >
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