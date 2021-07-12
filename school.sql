-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 12 2021 г., 17:26
-- Версия сервера: 10.3.16-MariaDB
-- Версия PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `school`
--

-- --------------------------------------------------------

--
-- Структура таблицы `course`
--

CREATE TABLE `course` (
  `id_cours` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(10) DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `course`
--

INSERT INTO `course` (`id_cours`, `name`, `description`, `status`) VALUES
(1, 'Математика', 'математика для начальной уровни', 'delete'),
(2, 'Физика', 'Физика', 'active'),
(4, 'Физика', 'Физика', 'delete'),
(7, 'Математика', 'Математика', 'delete'),
(8, 'Информатика', 'Информатика', 'delete'),
(9, 'Информатика', 'Информатика', 'delete'),
(10, 'Информатика', 'Информатика', 'delete'),
(11, 'Информатика', 'Информатика', 'delete'),
(12, 'Информатика', 'Информатика', 'delete'),
(13, 'Информатика', 'Информатика', 'delete'),
(14, 'Информатика', 'Информатика', 'delete'),
(15, 'Информатика', 'Информатика', 'delete'),
(16, 'Информатика', 'Информатика', 'delete'),
(17, 'Информатика', 'Информатика', 'delete'),
(18, 'Информатика', 'Информатика', 'delete'),
(19, 'Информатика', 'Информатика', 'delete'),
(20, 'Информатика', 'Информатика', 'delete'),
(21, 'Информатика', 'Информатика', 'delete'),
(22, 'Информатика', 'Информатика', 'delete'),
(23, 'Информатика', 'Информатика', 'delete'),
(24, 'Информатика', 'Информатика', 'delete'),
(25, 'Информатика', 'Информатика', 'delete'),
(26, 'Информатика', 'Информатика', 'delete'),
(27, 'Информатика', 'Информатика', 'delete'),
(28, 'Информатика', 'Информатика', 'delete'),
(29, 'Информатика', 'Информатика', 'delete'),
(33, 'Информатика', 'Информатика', 'delete'),
(34, 'Информатика', 'Информатика', 'delete'),
(35, 'Информатика', 'Информатика', 'delete'),
(36, 'Информатика', 'Информатика', 'delete'),
(37, 'Информатика', 'Информатика', 'delete'),
(38, 'Информатика', 'Информатика', 'delete'),
(39, 'Информатика', 'Информатика', 'delete'),
(40, 'Информатика', 'Информатика', 'delete'),
(41, 'Информатика', 'Информатика', 'delete'),
(42, 'Информатика', 'Информатика', 'delete'),
(43, 'Информатика', 'Информатика', 'delete'),
(44, 'Информатика', 'Информатика', 'delete'),
(45, 'Информатика', 'Информатика', 'delete'),
(46, 'Информатика', 'Информатика', 'delete'),
(47, 'Информатика', 'Информатика', 'delete'),
(48, 'Информатика', 'Информатика', 'delete'),
(49, 'Информатика', 'Информатика', 'delete'),
(50, 'Информатика', 'Информатика', 'delete'),
(51, 'Информатика', 'Информатика', 'delete'),
(52, 'Информатика', 'Информатика', 'delete'),
(53, 'Информатика', 'Информатика', 'delete'),
(54, 'Информатика', 'Информатика', 'delete'),
(55, 'Информатика', 'Информатика', 'delete'),
(56, 'Информатика', 'Информатика', 'delete'),
(57, 'Информатика', 'Информатика', 'delete'),
(58, 'Информатика', 'Информатика', 'delete'),
(59, 'Информатика', 'Информатика', 'delete'),
(60, 'Информатика', 'Информатика', 'delete'),
(61, 'Информатика', 'Информатика', 'delete'),
(62, 'Информатика', 'Информатика', 'active'),
(63, 'Математика', 'Математика', 'active'),
(64, 'Информатика', 'Информатика', 'active'),
(65, 'Информатика', 'Информатика', 'active'),
(66, 'Информатика', 'Информатика', 'active'),
(67, 'Информатика', 'Информатика', 'active'),
(68, 'Информатика', 'Математика', 'active'),
(69, 'Информатика', 'Информатика', 'active'),
(70, 'Информатика', 'Информатика', 'delete'),
(71, 'Информатика', 'Информатика', 'delete'),
(72, 'Фило', 'Информатика', 'active'),
(73, 'Фило', 'Информатика', 'delete'),
(74, 'Фило', 'Информатика', 'delete'),
(75, 'Информатика', 'Информатика', 'active'),
(76, 'Математика', 'Информатика', 'active');

-- --------------------------------------------------------

--
-- Структура таблицы `course_level`
--

CREATE TABLE `course_level` (
  `id_course_level` int(11) NOT NULL,
  `id_level` int(11) NOT NULL,
  `id_cours` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `course_level`
--

INSERT INTO `course_level` (`id_course_level`, `id_level`, `id_cours`) VALUES
(9, 1, 1),
(16, 1, 2),
(32, 5, 27),
(33, 1, 27),
(34, 3, 27),
(35, 1, 28),
(36, 3, 28),
(37, 1, 29),
(38, 1, 29),
(39, 3, 29),
(40, 1, 33),
(41, 3, 34),
(42, 1, 35),
(43, 1, 36),
(44, 1, 37),
(45, 1, 38),
(46, 1, 39),
(47, 1, 40),
(48, 1, 41),
(49, 1, 42),
(50, 1, 43),
(51, 1, 44),
(52, 3, 48),
(53, 3, 49),
(55, 5, 52),
(56, 5, 53),
(57, 1, 55),
(58, 1, 56),
(59, 1, 57),
(60, 1, 58),
(61, 1, 59),
(62, 1, 60),
(63, 1, 61),
(64, 1, 45),
(65, 1, 46),
(66, 3, 46),
(67, 1, 47),
(68, 3, 1),
(69, 3, 47),
(70, 1, 51),
(71, 3, 51),
(72, 1, 54),
(73, 3, 54),
(74, 5, 54),
(75, 1, 70),
(76, 3, 71),
(77, 3, 72),
(78, 3, 73),
(79, 3, 74),
(80, 1, 75),
(81, 1, 76);

-- --------------------------------------------------------

--
-- Структура таблицы `course_teacher`
--

CREATE TABLE `course_teacher` (
  `id_cours_teacher` int(11) NOT NULL,
  `id_cours` int(11) NOT NULL,
  `id_teacher` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `course_teacher`
--

INSERT INTO `course_teacher` (`id_cours_teacher`, `id_cours`, `id_teacher`) VALUES
(1, 2, 1),
(3, 2, 1),
(4, 2, 1),
(5, 2, 3),
(6, 75, 1),
(7, 75, 3),
(8, 2, 6),
(9, 72, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `exam`
--

CREATE TABLE `exam` (
  `id_exam` int(11) NOT NULL,
  `id_studentFK` int(11) NOT NULL,
  `id_courseFK` int(11) NOT NULL,
  `mark` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `id_exam_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `exam_type`
--

CREATE TABLE `exam_type` (
  `id_exam_type` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `grade`
--

CREATE TABLE `grade` (
  `id_grade` int(11) NOT NULL,
  `gradeName` varchar(70) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `grade`
--

INSERT INTO `grade` (`id_grade`, `gradeName`, `description`) VALUES
(1, 'Начальная школа', 'ава'),
(3, 'Secondary', 'Secondary'),
(5, 'ddf', 'fdfgf');

-- --------------------------------------------------------

--
-- Структура таблицы `parent`
--

CREATE TABLE `parent` (
  `id_parent` int(11) NOT NULL,
  `Firstname` varchar(30) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `position` varchar(255) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `picture` varchar(300) NOT NULL,
  `id_studentFK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `schedule`
--

CREATE TABLE `schedule` (
  `id_schedule` int(11) NOT NULL,
  `id_teacher` int(11) NOT NULL,
  `id_subject` int(11) NOT NULL,
  `dateSchedule` date NOT NULL,
  `id_grade` int(11) NOT NULL,
  `Time` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `schedule`
--

INSERT INTO `schedule` (`id_schedule`, `id_teacher`, `id_subject`, `dateSchedule`, `id_grade`, `Time`) VALUES
(4, 1, 2, '2021-06-20', 1, '10:15-11:50'),
(5, 1, 2, '2021-06-20', 1, '12:00-13:30'),
(41, 1, 2, '2021-06-20', 1, '08:30-10:05'),
(42, 1, 2, '2021-06-20', 1, '14:00-15:30'),
(43, 1, 75, '2021-06-20', 1, '08:30-10:05'),
(44, 1, 75, '2021-06-20', 1, '10:15-11:50'),
(45, 1, 75, '2021-06-20', 1, '12:00-13:30'),
(46, 1, 75, '2021-06-20', 1, '14:00-15:30'),
(49, 1, 75, '2021-06-20', 1, '17:35-19:10'),
(50, 3, 2, '2021-06-21', 1, '08:30-10:05'),
(51, 3, 2, '2021-06-21', 1, '10:15-11:50'),
(52, 3, 2, '2021-06-20', 1, '12:00-13:30'),
(54, 1, 75, '2021-06-20', 1, '15:50-17:25'),
(55, 1, 72, '2021-06-20', 3, '08:30-10:05'),
(56, 1, 72, '2021-06-22', 3, '08:30-10:05'),
(57, 1, 72, '2021-06-22', 3, '10:15-11:50'),
(58, 1, 75, '2021-06-21', 1, '10:15-11:50'),
(59, 6, 2, '2021-06-22', 1, '08:30-10:05'),
(60, 3, 2, '2021-06-25', 1, '14:00-15:30'),
(63, 6, 2, '2021-06-22', 1, '10:15-11:50'),
(64, 1, 75, '2021-06-22', 1, '12:00-13:30'),
(65, 1, 75, '2021-06-21', 1, '12:00-13:30'),
(66, 3, 75, '2021-06-23', 1, '10:15-11:50'),
(67, 1, 75, '2021-06-21', 1, '15:50-17:25'),
(68, 1, 72, '2021-06-24', 3, '12:00-13:30'),
(69, 3, 75, '2021-06-23', 1, '08:30-10:05'),
(70, 3, 75, '2021-06-23', 1, '12:00-13:30');

-- --------------------------------------------------------

--
-- Структура таблицы `student`
--

CREATE TABLE `student` (
  `id_student` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `Firstname` varchar(30) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  `dateBirth` date NOT NULL,
  `status` varchar(30) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `picture` varchar(300) DEFAULT NULL,
  `EnrollementDate` date NOT NULL,
  `id_grade` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `student`
--

INSERT INTO `student` (`id_student`, `name`, `Firstname`, `Lastname`, `dateBirth`, `status`, `phone`, `picture`, `EnrollementDate`, `id_grade`) VALUES
(1, 'alse', 'secon', 'lol', '2021-05-31', 'delete', '+79017498418', NULL, '2021-06-02', 1),
(2, 'alse', 'вы', 'lol', '2021-06-03', 'delete', '+79017498417', NULL, '2021-06-02', 1),
(3, 'alse', 'pop', 'lol', '2021-06-03', 'delete', '+79017498418', NULL, '2021-06-02', 1),
(4, 'alse', 'secondy', 'lol', '2016-06-02', 'delete', '+79017498417', 'uploads/cat1.jpg', '2021-06-13', 1),
(5, 'alse', 'secondy', 'lol', '2021-06-03', 'delete', '+79017498417', NULL, '2021-06-02', 1),
(6, 'alse', 'secondy', 'lol', '2021-06-03', 'Учиться', '+79017498417', 'uploads/DK.jpg', '2021-06-13', 1),
(7, 'alse', 'secondy', 'lol', '2021-06-03', 'delete', '+79017498417', NULL, '2021-06-02', 1),
(8, 'alse', 'secondy', 'lol', '2021-06-03', 'Учиться', '+79017498417', 'uploads/belgorod.JPEG', '2021-06-13', 1),
(9, 'alse', 'secondy', 'lol', '2021-06-03', 'Учиться', '+79017498417', 'uploads/slide2.jpeg', '2021-06-13', 1),
(10, 'Mohamed', 'Kaba', 'Kaba', '2000-06-01', 'delete', '+79017498418', NULL, '2021-06-02', 1),
(11, 'Camara', 'alseny', 'Alseny', '2019-02-01', 'delete', '7879870', NULL, '2021-06-02', 1),
(12, 'Alseny', 'Camara', '', '2015-01-02', 'delete', '79017498418', NULL, '2021-06-02', 1),
(13, 'куц', 'куце', '', '2021-06-01', 'delete', '546547586', NULL, '2021-06-03', 1),
(14, 'Сеня', 'Петров', 'Петрович', '2017-01-09', 'delete', '+79017498418', NULL, '2021-06-10', 1),
(15, 'img', 'test', '', '2021-06-01', 'Учиться', '+7890345456', 'uploads/toi.jpg', '2021-06-13', 1),
(17, 'level', 'level', '', '2021-06-09', 'Учиться', '+79047560768', 'uploads/cat1.jpg', '2021-06-13', 3),
(18, 'conde', 'conde', '', '2021-06-03', 'Учиться', '7879854657', 'uploads/4261.jpg', '2021-06-19', 3),
(19, 'Абдурахман', 'выа', 'Ба', '2021-06-02', 'Учиться', '+79205915588', 'uploads/p.jpg', '2021-07-12', 1),
(20, 'Абдурахман', 'выа', 'Ба', '2021-06-10', 'delete', '+79205915588', 'uploads/246641_big.jpg', '2021-06-19', 1),
(21, 'Роналдо', 'Роналдо', 'Роналдо', '2005-02-01', 'delete', '+79841023080', 'uploads/4261.jpg', '2021-06-21', 3),
(22, 'Camara', 'alseny', '', '2021-07-12', 'delete', '+7901841784', 'uploads/', '2021-07-12', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `teacher`
--

CREATE TABLE `teacher` (
  `id_teacher` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `Firstname` varchar(30) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  `dateBirth` date DEFAULT NULL,
  `phone` varchar(13) NOT NULL,
  `picture` varchar(300) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `teacher`
--

INSERT INTO `teacher` (`id_teacher`, `name`, `Firstname`, `Lastname`, `dateBirth`, `phone`, `picture`, `status`) VALUES
(1, 'Mariam', 'Sanoh', '', '2006-06-15', '+224901756601', 'uploads/4261.jpg', 'active'),
(3, 'Абдурахман', 'Ба', '', '2021-06-03', '+7890345456', 'uploads/246641_big.jpg', 'active'),
(4, 'ВВЫП', 'аывп', 'ВАВА', '2021-06-01', '6567869684', NULL, 'delete'),
(5, 'fsdgd', 'fsdfg', 'estret', '2021-05-31', '3534565467558', NULL, 'delete'),
(6, 'Махиса', 'Ба', '', '2016-11-24', '4324354364576', 'uploads/246641_big.jpg', 'active'),
(7, 'пваавп', 'авапва', 'ав', '2021-06-07', '44354554765', NULL, 'delete');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `Firstname` varchar(30) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(70) NOT NULL,
  `privilege` varchar(10) NOT NULL,
  `samplePassword` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id_user`, `name`, `Firstname`, `Lastname`, `email`, `password`, `privilege`, `samplePassword`) VALUES
(1, '', 'Alseny', 'Camara', 'camara.alseny@yandex.ru', '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8', 'Admin', 'd4P2rW');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id_cours`);

--
-- Индексы таблицы `course_level`
--
ALTER TABLE `course_level`
  ADD PRIMARY KEY (`id_course_level`),
  ADD KEY `id_level` (`id_level`),
  ADD KEY `id_cours` (`id_cours`);

--
-- Индексы таблицы `course_teacher`
--
ALTER TABLE `course_teacher`
  ADD PRIMARY KEY (`id_cours_teacher`),
  ADD KEY `id_cours` (`id_cours`),
  ADD KEY `id_teacher` (`id_teacher`);

--
-- Индексы таблицы `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`id_exam`),
  ADD KEY `id_exam_type` (`id_exam_type`),
  ADD KEY `id_studentFK` (`id_studentFK`);

--
-- Индексы таблицы `exam_type`
--
ALTER TABLE `exam_type`
  ADD PRIMARY KEY (`id_exam_type`);

--
-- Индексы таблицы `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`id_grade`);

--
-- Индексы таблицы `parent`
--
ALTER TABLE `parent`
  ADD PRIMARY KEY (`id_parent`),
  ADD KEY `id_studentFK` (`id_studentFK`);

--
-- Индексы таблицы `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id_schedule`),
  ADD KEY `id_grade` (`id_grade`),
  ADD KEY `id_subject` (`id_subject`),
  ADD KEY `id_teacher` (`id_teacher`);

--
-- Индексы таблицы `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id_student`),
  ADD KEY `id_grade` (`id_grade`);

--
-- Индексы таблицы `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id_teacher`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `course`
--
ALTER TABLE `course`
  MODIFY `id_cours` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT для таблицы `course_level`
--
ALTER TABLE `course_level`
  MODIFY `id_course_level` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT для таблицы `course_teacher`
--
ALTER TABLE `course_teacher`
  MODIFY `id_cours_teacher` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `exam`
--
ALTER TABLE `exam`
  MODIFY `id_exam` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `exam_type`
--
ALTER TABLE `exam_type`
  MODIFY `id_exam_type` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `grade`
--
ALTER TABLE `grade`
  MODIFY `id_grade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `parent`
--
ALTER TABLE `parent`
  MODIFY `id_parent` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id_schedule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT для таблицы `student`
--
ALTER TABLE `student`
  MODIFY `id_student` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id_teacher` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `course_level`
--
ALTER TABLE `course_level`
  ADD CONSTRAINT `course_level_ibfk_1` FOREIGN KEY (`id_level`) REFERENCES `grade` (`id_grade`),
  ADD CONSTRAINT `course_level_ibfk_2` FOREIGN KEY (`id_cours`) REFERENCES `course` (`id_cours`);

--
-- Ограничения внешнего ключа таблицы `course_teacher`
--
ALTER TABLE `course_teacher`
  ADD CONSTRAINT `course_teacher_ibfk_1` FOREIGN KEY (`id_cours`) REFERENCES `course` (`id_cours`),
  ADD CONSTRAINT `course_teacher_ibfk_2` FOREIGN KEY (`id_teacher`) REFERENCES `teacher` (`id_teacher`);

--
-- Ограничения внешнего ключа таблицы `exam`
--
ALTER TABLE `exam`
  ADD CONSTRAINT `exam_ibfk_1` FOREIGN KEY (`id_exam_type`) REFERENCES `exam_type` (`id_exam_type`),
  ADD CONSTRAINT `exam_ibfk_2` FOREIGN KEY (`id_studentFK`) REFERENCES `student` (`id_student`);

--
-- Ограничения внешнего ключа таблицы `parent`
--
ALTER TABLE `parent`
  ADD CONSTRAINT `parent_ibfk_1` FOREIGN KEY (`id_studentFK`) REFERENCES `student` (`id_student`);

--
-- Ограничения внешнего ключа таблицы `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`id_grade`) REFERENCES `grade` (`id_grade`),
  ADD CONSTRAINT `schedule_ibfk_2` FOREIGN KEY (`id_subject`) REFERENCES `course` (`id_cours`),
  ADD CONSTRAINT `schedule_ibfk_3` FOREIGN KEY (`id_teacher`) REFERENCES `teacher` (`id_teacher`);

--
-- Ограничения внешнего ключа таблицы `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`id_grade`) REFERENCES `grade` (`id_grade`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
