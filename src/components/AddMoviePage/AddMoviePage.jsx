import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MUI IMPORT
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

function AddMoviePage () {

    // DISPATCH
    const dispatch = useDispatch();

    // THESE ARE OUR LOCAL STATES
    const [title, setTitle] = useState('');
    const [URL, setURL] = useState('');
    const [description, setDescription] = useState('');
    const [genres, setGenres] = useState('');
    const movieInfo = {
        title: title,
        poster: URL,
        description: description,
        genre_id: genres
    }

    // ON CLICK THIS WILL SEND THE INFORMATION TO SAGA ON INDEX.JS
    const addNewMovie = () => {
        console.log('MOVIE DATA:', movieInfo);
        dispatch({
            type: 'SAGA_ADD_MOVIE',
            payload: movieInfo
        })
    }

    return (
        <div>
            <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Movie Title" variant="outlined" onChange ={e => setTitle(e.target.value)} />
                <TextField id="outlined-basic" label="Image URL" variant="outlined" onChange ={e => setURL(e.target.value)} />
                <TextField id="outlined-basic" label="Description" variant="outlined" onChange ={e => setDescription(e.target.value)} />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Genres</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genres}
                    label="Genres"
                    onChange ={e => setGenres(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Adventure</MenuItem>
                        <MenuItem value={2}>Animated</MenuItem>
                        <MenuItem value={3}>Biographical</MenuItem>
                        <MenuItem value={4}>Comedy</MenuItem>
                        <MenuItem value={5}>Disaster</MenuItem>
                        <MenuItem value={6}>Drama</MenuItem>
                        <MenuItem value={7}>Epic</MenuItem>
                        <MenuItem value={8}>Fantasy</MenuItem>
                        <MenuItem value={9}>Musical</MenuItem>
                        <MenuItem value={10}>Romantic</MenuItem>
                        <MenuItem value={11}>Science Fiction</MenuItem>
                        <MenuItem value={12}>Space-Opera</MenuItem>
                        <MenuItem value={13}>Superhero</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            <Button onClick={addNewMovie} variant="outlined">Add Movie</Button>
            </Box>
        </div>
    )
}

export default AddMoviePage;