import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from "../../modules/post/service/post.service";
import { IRootState } from "../../reducers";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '../../ui/components/card'

const Home = () => {
    const dispatch = useDispatch<any>();
    const getAllPosts: any = useSelector<any>((state: IRootState) => state);
    useEffect(() => {
        dispatch(getAllPost())
    }, [])
    return (
        <Grid container spacing={1}>
            {Object.values(getAllPosts.post.allPost).map((element, key) => {
                return <Grid key={key} item md={4} sm={6} xs={12}>
                    <Card element={element} />
                </Grid>
            })}

        </Grid>
    )
}
export default Home;