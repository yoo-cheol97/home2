const ArticleWriter = ({
  subject,
  email,
  name,
  content,
  onSubjectChange,
  onEmailChange,
  onNameChange,
  onContentChange,
  onSaveButtonClick,
  onResetClick,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="제목"
        value={subject}
        onChange={onSubjectChange}
      />

      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={onEmailChange}
      />

      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={onNameChange}
      />

      <textarea
        placeholder="내용"
        value={content}
        onChange={onContentChange}
      ></textarea>

      <button type="button" onClick={onSaveButtonClick}>
        게시
      </button>
      <button type="button" className="negative-button" onClick={onResetClick}>
        취소
      </button>
    </>
  );
};

export default ArticleWriter;
