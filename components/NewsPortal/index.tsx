import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type BlogInfo = {
  id: any;
  title: any;
  author: any;
  date: any;
  description: any;
};
const NewsPortal: React.FunctionComponent<BlogInfo> = (props) => {
  const { title, author, date, description, id } = props;
  return (
    <div>
      <article id="news-portal" className="news-portal">
        <div className="entry-content">
          <header>
            <h4 className="text-capitalize">{title}</h4>
          </header>
          <div className="meta author-info">
            <span className="date">{date}</span>
            <span className="px-2">/</span>
            <span className="author">{author}</span>
          </div>
          <p className="lead text-capitalize">
            {description}
            &hellip;
          </p>
          <div className="read-more-link">
            <Link className="read-more" href={`/news/ipoa-news/${id}`}>
              Read More{" "}
              <span
                className="glyphicon glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsPortal;
