import {
    Box,
    Stack,
    TextField,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActionArea
} from "@mui/material";
import grosdomacsamere from "../../assets/mcdonald-logo.jpg"


const Restaurant = (props) => {
    return (
        <Card sx={{width: 200, m: 2, backgroundColor: "transparent"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={grosdomacsamere}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography color={"secondary.contrastText"} gutterBottom variant="h5" component="div">
                        {props.data.name}
                    </Typography>
                    <Typography color={"secondary.contrastText"} variant="body2">
                        {props.data.description}
                    </Typography>
                    <Typography color={"secondary.contrastText"} variant="body2">
                        {props.data.type}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default Restaurant
