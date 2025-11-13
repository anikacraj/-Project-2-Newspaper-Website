import React, { useEffect, useState } from 'react';
// Mock dependencies for single-file execution in a sandbox environment
const NavLink = ({ to, children, className = '', onClick, onMouseEnter, onMouseLeave }) => (
  <a href={to} className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {children}
  </a>
);
const Link = ({ to, children, className = '', state }) => (
  <a href={to} className={className}>{children}</a>
);

// Mock Icons
const FaSearch = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const FaBars = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const FaTimes = () => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

// Mock useFetch since we cannot access external APIs
const useFetch = (url) => {
    // Mock news data for demonstration
    const mockData = [
        { _id: '1', content: 'Breaking news: This is a placeholder story about global events and politics. The content is long to simulate real data.', createdAt: '2023-10-01T10:00:00Z' },
        { _id: '2', content: 'Local update: Important announcement regarding city infrastructure and maintenance.', createdAt: '2023-10-02T10:00:00Z' },
        { _id: '3', content: 'Tech analysis: Deep dive into the latest AI advancements and their future impact on the job market.', createdAt: '2023-10-03T10:00:00Z' },
        { _id: '4', content: 'Sports report: Recap of last night\'s major football game and future predictions for the championship.', createdAt: '2023-10-04T10:00:00Z' },
    ];
    return { data: mockData };
};


