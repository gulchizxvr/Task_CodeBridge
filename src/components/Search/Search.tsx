import {TextField, InputAdornment} from '@mui/material';
import React, {FC, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import "./search.style.scss"


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


    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submit()
        }
    }


    return (
        <div className="inputText">

            <h3 style={{marginBottom: "5px"}}>Filter by keywords</h3>

            <TextField
                InputProps={{
                    style:{width:"600px", height:"50px"},
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
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export {Search}