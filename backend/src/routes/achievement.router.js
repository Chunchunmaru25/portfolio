import express from 'express';
import {
    addAchievement,
    getAchievement,
    updateAchievement,
    deleteAchievement
} from '../controllers/resume/achievement.controller.js';

const router = express.Router();

router.post('/', addAchievement);
router.get('/', getAchievement);
router.patch('/:id', updateAchievement);
router.delete('/:id', deleteAchievement);

export default router;