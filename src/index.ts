import { app } from "./app";
import { env } from "./config";

const bootstrap = () => {
  app.listen(env.PORT);
  console.log(`Server is running on port ${env.PORT} in ${env.NODE_ENV} mode`);
};
const isDevelopment = env.NODE_ENV === "development";
if (isDevelopment) bootstrap();

export default app;
