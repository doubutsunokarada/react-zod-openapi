import {
  OpenAPIRegistry,
  OpenApiGeneratorV31,
} from "@asteasolutions/zod-to-openapi";
import * as yaml from "yaml";
import * as fs from "fs";
import * as path from "path";

export const registry = new OpenAPIRegistry();

export const bearerAuth = registry.registerComponent(
  "securitySchemes",
  "bearerAuth",
  {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
  }
);

// import routes
import "./routes/contact";

const generator = new OpenApiGeneratorV31(registry.definitions);

const docs = generator.generateDocument({
  openapi: "3.1.0",
  info: {
    title: "Contact API",
    version: "1.0.0",
    description: "お問い合わせAPI",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
});

const outputPath = path.join(__dirname, "..", "documents", "app.yaml");

const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, yaml.stringify(docs), {
  encoding: "utf-8",
});

console.log(`OpenAPI specification generated at: ${outputPath}`);
