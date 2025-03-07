import { getFilterByType } from '../helpers/getFilterByType';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FilterTitle } from './FilterTitle';
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';


export const SingleFilter = ({ filter, finderData, onSearch }) => {
    
    const [open, setOpen] = useState(!filter.initialCollapseState);
    const stylesConfiguration = filter.stylesConfiguration || {};
    
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
          <CheckBoxIcon sx={{ color: stylesConfiguration.color }}/>
        ) : <CheckBoxOutlineBlankIcon sx={{ color: stylesConfiguration.color }}/>;
      
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
                                      sx={{ paddingRight : '20px'}} 
                                      disableTypography
                                      primary={
                                          <Typography sx={ { ...stylesConfiguration, overflowWrap: 'break-word' } }>
                                              { bucket.val }
                                          </Typography>
                                      }
                        />
                      </Grid>
                      <Grid size={1}>
                        <ListItemText id="filter_count"
                                      disableTypography
                                      primary={
                                        <Typography sx={ stylesConfiguration }>
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
                  <Grid item size={12} xs zeroMinWidth >
                    <ListItemText id="filter_value" 
                                  sx={{ paddingRight : '20px'}} 
                                  primary={
                                    <Typography sx={ { ...stylesConfiguration, overflowWrap: 'break-word' } }>
                                        { bucket.val }
                                    </Typography>
                                  }
                    />
                  </Grid>
                  <Grid size={1}>
                    <ListItemText id="filter_count"
                                  disableTypography
                                  primary={
                                    <Typography sx={ stylesConfiguration }>
                                        { bucket.count } 
                                    </Typography>
                                  }
                    />
                  </Grid>  
                </ListItemButton>
              </Grid>
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
          <Grid item spacing={2} 
                direction="column" 
                sx={ stylesConfiguration }
          >
              <FilterTitle key={ `filter_title_${ filter.id }` }
                          filter={ filter } 
                          open= { open }
                          setOpen={ setOpen }
                          stylesConfiguration={ stylesConfiguration }

              />
              { FiltersVals }
          </Grid>
        </>
    )
}