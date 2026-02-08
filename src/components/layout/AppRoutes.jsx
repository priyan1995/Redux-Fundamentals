import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeFromRoute } from '../theme/ThemeFromRoute';
import { PrivateRoute } from '../auth/PrivateRoute';
import { Login } from '../auth/Login';
import Home from '../home';
import PostView from '../pages/posts/postView';
import { PostsListing } from '../pages/posts/postsListing';
import News from '../pages/news/news';
import NewsView from '../pages/news/newsView';
import Students from '../pages/student/students';
import StudentView from '../pages/student/studentView';
import Cars from '../pages/cars/cars';
import CarView from '../pages/cars/carView';
import Countries from '../pages/countries/countries';
import CountryView from '../pages/countries/countryView';
import IceCreams from '../iceCreams';
import Increment from '../Increment';
import { Users } from '../pages/users/users';
import UserView from '../pages/users/userView';
import { Books } from '../pages/books/Books';
import { ViewBook } from '../pages/books/ViewBook';
import { AddBook } from '../pages/books/AddBook';
import { EditBook } from '../pages/books/EditBook';
import { ImageUpload } from '../pages/imageUpload/ImageUpload';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/theme/:mode" element={<ThemeFromRoute />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/posts" element={<PrivateRoute><PostsListing /></PrivateRoute>} />
      <Route path="/post-view/:postId" element={<PrivateRoute><PostView /></PrivateRoute>} />
      <Route path="/news" element={<PrivateRoute><News /></PrivateRoute>} />
      <Route path="/news-view/:newsId" element={<PrivateRoute><NewsView /></PrivateRoute>} />
      <Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
      <Route path="/student-view/:studentId" element={<PrivateRoute><StudentView /></PrivateRoute>} />
      <Route path="/cars" element={<PrivateRoute><Cars /></PrivateRoute>} />
      <Route path="/car-view/:carId" element={<PrivateRoute><CarView /></PrivateRoute>} />
      <Route path="/ice-creams" element={<PrivateRoute><IceCreams /></PrivateRoute>} />
      <Route path="/countries" element={<PrivateRoute><Countries /></PrivateRoute>} />
      <Route path="/country-view/:countryId" element={<PrivateRoute><CountryView /></PrivateRoute>} />
      <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
      <Route path="/users/:userId" element={<PrivateRoute><UserView /></PrivateRoute>} />
      <Route path="/increment" element={<PrivateRoute><Increment /></PrivateRoute>} />

      <Route path="/books" element={<PrivateRoute><Books /></PrivateRoute>} />
      <Route path="/book-view/:bookId" element={<PrivateRoute><ViewBook /></PrivateRoute>} />
      <Route path="/add-book" element={<PrivateRoute><AddBook /></PrivateRoute>} />
      <Route path="/edit-book/:bookId" element={<PrivateRoute><EditBook /></PrivateRoute>} />

      <Route path="/upload-image" element={<PrivateRoute><ImageUpload /></PrivateRoute>} />
    </Routes>
  );
}
