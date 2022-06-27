import React, { Children } from 'react'
import BooksImage from '../Assets/Images/books.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function DemoCard(props) {
    return (
        <Card sx={{ maxWidth: '25%' }} style={{ margin: '1%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={BooksImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {props.id}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default DemoCard


//props:- props are the way to pass data from parent to child and props
// props.childeren :- these are the element we kept inside opening and closing tags of the compoenent inside the parent
// to pass data from child to parent we pass a function as a prop and that function can recieve the value as a parameter of that function