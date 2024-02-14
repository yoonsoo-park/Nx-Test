import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

type MetamanJob = {
  task: string;
};

export default async function (fastify: FastifyInstance) {
  fastify.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { message: "Hello API" };
    },
  );

  // Define a route for handling HTTP GET requests to the "/v1" URL
  fastify.get(
    "/v1",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { message: "Hello API version 1" };
    },
  );

  // Define a route for handling HTTP POST requests to the "/v1" URL
  fastify.post(
    "/v1",
    async function (
      request: FastifyRequest<{ Body: MetamanJob }>,
      reply: FastifyReply,
    ) {
      // Parse the JSON data from the request body
      const { task } = request.body;
      const version = "v1";
      if (task === "permission-diff") {
        try {
          // Dynamically import the version-specific permission-diff task
          const { permissionDiff } = await import(
            `./${version}/permission-diff.js`
          );

          // Run the permission-diff task for the specified version
          const result = await permissionDiff(request.body);
          console.log("Task completed successfully");
          return { result };
        } catch (error) {
          console.error(`Error running permission-diff task: ${error.message}`);
          // Return an error response if the task is not found
          reply
            .code(401)
            .send({ message: "Error running permission-diff task" });
        }
      } else if (task === "permission-list") {
        try {
          // Dynamically import the version-specific permission-diff task
          const { permissionList } = await import(
            `./${version}/permission-list.js`
          );

          // Run the permission-diff task for the specified version
          const result = await permissionList(request.body);
          console.log("Task completed successfully");
          return { result };
        } catch (error) {
          console.error(`Error running permission-list task: ${error.message}`);
          // Return an error response if the task is not found
          reply
            .code(401)
            .send({ message: "Error running permission-list task" });
        }
      } else {
        // Return an error response if the task is not recognized
        reply.code(400).send({ message: "Invalid task" });
      }
    },
  );

  // Define a route for handling HTTP POST requests to the "/v2" URL
  fastify.post(
    "/v2",
    async function (
      request: FastifyRequest<{ Body: MetamanJob }>,
      reply: FastifyReply,
    ) {
      // Parse the JSON data from the request body
      const { task } = request.body;
      const version = "v2";
      if (task === "permission-diff") {
        try {
          // Dynamically import the version-specific permission-diff task
          const { permissionDiff } = await import(
            `./${version}/permission-diff.js`
          );

          // Run the permission-diff task for the specified version
          const result = await permissionDiff(request.body);
          console.log("Task completed successfully");
          return { result };
        } catch (error) {
          console.error(`Error running permission-diff task: ${error.message}`);
          // Return an error response if the task is not found
          reply
            .code(401)
            .send({ message: "Error running permission-diff task" });
        }
      } else if (task === "permission-list") {
        try {
          // Dynamically import the version-specific permission-diff task
          const { permissionList } = await import(
            `./${version}/permission-list.js`
          );

          // Run the permission-diff task for the specified version
          const result = await permissionList(request.body);
          console.log("Task completed successfully");
          return { result };
        } catch (error) {
          console.error(`Error running permission-list task: ${error.message}`);
          // Return an error response if the task is not found
          reply
            .code(401)
            .send({ message: "Error running permission-list task" });
        }
      } else {
        // Return an error response if the task is not recognized
        reply.code(400).send({ message: "Invalid task" });
      }
    },
  );
}
