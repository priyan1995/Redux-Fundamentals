import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu, MenuItem } from '@mui/material';
import { logout } from '../../actions/authActions';

const POSTS_MENU_ITEMS = [
  { label: 'Posts', to: '/posts' },
  { label: 'News', to: '/news' },
  { label: 'Students', to: '/students' },
  { label: 'Cars', to: '/cars' },
  { label: 'Ice Creams', to: '/ice-creams' },
  { label: 'Countries', to: '/countries' },
  { label: 'Users', to: '/users' },
  { label: 'Increment', to: '/increment' },
  { label: 'Books', to: '/books' },
];

export function AppNav() {
  const [postsAnchor, setPostsAnchor] = useState(null);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => dispatch(logout());
  const openPostsMenu = (e) => setPostsAnchor(e.currentTarget);
  const closePostsMenu = () => setPostsAnchor(null);

  if (!isAuthenticated) return null;

  return (
    <nav>
      <Link to="/" className="pd-nav-link">
        Home
      </Link>

      <Button
        className="pd-nav-link pd-nav-posts-trigger"
        onClick={openPostsMenu}
        aria-controls={postsAnchor ? 'posts-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={postsAnchor ? 'true' : undefined}
      >
        Posts
      </Button>
      <Menu
        id="posts-menu"
        anchorEl={postsAnchor}
        open={Boolean(postsAnchor)}
        onClose={closePostsMenu}
        MenuListProps={{ 'aria-labelledby': 'posts-menu-button' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{ paper: { className: 'pd-posts-menu-paper' } }}
      >
        {POSTS_MENU_ITEMS.map((item) => (
          <MenuItem key={item.to} component={Link} to={item.to} onClick={closePostsMenu}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      <Button
        type="button"
        variant="contained"
        color="primary"
        className="pd-nav-logout"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </nav>
  );
}
