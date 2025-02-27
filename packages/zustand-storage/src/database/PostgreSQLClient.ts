// src/database/PostgreSQLClient.ts

import { Client, QueryResult } from 'pg';
import { DatabaseClient } from './IDatabaseClient';

export class PostgreSQLClient implements DatabaseClient {
  private client: Client;

  constructor(private connectionString: string) {
    this.client = new Client({ connectionString });
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
    } catch (error) {
      console.error("PostgreSQL connection error:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.client.end();
    } catch (error) {
      console.error("PostgreSQL disconnection error:", error);
      throw error;
    }
  }

  async find(table: string, query: object): Promise<any[]> {
    const keys = Object.keys(query);
    const conditions = keys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(" AND ");
    const values = keys.map((key) => (query as Record<string, any>)[key]);
    const sql = `SELECT * FROM ${table} WHERE ${conditions}`;

    try {
      const result: QueryResult = await this.client.query(sql, values);
      return result.rows;
    } catch (error) {
      console.error("PostgreSQL find error:", error);
      throw error;
    }
  }

  async insert(table: string, data: object): Promise<any> {
    const keys = Object.keys(data);
    const columns = keys.join(", ");
    const placeholders = keys.map((_, index) => `$${index + 1}`).join(", ");
    const values = keys.map((key) => (data as Record<string, any>)[key]);
    const sql = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *`;

    try {
      const result: QueryResult = await this.client.query(sql, values);
      return result.rows[0];
    } catch (error) {
      console.error("PostgreSQL insert error:", error);
      throw error;
    }
  }

  async update(table: string, query: object, update: object): Promise<any> {
    const queryKeys = Object.keys(query);
    const updateKeys = Object.keys(update);
    const setClause = updateKeys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(", ");
    const whereClause = queryKeys
      .map((key, index) => `${key} = $${updateKeys.length + index + 1}`)
      .join(" AND ");
    const values = [
      ...updateKeys.map((key) => (update as Record<string, any>)[key]),
      ...queryKeys.map((key) => (query as Record<string, any>)[key])
    ];
    const sql = `UPDATE ${table} SET ${setClause} WHERE ${whereClause} RETURNING *`;

    try {
      const result: QueryResult = await this.client.query(sql, values);
      return result.rows;
    } catch (error) {
      console.error("PostgreSQL update error:", error);
      throw error;
    }
  }

  async delete(table: string, query: object): Promise<any> {
    const keys = Object.keys(query);
    const conditions = keys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(" AND ");
    const values = keys.map((key) => (query as Record<string, any>)[key]);
    const sql = `DELETE FROM ${table} WHERE ${conditions} RETURNING *`;

    try {
      const result: QueryResult = await this.client.query(sql, values);
      return result.rows;
    } catch (error) {
      console.error("PostgreSQL delete error:", error);
      throw error;
    }
  }
}
