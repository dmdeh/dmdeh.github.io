import Link from "next/link";
import styles from "../styles/PostItem.module.css";

interface PostItemProps {
  post: { id: string; title: string; content: string };
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className={styles.postItem}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link href={`/posts/${post.id}`} />
    </div>
  );
}
