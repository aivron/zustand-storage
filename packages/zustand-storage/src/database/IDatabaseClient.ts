// src/database/IDatabaseClient.ts

export interface DatabaseClient {
    /**
     * Establishes a connection to the database.
     */
    connect(): Promise<void>;

    /**
     * Closes the database connection.
     */
    disconnect(): Promise<void>;

    /**
     * Finds records in the specified collection/table matching the query.
     * @param collectionOrTable - The name of the collection (MongoDB) or table (PostgreSQL).
     * @param query - An object representing query filters.
     * @returns A promise resolving to an array of records.
     */
    find(collectionOrTable: string, query: object): Promise<any[]>;

    /**
     * Inserts a record into the specified collection/table.
     * @param collectionOrTable - The name of the collection/table.
     * @param data - The data to insert.
     * @returns A promise resolving to the inserted record.
     */
    insert(collectionOrTable: string, data: object): Promise<any>;

    /**
     * Updates records in the specified collection/table that match the query.
     * @param collectionOrTable - The name of the collection/table.
     * @param query - An object representing query filters.
     * @param update - An object representing the update data.
     * @returns A promise resolving to the update result.
     */
    update(collectionOrTable: string, query: object, update: object): Promise<any>;

    /**
     * Deletes records in the specified collection/table that match the query.
     * @param collectionOrTable - The name of the collection/table.
     * @param query - An object representing query filters.
     * @returns A promise resolving to the deletion result.
     */
    delete(collectionOrTable: string, query: object): Promise<any>;
}
