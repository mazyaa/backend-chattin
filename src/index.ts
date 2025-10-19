import express from 'express';
import { createServer } from 'http';
import { Request, Response } from 'express';
import config from './config/index';
import cors from 'cors';
import router from './routes/api';

const main = () => {
    const app = express();
    const server = createServer(app);

    app.use(cors());
    app.use(express.json());

    app.use('/api', router);
    
    app.listen(config.port, () => {
        console.log(`Server is running on port http://localhost:${config.port}/api in ${config.nodeEnv} mode.`);
    });
}

main();