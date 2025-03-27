import Grid from '@mui/material/Grid2';
import { FilterTitle } from './FilterTitle';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { getFilterByType } from '../helpers/getFilterByType';
import { Autocomplete, TextField, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const SingleFilter = ({ filter, finderData, onSearch }) => {
  
    const buckets = filter?.valueFilter?.[0]?.buckets ?? [];

    const [open, setOpen] = useState(!filter.initialCollapseState);
    const [inmeta, setInmeta] = useState( finderData.inmeta );
    const [filterList, setFilterList] = useState(buckets);
    const [isFiltered, setIsFiltered] = useState(false);
    const [showFilterSearchBar, setShowFilterSearchBar] = useState(false);
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [limit, setLimit] = useState( 5 );

    const stylesConfiguration = filter.stylesConfiguration || {};
    const filterField = getFilterByType( filter ).filterField;
    const searchable = getFilterByType( filter )?.searchable?? false;

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
        setFilterList( [selectedFilter] );
        setIsFiltered( true );
    };

    const onRemoveFilter = ({ currentTarget }) => {
        console.log("Removing filter ", currentTarget.dataset.value);
        updateFinderData( currentTarget.dataset.value );
        onSearch( finderData );
        setIsFiltered( false );
    }

    const onAutocompleteChange = (event, selectedOption) => {
      onFilterSearchInputChange({ target: { value: selectedOption } });
      onFilter({ currentTarget: { dataset: { value: selectedOption } } });
    };

    const onFilterSearchInputChange = ({ target }) => {
        setInputValue(target.value);  
    };

    useEffect(() => {
      setIsFiltered( false );
      setInmeta("");
    }, [ finderData.query ]);

    useEffect(() => {
      if( !isFiltered ) {
        setFilterList(buckets);
      }
      setOptions([]);
    }, [ filter ]);

    useEffect(() => {
      const filterValues = filterList.map(bucket => bucket.val); // Extract filter values once
  
      if (showFilterSearchBar) {
          setOptions(filterValues);
          if (!open) {
              setOpen(true);
          }
      } else if (open && !showFilterSearchBar) {
          setOpen(open);
      }
  }, [showFilterSearchBar, filterList, open]);

    
    const FiltersVals = filterList.map((bucket, index) => {
        const deleteFilter = inmeta.includes( filterField + "!" + bucket.val ) ? 
                              (
                                <CloseIcon fontSize='small' 
                                          color='error' 
                                />
                              ) 
                              : "";
      
        return (
          filter.collapsable ? (
            <Collapse key={`item_list_${index}`} 
                      id={`item_list_${index}`} 
                      in={open} 
                      timeout="auto" 
                      unmountOnExit
            >
              <List key={index} 
                    component="div" 
                    disablePadding
              >
                <Grid container size={12} direction={{ xs: 'row' }}>
                    {
                      isFiltered && (
                        <Grid container size={1} direction={{ xs: 'row' }}>
                          <ListItemButton data-value={ bucket.val } onClick={ onRemoveFilter }  >
                            <Grid className='delete_filter_icon_grid' size={12}>
                              { deleteFilter }
                            </Grid>
                          </ListItemButton>
                        </Grid>
                      )   
                    }
                    <Grid size={ !isFiltered ? 12 : 11 }>
                      <ListItemButton data-value={ bucket.val } onClick={ onFilter }  >
                          <Grid size={{ xs: 11}} >
                            <ListItemText id={`filter_value_${index}`} 
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
                                          className='filter_count_text'
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
                </Grid>
              </List>
            </Collapse>
          ) : (
            <List key={`items_list_${index}`} 
                  component="div" 
                  disablePadding
            >
              <Grid container alignContent={"center"}>
                <ListItemButton key={index} sx={{ pl: 4 }} data-value={ bucket.val } onClick={ onFilter }  >
                  <Grid size={2}>
                    <ListItemIcon>
                      { deleteFilter }
                    </ListItemIcon>
                  </Grid>
                  <Grid size={12} zeroMinWidth >
                    <ListItemText id="filter_value" 
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
            <FilterTitle key={ `filter_title_${ filter.id }` }
                        filter={ filter } 
                        open= { open }
                        setOpen={ setOpen }
                        stylesConfiguration={ stylesConfiguration }
                        searchable={ searchable }
                        setShowFilterSearchBar={ setShowFilterSearchBar }
                        showFilterSearchBar={ showFilterSearchBar }
            />
          {
            showFilterSearchBar && (
              <Grid >
                  <Autocomplete
                    disableClearable
                    options={ options }
                    freeSolo
                    value={ inputValue }
                    onChange={ onAutocompleteChange }
                    slotProps={{
                        listbox: {
                            component: 'ul', // Customize the listbox component
                            sx: {
                                margin: 0,
                                padding: 0,
                                borderRadius: '0',
                            },
                        },
                    }}
                    renderOption={(props, option, { selected }) => {
                        const { key, ...optionProps } = props;
                        return (
                          <li style={{ padding : '0',
                                      margin: '1',
                                      borderRadius: '0'
                                    }}  
                              key={key} 
                              {...optionProps}
                          >
                            <TextField size="small"
                                      value={option}
                                      style={{ width: '100%'}}
                                      slotProps={{
                                          ...props,
                                          input: {
                                              sx: { backgroundColor: 'white', 
                                                    borderRadius: '0',
                                                    '&:hover': {
                                                      backgroundColor: '#dedfe0', // Add hover effect
                                                    },
                                                  }                                                        },
                                      }} 
                            />
                          </li>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            size="small"
                            placeholder={ inputValue === "" ? "Ingrese el filtro a buscar" : inputValue }
                            name="searchFilter" 
                            id="searchFilter"
                            onChange={ onFilterSearchInputChange }
                        />
                    )}
                />
              </Grid>
            )
          }
          { FiltersVals.slice(0, limit) }
          { 
            FiltersVals.length > (limit - 1) && open && (
              <Grid container direction={"row"} spacing={0}>  
                {
                  limit < FiltersVals.length && (
                    <ListItemButton onClick={ () => setLimit( limit + 5 ) }
                                    sx={{
                                      '&:hover': {
                                        textDecoration: 'underline',
                                        backgroundColor: '#dedfe0'
                                      }}
                                    }                    
                    >
                      <ListItemText primary={
                                      <Typography
                                        className='filter_count_text'
                                        sx={{
                                          fontSize: stylesConfiguration.fontSize,
                                          fontFamily: stylesConfiguration.fontFamily,
                                          fontWeight: stylesConfiguration.fontWeight,
                                          fontStyle: stylesConfiguration.fontStyle,
                                        }}
                                      >
                                          Ver más +
                                      </Typography>
                                    } 
                      />
                    </ListItemButton>
                  )
                }         
                {
                  limit > 5 && (
                    <ListItemButton onClick={ () => setLimit( limit - 5 ) } 
                                    sx={{
                                          '&:hover': {
                                            textDecoration: 'underline',
                                            backgroundColor: '#dedfe0'
                                          }}
                                        }         
                    >
                      <ListItemText primary={
                                      <Typography 
                                        className='filter_count_text'
                                        sx={{
                                          fontSize: stylesConfiguration.fontSize,
                                          fontFamily: stylesConfiguration.fontFamily,
                                          fontWeight: stylesConfiguration.fontWeight,
                                          fontStyle: stylesConfiguration.fontStyle
                                        }}
                                      >
                                          Ver menos -
                                      </Typography>
                                    } 
                      />
                    </ListItemButton>
                  )
                }
              </Grid>
            )
          }
        </>
    )
}