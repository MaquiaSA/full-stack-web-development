import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

// TODO: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = (request) => {
  return api(request);
}

export const post: RequestHandler<{}, FormData> = (request) => {
  return api(request, {
    created_at: new Date(),
    text: request.body.get("text"),
    done: false
  });
}