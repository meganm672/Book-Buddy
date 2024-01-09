import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { useCheckoutBookMutation } from '../redux/api';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const CheckoutBookButton = ({ bookId }) => {
    const token = useSelector(state => state.token);

    const [checkoutBook] = useCheckoutBookMutation();

    const onCheckout = async () => {
        await checkoutBook(bookId);
    }

    if (token) {
        return (
            <Button
                onClick={onCheckout}
                variant="contained">
                Check Out
            </Button>
        )
    }

    return <Link href="#" component={RouterLink} to="/login">Log In to Check Out</Link>;
}



export default CheckoutBookButton;