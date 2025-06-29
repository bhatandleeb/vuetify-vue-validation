export const validationRules = {
  required:
    (params = {}) =>
      (v) => {
        if (
          v === undefined ||
          v === null ||
          v === "" ||
          (Array.isArray(v) && v.length === 0)
        ) {
          return params.msg || `${params.fieldName || "This field"} is required`
        }
        return true
      },
  email:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex = /.+@.+\..+/
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"} must be a valid email address`
        )
      },
  alpha:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex = /^[a-zA-Z]*$/
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"
          } must contain only alphabetic characters`
        )
      },
  alphaSpaces:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex = /^[a-zA-Z\s]*$/
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"
          } must contain only alphabetic characters and spaces`
        )
      },
  alphaNum:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex = /^[a-zA-Z0-9]*$/
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"
          } must contain only alphanumeric characters`
        )
      },
  min:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const value = Number(v)
        return (
          value >= Number(params.min) ||
          params.msg ||
          `${params.fieldName || "This field"} must be ${params.min} or more`
        )
      },
  max:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const value = Number(v)
        return (
          value <= Number(params.max) ||
          params.msg ||
          `${params.fieldName || "This field"} must be ${params.max} or less`
        )
      },
  range:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const value = Number(v)
        return (
          (value >= Number(params.min) && value <= Number(params.max)) ||
          params.msg ||
          `${params.fieldName || "This field"} must be between
          ${params.min} and ${params.max}`
        )
      },
  minLength:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        return (
          v.length >= params.min ||
          params.msg ||
          `${params.fieldName || "This field"} must be at least ${params.min
          } characters long`
        )
      },
  maxLength:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        return (
          v.length <= params.max ||
          params.msg ||
          `${params.fieldName || "This field"} must be at most ${params.max
          } characters long`
        )
      },
  between:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        return (
          (v.length >= params.min && v.length <= params.max) ||
          params.msg ||
          `${params.fieldName || "This field"} must be between ${params.min
          } and ${params.max} characters`
        )
      },
  password:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{}|\\:''<,>.?/]).{8,}$/
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"
          } must contain: 1 uppercase, 1 lowercase, 1 number, and at least 1 special character.`
        )
      },
  confirm:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        if (!params.field) {
          return false
        }
        return (
          params.field === v ||
          params.msg ||
          `${params.fieldName || "Passwords"} ${params.fieldName ? "does" : "do"
          } not match`
        )
      },
  number:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex = /^[0-9]*$/
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"
          } must contain only numeric characters`
        )
      },
  fileSize:
    (params = {}) =>
      (v) => {
        // If the value is an array, take the first file (assuming single file upload)
        const file = Array.isArray(v) ? v[0] : v

        if (!file || !file.size) return true // Skip validation if empty
        const sizeInMB = file.size / 1024 / 1024 // Convert size to MB

        return (
          sizeInMB <= params.max ||
          params.msg ||
          `${params.fieldName || "File size"} should be less than ${params.max
          } MB`
        )
      },
  fileType:
    (params = {}) =>
      (v) => {
        // If the value is an array, take the first file (assuming single file upload)
        const file = Array.isArray(v) ? v[0] : v

        if (!file || !file.type) return true // Skip validation if empty
        const allowedTypes = params.types || []

        return (
          allowedTypes.includes(file.type) ||
          params.msg ||
          `${params.fieldName || "File types"} allowed are: ${allowedTypes.join(
            ", "
          )}`
        )
      },
  ip:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex =
          /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"} must be a valid IP address`
        )
      },
  url:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex = new RegExp(
          "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
          "i"
        ) // fragment locator

        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"} must be a valid URL`
        )
      },
  alphaNumDashSpace:
    (params = {}) =>
      (v) => {
        if (!v) return true
        const regex = /^[ 0-9A-Z_-]*$/i
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"
          } may contain alpha-numeric characters as well as dashes, spaces and underscores.`
        )
      },
  regex:
    (params = {}) =>
      (v) => {
        if (!v) return true // Not required, skip validation if empty
        const regex = new RegExp(params.value)
        return (
          regex.test(v) ||
          params.msg ||
          `${params.fieldName || "This field"} must match a specific pattern.`
        )
      },
}
