import {useEffect, useContext} from 'react';
import './dashboard.css';
import { images } from '../../constant';
import { handleGetBlogs, BlogForm, BlogDetails, useBlogContext, ThemeContext } from '../../components';

const Dashboard = () => {
  const { blogs, setBlogs } = useBlogContext();

  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    handleGetBlogs()
      .then(data => setBlogs(data))
      .catch(error => console.log("Can't fetch any blogs!"));
  }, []);  // Add empty dependency array to run only once

  
  

  return (
    <div className={`dashboard ${isDarkMode ? "dark-mode" : ""}`}>
      <div className='post-area'>
        <div className="posts">
          {blogs && blogs.map(blog => ( // Defensive check
            <div className="my-post" key={blog._id}>
              <BlogDetails
                title={blog.title}
                image={blog.image}
                _id={blog._id}
                dltBtn={images.dltBtn}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="post-form">
        <BlogForm />
      </div>
    </div>
  );
};

export default Dashboard;