function Header() {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [uploadNews, setUploadNews] = useState([]);
  const [light, setLight] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("role") === "user");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // NEW: Mobile menu state

  const { data } = useFetch("http://localhost:3004/admin/Header/text");

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const sortedNews = [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      // Slice the latest 4 news items
      setUploadNews(sortedNews.slice(0, 4));
    }
  }, [data]);

  const handleLogOut = () => {
    localStorage.clear();
    setUser(false);
    setIsMenuOpen(false); // Close menu on logout
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
  // Helper function to close menu when clicking a navigation link
  const handleNavClick = () => {
    // Only close the menu if it's currently open (on mobile)
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
    {/* --- STYLES: Including all necessary CSS for Desktop and Mobile Responsiveness --- 
      NOTE: This style block handles the responsive layout and the mobile slide-out transition.
    */}
    <style>{`
        /* Reset and Base Styles */
        body { margin: 0; font-family: 'Inter', sans-serif; background: #f9f9f9; }
        * { box-sizing: border-box; }

        /* ---------- Theme Base ---------- */
        .header {
            width: 100%;
            border-bottom: 1px solid #ddd;
            background: #fff;
            position: sticky;
            top: 0;
            z-index: 50;
        }
        .header a {
            color: #333;
            text-decoration: none;
        }

        /* ---------- Top Row ---------- */
        .header-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 2.5vw;
            border-bottom: 1px solid #ddd;
            gap: 20px;
        }

        /* News Section (Desktop Only) */
        .header-news {
            flex: 1;
            display: flex;
            gap: 1rem;
            overflow-x: auto;
            scrollbar-width: thin;
            padding: 5px 0;
        }

        .header-news-item {
            min-width: 400px;
            background: #f5f5f5;
            border-radius: 10px;
            padding: 10px 12px;
            color: #333;
            transition: all 0.3s ease;
            font-size: 14px;
            line-height: 1.4;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
        .header-news-item div {
            color: #222 !important;
            max-height: 90px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        /* ---------- Navigation (Desktop Only) ---------- */
        .header-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 3vw;
            background: #fafafa;
            border-top: 1px solid #eee;
            gap: 40px;
        }
        
        .nav-left {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .nav-right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        
        .search-box {
            display: flex;
            align-items: center;
            gap: 6px;
            border: 1px solid #ccc;
            padding: 4px 10px;
            border-radius: 20px;
            background: #fff;
            min-width: 220px;
        }
        .search-box input {
            border: none;
            outline: none;
            background: transparent;
            font-size: 14px;
            width: 100%;
        }
        
        .nav-icons {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .nav-icons li, .nav-left li {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .nav-icons a, .nav-left a {
            font-weight: 600;
            padding: 4px 6px;
            border-radius: 5px;
            transition: 0.2s ease;
        }
        .nav-left a.active, .nav-left a:hover {
            background: #ffeaea;
            color: #d00000;
        }
        .has-submenu { position: relative; }
        .has-submenu .submenu {
            position: absolute; top: 38px; left: 0; background: #fff;
            border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            list-style: none; padding: 6px 0; z-index: 999; min-width: 150px;
        }

        /* --- Mobile Menu Structure --- */
        .menu-icon {
            display: none; /* Hidden on desktop */
            cursor: pointer;
            z-index: 1001;
            padding: 5px;
            color: #d00000;
        }

        .mobile-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 300px;
            max-width: 80vw;
            height: 100vh;
            background: #fff;
            box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            overflow-y: auto;
            /* Slide-out transition */
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            padding-top: 20px;
        }

        .mobile-menu.open {
            transform: translateX(0); /* Slide into view */
        }

        .menu-overlay {
            display: none; /* Hidden on desktop */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 999;
        }

        .mobile-menu ul { list-style: none; padding: 0; margin: 0; }
        .mobile-menu li { padding: 12px 20px; border-bottom: 1px solid #eee; cursor: pointer; }
        .mobile-menu a { display: block; width: 100%; font-size: 16px; font-weight: 500; }
        .mobile-menu hr { border: 0; border-top: 1px solid #eee; margin: 10px 0; }

        .search-box-mobile {
            display: flex; align-items: center; gap: 6px; border: 1px solid #ccc;
            padding: 8px 15px; border-radius: 20px; background: #f8f8f8;
            margin: 15px 20px;
        }
        .search-box-mobile input { border: none; outline: none; background: transparent; font-size: 15px; width: 100%; }
        .submenu-mobile { padding-left: 30px !important; border-bottom: none !important; background: #f9f9f9; }
        .submenu-mobile li { padding: 8px 20px; border-bottom: none; font-size: 0.9em; }


        /* ---------------------------------
           ---------- MEDIA QUERIES (max-width: 900px) ----------
           --------------------------------- */
        @media (max-width: 900px) {
            
            .header-top {
                padding: 10px 5vw;
            }
            
            /* 1. Remove Header News Text on Mobile */
            .header-news {
                display: none; 
            }

            /* 2. Hide Desktop Navigation */
            .header-nav {
                display: none;
            }

            /* 3. Show Menu Icon */
            .menu-icon {
                display: block;
            }

            /* 4. Show Overlay when Menu is Open */
            .mobile-menu.open + .menu-overlay {
                display: block;
            }
        }
    `}</style>
    <header className={`header ${light ? "light-theme" : ""}`}>
      {/* Top Row */}
      <div className="header-top">
        <div className="header-logo">
          <img width={100} src="../../Media/red.png" alt="Logo" className="logo-img" />
        </div>

        {/* --- Header News (This section is hidden on mobile via CSS) --- */}
        <div className="header-news">
          {uploadNews && uploadNews.length > 0 ? (
            uploadNews.map((upload) => (
              <Link
                key={upload._id}
                to={`/user/news/${upload._id}`}
                state={upload}
                className="header-news-item"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: upload.content.substring(0, 400),
                  }}
                />
              </Link>
            ))
          ) : (
            <p className="no-news">No news available</p>
          )}
        </div>
        
        {/* --- NEW: Mobile Menu Icon (Visible on mobile) --- */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        
      </div>

      {/* --- Navigation Bar (This section is hidden on mobile via CSS) --- */}
      <nav className="header-nav">
        <ul className="nav-left">
          <li><NavLink to="/">Breaking News</NavLink></li>
          <li><NavLink to="/national">National</NavLink></li>
          <li><NavLink to="/international">International</NavLink></li>
          <li
            className="has-submenu"
            onMouseEnter={() => setSubmenuVisible(true)}
            onMouseLeave={() => setSubmenuVisible(false)}
          >
            <NavLink to="/cricket">Sports</NavLink>
            {submenuVisible && (
              <ul className="submenu">
                <li><NavLink to="/cricket">Cricket</NavLink></li>
                <li><NavLink to="/football">Football</NavLink></li>
              </ul>
            )}
          </li>
          <li><NavLink to="/business">Business</NavLink></li>
        </ul>

        <div className="nav-right">
          <div className="search-box">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>
          <ul className="nav-icons">
            {user ? (
              <li><NavLink to="/" onClick={handleLogOut}>🧑‍✈️ Log Out</NavLink></li>
            ) : (
              <li><NavLink to="/register">👤 Sign Up</NavLink></li>
            )}
            <li><NavLink to="/userEbook">🖨️ E-Book</NavLink></li>
            <li onClick={() => setLight(!light)}>🌐 Theme</li>
            <li><NavLink to="/contact">📞 Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
    
    {/* --- NEW: Mobile Menu Slide-Out Div --- */}
    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="search-box-mobile">
            <FaSearch />
            <input type="text" placeholder="Search..." />
        </div>
        <ul className="nav-left-mobile">
          {/* Use handleNavClick to close the menu upon navigation */}
          <li><NavLink to="/" onClick={handleNavClick}>Breaking News</NavLink></li>
          <li><NavLink to="/national" onClick={handleNavClick}>National</NavLink></li>
          <li><NavLink to="/international" onClick={handleNavClick}>International</NavLink></li>
          <li><NavLink to="/sports" onClick={handleNavClick}>Sports</NavLink></li>
          <ul className="submenu-mobile">
            <li><NavLink to="/cricket" onClick={handleNavClick}>Cricket</NavLink></li>
            <li><NavLink to="/football" onClick={handleNavClick}>Football</NavLink></li>
          </ul>
          <li><NavLink to="/business" onClick={handleNavClick}>Business</NavLink></li>
        </ul>
        <hr/>
        <ul className="nav-icons-mobile">
            {user ? (
              // handleLogOut already calls setIsMenuOpen(false)
              <li><NavLink to="/" onClick={handleLogOut}>🧑‍✈️ Log Out</NavLink></li>
            ) : (
              <li><NavLink to="/register" onClick={handleNavClick}>👤 Sign Up</NavLink></li>
            )}
            <li><NavLink to="/userEbook" onClick={handleNavClick}>🖨️ E-Book</NavLink></li>
            <li onClick={() => { setLight(!light); handleNavClick(); }}>🌐 Theme</li>
            <li><NavLink to="/contact" onClick={handleNavClick}>📞 Contact</NavLink></li>
        </ul>
    </div>

    {/* Optional: Add an overlay for when the menu is open */}
    {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Header;