import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, getAllPostByUser } from "../../modules/post/service/post.service";
import { IRootState } from "../../reducers";
import Grid from '@mui/material/Grid';
import Card from '../../ui/components/card'
import Pagination from "../../ui/components/pagination";
import FilterForm from "../../ui/components/filterForm";
import setListInput from './setListInput'
import { getUsers } from "../../modules/user/service/user.service";

const Home = () => {
    const dispatch = useDispatch<any>();
    const getAllPosts: any = useSelector<any>((state: IRootState) => state.post);
    const getAllUsers: any = useSelector<any>((state: IRootState) => state.user);
    const [rowsParPage, setRowsParPage] = useState(5);
    const [page, setPage] = useState(0);
    const [idFilter, setIdFilter] = useState<any>(null);

    useEffect(() => {
        if (!idFilter)
            dispatch(getAllPost(page, rowsParPage))
        else dispatch(getAllPostByUser(page, rowsParPage, idFilter))
    }, [page, rowsParPage, idFilter])

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    const handelFilter = (id: string) => {
        if (id !== 'all') setIdFilter(id)
        else setIdFilter(null)
        setPage(0);
        setRowsParPage(5);
    }

    return (
        <Grid>
            <Grid container>
                <Grid md={4}>
                    <FilterForm
                        handelFilter={(id: string) => handelFilter(id)}
                        setListInput={() => setListInput(getAllUsers.allUser)}
                    />
                </Grid>
                <Grid md={6}>
                    <Pagination
                        total={getAllPosts.total}
                        setPerPage={(e: any) => setPage(e)}
                        setPerRowPage={(e: any) => setRowsParPage(e)}
                        page={page}
                        rowsParPage={rowsParPage}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                {Object.values(getAllPosts.allPost).map((element: any, key: any) => {
                    return <Grid key={key} item md={4} sm={6} xs={12}>
                        <Card element={element} />
                    </Grid>
                })}
            </Grid>
        </Grid>

    )
}
export default Home;