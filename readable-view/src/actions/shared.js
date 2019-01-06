import * as api from '../service/service';
import { receivePosts } from './post';
import { receiveCategories } from "./category";

export function handleInitialData() {
    return (dispatch) => {
        return api.getInitialData()
            .then(({ posts, categories }) => {
                dispatch(receivePosts(posts))
                dispatch(receiveCategories(categories))
            })
    }
}