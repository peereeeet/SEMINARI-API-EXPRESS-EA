import express from 'express';
import * as userServices from '../services/userServices';

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const data = await userServices.getEntries.getAll();
        return res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unknown error occurred' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await userServices.getEntries.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unknown error occurred' });
    }
});

router.delete('/delParticipante/:idUser/:idExp', async(req, res) => {
    try {
        const data = await userServices.getEntries.delExperiencies(req.params.idUser, req.params.idExp);
        if (!data) {
            return res.status(404).json({ message: 'Experience or User not found' });
        }
        return res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unknown error occurred' });
    }
});

router.post('/', async (req, res) => {
    try {
        const data = await userServices.getEntries.create(req.body);
        return res.status(201).json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unknown error occurred' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = await userServices.getEntries.update(req.params.id, req.body);
        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unknown error occurred' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await userServices.getEntries.delete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unknown error occurred' });
    }
});

router.get('/:userId/experiences', async (req, res) => {
    try {
        const experiences = await userServices.getEntries.getUserExperiences(req.params.userId);
        if (!experiences) {
            return res.status(404).json({ message: 'Experiences not found' });
        }
        return res.json(experiences);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unknown error occurred' });
    }
});

export default router;
