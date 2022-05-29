import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from "../../modules/post/service/post.service";
import { IRootState } from "../../reducers";
import Grid from '@mui/material/Grid';
import Card from '../../ui/components/card'
import Pagination from "../../ui/components/pagination";

const Home = () => {
    const dispatch = useDispatch<any>();
    const getAllPosts: any = useSelector<any>((state: IRootState) => state.post);
    const [rowsParPage, setRowsParPage] = useState(5);
    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(getAllPost(page, rowsParPage))
    }, [page, rowsParPage])

    return (
        <Grid>
            <Grid container spacing={1}>
                {Object.values(getAllPosts.allPost).map((element: any, key: any) => {
                    return <Grid key={key} item md={4} sm={6} xs={12}>
                        <Card element={element} />
                    </Grid>
                })}

            </Grid>
            <Grid item >
                <Pagination total={getAllPosts.total} setPerPage={(e: any) => setPage(e)} setPerRowPage={(e: any) => setRowsParPage(e)} />
            </Grid>
        </Grid>

    )
}
export default Home;