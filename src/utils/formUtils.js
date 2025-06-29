/**
 * Generate base properties for form fields
 * @param {Object} field - Field configuration object
 * @returns {Object} - Base properties for Vuetify form components
 */
export const getFieldProps = (field) => {
    const baseProps = {
        variant: 'outlined',
        label: field.label,
        placeholder: field.placeholder,
        color: 'primary',
        density: 'comfortable',
        rounded: 'md',
        clearable: true,
        'hide-details': 'auto',
        'validate-on': 'invalid-input'
    }

    if (field.icon) {
        baseProps['prepend-inner-icon'] = field.icon
    }

    if (field.inputType) {
        baseProps.type = field.inputType
    }

    return baseProps
}

/**
 * Simulate API call for form submission
 * @param {Object} formData - Form data to submit
 * @param {number} delay - Delay in milliseconds (default: 1500)
 * @returns {Promise} - Promise that resolves after delay
 */
export const simulateApiCall = (formData, delay = 1500) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, data: formData })
        }, delay)
    })
}

/**
 * Reset form to initial state
 * @param {Object} formRef - Vue form reference
 * @param {Function} getInitialData - Function that returns initial form data
 * @returns {Object} - Initial form data
 */
export const resetFormState = (formRef, getInitialData) => {
    if (formRef) {
        formRef.reset()
    }
    return getInitialData()
} 