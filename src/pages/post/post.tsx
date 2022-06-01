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
import { useNavigate } from "react-router-dom";

const Post = () => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    // obtenir les list post user et tag du store
    const getAllPosts: any = useSelector<any>((state: IRootState) => state.post);
    const getAllUsers: any = useSelector<any>((state: IRootState) => state.user);
    const getAllTags: any = useSelector<any>((state: IRootState) => state.tag);
    // les states 
    const [rowsParPage, setRowsParPage] = useState(5);
    const [page, setPage] = useState(0);
    const [idFilter, setIdFilter] = useState<any>(null);

    // exécuter useEffect la premiére fois et une fois la page ou rowsParPage ou idFilter sont modifiés
    useEffect(() => {
        // tester si il exist un filter pour exécuter API (filter API)
        if (!idFilter)
            dispatch(getAllPost(page, rowsParPage))
        else dispatch(getAllPostByUser(page, rowsParPage, idFilter))
    }, [page, rowsParPage, idFilter])

    // exéctuer useEffect une fois et s'il exist la list des users ou tags on les récupére du store pour l'optimisation
    useEffect(() => {
        if (!getAllUsers.allUser.length)
            dispatch(getUsers())
        if (!getAllTags.allTag.length)
            dispatch(getTags())
    }, [])

    // function pour faire le filter par user
    const handelFilter = (id: string) => {
        // maj la valeur du filter
        if (id !== 'all') setIdFilter(id)
        else setIdFilter(null)
        // maj la page et le limit par page
        setPage(0);
        setRowsParPage(5);
    }

    // function pour la navigation dans la page dtails
    const handelClickDetail = (element: any) => {
        navigate('/detail', { state: element })
    }

    return (
        <Grid>
            <Grid container>
                {/* composent pour les listes du filter (select-list et multi-select) avec la function pour exécuter le filter
                et la list des users et tags */}
                <FilterForm
                    handelFilter={(id: string) => handelFilter(id)}
                    setListInput={() => setListInput(getAllUsers.allUser, getAllTags.allTag)}
                />
            </Grid>
            <Grid container spacing={1}>
                {/* affichage la liste des post sous la forme des card avec les props element du card et isComment s'il est commentaire (bool) */}
                {Object.values(getAllPosts.allPost).map((element: any, key: any) => {
                    return <Grid key={key} item md={4} sm={6} xs={12}>
                        <Card element={element} isComment={false} />
                        <button onClick={() => handelClickDetail(element)}>Détail</button>
                    </Grid>
                })}
            </Grid>
            <Grid md={12} sm={12} xs={12}>
                {/* composent du pagination */}
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
export default Post;