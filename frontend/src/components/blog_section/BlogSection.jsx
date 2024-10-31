import { useState, useEffect, useContext } from 'react';
import { handleGetBlogs, ThemeContext, Loader } from '..';
import { useNavigate } from 'react-router-dom';
import "./blogSection.css";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [filterBlog, setFilterBlog] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // New loading state

    const { isDarkMode } = useContext(ThemeContext);

    let turncateDesc = (description, maxchars = 160) => {
        if (!description || typeof description !== 'string') {
            return '';
        }

        if (description.length > maxchars) {
            return description.slice(0, maxchars) + "...";
        }
        return description;
    }

    const filterHandler = (item) => {
        setActiveFilter(item);
        if (item === "All") {
            setFilterBlog(blogs);
        } else {
            setFilterBlog(blogs.filter((blog) => blog.tags.includes(item)));
        }
    }

    const handleBlogs = async () => {
        handleGetBlogs()
            .then(data => {
                setBlogs(data);
                setFilterBlog(data);
                setLoading(false); // Stop loading when data is fetched
            })
            .catch(error => {
                setError("Unable to fetch blogs!");
                setLoading(false); // Stop loading on error as well
            });
    };

    useEffect(() => {
        handleBlogs();
    }, []);

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/blog/${id}`);
    };

    const filters = ["All", "Web Dev", "SEO", "Content Writing", 'Design'];

    return (
        <div className='blog__section'>
            <h1>All Blogs</h1>
            <div className={`blog__section-search ${isDarkMode ? "dark-mode" : ""}`}>
                {filters.map((filter, index) => (
                    <button
                        className={`filter-btn ${activeFilter === filter ? "checked-btn" : ""}`}
                        key={filter + index}
                        onClick={() => filterHandler(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            {loading ? ( // Show loading message if still loading
                <Loader />
            ) : (
                <div className="blog__section-cards">
                    {filterBlog.map(blog => (
                        <div
                            className={`blog__section-card ${isDarkMode ? "dark-mode" : ""}`}
                            key={blog._id}
                            onClick={() => handleCardClick(blog._id)}
                        >
                            <div className="card-img">
                                <img src={blog.image} alt="dev card image" />
                            </div>
                            <div className="card-info">
                                <h2 className="card-heading">{blog.title}</h2>
                                <p className="card-description">{turncateDesc(blog.desc)}</p>
                                <div className="read__info">
                                    <span className="publisher">by <b>Umer Khokhar</b></span>
                                    <span className="post-time">13min Ago</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default BlogSection;
