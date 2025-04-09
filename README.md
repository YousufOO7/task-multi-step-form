# 🧾 Multi-Step Form with Validation (Next.js + React Hook Form + Zod)

A multi-step form built using **Next.js App Router**, **React Hook Form**, **Zod**, and **TailwindCSS**, with full validation and step-wise navigation.

---

## 🚀 Features

- ✅ Multi-step form (3 steps + final summary)
- ✅ Form validation using **Zod**
- ✅ Error messages under each input
- ✅ State management with `useState`
- ✅ Responsive design (mobile-friendly)
- ✅ Dark mode support using TailwindCSS
- ✅ (Optional) Simulated API submission via `React Query`

---

## 📌 Technologies Used

| Tech                 | Purpose                     |
|----------------------|-----------------------------|
| Next.js (App Router) | Project setup and routing   |
| React Hook Form      | Form handling               |
| Zod                  | Schema-based validation     |
| TailwindCSS          | Styling                     |
| React Query _(optional)_ | Simulate API call       |
| React icons          | show password input text    |

---


## 🧠 How It Works (Data Flow)


- Each step sends its data to the parent `MultiStepForm` via `register(data)`
- The parent stores it in `formData`
- At the final step, all collected data is shown in a summary

---

## 📦 Installation & Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/YousufOO7/task-multi-step-form.git

# 2. Go to project folder
cd task

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
