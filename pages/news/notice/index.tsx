import React from "react";
import NewsPortal from "../../../components/NewsPortal";

const NoticeInfo = [
  {
    id: "1",
    title: "NOTICE OF ANNUAL GENERAL MEETING & EXTRA-ORDINARY GENERAL MEETING",
    date: "JULY 21,2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid fuga dolorum est ab fugit, eveniet quam minus reiciendis harum accusamus a velit, vero impedit, dolor. Sapiente architecto",
  },
  {
    id: "2",
    title: "NOTICE OF ANNUAL GENERAL MEETING & EXTRA-ORDINARY GENERAL MEETING",
    date: "JULY 21,2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid fuga dolorum est ab fugit, eveniet quam minus reiciendis harum accusamus a velit, vero impedit, dolor. Sapiente architecto",
  },
  {
    id: "3",
    title: "NOTICE OF ANNUAL GENERAL MEETING & EXTRA-ORDINARY GENERAL MEETING",
    date: "JULY 21,2022",
    author: "Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid fuga dolorum est ab fugit, eveniet quam minus reiciendis harum accusamus a velit, vero impedit, dolor. Sapiente architecto",
  },
];

const NoticeBoard = () => {
  return (
    <>
<div className="container section-padding">
        <div className="row">
          <div className="col-md-8">
            {NoticeInfo.map((news, index) => {
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
          
        </div>
      </div>
    </>
  );
};

export default NoticeBoard;
