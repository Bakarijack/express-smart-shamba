-- phpMyAdmin SQL Dump
-- version 5.2.0-1.fc36
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 14, 2023 at 12:51 PM
-- Server version: 8.0.31
-- PHP Version: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shamba`
--

-- --------------------------------------------------------

--
-- Table structure for table `title_deed`
--

CREATE TABLE `title_deed` (
  `title_deed_id` int NOT NULL,
  `owner` varchar(50) NOT NULL,
  `added_by` varchar(20) NOT NULL,
  `id` varchar(20) NOT NULL,
  `land_num` varchar(50) NOT NULL,
  `date_of_issue` varchar(50) NOT NULL,
  `title_num` varchar(50) NOT NULL,
  `seal` varchar(50) NOT NULL,
  `map_num` varchar(50) NOT NULL,
  `land_size` varchar(200) NOT NULL,
  `is_verified` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `title_deed`
--

INSERT INTO `title_deed` (`title_deed_id`, `owner`, `added_by`, `id`, `land_num`, `date_of_issue`, `title_num`, `seal`, `map_num`, `land_size`, `is_verified`) VALUES
(1, 'afasfsd', '1', 'dfadfad', 'dgds', '2023-03-11', 'fdafgda', 'dgdsg', 'dsgdsgds', 'dsgds', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role_id` int DEFAULT '3',
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `email`, `password`, `role_id`, `user_id`) VALUES
('Mtua', 'mtua@gmail.com', '$2a$10$13F4wustKPBLHyOpfHFB0.ZmYrx12LpV5EJhRuVjVisfXPL6k8zNe', 3, 1),
('Mtua1', 'mtua1@gmail.com', '$2a$10$ga4RUC2Jf2pHpvNWGITTvuWuC4TmM9JPecE20aaqSYJjnmyMYOBAq', 3, 2),
('Kilu', 'kilu@gmail.com', '$2a$10$ACF4mew9OJFWI4503VbI3us.DHwBhxll3r1hnvGPMYoy0Q.wuIpF6', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `role_id` int NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`role_id`, `role`) VALUES
(1, 'admin'),
(2, 'staff'),
(3, 'client');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `title_deed`
--
ALTER TABLE `title_deed`
  ADD PRIMARY KEY (`title_deed_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `title_deed`
--
ALTER TABLE `title_deed`
  MODIFY `title_deed_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
