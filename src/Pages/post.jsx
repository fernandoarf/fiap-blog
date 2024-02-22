import { useEffect, useState } from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import {
    useParams,
    Link
  } from "react-router-dom";

import Layout  from "../Components/layout";
import { client } from "../lib/createContentfulClient";

export const Post = () => {
    const { slug } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        client
            .getEntries({
                "fields.slug": slug,
                content_type: 'blogPage',
            })
            .then(function (entries) {
                console.log("post", entries);
                setPost(entries.items[0] || null);
            });
    }, []);

    return (
        <Layout>
            {post
                ? <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="my-3">{post.fields.title}</h1>
                            </div>

                            <div dangerouslySetInnerHTML={{__html: documentToHtmlString(post.fields.body)}}></div>

                            <div className="mt-1">
                                <Link to="/" className="btn btn-primary">
                                    Voltar para Home
                                </Link>
                            </div>
                        </div>
                    </div>
                : <div>Carregando...</div>}
        </Layout>
    );
}

export default Post;