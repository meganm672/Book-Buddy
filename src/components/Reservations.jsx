//this route returns a list of books the current user has checked out.

import { useGetBookReservationsQuery, useReturnBookMutation} from "../redux/api";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import {Link as RouterLink} from "react-router-dom"
const Reservations = () => {
  const {data, isLoading, error} = useGetBookReservationsQuery();
  const [returnBook] = useReturnBookMutation();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
}

  if (error || !data) {
      return <Alert severity="error">Failed to load your book reservations. Try again later.</Alert>;
  }

  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.reservation.length > 0 ? data.reservation.map(reservation => (
              <Grid key={reservation.id} item xs={3}>
                  <Card>
                      <CardContent>
                          <Typography variant="h6" component="div">
                              {reservation.title}
                          </Typography>
                          <Typography variant="subtitle1" component="div">
                              {reservation.author}
                          </Typography>
                          {reservation.coverimage && <img width={120} src={reservation.coverimage} />}
                      </CardContent>
                      <CardActions>
                          <Button variant="contained" onClick={() => returnBook(reservation.id)}>Return</Button>
                      </CardActions>
                  </Card>
              </Grid>
          )): (
              <Grid container alignItems="center" justifyContent="center" sx={{marginTop:4}}>
                  <Typography variant="body2">No books checked out! <Link component={RouterLink} to="/books">View All Books.</Link></Typography>
              </Grid>
          )}
      </Grid>
  )
}

export default Reservations;
