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
import { getTags } from "../../modules/tag/service/tag.service";

const Home = () => {
    const dispatch = useDispatch<any>();
    const getAllPosts: any = useSelector<any>((state: IRootState) => state.post);
    const getAllUsers: any = useSelector<any>((state: IRootState) => state.user);
    const getAllTags: any = useSelector<any>((state: IRootState) => state.tag);
    const [rowsParPage, setRowsParPage] = useState(5);
    const [page, setPage] = useState(0);
    const [idFilter, setIdFilter] = useState<any>(null);

    useEffect(() => {
        if (!idFilter)
            dispatch(getAllPost(page, rowsParPage))
        else dispatch(getAllPostByUser(page, rowsParPage, idFilter))
    }, [page, rowsParPage, idFilter])

    useEffect(() => {
        if (!getAllUsers.allUser.length)
            dispatch(getUsers())
        if (!getAllTags.allTag.length)
            dispatch(getTags())
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
                <FilterForm
                    handelFilter={(id: string) => handelFilter(id)}
                    setListInput={() => setListInput(getAllUsers.allUser, getAllTags.allTag)}
                />
            </Grid>
            <Grid container spacing={1}>
                {Object.values(getAllPosts.allPost).map((element: any, key: any) => {
                    return <Grid key={key} item md={4} sm={6} xs={12}>
                        <Card element={element} />
                    </Grid>
                })}
            </Grid>
            <Grid md={12} sm={12} xs={12}>
                <Pagination
                    total={getAllPosts.total}
                    setPerPage={(e: any) => setPage(e)}
                    setPerRowPage={(e: any) => setRowsParPage(e)}
                    page={page}
                    rowsParPage={rowsParPage}
                />
            </Grid>
        </Grid>

    )
}
export default Home;