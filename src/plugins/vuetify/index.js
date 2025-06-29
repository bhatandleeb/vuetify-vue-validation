// Vuetify plugin configuration
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import Vuetify styles
import 'vuetify/styles'

// Import Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

// Create and configure Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    accent: '#82B1FF',
                    error: '#FF5252',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FFC107',
                },
            },
        },
    },
    defaults: {
        VBtn: {
            style: 'text-transform: none;',
        },
    },
})

export default vuetify 