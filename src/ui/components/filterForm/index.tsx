import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const FilterForm = (props: any) => {
    // state pour la valeur du select
    const [id, setId] = React.useState('');
    // state pour les valeur du select multiple
    const [valueMultiple, setValueMultiple] = React.useState([]);

    // function pour actualiser la valeur du multi select
    const handleChangeMultiple = (event: any) => {
        const {
            target: { value },
        } = event;
        setValueMultiple(
            typeof value === 'string' ? value.split(',') : value,
        );

        setValueMultiple(event.target.value);
    }

    // function pour actualiser la valeur du select list
    const handleChange = (event: any) => {
        setId(event.target.value);
        // exécuter la function handelFilter du props pour exécuter l'api du filter par user
        props.handelFilter(event.target.value);

    };

    // return form selon la list d'input qu'est dynamique selon la list
    return props.setListInput().map((item: any) => {
        if (item)
            // pour la select list
            if (item.isSelect)
                return (
                    <Grid md={6} sm={12} xs={12}>
                        <FormControl sx={{ m: 1, width: 250 }}>
                            <InputLabel id="demo-select-name-label">{item.label}</InputLabel>
                            <Select
                                labelId="demo-select-name-label"
                                id="demo-select-name"
                                value={id}
                                onChange={handleChange}
                                input={<OutlinedInput label={item.label} />}
                                MenuProps={MenuProps}
                            >
                                <MenuItem value="all" >
                                    .....All.....
                                </MenuItem>
                                {Object.values(item.list).map((element: any) => (
                                    <MenuItem key={element.id} value={element.id} >
                                        {element.firstName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                )
            // pour la select multiple
            else if (item.isAutoComplete)
                return (
                    <Grid md={6} sm={12} xs={12}>
                        <FormControl sx={{ m: 1, width: 250 }}>
                            <InputLabel id="demo-multiple-name-label">{item.label}</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={valueMultiple}
                                onChange={handleChangeMultiple}
                                input={<OutlinedInput label={item.label} />}
                                MenuProps={MenuProps}
                            >
                                {Object.values(item.list).map((element: any) => (
                                    <MenuItem
                                        key={element}
                                        value={element}
                                    >
                                        {element}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                )
        return null
    })
}

export default FilterForm;
