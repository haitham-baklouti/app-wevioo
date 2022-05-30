import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination(props: any) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    React.useEffect(() => {
        setPage(props.page);
        setRowsPerPage(props.rowsParPage);
    }, [props.page, props.rowsParPage])

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
        props.setPerPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        props.setPerPage(0);
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
