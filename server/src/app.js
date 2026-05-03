const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const { getUsers, addUser } = require("../data/users");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.post("/api/orders", (req, res) => {
  console.log(req.body);

  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  res.status(201).json({
    message: "Заказ получен",
    orderNumber,
    order: req.body,
  });
});

app.post("/api/auth/register", async (req, res) => {
  console.log(req.body);

  const { fullName, email, phone, password, confirmPassword } = req.body;

  if (!fullName || !email || !phone || !password || !confirmPassword) {
    return res.status(400).json({
      message: "Заполните все поля",
    });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedFullName = fullName.trim();

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Пароли не совпадают!",
    });
  }

  const existingUser = getUsers().find(
    (registeredUser) => registeredUser.email === normalizedEmail,
  );

  if (existingUser) {
    return res.status(409).json({
      message: "Пользователь с таким email уже существует",
    });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = {
    fullName: normalizedFullName,
    email: normalizedEmail,
    phone: phone,
    passwordHash: passwordHash,
  };

  const createdUser = addUser(newUser);

  const userWithoutPassword = {
    fullName: createdUser.fullName,
    email: createdUser.email,
    phone: createdUser.phone,
  };

  res.status(201).json({
    message: "Регистрация успешно пройдена",
    user: userWithoutPassword,
  });
});

app.post("/api/auth/login", async (req, res) => {
  console.log(req.body);

  const { emailOrPhone, password } = req.body;

  if (!emailOrPhone || !password) {
    return res.status(400).json({
      message: "Заполните все поля!",
    });
  }

  const normalizedEmailOrPhone = emailOrPhone.trim().toLowerCase();
  const normalizedPhoneInput = emailOrPhone.trim();

  const existingUser = getUsers().find(
    (registeredUser) =>
      registeredUser.email === normalizedEmailOrPhone ||
      registeredUser.phone === normalizedPhoneInput,
  );

  if (!existingUser) {
    return res.status(401).json({
      message: "Неверный E-mail/телефон или пароль",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.passwordHash,
  );

  if (!isPasswordCorrect) {
    return res.status(401).json({
      message: "Неверный E-mail/телефон или пароль",
    });
  }

  const userWithoutPassword = {
    fullName: existingUser.fullName,
    phone: existingUser.phone,
    email: existingUser.email,
  };

  res.status(200).json({
    message: "Вы успешно вошли в аккаунт!",
    user: userWithoutPassword,
  });
});

module.exports = app;
