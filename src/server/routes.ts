import { Router } from "express";
import { amqp } from "./amqp";

const router = Router();
const amqpClient = amqp();

router.get("/queue", async (_, res) => {
  try {
    const queues = await amqpClient.listQueues();
    res.json(queues);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("/queue/:queueName", async (req, res) => {
  try {
    const { queueName } = req.params;
    await amqpClient.getQueue({ queueName });
    res.json({ message: `Listening to ${queueName}` });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/queue/:queueName", async (req, res) => {
  try {
    const { queueName } = req.params;
    const { message } = req.body;
    await amqpClient.publishMessage({ queueName, message });
    res.json({ message: `Message sent to ${queueName}` });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

export default router;
