import PostItem from "./PostItem";
import styles from "../styles/PostList.module.css";

const posts = [
  { id: "1", title: "First Post", content: "첫번째" },
  { id: "2", title: "Second Post", content: "두번째" },
];

export default function PostList() {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
