const express = require('express');
const router = express.Router();

router.get('/req', (req, res) => {
    res.send('Страница регистрации');
});
router.get('/auth', (req, res) => {
    res.send('Страница авторизации');
});
router.get('/dashboard', (req, res) => {
    res.send('Страница пользователя');
});

module.exports = router;