import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Language = ['en', 'de', 'ua'];

const resources = {
  en: {
    translation: {
      language: 'Language',
      sign_up: 'Sign Up',
      log_in: 'Log In',
      log_out: 'Log Out',

      first_home_title: 'Calendar',
      first_home_title_1: 'View',
      first_home_description:
        "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.",
      second_home_title: 'Sidebar',
      second_home_description:
        "GooseTrack offers easy access to your account settings, calendar, and filters. The 'My Account' section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.",
      third_home_title: 'All in',
      third_home_title_1: 'one',
      third_home_description:
        'GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.',
      rewiews_home: 'Reviews',

      user_panel: 'User Panel',
      user_profile: 'User Profile',

      my_account: 'My Account',
      calendar: 'Calendar',
      statistics: 'Statistics',
      feedback: 'Feedback',

      name: 'Name',
      enter_name: 'Enter your name',
      name_valid: 'This is a valid name',

      email: 'Email',
      valid_email: 'This is a valid email',
      email_invalid: 'Invalid email',
      enter_email: 'Enter email',
      email_exist: 'User with this email address already exists!',
      schema_email_yup: 'Email address must contain an "@" sign',
      schema_email_mat: 'Must be a valid email',
      schema_email_req: 'Email is required',

      password: 'Password',
      enter_pass: 'Enter password',
      valid_pass: 'This is a valid password',
      change_pass: 'Change your password',
      schema_pass_yup: 'Must be at least 7 characters long',
      schema_pass_req: 'Password is required',

      error: 'Error',
      error_text: 'Something went wrong!',
      swal_error_text: 'Email or password is wrong!',

      user: 'User',
      user_name: 'User Name',
      user_name_reg:
        'Name may contain only letters, apostrophe, dash and spaces',
      user_name_max: 'Max 16 characters',
      user_name_min: 'Min 2 characters',
      user_name_req: 'Name is required',

      phone: 'Phone',
      phone_valid: 'Phone number is not valid',

      skype: 'Skype',
      enter_skype: 'Enter your Skype ID',
      skype_min: 'Min 5 characters',
      skype_max: 'Max 16 characters',

      birthday: 'Birthday',
      select_birthday: 'Select your birthday (current date:',

      save_changes: 'Save Changes',
      add_task: 'Add Task',
      edit_task: 'Edit Task',
      delete_task: 'Delete Task',

      task: 'Tasks',
      to_do: 'To Do',
      in_progress: 'In Progress',
      done: 'Done',
      by_day: 'By Day',
      by_month: 'By Month',

      title: 'Title',
      title_lenght: 'Title is too long',
      title_req: 'Title is required',

      description: 'Enter text',
      start_time: 'Start',
      start_time_req: 'Start time is required',

      end_time: 'End',
      end_time_req: 'End time is required',
      end_time_test_1: 'is-greater',
      end_time_test_2: 'End time should be greater than start time',

      low: 'Low',
      medium: 'Medium',
      high: 'High',
      save: 'Save',
      add: 'Add',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      update: 'Update',
      priority_req: 'Priority is required',
      category_req: 'Category is required',

      rating: 'Rating',
      rating_req: 'Rating',
      review: 'Review',

      feedback_text_lenght: 'Must be 300 characters or less',
      feedback_text_req: 'Field review is required',

      month: 'Month',
      day: 'Day',
      days: {
        monL: 'mon',
        tueL: 'tue',
        wedL: 'wed',
        thuL: 'thu',
        friL: 'fri',
        satL: 'sat',
        sunL: 'sun',
        monS: 'm',
        tueS: 't',
        wedS: 'w',
        thuS: 't',
        friS: 'f',
        satS: 's',
        sunS: 's',
      },
      page_404:
        "We're sorry, the page you requested could not be found. Please go back to the homepage.",
      back: 'Back to home',
      go_back: 'Go Back',

      success: 'Success',
      success_text_review: 'Your review has been successfully deleted!',
      success_text_task: 'Your task has been successfully deleted!',
    },
  },
  ua: {
    translation: {
      language: 'Мова',
      sign_up: 'Реєстрація',
      log_in: 'Увійти',
      log_out: 'Вихід',

      first_home_title: 'Вигляд',
      first_home_title_1: 'календаря',
      first_home_description:
        'Календарний вигляд GooseTrack надає комплексний огляд вашого розкладу, демонструючи всі ваші завдання, події та зустрічі у вигляді привабливого та інтуїтивно зрозумілого макету.',
      second_home_title: 'Бокова панель',
      second_home_description:
        "GooseTrack дозволяє зручно отримати доступ до налаштувань облікового запису, календаря та фільтрів. Розділ 'Мій обліковий запис' дозволяє вам управляти інформацією та уподобаннями вашого профілю, а календар забезпечує швидкий та зручний спосіб перегляду майбутніх подій та завдань.",
      third_home_title: 'Усе в',
      third_home_title_1: 'одному',
      third_home_description:
        'GooseTrack - це комплексний інструмент продуктивності, який допомагає вам бути в курсі ваших завдань, подій та термінів. Попрощайтеся з розсіяними списками справ і вітайте організовану продуктивність з GooseTrack.',
      rewiews_home: 'Відгуки',

      user_panel: 'Панель користувача',
      user_profile: 'Профіль користувача',

      my_account: 'Мій обліковий запис',
      calendar: 'Календар',
      statistics: 'Статистика',
      feedback: "Зворотній зв'язок",

      name: "Ім'я",
      enter_name: "Введіть ваше ім'я",
      name_valid: "Це дійсне ім'я",

      email: 'Email',
      valid_email: 'Це дійсна електронна пошта',
      email_invalid: 'Недійсна електронна пошта',
      enter_email: 'Введіть електронну пошту',
      email_exist: 'Користувач з цією адресою електронної пошти вже існує!',
      schema_email_yup: 'Адреса електронної пошти повинна містити символ "@"',
      schema_email_mat: 'Повинна бути дійсною електронною адресою',
      schema_email_req: "Адреса електронної пошти обов'язкова",

      password: 'Пароль',
      enter_pass: 'Введіть пароль',
      valid_pass: 'Це дійсний пароль',
      change_pass: 'Змінити пароль',
      schema_pass_yup: 'Пароль повинен містити щонайменше 7 символів',
      schema_pass_req: "Пароль обов'язковий",

      error: 'Помилка',
      error_text: 'Щось пішло не так!',
      swal_error_text: 'Електронна пошта або пароль невірні!',

      user: 'User',
      user_name: "Ім'я користувача",
      user_name_reg:
        "Ім'я може містити лише букви, апостроф, тире та прогалини",
      user_name_length: 'Повинно містити щонайменше 2 символи',
      user_name_req: "Ім'я обов'язкове",

      phone: 'Телефон',
      phone_valid: 'Номер телефону недійсний',

      skype: 'Skype',
      enter_skype: 'Введіть свій Skype ID',
      skype_min: 'Мін. 5 символів',
      skype_max: 'Макс. 16 символів',

      birthday: 'День народження',
      select_birthday: 'Виберіть свій день народження (поточна дата:',

      save_changes: 'Зберегти зміни',
      add_task: 'Додати завдання',
      edit_task: 'Редагувати завдання',
      delete_task: 'Видалити завдання',

      task: 'Завдання',
      to_do: 'Виконати',
      in_progress: 'В процесі',
      done: 'Виконано',
      by_day: 'За день',
      by_month: 'За місяць',

      title: 'Заголовок',
      title_lenght: 'Заголовок занадто довгий',
      title_req: "Заголовок обов'язковий",

      description: 'Введіть текст',
      start_time: 'Початок',
      start_time_req: "Початковий час обов'язковий",

      end_time: 'Завершення',
      end_time_req: "Кінцевий час обов'язковий",
      end_time_test_1: 'більше-ніж',
      end_time_test_2: 'Кінцевий час повинен бути більшим за початковий час',

      low: 'Низький',
      medium: 'Середній',
      high: 'Високий',
      save: 'Зберегти',
      add: 'Додати',
      cancel: 'Скасувати',
      delete: 'Видалити',
      edit: 'Редагувати',
      close: 'Закрити',
      update: 'Оновити',
      priority_req: "Пріоритет обов'язковий",
      category_req: "Категорія обов'язкова",

      rating: 'Рейтинг',
      rating_req: "Обов'язково",
      review: 'Відгук',

      feedback_text_lenght: 'Повинно бути 300 символів або менше',
      feedback_text_req: "Обов'язкове поле відгуку",

      month: 'Місяць',
      formattedDate: 'месяц {{date}}',
      day: 'День',
      days: {
        monL: 'пн',
        tueL: 'вт',
        wedL: 'ср',
        thuL: 'чт',
        friL: 'пт',
        satL: 'сб',
        sunL: 'нд',
        monS: 'п',
        tueS: 'в',
        wedS: 'с',
        thuS: 'ч',
        friS: 'п',
        satS: 'с',
        sunS: 'н',
      },
      page_404:
        'Вибачте, сторінку, яку ви запросили, не вдалося знайти. Будь ласка, поверніться на головну сторінку.',
      back: 'Повернутися на головну',
      go_back: 'Повернутися назад',

      success: 'Успіх',
      success_text_review: 'Ваш відгук успішно видалено!',
      success_text_task: 'Ваше завдання успішно видалено!',
    },
  },
  de: {
    translation: {
      language: 'Sprache',
      sign_up: 'Registrieren',
      log_in: 'Anmelden',
      log_out: 'Abmelden',

      first_home_title: 'Kalender',
      first_home_title_1: 'ansicht',
      first_home_description:
        'Die Kalenderansicht von GooseTrack verschafft Ihnen einen umfassenden Überblick über Ihren Zeitplan und stellt alle Ihre Aufgaben, Ereignisse und Termine in einem visuell ansprechenden und intuitiven Design dar.',
      second_home_title: 'Seitenleiste',
      second_home_description:
        "GooseTrack ermöglicht Ihnen bequemen Zugriff auf Ihre Kontoeinstellungen, den Kalender und die Filter. Der Abschnitt 'Mein Konto' erlaubt es Ihnen, Ihre Profilinformationen und Präferenzen zu verwalten, während der Kalender eine schnelle und bequeme Möglichkeit bietet, bevorstehende Ereignisse und Aufgaben zu betrachten.",
      third_home_title: 'Alles in',
      third_home_title_1: 'einem',
      third_home_description:
        'GooseTrack ist eine All-in-One-Produktivitätslösung, die Ihnen dabei hilft, Ihre Aufgaben, Ereignisse und Fristen im Blick zu behalten. Verabschieden Sie sich von verstreuten Aufgabenlisten und sagen Sie hallo zur effizienteren Produktivität mit GooseTrack.',
      rewiews_home: 'Bewertungen',

      user_panel: 'Benutzerpanel',
      user_profile: 'Benutzerprofil',

      my_account: 'Mein Konto',
      calendar: 'Kalender',
      statistics: 'Statistiken',
      feedback: 'Rückmeldung',

      name: 'Name',
      enter_name: 'Geben Sie Ihren Namen ein',
      name_valid: 'Dies ist ein gültiger Name',

      email: 'Email',
      valid_email: 'Dies ist eine gültige E-Mail-Adresse',
      email_invalid: 'Ungültige E-Mail-Adresse',
      enter_email: 'Geben Sie Ihre E-Mail-Adresse ein',
      email_exist: 'Ein Benutzer mit dieser E-Mail-Adresse existiert bereits!',
      schema_email_yup: 'Die E-Mail-Adresse muss ein "@"-Zeichen enthalten',
      schema_email_mat: 'Muss eine gültige E-Mail-Adresse sein',
      schema_email_req: 'E-Mail ist erforderlich',

      password: 'Passwort',
      enter_pass: 'Geben Sie Ihr Passwort ein',
      change_pass: 'Passwort ändern',
      valid_pass: 'Dies ist ein gültiges Passwort',
      schema_pass_yup: 'Muss mindestens 7 Zeichen lang sein',
      schema_pass_req: 'Passwort ist erforderlich',

      error: 'Fehler',
      error_text: ' Etwas ist schiefgegangen!',
      swal_error_text: 'E-Mail oder Passwort ist falsch!',

      user: 'User',
      user_name: 'Benutzername',
      user_name_reg:
        'Der Name darf nur Buchstaben, Apostroph, Bindestrich und Leerzeichen enthalten',
      user_name_length: 'Muss mindestens 2 Zeichen lang sein',
      user_name_req: 'Der Name ist erforderlich',

      phone: 'Telefon',
      phone_valid: 'Die Telefonnummer ist ungültig',

      skype: 'Skype',
      enter_skype: 'Geben Sie Ihre Skype-ID ein',
      skype_min: 'Min. 5 Zeichen',
      skype_max: 'Max. 16 Zeichen',

      birthday: 'Geburtstag',
      select_birthday: 'Wählen Sie Ihren Geburtstag (aktuelles Datum:',

      task: 'Aufgaben',
      save_changes: 'Änderungen speichern',
      add_task: 'Aufgabe hinzufügen',
      edit_task: 'Aufgabe bearbeiten',
      delete_task: 'Aufgabe löschen',
      to_do: 'Zu erledigen',
      in_progress: 'In Bearbeitung',
      done: 'Erledigt',
      by_day: 'Pro Tag',
      by_month: 'Pro Monat',

      title: 'Titel',
      title_lenght: 'Der Titel ist zu lang',
      title_req: 'Der Titel ist erforderlich',

      description: 'Text eingeben',
      start_time: 'Start',
      start_time_req: 'Startzeit ist erforderlich',

      end_time: 'Ende',
      end_time_req: 'Endzeit ist erforderlich',
      end_time_test_1: 'ist-größer',
      end_time_test_2: 'Die Endzeit sollte größer sein als die Startzeit',

      low: 'Niedrig',
      medium: 'Mittel',
      high: 'Hoch',
      save: 'Speichern',
      add: 'Hinzufügen',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      close: 'Schließen',
      update: 'Aktualisieren',
      priority_req: 'Priorität ist erforderlich',
      category_req: 'Kategorie ist erforderlich',

      rating: 'Bewertung',
      rating_req: 'Erforderlich',
      review: 'Rezension',

      feedback_text_lenght: 'Muss 300 Zeichen oder weniger sein',
      feedback_text_req: 'Feld Bewertung ist erforderlich',

      month: 'Monat',
      day: 'Tag',
      days: {
        monL: 'mon',
        tueL: 'die',
        wedL: 'mit',
        thuL: 'don',
        friL: 'fre',
        satL: 'sam',
        sunL: 'son',
        monS: 'm',
        tueS: 'd',
        wedS: 'm',
        thuS: 'd',
        friS: 'f',
        satS: 's',
        sunS: 's',
      },
      page_404:
        'Es tut uns leid, die von Ihnen angeforderte Seite konnte nicht gefunden werden. Bitte gehen Sie zurück zur Startseite.',
      back: 'Zurück zur Startseite',
      go_back: 'Zurück gehen',

      success: 'Erfolg',
      success_text_review: 'Ihre Bewertung wurde erfolgreich gelöscht!',
      success_text_task: 'Ihre Aufgabe wurde erfolgreich gelöscht!',
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    whitelist: Language,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
