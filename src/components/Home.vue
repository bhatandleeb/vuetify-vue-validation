<template>
    <v-container class="home-view pa-8">
        <v-row justify="center">
            <v-col cols="12" md="8" lg="6">
                <v-card rounded="lg" elevation="3" class="main-card">
                    <!-- Card Header -->
                    <v-card-title class="text-center text-h4 text-primary pa-6">
                        <v-icon icon="mdi-form-select" class="mr-3"></v-icon>
                        Contact Information Form
                    </v-card-title>

                    <v-divider></v-divider>

                    <!-- Transition Container -->
                    <v-card-text class="pa-6">
                        <v-fade-transition mode="out-in">
                            <!-- Form State -->
                            <div v-if="!showSuccess" key="form">
                                <v-form ref="contactForm" v-model="formValid" @submit.prevent="submitForm">
                                    <!-- First Name -->
                                    <v-text-field v-model="form.firstName" label="First Name"
                                        placeholder="Enter your first name" prepend-inner-icon="mdi-account"
                                        variant="outlined" :rules="$valid([
                                            { rule: 'required', msg: 'First name is required' },
                                            { rule: 'alphaSpaces', msg: 'First name must contain only letters and spaces' },
                                            { rule: 'minLength', min: 2, msg: 'First name must be at least 2 characters' },
                                            { rule: 'maxLength', max: 30, msg: 'First name must be at most 30 characters' }
                                        ])" class="mb-4">
                                        <template #append-inner>
                                            <v-tooltip location="top"
                                                text="Validation rules: required, alphaSpaces, minLength, maxLength">
                                                <template #activator="{ props }">
                                                    <v-icon v-bind="props" icon="mdi-information" size="small"
                                                        color="primary"></v-icon>
                                                </template>
                                            </v-tooltip>
                                        </template>
                                    </v-text-field>

                                    <!-- Last Name -->
                                    <v-text-field v-model="form.lastName" label="Last Name"
                                        placeholder="Enter your last name" prepend-inner-icon="mdi-account-outline"
                                        variant="outlined" :rules="$valid([
                                            { rule: 'required', msg: 'Last name is required' },
                                            { rule: 'alphaSpaces', msg: 'Last name must contain only letters and spaces' },
                                            { rule: 'between', min: 2, max: 50, msg: 'Last name must be between 2 and 50 characters' }
                                        ])" class="mb-4">
                                        <template #append-inner>
                                            <v-tooltip location="top"
                                                text="Validation rules: required, alphaSpaces, between">
                                                <template #activator="{ props }">
                                                    <v-icon v-bind="props" icon="mdi-information" size="small"
                                                        color="primary"></v-icon>
                                                </template>
                                            </v-tooltip>
                                        </template>
                                    </v-text-field>

                                    <!-- Age -->
                                    <v-text-field v-model="form.age" label="Age" placeholder="Enter your age"
                                        prepend-inner-icon="mdi-calendar" type="number" variant="outlined" :rules="$valid([
                                            { rule: 'required', msg: 'Age is required' },
                                            { rule: 'number', msg: 'Age must be a valid number' },
                                            { rule: 'range', min: 18, max: 120, msg: 'Age must be between 18 and 120' }
                                        ])" class="mb-4">
                                        <template #append-inner>
                                            <v-tooltip location="top" text="Validation rules: required, number, range">
                                                <template #activator="{ props }">
                                                    <v-icon v-bind="props" icon="mdi-information" size="small"
                                                        color="primary"></v-icon>
                                                </template>
                                            </v-tooltip>
                                        </template>
                                    </v-text-field>

                                    <!-- Email -->
                                    <v-text-field v-model="form.email" label="Email Address"
                                        placeholder="Enter your Gmail address" prepend-inner-icon="mdi-email"
                                        type="email" variant="outlined" :rules="$valid([
                                            { rule: 'required', msg: 'Email is required' },
                                            { rule: 'onlyGmailValidation', msg: 'Only Gmail addresses are allowed' }
                                        ])" class="mb-4">
                                        <template #append-inner>
                                            <v-tooltip location="top"
                                                text="Validation rules: required, onlyGmailValidation">
                                                <template #activator="{ props }">
                                                    <v-icon v-bind="props" icon="mdi-information" size="small"
                                                        color="primary"></v-icon>
                                                </template>
                                            </v-tooltip>
                                        </template>
                                    </v-text-field>

                                    <!-- Phone -->
                                    <v-text-field v-model="form.phone" label="Phone Number" placeholder="123-4567"
                                        prepend-inner-icon="mdi-phone" type="tel" variant="outlined" :rules="$valid([
                                            { rule: 'required', msg: 'Phone number is required' },
                                        ])" class="mb-4">
                                        <template #append-inner>
                                            <v-tooltip location="top" text="Validation rules: required">
                                                <template #activator="{ props }">
                                                    <v-icon v-bind="props" icon="mdi-information" size="small"
                                                        color="primary"></v-icon>
                                                </template>
                                            </v-tooltip>
                                        </template>
                                    </v-text-field>

                                    <!-- Country -->
                                    <v-autocomplete v-model="form.country" label="Country" chips
                                        placeholder="Select or type your country" prepend-inner-icon="mdi-earth"
                                        :items="countries" variant="outlined" :rules="$valid([
                                            { rule: 'required', msg: 'Please select your country' }
                                        ])" class="mb-4" auto-select-first>
                                        <template #append-inner>
                                            <v-tooltip location="top" text="Validation rules: required">
                                                <template #activator="{ props }">
                                                    <v-icon v-bind="props" icon="mdi-information" size="small"
                                                        color="primary"></v-icon>
                                                </template>
                                            </v-tooltip>
                                        </template>
                                    </v-autocomplete>

                                    <!-- Document Upload -->
                                    <v-file-input v-model="form.document" label="Upload images"
                                        placeholder="Select a PDF or image file" variant="outlined" show-size
                                        accept=".pdf,.jpg,.jpeg,.png" :rules="$valid([
                                            { rule: 'required', msg: 'Please upload an image' },
                                            { rule: 'fileSize', max: 5, msg: 'File size must be less than 5MB' },
                                            { rule: 'fileType', types: ['image/jpeg', 'image/jpg', 'image/png'], msg: 'Only image files are allowed' }
                                        ])" class="mb-4 custom-file-input" prepend-inner-icon="mdi-upload" chips>
                                        <template #prepend-inner>
                                            <v-chip v-if="form.document && form.document.length > 0" size="small"
                                                color="primary" variant="tonal" closable
                                                @click:close="form.document = null" class="mr-2">
                                                <v-icon :icon="getFileIcon(form.document[0])" size="small"
                                                    class="mr-1"></v-icon>
                                                {{ getFileName(form.document[0]) }}
                                            </v-chip>
                                        </template>
                                        <template #append-inner>
                                            <v-tooltip location="top"
                                                text="Validation rules: required, fileSize, fileType">
                                                <template #activator="{ props }">
                                                    <v-icon v-bind="props" icon="mdi-information" size="small"
                                                        color="primary"></v-icon>
                                                </template>
                                            </v-tooltip>
                                        </template>
                                    </v-file-input>

                                    <!-- Submit Button -->
                                    <v-btn type="submit" color="primary" size="large" block rounded="md"
                                        class="text-none font-weight-bold mt-4" :loading="loading" elevation="2">
                                        <v-icon icon="mdi-send" class="mr-2"></v-icon>
                                        Submit Form
                                    </v-btn>
                                </v-form>
                            </div>

                            <!-- Success State -->
                            <div v-else key="success">
                                <SuccessCard :submitted-data="submittedData" @submit-again="handleSubmitAgain"
                                    @reset="handleReset" />
                            </div>
                        </v-fade-transition>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SuccessCard from './SuccessCard.vue'
