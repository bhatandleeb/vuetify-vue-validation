// Map to store custom validation rules
const customRules = new Map()

// Function to extend validation rules with custom rules
export const extend = (ruleName, ruleFunction) => {
  customRules.set(ruleName, ruleFunction)
}

// Function to get a custom rule
export const getRule = (ruleName) => {
  return customRules.get(ruleName)
}

// Function to check if a custom rule exists
export const hasRule = (ruleName) => {
  return customRules.has(ruleName)
}

