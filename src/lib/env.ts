import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
    PEXELS_API_key: str(),
})

export default env