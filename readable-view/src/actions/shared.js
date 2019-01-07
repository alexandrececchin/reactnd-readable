import * as api from '../service/service';
import { receivePosts } from './post';
import { receiveCategories } from "./category";
import { normalize } from 'normalizr';
import { post as postSchema } from "../schema/schema";

export function handleInitialData() {
    return (dispatch) => {
        return api.getInitialData()
            .then(({ posts, categories }) => {
                dispatch(receivePosts(normalize(posts, [postSchema]).entities.posts))
                dispatch(receiveCategories(categories))
            })
    }
}