import {TextField, Button, InputAdornment, createMuiTheme, createTheme} from '@mui/material';
import React, {FC, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {AccessAlarm, ThreeDRotation} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';


const Search: FC = () => {


    const [searching, setSearching] = useState("");
    const [query, setQuery] = useSearchParams();


    const changeValue = (value: any) => {
        const {target} = value
        setSearching(target.value)
    }

    const submit = () => {
        if (searching) {
            query.set('contains', searching)
            setQuery(query)
        } else {
            query.delete('contains')
            setQuery('')
        }
    }




    return (
        <div className="input_text">


            <h3 style={{marginBottom:"5px", fontFamily:"Montserrat"}}>Filter by keywords</h3>


            <TextField
                InputProps={{
                    style:{fontFamily:"Montserrat",fontSize:"16px", width:"600px", height:"50px"},
                    startAdornment: (
                        <InputAdornment position={"start"}>
                            <SearchIcon/>
                        </InputAdornment>
                    )
                }}
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue=""
                placeholder='Write....'
                onChange={changeValue}
            />
            {/*<Button onClick={submit}>search</Button>*/}
        </div>
    );
};

export {Search}