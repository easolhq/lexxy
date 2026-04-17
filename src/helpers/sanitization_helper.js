import { DOMPurify, buildConfig } from "../config/dom_purify"

export function setSanitizerConfig(allowedTags, allowedStyles = []) {
  const { config, hooks } = buildConfig(allowedTags, allowedStyles)

  DOMPurify.removeAllHooks()
  for (const [ event, hook ] of Object.entries(hooks)) {
    DOMPurify.addHook(event, hook)
  }

  DOMPurify.clearConfig()
  DOMPurify.setConfig(config)
}

export function sanitize(html) {
  return DOMPurify.sanitize(html)
}
