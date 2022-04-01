import markdownStyles from "./markdown.module.css";

export default function PostBody({ content }) {
  return (
    <div className="relative">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
