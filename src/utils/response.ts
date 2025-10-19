import { Response } from 'express';

export function success(res: Response, data: any, message: string) {
    res.status(200).json({
        meta: {
            status: 'success',
            message,
        },
        data,
    });
};

export function errorNotFound(res: Response, message: string) {
    res.status(404).json({
        meta: {
            status: 'error',
            message,
        },
    });
};

export function errorServer(res: Response, message: string) {
    res.status(500).json({
        meta: {
            status: 'error',
            message,
        },
    });
};