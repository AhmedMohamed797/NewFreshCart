export default function PageMetaTags({
  title = "FreshCart | E-Commerce",
  description = "FreshCart - Your one-stop shop for fresh groceries and daily essentials.",
  keywords = "freshcart, e-commerce, groceries, online shopping, fresh produce",
  author = "FreshCart Team",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
