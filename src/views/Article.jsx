import React from 'react';
import {useParams} from 'react-router-dom'

function Article() {
    const { id } = useParams();
    return(
        <div>Article ID: {id}</div>
    )
}

export default Article;