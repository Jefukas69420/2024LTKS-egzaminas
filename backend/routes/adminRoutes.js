import express from 'express';

import {promoteToAdmin, demoteFromAdmin, getUsers} from '../controllers/authController.js';
import { isAdmin } from '../Helpers/auth.js';
import {createProduct, deleteProduct} from '../controllers/productController.js';

const router = express.Router();
// Only admins can create a new product
router.post('/product/create', createProduct);

// Only admins can delete a product
router.delete('/product/delete/:productID', isAdmin, deleteProduct);

// Admin can promote another user to admin
router.post('/promote', isAdmin, promoteToAdmin);

// Admin can demote another user from admin
router.post('/demote', isAdmin, demoteFromAdmin);

router.get('/users', getUsers, isAdmin);
export default router;
