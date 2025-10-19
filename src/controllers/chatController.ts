import { Request, Response } from 'express';
import * as response from '../utils/response';


export function testAPI(_req: Request, res: Response) {
    return response.success(
        res,
        null,
        'testtting massbroo'
    );
};