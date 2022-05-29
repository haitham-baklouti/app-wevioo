import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from "../../modules/post/service/post.service";
import { IRootState } from "../../reducers";

const Home = () => {
    const dispatch = useDispatch<any>();
    const getAllPosts = useSelector<any>((state: IRootState) => state);
    console.log('getAllPosts', getAllPosts)
    useEffect(() => {
        dispatch(getAllPost())
    }, [])
    return <h1>Your Card</h1>
}
export default Home;