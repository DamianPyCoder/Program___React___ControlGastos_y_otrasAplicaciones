import React from 'react';
import posts from './../data/posts';
import {useParams, Redirect} from 'react-router-dom';

const Post = () => {
	const {id} = useParams();

	return (
		<>
			{posts[id-1] ?
				<div>
					<h1>{posts[id-1].titulo}</h1>
					<p>{posts[id-1].texto}</p>
				</div>
			:
				<Redirect to="/" />
			}
		</>
	);
}
 
export default Post;