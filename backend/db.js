import { createPool } from "mysql2/promise";
import {DB_HOST,DB_USER, DB_PASSWORD,DB_PORT,DB_DATABASE} from "./config/config.js";

export const pool = createPool({
    port:DB_PORT,
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE
})