import css from "./posts.module.css";

export function Posts({ postsList }) {
  return (
    <div className={css.PostsList}>
      <ul>
        {postsList.map((item) => (
          <li key={item.id}>{item.comment}</li>
        ))}
      </ul>
    </div>
  );
}
