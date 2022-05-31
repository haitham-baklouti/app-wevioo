import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IRootState } from "../../reducers";
import Grid from '@mui/material/Grid';
import Card from '../../ui/components/card'
import { addCommentPost, getComments } from "../../modules/comment/service/comment.service";
import Pagination from "../../ui/components/pagination";

const Detail = () => {
    const dispatch = useDispatch<any>();
    const { state }: any = useLocation();
    const navigate = useNavigate();
    const getAllComment: any = useSelector<any>((state: IRootState) => state.comment);
    const [rowsParPage, setRowsParPage] = useState(5);
    const [page, setPage] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
        dispatch(getComments(state.id, page, rowsParPage))
    }, [page, rowsParPage])

    const handelRetour = () => {
        navigate('/', { state: null })
    }

    const addComment = () => {
        dispatch(addCommentPost({ message: comment, owner: state.owner.id, post: state.id }));
        setComment('');
    }

    return (
        < >
            <Grid md={12} sm={12} xs={12}>
                <button onClick={handelRetour}>Retour</button>
            </Grid>
            <Grid md={12} sm={12} xs={12}>
                <Card element={state} />
                {Object.values(getAllComment.allComment).map((element: any, key: any) => {
                    return <Grid key={key} item md={4} sm={6} xs={12}>
                        <Card element={element} isComment={true} />
                    </Grid>
                })}
            </Grid>
            <Grid md={12} sm={12} xs={12} >
                <input style={{ height: '30px' }}
                    onChange={(e: any) => setComment(e.target.value)}
                    placeholder="add comment"
                    value={comment}
                />
                <button onClick={addComment}>Add</button>
            </Grid>
            <Grid md={12} sm={12} xs={12}>
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