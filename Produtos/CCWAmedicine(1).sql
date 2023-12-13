-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 13/12/2023 às 13:07
-- Versão do servidor: 8.0.35-0ubuntu0.22.04.1
-- Versão do PHP: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `CCWAmedicine`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `user_id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `CEP` varchar(50) NOT NULL,
  `user_type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `cadastro`
--

INSERT INTO `cadastro` (`user_id`, `username`, `password`, `cpf`, `telefone`, `email`, `sexo`, `CEP`, `user_type`) VALUES
(1, 'dgfgf', '1212', '', '', '', '', '', NULL),
(2, 'cas', 'caca', '', '', '', '', '', NULL),
(3, 'wellington', 'jesus', '', '', '', '', '', NULL),
(4, 'caioba', '1010', '', '', '', '', '', NULL),
(5, 'caki', '1010', '', '', '', '', '', NULL),
(6, 'caike.caio', '123', '', '', '', '', '', NULL),
(7, 'caike.caio', '123', '', '', '', '', '', NULL),
(8, 'caike.caio', '', '', '', '', '', '', NULL),
(9, 'teste', '123', '222.222.222-22', '222222222', 'caik@gmail.com', 'masculino', '12345-678', NULL),
(10, 'eduardo', 'pimen', '123.567.999-33', '199888888', 'pimen@gmail.com', 'masculino', '12345-786', NULL),
(11, 'Caike', 'aluno', '133.245.345-46', '(23) 42453-4534', 'caike@gmail.com', 'masculino', '253454356', NULL),
(12, 'Caikeafcs', '123', '435.345.636-65', '(32) 65364-6626', 'sffdfvgdfv', 'outro', '2534534563', NULL),
(13, 'svgsrvg', '321', '454.235.234-53', '(43) 22222-2222', 'fddddddddd', 'masculino', '1111111111111', NULL),
(14, 'svgsrvg', '321', '454.235.234-53', '(43) 22222-2222', 'fddddddddd', 'masculino', '1111111111111', NULL),
(15, 'Caike', 'aluno', '444.444.444-44', '(66) 66666-6666', 'trgthtnh', 'masculino', '67777777777', 'user'),
(16, 'Kamile', 'aluno', '123', '123', 'gbb', 'teste', '123]', 'admin'),
(17, 'Davi', 'aluno', 'teste', 'teste', 'teste', 'teste', 'teste', 'medico'),
(18, 'Carol', 'aluno', 'teste', 'teste', 'teste', 'teste', 'teste', 'teste'),
(19, 'Stefany', 'aluno', 'teste', 'teste', 'teste', 'teste', 'teste', 'user'),
(20, 'caio', '2020', '519.889.898-98', '(19) 08989-8989', 'caiof@gmail', 'masculino', '12121212', 'user'),
(21, 'caio felipe', '', '519.889.898-98', '(19) 08989-8989', 'caiof@gmail.com', 'masculino', '12121212', 'user'),
(22, 'caio felipe vieira', '', '519.889.898-76', '(19) 08989-8989', 'caiofel@gmail.com', 'masculino', '12121212', 'user'),
(23, 'dskljabdkjas', '1212', '122.222.222-22', '(21) 31212-3213', 'caca@gmail', 'feminino', '123122231', 'user'),
(24, 'davoi', '123', '122.222.222-22', '(21) 31212-3213', 'davo@gmail.com', 'feminino', '123122231', 'user'),
(25, 'davoifg', '123', '122.222.222-22', '(21) 31212-3213', 'davoi@gmail.com', 'feminino', '123122231', 'user'),
(26, 'davoifgasd', '1010', '122.222.222-22', '(21) 31212-3213', 'davodsai@gmail.com', 'feminino', '123122231', 'user'),
(27, 'davoifgasdfdsa', '', '122.222.222-22', '(21) 31212-3213', 'davods12ai@gmail.com', 'feminino', '123122231', 'user'),
(28, 'cacausdhsajhd2', '1212', '', '', 'cacahbs@gmail', '', '', 'user'),
(29, 'cacausdhsajhd2dsadasdas', '', '111.111.111-11', '(11) 11111-1111', 'cacahbsas@gmail.cjkcjc', 'outro', '111111111111', 'user'),
(30, 'Ameixa do Nascimento', '12345678', '473.996.468-64', '(19) 98772-3587', 'ameixa@gmail.com', 'outro', '13386022', 'user'),
(31, 'milena', '1234567', '444.444.444-44', '(88) 88888-8888', 'mi.@gmail.com', 'feminino', '55643-568', 'user'),
(32, 'matheus', '88888888', '111.111.111-11', '(11) 11111-1111', 'matheus@outlook.com', 'masculino', '11111-111', 'user'),
(33, 'caioo', '', '999.999.999-99', '(19) 98995-6730', 'caioo@gmail', 'masculino', '99999-999', 'user'),
(34, 'ANA', 'anaa', '234.325.435-67', '(35) 56678-7989', 'anajulia@gmail.com', 'feminino', '12334-545', 'user'),
(35, 'eduardola', '', '122.222.222-22', '(11) 11111-1111', 'eduardola@gmail', 'masculino', '12222-222', 'user'),
(36, 'Paciente', 'teste', '111.111.111-11', '(11) 11111-1111', 'sla@gmail.com', 'outro', '11111-111', 'user'),
(37, 'Admin', 'teste', '222.222.222-22', '(22) 22222-2222', 'admin@gmail.com', 'outro', '22222-222', 'user'),
(38, 'Admin', 'teste', '[value-4]', '[value-5]', '[value-6]', '[value-7]', '[value-8]', '[value-9]'),
(39, 'Administrador', 'aluno', '[value-4]', '[value-5]', '[value-6]', '[value-7]', '[value-8]', 'admin'),
(40, 'Medico', 'aluno', '[value-4]', '[value-5]', '[value-6]', '[value-7]', '[value-8]', 'medico');

