import  express  from "express";
import {admin, fetchPriceList, helloworld,login, payment, savePriceList, subscibed} from "../controller/admin.js" 
import { checkAuth } from "../middleware/checkAuth.js"

const router=express.Router();

router.post('/signup',checkAuth,admin)
router.get('/',helloworld)
// router.post('/checkout',checkout)
// router.post('/subscription',subscription)
router.post('/login',checkAuth,login)
router.post('/payment',checkAuth,payment)
router.patch('/subscibed/:id',checkAuth,subscibed)

router.post('/savepricelist',checkAuth,savePriceList)
router.post('/fetchpricelist',fetchPriceList)



export default router;