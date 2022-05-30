import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
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

const FilterForm = (props: any) => {
    const [id, setId] = React.useState('');

    const handleChange = (event: any) => {
        setId(event.target.value);
        props.handelFilter(event.target.value);

    };

    return props.setListInput().map((item: any) => {
        if (item)
            if (item.isSelect)
                return (
                    <FormControl sx={{ m: 1, width: 300 }}>
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
                )
        return null
    })
}

export default FilterForm;
