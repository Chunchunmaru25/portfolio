import express from 'express'
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { BACKEND_URL } from './src/config/env.js';

import { arcjetMiddleware } from './src/midlleware/arcjet.middleware.js';
import projectRouter from './src/routes/projects.router.js';
import indexRouter from './src/routes/index.router.js';
import achievementRouter from './src/routes/achievement.router.js';
import educationRouter from './src/routes/education.router.js';
import experienceRouter from './src/routes/experience.router.js';
import softSkillsRouter from './src/routes/softSkills.router.js';
import backendSkillsRouter from './src/routes/backendSkills.router.js';
import frontendSkillsRouter from './src/routes/frontendSkills.js';
import personalRouter from './src/routes/personal.router.js';
import techStackRouter from './src/routes/techStack.router.js';
import AuthRouter from './src/routes/auth.router.js';

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:5173",
        BACKEND_URL
    ],
    credentials: true,
}));

// app.use(arcjetMiddleware);

app.use('/', indexRouter);
app.use('/projects', projectRouter);
app.use('/achievements', achievementRouter);
app.use('/education', educationRouter);
app.use('/experience', experienceRouter);
app.use('/soft-skills', softSkillsRouter);
app.use('/backend-skills', backendSkillsRouter);
app.use('/frontend-skills', frontendSkillsRouter);
app.use('/personal', personalRouter);
app.use('/tech-stack', techStackRouter);
app.use('/auth', AuthRouter);


export default app;