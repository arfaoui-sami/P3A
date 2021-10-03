import React from 'react'
import jwt from 'jsonwebtoken';
import './style.css'
import { useHistory } from 'react-router-dom'
import { Alert, Button } from 'react-bootstrap'

const Tasks = ({ status, name, town, type, id, lat, lng }) => {
    const cryptedId = jwt.sign({ id, name, town, type, status, lat, lng }, 'topSecret')
    const history = useHistory();
    console.log('rendering')

    return (
        <div style={{
            margin: '5px',


        }

        }>
            < Alert onClick={() => { console.log('clicked',); history.push(`/tasks/details/${cryptedId}}`) }} className="Alert" variant={status === 'onDemand' ? "warning" : status === 'Done' ? "dark" : "success"} >

                <Alert.Heading>Type : {type}</Alert.Heading>
                <hr />
                <p>

                    <b>Pour Mr/Mde : </b> {name}

                    <br />
                    <b>Ville : </b> {town}
                    <br />

                </p>


            </Alert >
        </div >
    )
}

export default Tasks
//!----------------------------------------------------------------------------------


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Map from '../components/Maps'

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     },
// });

// export default function Tasks() {
//     const classes = useStyles();
//     const lat = 36.2;
//     const lng = 10;
//     return (
//         <div style={{ margin: '10px' }}>
//             <Card className={classes.root}>
//                 <CardActionArea>
//                     <CardMedia
//                         className={classes.media}>
//                         <Map width={900} height={250} lat={lat} lng={lng} />
//                     </CardMedia>

//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             Lizard
//                         </Typography>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                             across all continents except Antarctica
//                         </Typography>
//                     </CardContent>
//                 </CardActionArea>
//                 <CardActions>
//                     <Button size="small" color="primary">
//                         Share
//                     </Button>
//                     <Button size="small" color="primary">
//                         Learn More
//                     </Button>
//                 </CardActions>
//             </Card>
//         </div>
//     );
// }