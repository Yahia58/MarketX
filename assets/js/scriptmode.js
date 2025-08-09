/*const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // تغيير الأيقونة حسب الوضع
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️'; // الوضع الليلي -> أيقونة شمس
  } else {
    toggleBtn.textContent = '🌙'; // الوضع النهاري -> أيقونة قمر
  }
});
*/
const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

// عند تحميل الصفحة: قراءة الوضع المخزن
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>'; // أيقونة شمس
} else {
  toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>'; // أيقونة قمر
}

// عند الضغط على الزر: التبديل والتخزين
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>'; // أيقونة شمس
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>'; // أيقونة قمر
    localStorage.setItem('theme', 'light');
  }
});
