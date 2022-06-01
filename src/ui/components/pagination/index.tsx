import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination(props: any) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // obtenir les valeur du page et limit par les props (le return de l'api)
    React.useEffect(() => {
        setPage(props.page);
        setRowsPerPage(props.rowsParPage);
    }, [props.page, props.rowsParPage])

    // function pour actualiser la valeur du page
    const handleChangePage = (event: any, newPage: any) => {
        // maj la valeur du page du state 
        setPage(newPage);
        // exéctuter la fonction setPerPage du props pour maj la list des post selon la page séléctionner
        props.setPerPage(newPage);
    };

    // function pour actualiser la valeur du limit par page 
    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        // maj la valeur du page du state à 0 
        setPage(0);
        // maj la valeur du page du props à 0 
        props.setPerPage(0);
        // exéctuter la fonction setPerRowPage du props pour maj la list des post selon la limit par page
        props.setPerRowPage(parseInt(event.target.value, 10));
    };

    return (
        <TablePagination
            style={{ alignItems: 'center' }}
            component="div"
            count={props.total}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 20, 30, 50]}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
