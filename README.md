# Vue + Vuetify Form Validation System

Vue + Vuetify with custom validation library - no external dependencies, extensible rules for complete customization.

## 🏷️ Key Points Highlighted:

- ✅ **Vue + Vuetify**
- ✅ **Custom validation library**
- ✅ **No external dependencies**
- ✅ **Extensible rules**
- ✅ **Further customization**

## 🎯 What This Project Does

This project demonstrates a professional form validation system that includes:

- **Custom Validation Library** - Built-in validation without external packages
- **Extensible Rules System** - Add your own custom validation logic
- **Real-time Validation** - Instant feedback as users type
- **Interactive UI** - Tooltips showing validation rules for each field

## 🛠️ Technology Stack

- **Vue 3** - Progressive JavaScript framework
- **Vuetify 3** - Material Design component library
- **Vite** - Fast build tool and development server
- **Custom Validation** - Modular validation system

## 📋 Form Fields Included

- **Text Fields**: First Name, Last Name (with character limits)
- **Number Field**: Age (with range validation)
- **Email Field**: Gmail-only validation
- **Phone Field**: International/US format validation
- **Autocomplete**: Country selection with search
- **File Upload**: Image upload with size/type validation and custom chip display

## 🚀 Quick Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd vuetify-vue-validation
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Home.vue          # Main form component
│   └── SuccessCard.vue   # Success state component
├── plugins/
│   └── validation/
│       ├── handler.js    # Validation handler & generator
│       ├── manager.js    # Custom rule management
│       └── rules.js      # Built-in validation rules
├── utils/
│   └── formUtils.js      # Form utility functions
└── main.js               # App entry point
```

## 🔧 Validation System

### Built-in Rules

- `required` - Field is mandatory
- `email` - Valid email format
- `alphaSpaces` - Letters and spaces only
- `number` - Numeric values only
- `minLength` / `maxLength` - Character limits
- `between` - Character range validation
- `range` - Numeric range validation
- `fileSize` - File size limits
- `fileType` - File type restrictions

### Custom Rules

- `onlyGmailValidation` - Gmail-only email validation

### Usage Example

```vue
:rules="$valid([ { rule: 'required', msg: 'This field is required' }, { rule:
'email', msg: 'Please enter a valid email' }, { rule: 'minLength', min: 3, msg:
'Minimum 3 characters' } ])"
```

## 🎨 Key Features

- **Outlined Form Fields** - Modern Vuetify design
- **Information Tooltips** - Hover to see validation rules
- **Custom File Chips** - Visual file selection inside input fields
- **Real-time Validation** - Validate as users type
- **Success State** - Form submission confirmation
- **Responsive Design** - Works on all device sizes

## 🧰 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 How to Extend

### Add New Validation Rule

```javascript
// In your component
import { extend } from "../plugins/validation/manager";

extend("customRule", {
  getMessage: (params) => params.msg || "Custom validation failed",
  validate: (value, params) => {
    // Your validation logic
    return value.includes("test");
  },
});
```

### Use in Template

```vue
:rules="$valid([ { rule: 'customRule', msg: 'Must contain "test"' } ])"
```

## 🎯 Perfect For

- **Learning form validation** in Vue.js
- **Vuetify component integration**
- **Custom validation plugin development**
- **Professional form handling patterns**

## 📝 License

MIT License - feel free to use this project for learning and development!

---

**Built with ❤️ using Vue 3 + Vuetify**
