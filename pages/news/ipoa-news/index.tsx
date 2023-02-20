import Link from "next/link";
import React from "react";
import NewsPortal from "../../../components/NewsPortal";

const blogNews = [
  {
    id: "1",
    title: "MERCHANT MARINERS WANT BANGLAR SAMRIDDHI PROBE REPORT",
    date: "JULY 21,2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid fuga dolorum est ab fugit, eveniet quam minus reiciendis harum accusamus a velit, vero impedit, dolor. Sapiente architecto",
  },
  {
    id: "2",
    title: "MERCHANT MARINERS WANT BANGLAR SAMRIDDHI PROBE REPORT",
    date: "JULY 21,2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid fuga dolorum est ab fugit, eveniet quam minus reiciendis harum accusamus a velit, vero impedit, dolor. Sapiente architecto",
  },
  {
    id: "3",
    title: "MERCHANT MARINERS WANT BANGLAR SAMRIDDHI PROBE REPORT",
    date: "JULY 21,2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid fuga dolorum est ab fugit, eveniet quam minus reiciendis harum accusamus a velit, vero impedit, dolor. Sapiente architecto",
  },
];

const IpoaNews = () => {
  return (
    <>
      <div className="container section-padding">
      
        <div className="row">
          <div className="col-md-8">
            {blogNews.map((news, index) => {
              return (
                <div className="mb-5" key={index}>
                  <NewsPortal
                    id={news.id}
                    title={news.title}
                    date={news.date}
                    author={news.author}
                    description={news.description}
                  />
                </div>
              );
            })}
          </div>
          <aside className="col-md-4">
            <div className="card px-3">
              <div className="header">
                <h4 className="py-3">Categories</h4>
              </div>
              <div className="body widget">
                <ul className="list-unstyled categories-clouds m-b-0">
                  <li>
                    <a href="#">eCommerce</a>
                  </li>
                  <li>
                    <a href="#">Microsoft Technologies</a>
                  </li>
                  <li>
                    <a href="#">Creative UX</a>
                  </li>
                  <li>
                    <a href="#">Wordpress</a>
                  </li>
                  <li>
                    <a href="#">Angular JS</a>
                  </li>
                  <li>
                    <a href="#">Enterprise Mobility</a>
                  </li>
                  <li>
                    <a href="#">Website Design</a>
                  </li>
                  <li>
                    <a href="#">HTML5</a>
                  </li>
                  <li>
                    <a href="#">Infographics</a>
                  </li>
                  <li>
                    <a href="#">Wordpress Development</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default IpoaNews;
