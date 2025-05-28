// Оголошуємо об'єкт formData
const formData = {
  email: "",
  message: ""
};

// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Знаходимо елемент форми на сторінці
const form = document.querySelector('.feedback-form');

// При завантаженні сторінки перевіряємо, чи є дані в сховищі
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    // Оновлюємо formData і заповнюємо відповідні поля форми
    if (parsedData.email !== undefined) {
      formData.email = parsedData.email;
      form.elements.email.value = parsedData.email;
    }
    if (parsedData.message !== undefined) {
      formData.message = parsedData.message;
      form.elements.message.value = parsedData.message;
    }
  } catch (error) {
    console.error("Помилка при розборі збережених даних: ", error);
  }
}

// Функція збереження даних у локальне сховище
const saveFormData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Прослуховування події "input" на формі
form.addEventListener("input", event => {
  const { name, value } = event.target;
  // Оновлення відповідного поля formData із виданенням пробілів по краях
  formData[name] = value.trim();
  saveFormData();
});

// Прослуховування події "submit" форми
form.addEventListener("submit", event => {
  event.preventDefault(); // запобігаємо перезавантаженню сторінки при сабміті
  
  // Перевіряємо, чи заповнено обидва поля
  if (formData.email === "" || formData.message === "") {
    alert("Please fill in all fields");
    return;
  }
  
  // Якщо всі поля заповнені, виводимо об'єкт у консоль
  console.log("Form data:", formData);
  
  // Очистка локального сховища
  localStorage.removeItem(STORAGE_KEY);
  
  // Очистка formData:
  formData.email = "";
  formData.message = "";
  
  // Очистка форми
  form.reset();
});
