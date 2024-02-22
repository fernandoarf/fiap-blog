import { useEffect, useState } from "react";
import Layout from "../Components/layout";
import { client } from "../lib/createContentfulClient";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogPage",
        limit: 5,
        skip: (page - 1) * 5,
        order: "-sys.createdAt",
      })
      .then(function (entries) {
        setPosts(entries.items);
        setMaxPage(Math.ceil(entries.total / 5));
      });
  }, [page]); // array vazio indica o onload do componente

  const prevPage = () => {
    if (page === 1) return; // não faz nada se estiver na primeira página
    setPage(page - 1);
  };

  const nextPage = () => {
    if (page===maxPage) return; // não faz nada se estiver na ultima pagina
    setPage(page + 1);
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <main className="col-md-12">
            {posts.map((post) => (
              <div className="card mb-3" key={post.sys.id}>
                <div className="card-body">
                  <h5 className="card-title">{post.fields.title}</h5>
                  <p className="card-text">{post.fields.description}</p>
                  <Link to={`/post/${post.fields.slug}`} className="card-link">
                    Ver post
                  </Link>
                </div>
              </div>
            ))}
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" onClick={prevPage}>
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </main>
          <Link to="/" className="btn btn-primary">
            Voltar para Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
