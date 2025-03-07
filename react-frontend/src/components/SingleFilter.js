import { getFilterByType } from '../helpers/getFilterByType';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FilterTitle } from './FilterTitle';
import { useState } from 'react';
import Grid from '@mui/material/Grid2'; 


export const SingleFilter = ({ filter, finderData, onSearch }) => {
    
    const [open, setOpen] = useState(!filter.initialCollapseState);
    
    const filterField = getFilterByType( filter ).filterField;
    const inmeta = sessionStorage.getItem("inmeta");

    const onFilter = ({ target }) => {

        let newVal = target.dataset.value;
        let inmeta = sessionStorage.getItem("inmeta");

        if( inmeta.includes( filterField + "!" + newVal ) ){
            inmeta = inmeta.replace( filterField + "!" + newVal , "" );
        } else {
            inmeta += filterField + "!" + newVal + "<;>";
        }
        
        finderData.inmeta = inmeta.replace( "<;><;>" , "<;>" ).trim();
        finderData.pageNum = 1;
        finderData.start = 0;
        onSearch( finderData );
    };
    const buckets = filter?.valueFilter?.[0]?.buckets ?? [];
    const FiltersVals = buckets.map((bucket, index) => {
        const deleteFilter = inmeta.includes( filterField + "!" + bucket.val ) ? (
          <CheckBoxIcon />
        ) : <CheckBoxOutlineBlankIcon />;
      
        return (
          filter.collapsable ? (
            <Collapse key={`items_list_${index}`} in={open} timeout="auto" unmountOnExit>
              <List key={index} component="div" disablePadding>
                <Grid container alignContent={"center"}>
                  <ListItemButton data-value={ bucket.val } onClick={ onFilter }  >
                      <Grid size={2}>
                        <ListItemIcon>
                          { deleteFilter }
                        </ListItemIcon>
                      </Grid>
                      <Grid item size={12} xs zeroMinWidth >
                        <ListItemText id="filter_value" 
                                      primary={ bucket.val } 
                                      style={{overflowWrap: 'break-word'}} 
                                      sx={{ paddingRight : '20px'}} />
                      </Grid>
                      <Grid size={1}>
                        <ListItemText id="filter_count" primary={ bucket.count } />
                      </Grid>
                  </ListItemButton>
                </Grid>
              </List>
            </Collapse>
          ) : (
            <List key={`items_list_${index}`} component="div" disablePadding>
              <ListItemButton key={index} sx={{ pl: 4 }} data-value={ bucket.val } onClick={ onFilter }  >
                <ListItemIcon>
                  { deleteFilter }
                </ListItemIcon>
                <ListItemText id="filter_value" primary={ bucket.val } />
                <ListItemText id="filter_count" primary={ bucket.count } />
              </ListItemButton>
            </List>
          )
          // <div value={ filterField } key={ index }>
          //   { deleteFilter }
          //   <a>
          //     <span id="filter_value" onClick={ onFilter }>
          //       { bucket.val }
          //     </span>
          //   </a>
          //   <span id="filter_count" >
          //     { bucket.count }
          //   </span>
          // </div>
        );
    });
    return (
        <>
          <Grid item spacing={2} direction="column">
              <FilterTitle key={ `filter_title_${ filter.id }` }
                          filter={ filter } 
                          open= { open }
                          setOpen={ setOpen }

              />
            { FiltersVals }
          </Grid>
        </>
    )
}