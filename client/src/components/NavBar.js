import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'

export default function NavBar()  {

    const navigate = useNavigate();

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variante='h6' sx={{flexGrow: 1}}>
                            <Link to="/" style={{textDecoration:"none", color:"#eee"}}>
                            PERN Stack 
                            </Link>
                        </Typography>
                        <Button variant='contained' onClick={() => navigate("/tasks/new")} >
                            New Task
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}


