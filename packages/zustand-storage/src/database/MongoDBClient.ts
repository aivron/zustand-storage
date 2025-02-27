// src/database/MongoDBClient.ts

import { MongoClient, Db, Collection, InsertOneResult } from 'mongodb';
import { DatabaseClient } from './IDatabaseClient';

export class MongoDBClient implements DatabaseClient {
  private client: MongoClient;
  private db?: Db;

  constructor(private uri: string, private dbName: string) {
    // Removed unsupported options from MongoClientOptions.
    this.client = new MongoClient(this.uri);
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.client.close();
    } catch (error) {
      console.error("MongoDB disconnection error:", error);
      throw error;
    }
  }

  private getCollection(collectionName: string): Collection {
    if (!this.db) {
      throw new Error("Database not connected");
    }
    return this.db.collection(collectionName);
  }

  async find(collectionName: string, query: object): Promise<any[]> {
    try {
      const collection = this.getCollection(collectionName);
      return await collection.find(query).toArray();
    } catch (error) {
      console.error("MongoDB find error:", error);
      throw error;
    }
  }

  async insert(collectionName: string, data: object): Promise<any> {
    try {
      const collection = this.getCollection(collectionName);
      const result: InsertOneResult = await collection.insertOne(data);
      // Return the insertedId since result.ops is no longer available.
      return result.insertedId;
    } catch (error) {
      console.error("MongoDB insert error:", error);
      throw error;
    }
  }

  async update(collectionName: string, query: object, update: object): Promise<any> {
    try {
      const collection = this.getCollection(collectionName);
      const result = await collection.updateMany(query, { $set: update });
      return result;
    } catch (error) {
      console.error("MongoDB update error:", error);
      throw error;
    }
  }

  async delete(collectionName: string, query: object): Promise<any> {
    try {
      const collection = this.getCollection(collectionName);
      const result = await collection.deleteMany(query);
      return result;
    } catch (error) {
      console.error("MongoDB delete error:", error);
      throw error;
    }
  }
}
