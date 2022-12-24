import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';

const Buttonx = () => {
    return (
        <>
            <h1>Button</h1>
            <Button>click me</Button>

            <Button color='secondary'>secondary</Button>
            <Button href='https://www.google.com'>link</Button>
            <Button disabled>Disabled</Button>
            <Button variant='contained' color='secondary' size='medium'>variant-contained</Button>
            <h1>size</h1>
            <Button size='small' color='secondary' variant='contained'>click me</Button>
            <Button size='medium' color='secondary' variant='contained'>click me</Button>
            <Button size='large' color='warning' variant='contained'>click me</Button>
            <h1>outlined</h1>
            <Button size='small' variant='outlined'>click me</Button>
            <Button size='medium' variant='outlined'>click me</Button>
            <Button size='large' variant='outlined' color='warning'>click me</Button>
            <h1>Button with icon</h1>
            <Button variant='outlined' color='warning' endIcon={<DeleteIcon />}>click me</Button>
            <Button variant='outlined' startIcon={<DeleteIcon />}>click me</Button>
            <IconButton color='warning'>
                <DeleteIcon />
                <DeleteIcon color='secondary' />
            </IconButton>
            <Button variant='contained' color='secondary' size='medium' style={{ backgroundColor: 'green' }}>custom color</Button>
            <h1>Button with click Event</h1>
            <Button variant='contained' color='secondary' size='medium' style={{ backgroundColor: 'green' }} onClick={() => { console.log("Button Clicked") }}>Event click</Button>
            <h1>Button Group</h1>
            <ButtonGroup>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <h1>Button Group vertical</h1>
            <ButtonGroup orientation='vertical' color='warning' variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <h1>Floating Action Button</h1>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <EditIcon />
            </Fab>
            <Fab variant="extended">
                <NavigationIcon sx={{ mr: 1 }} > Navigation</NavigationIcon>
                Navigate
            </Fab>
            <Fab>
                <FavoriteIcon />
            </Fab>
            <h1>checkBox</h1>
            <Checkbox defaultChecked />
            <Checkbox checked={true} color='warning' />
            <Checkbox disabled />
            <Checkbox disabled checked />
            <FormControlLabel control={<Checkbox defaultChecked />} label="India" />

            <h1>Ratting</h1>
            <Rating
                name="simple-controlled"
            />

            <h1>Slidder</h1>
            <Slider aria-label="Volume" />
            <h1>Box</h1>
            <Box sx={{ height: 300 }}>
                <Slider aria-label="Volume" color='warning' orientation='vertical' />
            </Box>

            <h1>Switch</h1>
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'grey', justifyContent: 'space-between' }}>
                <Switch defaultChecked />
                <Switch />
                <FormControlLabel control={<Switch />} label='Dark' />
                <Switch disabled defaultChecked />
                <Switch disabled />

            </div>

            <h1>TextField</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </>
    );
}


export default Buttonx;