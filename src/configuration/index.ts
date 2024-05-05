import dotenv from 'dotenv'
import Joi from 'joi'

dotenv.config({ path: ['.env.local', '.env'] })

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(3000),
    LOG_TO_TERM: Joi.boolean().default(false),
    LOG_TO_FILE: Joi.boolean().default(false),
    BETTER_STACK_INTEGRATION: Joi.boolean().default(false),
    BETTER_STACK_SOURCE_TOKEN: Joi.string(),
  })
  .unknown()

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

export const configuration = {
  logger: {
    LOG_TO_TERM: envVars.LOG_TO_TERM,
    LOG_TO_FILE: envVars.LOG_TO_FILE,
    BETTER_STACK_INTEGRATION: envVars.BETTER_STACK_INTEGRATION,
    BETTER_STACK_SOURCE_TOKEN: envVars.BETTER_STACK_SOURCE_TOKEN,
  },
  PORT: envVars.PORT,
}
