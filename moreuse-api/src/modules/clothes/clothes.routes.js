const express = require('express');
const router = express.Router();
const clothesCtrl = require('./clothes.controller');
const authVerify = require('../../middlewares/authVerify');
const authOptional = require('../../middlewares/authOptional');

router.post('/add', authVerify, clothesCtrl.add);
router.get('/', authOptional, authVerify, clothesCtrl.getAll);
router.get('/detail/:id', clothesCtrl.getDetail);
router.get('/myStuff', authVerify, clothesCtrl.getMyStuff);
router.patch('/changeStatus/:id', clothesCtrl.changeStatus);
router.put('/:id', authVerify, clothesCtrl.update);

module.exports = router;



