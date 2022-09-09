const express = require('express');
const authCtrl = require('../controllers/auth.controller');
const userCtrl = require('../controllers/user.controller');
const postCtrl = require('../controllers/post.controller');
const router = express.Router();

router.route('/api/posts/feed/:userId')
    .get(authCtrl.requireSignin,postCtrl.listNewsFeed)

router.route('/api/posts/by/:userId')
    .get(authCtrl.requireSignin,postCtrl.listByUser)

router.route('/api/posts/new/:userId')
    .post(authCtrl.requireSignin,postCtrl.create)

router.route('/api/posts/photo/:postId').get(postCtrl.photo)



router.param('userId',userCtrl.userByID)
router.param('postId',postCtrl.postByID)

module.exports = router