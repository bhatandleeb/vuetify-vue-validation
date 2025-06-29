<template>
    <div class="success-container">
        <!-- Success Alert -->
        <v-alert type="success" variant="tonal" rounded="lg" prominent class="mb-6">
            <template #prepend>
                <v-icon icon="mdi-check-circle" size="48"></v-icon>
            </template>
            <div class="text-center">
                <h3 class="text-h5 font-weight-bold mb-2">Form Submitted Successfully!</h3>
                <p class="mb-0 text-body-1">Thank you for providing your information. We'll contact you soon using your
                    preferred
                    method.</p>
            </div>
        </v-alert>

        <!-- Submitted Data Display -->
        <v-card v-if="submittedData" rounded="lg" elevation="2" class="mb-6">
            <v-card-title class="bg-primary text-white d-flex align-center">
                <v-icon icon="mdi-database" class="mr-2"></v-icon>
                Submitted Information
            </v-card-title>
            <v-card-text class="pa-4">
                <v-row>
                    <v-col v-for="field in displayFields" :key="field.key" cols="12" :md="getColumnSize(field.key)">
                        <div class="info-item">
                            <span class="text-caption text-grey-darken-1 font-weight-bold">{{ field.label }}</span>
                            <div class="text-body-1 text-grey-darken-3 mt-1">{{ field.value }}</div>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <!-- Action Buttons -->
        <div class="action-buttons">
            <v-row class="ma-0">
                <v-col cols="12" sm="6" class="pa-2">
                    <v-btn color="primary" variant="elevated" size="large" block rounded="md"
                        class="text-none font-weight-bold" @click="$emit('submit-again')">
                        <v-icon icon="mdi-refresh" class="mr-2"></v-icon>
                        Submit Again
                    </v-btn>
                </v-col>
                <v-col cols="12" sm="6" class="pa-2">
                    <v-btn color="grey-darken-1" variant="outlined" size="large" block rounded="md"
                        class="text-none font-weight-bold" @click="$emit('reset')">
                        <v-icon icon="mdi-restart" class="mr-2"></v-icon>
                        Reset Form
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessCard',
    emits: ['submit-again', 'reset'],
    props: {
        submittedData: {
            type: Object,
            required: true
        }
    },
    computed: {
        displayFields() {
            if (!this.submittedData) return []

            const fieldLabels = {
                firstName: 'First Name',
                lastName: 'Last Name',
                age: 'Age',
                email: 'Email Address',
                phone: 'Phone Number',
                country: 'Country',
                document: 'Images uploaded'
            }

            return Object.entries(this.submittedData)
                .filter(([key, value]) => {
                    return value !== undefined && value !== '' && value !== null
                })
                .map(([key, value]) => ({
                    key,
                    label: fieldLabels[key] || key,
                    value: this.formatValue(key, value)
                }))
        }
    },
    methods: {
        formatValue(key, value) {
            if (key === 'age') {
                return `${value} years old`
            }
            if (key === 'document') {
                // Handle file objects
                if (value) {
                    // Check if it's an array/FileList with files
                    if (Array.isArray(value) && value.length > 0) {
                        return value[0].name || 'Unknown file'
                    }
                    // Check if it's a FileList object
                    if (value.length !== undefined && value.length > 0) {
                        return value[0].name || 'Unknown file'
                    }
                    // Check if it's a single File object
                    if (value.name) {
                        return value.name
                    }
                }
                return 'No file selected'
            }
            return value
        },
        getColumnSize(fieldKey) {
            // All fields use 6 columns (2 per row on medium+ screens)
            return '6'
        }
    }
}
</script>

<style scoped>
.success-container {
    animation: fadeInUp 0.6s ease-out;
}

.info-item {
    padding: 12px;
    border-radius: 8px;
    background: rgba(var(--v-theme-surface), 0.05);
    border-left: 4px solid rgb(var(--v-theme-primary));
    transition: all 0.2s ease;
}

.info-item:hover {
    background: rgba(var(--v-theme-primary), 0.05);
    transform: translateX(4px);
}

.action-buttons {
    margin-top: 24px;
}

.v-btn {
    transition: all 0.3s ease;
}

.v-btn:hover {
    transform: translateY(-2px);
}

.v-alert {
    border: 1px solid rgba(var(--v-theme-success), 0.2);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive adjustments */
@media (max-width: 600px) {
    .action-buttons .v-col {
        padding: 4px 2px;
    }

    .info-item {
        padding: 8px;
        margin-bottom: 8px;
    }
}
</style>