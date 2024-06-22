import Link from 'next/link';
import DOMPurify from 'dompurify';

// Function to strip HTML tags from the content
const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const PostCard = ({ post }) => {
  // Sanitize the content using DOMPurify
  const sanitizedContent = DOMPurify.sanitize(post.content);
  // Strip HTML tags from the sanitized content
  const plainTextContent = stripHtmlTags(sanitizedContent);
  // Extract the first 100 characters of the plain text content
  const truncatedContent = plainTextContent.substring(0, 100) + '...';
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="bg-white shadow-md rounded-none overflow-hidden mb-8 lg:w-2/3 h-90  ">
      <div className="flex flex-col md:flex-row-reverse h-full ">
        <div className="md:w-1/3 w-full h-full md:h-auto overflow-hidden ">
          {post.images && post.images.length > 0 ? (
            post.images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className={`w-full h-full object-cover ${index > 0 ? 'hidden' : ''}`}
              />
            ))
          ) : (
            <img src="/default-image.jpg" alt="Default" className="object-cover w-full h-full" />
          )}
        </div>
        <div className="p-4 md:w-2/3 w-full flex flex-col justify-between">
          <div className="flex-grow overflow-hidden">
            <h5 className="text-xl font-bold mb-2">{post.title}</h5>
            <div className="text-gray-700 mb-4">
              <p>{truncatedContent}</p>
            </div>
          </div>
          <div className="mt-auto">
            <Link href={`/posts/${post._id}`}>
              <span className="text-customBlack underline text-s hover:text-gray-600">Read more</span>
            </Link>
            <p className="text-sm text-gray-600 font-semibold pt-2">
              <span>{formattedDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