import { simulateApiCall } from '@/utils/formUtils'
import { extend } from '../plugins/validation/manager'

// Custom validation rule for Gmail only
extend('onlyGmailValidation', {
    getMessage: function (params) {
        return params.msg || 'Only Gmail addresses are allowed.'
    },
    validate: function (value, params) {
        if (!value) {
            return true // Allow empty if not required
        }

        // Check if it's a valid email format and specifically Gmail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const gmailRegex = /^[^\s@]+@gmail\.com$/i

        return emailRegex.test(value) && gmailRegex.test(value)
    }
})

export default {
    name: 'Home',
    components: {
        SuccessCard
    },
    data() {
        return {
            formValid: false,
            loading: false,
            showSuccess: false,
            submittedData: null,
            form: {
                firstName: '', lastName: '', age: '', email: '', phone: '',
                country: null, document: null
            },
            countries: [
                'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
                'Spain', 'Italy', 'Netherlands', 'Australia', 'Japan',
                'South Korea', 'India', 'Brazil', 'Mexico', 'Other'
            ]
        }
    },
    methods: {
        getFileName(file) {
            if (!file?.name) return ''
            const fileName = file.name
            const maxLength = 20

            if (fileName.length <= maxLength) return fileName

            const dotIndex = fileName.lastIndexOf('.')
            const extension = fileName.substring(dotIndex)
            const name = fileName.substring(0, dotIndex)

            return `${name.substring(0, maxLength - extension.length - 3)}...${extension}`
        },
        getFileIcon(file) {
            if (!file?.type) return 'mdi-file'

            if (file.type === 'application/pdf') return 'mdi-file-pdf-box'
            if (file.type.startsWith('image/')) return 'mdi-file-image'
            return 'mdi-file'
        },
        async submitForm() {
            const { valid } = await this.$refs.contactForm.validate()
            if (!valid) return

            this.loading = true
            try {
                const { data } = await simulateApiCall(this.form)
                this.submittedData = data
                this.showSuccess = true
            } catch (error) {
                console.error('Form submission error:', error)
            } finally {
                this.loading = false
            }
        },
        handleSubmitAgain() {
            // Prefill form with previously submitted data for easy resubmission/editing
            Object.assign(this.form, this.submittedData)
            this.showSuccess = false
        },
        handleReset() {
            // Clear all form data and start fresh
            Object.assign(this.form, {
                firstName: '', lastName: '', age: '', email: '', phone: '',
                country: null, document: null
            })
            this.showSuccess = false
            this.submittedData = null
            this.$refs.contactForm?.resetValidation()
        }
    }
}
</script>

<style scoped>
.home-view {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.main-card {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.main-card:hover {
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.15);
}

.field-container {
    position: relative;
}

.v-btn {
    text-transform: none;
    transition: all 0.3s ease;
}

.v-btn:hover {
    transform: translateY(-2px);
}

.v-radio-group .v-radio {
    margin-right: 1rem;
}

.v-fade-transition-enter-active,
.v-fade-transition-leave-active {
    transition: all 0.4s ease;
}

.v-fade-transition-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.v-fade-transition-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Smooth autocomplete transitions */
.v-autocomplete .v-field__input {
    transition: all 0.2s ease;
}

/* Enhanced tooltip styling */
.v-tooltip .v-overlay__content {
    background: rgba(97, 97, 97, 0.95) !important;
    border-radius: 8px;
    font-size: 0.875rem;
    max-width: 350px;
    white-space: pre-line;
    line-height: 1.4;
    padding: 12px 16px;
    text-align: left;
}

/* Hide default file input clip icon */
:deep(.custom-file-input .v-input__prepend) {
    display: none !important;
}
</style>