import { type Channel, type Connection } from "amqplib";

export type AMQPContext = {
  channel: Channel;
  connection: Connection;
};

export type Message = {
  fields: ConsumeMessage["fields"];
  properties: ConsumeMessage["properties"];
  content: string;
};
