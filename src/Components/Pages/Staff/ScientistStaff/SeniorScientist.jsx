import React from 'react';
import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import  { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
 import "./NewsList.css";

import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout

import {  Grid, Card, CardContent, Avatar,Container,CardMedia } from '@mui/material';

/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 
 */



const SeniorScientist = () => {
 
const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/news-list.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error loading news:", err));
  }, []);

  const filteredNews = news.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="news-container">
      <h2>Publication Downloads</h2>
      <input
        type="text"
        placeholder="Search by name or date"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>File Type</th>
            <th>File Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredNews.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.type}</td>
              <td>{item.size}</td>
              <td>
                <a href={item.viewUrl} className="btn view-btn" target="_blank" rel="noreferrer">
                  VIEW
                </a>
                <a href={item.downloadUrl} className="btn download-btn" target="_blank" rel="noreferrer">
                  DOWNLOAD
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default SeniorScientist