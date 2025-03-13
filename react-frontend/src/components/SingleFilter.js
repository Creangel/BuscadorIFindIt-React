import { getFilterByType } from '../helpers/getFilterByType';
import CloseIcon from '@mui/icons-material/Close';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FilterTitle } from './FilterTitle';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export const SingleFilter = ({ filter, finderData, onSearch }) => {
  
    const buckets = filter?.valueFilter?.[0]?.buckets ?? [];

    const [open, setOpen] = useState(!filter.initialCollapseState);
    const [inmeta, setInmeta] = useState( finderData.inmeta );
    const [filterList, setFilterList] = useState(buckets);
    const [isFiltered, setIsFiltered] = useState(false);

    const stylesConfiguration = filter.stylesConfiguration || {};
    const filterField = getFilterByType( filter ).filterField;

    const updateFinderData = (newVal) => {
        let inmeta = finderData.inmeta;
        if( inmeta.includes( filterField + "!" + newVal ) ){
            inmeta = inmeta.replace( filterField + "!" + newVal , "" );
        } else {
            inmeta += filterField + "!" + newVal + "<;>";
        }
        
        finderData.inmeta = inmeta.replace( "<;><;>" , "<;>" ).trim();
        finderData.pageNum = 1;
        finderData.start = 0;
        setInmeta( finderData.inmeta );
    };

    const onFilter = ({ currentTarget }) => {
        if( isFiltered ) return;
        updateFinderData( currentTarget.dataset.value );
        onSearch( finderData );
        let selectedFilter = buckets.filter( (bucket) => bucket.val === currentTarget.dataset.value )[0];
        setFilterList( [selectedFilter] )
        setIsFiltered( true );
    };

    const onRemoveFilter = ({ currentTarget }) => {
        console.log("Removing filter ", currentTarget.dataset.value);
        updateFinderData( currentTarget.dataset.value );
        onSearch( finderData );
        setIsFiltered( false );
    }

    useEffect(() => {
      setIsFiltered( false );
      setInmeta("");
    }, [ finderData.query ]);

    useEffect(() => {
      if( !isFiltered ) 
      setFilterList(buckets);
    }, [ buckets ]);

    
    const FiltersVals = filterList.map((bucket, index) => {
        const deleteFilter = inmeta.includes( filterField + "!" + bucket.val ) ? (
          <CloseIcon fontSize='small' 
                     color='error' 
          />
        ) : "";
      
        return (
          filter.collapsable ? (
            <Collapse key={`item_list_${index}`} id={`item_list_${index}`} in={open} timeout="auto" unmountOnExit>
              <List key={index} component="div" disablePadding>
                <Grid container size={12}>
                    <Grid container size={2}>
                      <ListItemButton data-value={ bucket.val } onClick={ onRemoveFilter }  >
                          <ListItemIcon >
                            { deleteFilter }
                          </ListItemIcon>
                      </ListItemButton  >
                    </Grid>
                    <ListItemButton data-value={ bucket.val } onClick={ onFilter }  >
                        <Grid size={12} >
                          <ListItemText id={`filter_value_${index}`} 
                                        sx={{ paddingRight : '20px'}} 
                                        disableTypography
                                        primary={
                                            <Typography sx={{ 
                                              fontSize: stylesConfiguration.fontSize,
                                              fontFamily: stylesConfiguration.fontFamily,
                                              fontWeight: stylesConfiguration.fontWeight,
                                              fontStyle: stylesConfiguration.fontStyle, 
                                              overflowWrap: 'break-word' 
                                              }}
                                            >
                                                { bucket.val }
                                            </Typography>
                                        }
                          />
                        </Grid>
                        <Grid size={1}>
                          <ListItemText id="filter_count"
                                        disableTypography
                                        primary={
                                          <Typography sx={{
                                            fontSize: stylesConfiguration.fontSize,
                                            fontFamily: stylesConfiguration.fontFamily,
                                            fontWeight: stylesConfiguration.fontWeight,
                                            fontStyle: stylesConfiguration.fontStyle, 
                                          }}>
                                              { bucket.count } 
                                          </Typography>
                                        }
                          />
                        </Grid>
                    </ListItemButton>
                </Grid>
              </List>
            </Collapse>
          ) : (
            <List key={`items_list_${index}`} component="div" disablePadding>
              <Grid container alignContent={"center"}>
                <ListItemButton key={index} sx={{ pl: 4 }} data-value={ bucket.val } onClick={ onFilter }  >
                  <Grid size={2}>
                    <ListItemIcon>
                      { deleteFilter }
                    </ListItemIcon>
                  </Grid>
                  <Grid size={12} xs zeroMinWidth >
                    <ListItemText id="filter_value" 
                                  sx={{ paddingRight : '20px'}} 
                                  disableTypography
                                  primary={
                                    <Typography sx={{                                             
                                      fontSize: stylesConfiguration.fontSize,
                                      fontFamily: stylesConfiguration.fontFamily,
                                      fontWeight: stylesConfiguration.fontWeight,
                                      fontStyle: stylesConfiguration.fontStyle, 
                                      overflowWrap: 'break-word' }}
                                    >
                                        { bucket.val }
                                    </Typography>
                                  }
                    />
                  </Grid>
                  <Grid size={1}>
                    <ListItemText id="filter_count"
                                  disableTypography
                                  primary={
                                    <Typography sx={{
                                      fontSize: stylesConfiguration.fontSize,
                                      fontFamily: stylesConfiguration.fontFamily,
                                      fontWeight: stylesConfiguration.fontWeight,
                                      fontStyle: stylesConfiguration.fontStyle, 
                                      }}
                                    >
                                        { bucket.count } 
                                    </Typography>
                                  }
                    />
                  </Grid>  
                </ListItemButton>
              </Grid>
            </List>
          )
        );
    });
    return (
        <>
          <Grid sx={stylesConfiguration}>
              <FilterTitle key={ `filter_title_${ filter.id }` }
                          filter={ filter } 
                          open= { open }
                          setOpen={ setOpen }
                          stylesConfiguration={ stylesConfiguration }

              />
          </Grid>
          { FiltersVals }
        </>
    )
}