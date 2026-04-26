const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <tr key={article.id}>
          <td>{article.id}</td>
          <td>{article.subject}</td>
          <td>{article.content}</td>
          <td>{article.email}</td>
          <td>{article.viewCnt}</td>
          <td>{article.crtDt}</td>
          <td>{article.mdfyDt}</td>
          <td>{article.membersVO.name}</td>
        </tr>
      ))}
    </>
  );
};

export default ArticleList;
