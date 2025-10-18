import express from 'express';
import { createServer } from 'http';
import type{ Request, Response } from 'express';
import config from './config';

const main = () => {
    const app = express();
    const server = createServer(app);

    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
        res.send('Hello, World!');
    });
    
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port} in ${config.nodeEnv} mode.`);
    });
}

main();