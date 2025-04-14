import { type } from "arktype";
import { PER_PAGE } from "./constants";

export const paginationQuerySchema = type({
  page: "number.integer >= 1 = 1",
  perPage: `number.integer >= 1 = ${PER_PAGE}`,
});

export const paginationSchema = type({
  page: "number.integer >= 1",
  perPage: "number.integer >= 1",
  totalCount: "number.integer >= 0",
  totalPages: "number.integer >= 0",
  hasNextPage: "boolean",
});
