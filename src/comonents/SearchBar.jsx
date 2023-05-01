import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // if have search term
        if (search) {
            navigate(`/search/${search}`)
            setSearch("")
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                onChange={(e) => setSearch(e.target.value)}

            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;