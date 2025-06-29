import { getRule, hasRule } from './manager'
import { validationRules } from './rules'

// Function to generate validation rules based on the provided array of rules
export const generateRules = (rulesArray) => {
  return rulesArray.map((ruleObj) => {
    const ruleName = ruleObj.rule // Extract the rule name
    const ruleParams = { ...ruleObj } // Create a copy of the rule object
    delete ruleParams.rule // Remove the rule name from the parameters

    // Check if it's a custom rule
    if (hasRule(ruleName)) {
      const customRule = getRule(ruleName)
      return (v) =>
        customRule.validate(v, ruleParams) || customRule.getMessage(ruleParams)
    }
    // Check if it's a predefined rule
    else if (validationRules[ruleName]) {
      return validationRules[ruleName](ruleParams)
    }
    // If rule is not found, warn and return a passing function
    else {
      return () => true
    }
  })
}

// Function to set up global validation
export const setGlobalValidation = (app) => {
  // Adding a global property '$valid' to the app instance
  // This property is a function that takes an array of rules and generates corresponding validation rules
  app.config.globalProperties.$valid = (rulesArray) =>
    generateRules(rulesArray)
}

// Plugin installation function
export default {
  install: (app) => {
    // Installing the global validation function to the app
    setGlobalValidation(app)
  }
}
