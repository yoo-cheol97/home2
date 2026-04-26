import { useState } from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter.jsx";
import ArticleImg from "./image.png";

const ArticleMain = () => {
  const [articles, setCachedData] = useState(articleData.articles);

  const [{ subject, email, name, content }, setNewArticleData] = useState({
    subject: "",
    email: "",
    name: "",
    content: "",
  });


  const [isWriting, setIsWriting] = useState(false);

  const onSubjectChange = (event) => {
    console.log(event.target.value);
    setNewArticleData((prevData) => ({
      ...prevData,
      subject: event.target.value,
    }));
  };

  const onEmailChange = (event) => {
    console.log(event.target.value);
    setNewArticleData((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
  };

  const onNameChange = (event) => {
    console.log(event.target.value);
    setNewArticleData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  };

  const onContentChange = (event) => {
    console.log(event.target.value);
    setNewArticleData((prevData) => ({
      ...prevData,
      content: event.target.value,
    }));
  };

  const onSaveButtonClickHandler = () => {
    console.log("게시합니다");

    const viewCount = parseInt(Math.random() * 1000);

    setCachedData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        subject,
        content,
        email,
        viewCnt: viewCount,
        crtDt: "2026-04-24",
        mdfyDt: null,
        membersVO: { name },
        files: [],
      },
    ]);
    {/* 과제 */ }
    setIsWriting(false);
    {/* 과제 */ }
    setNewArticleData({
      subject: "",
      email: "",
      name: "",
      content: "",
    });
  };

  const onResetClickHandler = () => {
    setIsWriting(false);
    setNewArticleData({
      subject: "",
      email: "",
      name: "",
      content: "",
    });
  };



  return (
    <div className="wrapper">
      <table>
        <thead>
          <img src={ArticleImg} alt="article" className="article-img" />
          <ArticleHeader />
        </thead>
        <tbody>
          <ArticleList articles={articles} />
        </tbody>
      </table>

      <hr />
      {/* 과제 */}
      <button onClick={() => setIsWriting(true)}>글쓰기</button>
      {/* 과제 */}
      {isWriting && (
        <div className="article-writer">
          <h3>게시글 작성</h3>
          <ArticleWriter
            subject={subject}
            email={email}
            name={name}
            content={content}
            onSubjectChange={onSubjectChange}
            onEmailChange={onEmailChange}
            onNameChange={onNameChange}
            onContentChange={onContentChange}
            onSaveButtonClick={onSaveButtonClickHandler}
            onResetClick={onResetClickHandler}
          />
        </div>
      )}
    </div>
  );
};
export default ArticleMain;
