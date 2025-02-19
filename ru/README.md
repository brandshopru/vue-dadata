# Vue Dadata

![Publish](https://github.com/brandshopru/vue-dadata/workflows/Publish/badge.svg)
[![gitlocalized ](https://gitlocalize.com/repo/3342/whole_project/badge.svg)](https://gitlocalize.com/repo/3342/whole_project?utm_source=badge)

Это vue компонент для подсказок с использованием сервиса [DaData.ru](https://dadata.ru).

[Ссылка на EN документацию](https://github.com/brandshopru/vue-dadata/tree/master/README.md)

## Установка

[npm package](https://www.npmjs.com/package/vue-dadata)

```bash
$ npm install vue-dadata-bs --save
```

## Применение

### Глобальный импорт

```js
import VueDadata from 'vue-dadata-bs'

Vue.use(VueDadataBs)
```

### Локальный импорт

```html

<template>
  <div id="app">
    <vue-dadata-bs token="dadata_api_key"></vue-dadata-bs>
  </div>
</template>

<script>
  import VueDadataBs from 'vue-dadata-bs'

  export default {
    name: 'VueDadataTest',
    components: {
      'vue-dadata': VueDadataBs
    }
  }
</script>
```

### Свойства (пропсы)

Свойство | Обязательно | Тип | Описание
--- | --- | --- | ---
token | Да | string | Авторизационный токен DaData.ru
placeholder | Нет | string | Подсказка в input
query | Нет | string | Поле ввода начального состояния
autoload | Нет | boolean | Если `true` , то запрос на подсказки будет инициирован в фоновом режиме в созданном хуке
onChange | Нет | function(suggestion: DadataSuggestion) -> void | Функция вызывается при выборе всплывающей подсказки
autocomplete | Нет | string | Поле автозаполнения
defaultClass | Нет | string | Компонент класса по умолчанию, значение по умолчанию - `vue-dadata`
classes | Нет | string | Дополнительные классы
inputName | Нет | string | Input name атрибут
fromBound | Нет | string | Тип привязки Dadata ОТ
toBound | Нет | string | Dadata привязанного типа к
highlightClassName | Нет | string | Имя класса CSS, примененное к выделенному тексту
unhighlightClassName | Нет | string | Имя класса CSS, примененное к невыделенному тексту
highlightTag | Нет | string | Тип тега для обертывания вокруг выделенных совпадений; по умолчанию для `mark` но также может быть компонентом
locationOptions | Нет | object | Варианты расположения для выбора городов или стран

## Зависимости

- [axios](https://github.com/axios/axios)
- [core-js](https://github.com/zloirock/core-js)
- [vue](https://github.com/vuejs/vue)
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
- [vue-highlight-words](https://github.com/Astray-git/vue-highlight-words)
- [vue-debounce-decorator](https://github.com/trepz/vue-debounce-decorator)

## Отчет о проблемах

Если вы обнаружили ошибку или у вас есть запрос на добавление функции, сообщите об этом в [разделе проблем с](https://github.com/brandshopru/vue-dadata/issues) хранилищем.

## Собираемся сделать

[Показать проект Vue Dadata](https://github.com/brandshopru/vue-dadata/projects/1)

## Основные этапы

[Показать основные этапы](https://github.com/brandshopru/vue-dadata/milestones)

##

[CHANGELOG](https://github.com/brandshopru/vue-dadata/blob/master/CHANGELOG.md)

##

[CONTRIBUTING](https://github.com/brandshopru/vue-dadata/blob/master/CONTRIBUTING.md)
