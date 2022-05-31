import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IRootState } from "../../reducers";
import Grid from '@mui/material/Grid';
import Card from '../../ui/components/card'
import { getComments } from "../../modules/comment/service/comment.service";
import Pagination from "../../ui/components/pagination";

const Detail = () => {
    const dispatch = useDispatch<any>();
    const { state }: any = useLocation();
    const navigate = useNavigate();
    const getAllComment: any = useSelector<any>((state: IRootState) => state.comment);
    const [rowsParPage, setRowsParPage] = useState(5);
    const [page, setPage] = useState(0);
    useEffect(() => {
        dispatch(getComments(state.id, page, rowsParPage))
    }, [page, rowsParPage])

    const handelRetour = () => {
        navigate('/', { state: null })
    }

    return (
        < >
            <Grid >
                <button onClick={handelRetour}>Retour</button>
            </Grid>
            <Grid>
                <Card element={state} />
                {Object.values(getAllComment.allComment).map((element: any, key: any) => {
                    return <Grid key={key} item md={4} sm={6} xs={12}>
                        <Card element={element} isComment={true} />
                    </Grid>
                })}
            </Grid>
            <Grid>
                <Pagination
                    total={getAllComment.total}
                    setPerPage={(e: any) => setPage(e)}
                    setPerRowPage={(e: any) => setRowsParPage(e)}
                    page={page}
                    rowsParPage={rowsParPage}
                />
            </Grid>

        </ >

    )
}
export default Detail;