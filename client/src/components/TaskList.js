import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography} from '@mui/material'



export default function TaskList() {

    const [tasks, setTasks] = useState([])

    const loadTasks = async () =>{
        const response = await fetch('http://localhost:3000/tasks')
        const data= await response.json()
        setTasks(data)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <>
            <h1>Task List</h1>
            {
                tasks.map(task => (
                    <Card style={
                        {
                            marginBottom: ".7rem",
                            backgroundColor: "#1e272e"
                        }
                    }>
                        <CardContent style={
                            {
                                display: "flex",
                                justifyContent: "space-between",
                            }
                        }>
                            <div>
                            <Typography>
                                {task.title}
                            </Typography>
                            <Typography>
                                {task.description}
                            </Typography>
                             </div>
                            
                            <div style={
                                {
                                    color: 'black'
                                }
                            }>
                            <Button  variant='contained' color='inherit' onClick={()=> console.log('edit')}>
                                Edit
                            </Button >
                            <Button variant='contained' color='warning' onClick={()=> console.log('delete')}
                                style={{
                                    marginLeft: ".5rem"
                                }}
                            >
                                Delete
                            </Button>
                            </div>

                            
                        </CardContent>
                    </Card>
                ))
            }
        </>

    )
}