-- --------------------------------------------------------

--
-- Estrutura para tabela `consultas`
--

CREATE TABLE `consultas` (
  `id` int NOT NULL,
  `nome_paciente` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `data_consulta` date NOT NULL,
  `hora_consulta` time NOT NULL,
  `especialista` text,
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `consultas`
--

INSERT INTO `consultas` (`id`, `nome_paciente`, `data_consulta`, `hora_consulta`, `especialista`, `criado_em`) VALUES
(2, 'Caio Felipe', '2023-12-26', '11:30:00', 'Cardiologista', NULL),
(3, 'Caio', '2023-12-22', '10:50:00', 'Cardiologista', NULL),
(4, 'Davi', '2023-12-26', '12:30:00', 'Oftalmologista', NULL),
(5, 'Davi', '2023-12-26', '11:30:00', 'Oftalmologista', NULL),
(6, 'Davi', '2023-12-26', '11:30:00', 'Oftalmologista', NULL),
(7, 'Davi', '2023-12-26', '11:30:00', 'Oftalmologista', NULL),
(8, 'Davi', '2023-12-26', '11:30:00', 'Oftalmologista', NULL),
(9, 'Giovanna', '2023-12-27', '13:00:00', 'Ginecologista', NULL),
(10, 'Giovanna', '2023-12-27', '13:00:00', 'Ginecologista', NULL),
(11, 'Giovanna', '2023-12-27', '13:00:00', 'Ginecologista', NULL),
(12, 'Giovanna', '2023-12-27', '13:00:00', 'Ginecologista', NULL),
(13, 'Giovanna', '2023-12-27', '13:00:00', 'Ginecologista', NULL),
(14, 'Giovanna', '2023-12-27', '14:00:00', 'Ginecologista', NULL),
(15, 'Giovanna', '2023-12-27', '14:00:00', 'Ginecologista', NULL),
(16, 'Giovanna', '2023-12-27', '14:00:00', 'Ginecologista', NULL),
(17, 'CAike', '2023-12-29', '11:00:00', 'Cardiologista', NULL),
(18, 'CAike', '2023-12-29', '11:00:00', 'Cardiologista', NULL),
(19, 'Ameixa do Nascimento', '2024-11-28', '05:45:00', 'Oftalmologista', NULL),
(20, 'Adria', '2023-12-27', '10:58:00', 'Ginecologista', NULL),
(21, 'milena', '2024-03-18', '14:50:00', 'Cardiologista', NULL),
(22, 'ANA', '2023-12-05', '10:14:00', 'Ortopedico(a)', NULL),
(23, 'eduardo', '2023-12-29', '13:35:00', 'Oftalmologista', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `login`
--

CREATE TABLE `login` (
  `login_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `last_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `login`
--

INSERT INTO `login` (`login_id`, `user_id`, `last_login`) VALUES
(1, 1, '2023-10-18 08:19:43'),
(2, 2, '2023-10-18 08:20:09'),
(3, 3, '2023-10-20 07:49:40'),
(4, 4, '2023-10-20 07:53:53'),
(5, 5, '2023-10-20 08:17:41'),
(6, 6, '2023-10-20 08:27:45'),
(7, 7, '2023-10-20 08:32:37'),
(8, 8, '2023-10-20 08:32:50'),
(9, 9, '2023-10-20 09:46:45'),
(10, 10, '2023-10-20 09:51:48'),
(11, 11, '2023-11-11 09:02:05'),
(12, 12, '2023-11-11 09:05:50'),
(13, 13, '2023-11-11 09:07:39'),
(14, 14, '2023-11-11 09:10:11'),
(15, 15, '2023-11-22 07:38:50'),
(16, 20, '2023-12-08 09:43:16'),
(17, 21, '2023-12-08 09:44:25'),
(18, 22, '2023-12-08 09:48:33'),
(19, 23, '2023-12-08 09:53:44'),
(20, 24, '2023-12-08 09:56:53'),
(21, 25, '2023-12-08 09:58:31'),
(22, 26, '2023-12-08 09:59:19'),
(23, 27, '2023-12-08 10:02:06'),
(24, 28, '2023-12-08 10:02:53'),
(25, 29, '2023-12-08 10:06:43'),
(26, 30, '2023-12-08 13:35:02'),
(27, 31, '2023-12-13 07:56:58'),
(28, 32, '2023-12-13 07:58:33'),
(29, 33, '2023-12-13 08:06:52'),
(30, 34, '2023-12-13 08:10:38'),
(31, 35, '2023-12-13 08:29:23'),
(32, 36, '2023-12-13 12:46:22'),
(33, 37, '2023-12-13 12:48:35');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`user_id`);

--
-- Índices de tabela `consultas`
--
ALTER TABLE `consultas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de tabela `consultas`
--
ALTER TABLE `consultas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `login_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `cadastro` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
