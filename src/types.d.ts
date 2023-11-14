import { type Channel, type Connection } from "amqplib";

export type AMQPContext = {
  channel: Channel;
  connection: Connection;
};
