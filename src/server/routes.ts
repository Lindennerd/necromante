import { Router } from "express";
import { amqp } from "./amqp";

const router = Router();
const amqpClient = amqp();

router.get("/queue", async (_, res) => {
  try {
    const queues = await amqpClient.listQueues();
    res.json(queues);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
});

router.get("/queue/:queueName", async (req, res) => {
  try {
    const { queueName } = req.params;
    const messages = await amqpClient.getQueue({ queueName });
    res.json({ messages });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/queue/:queueName", async (req, res) => {
  try {
    const { queueName } = req.params;
    await amqpClient.publishMessage({ queueName, message: req.body });
    res.json({ message: `Message sent to ${queueName}` });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

export default router;
