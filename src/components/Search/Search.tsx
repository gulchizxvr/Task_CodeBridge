import {TextField, Button } from '@mui/material';
import React, {FC, useState} from 'react';
import { useSearchParams } from 'react-router-dom';

const Search:FC = () => {


    const [searching, setSearching] = useState("");
    const [query, setQuery] = useSearchParams();


    const changeValue = (value:any) => {
        const {target} = value
        setSearching(target.value)
    }

    const submit = () => {
        if (searching) {
            query.set('contains',searching)
            setQuery(query)
        }
        else{
            query.delete('contains')
            setQuery('')
        }
    }




    return (
        <div>
            <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue=""
                placeholder='search'
                onChange={changeValue}
            />
            <Button onClick={submit}>search</Button>
        </div>
    );
};

export {Search}