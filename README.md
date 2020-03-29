# vue-ui-kit

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Lints and fixes files

```
yarn lint
```

### Checklist:

- [x] Include 7.1 scss pattern (modified)
- [x] Include most used scss mixins
- [x] Create main layout
- [x] Make scss variables globally (even in scoped component styles)
- [ ] Create navbar
- [ ] Create modal compoment
- [ ] Create carousel component
- [ ] Create button component
- [ ] Create tabs component
- [ ] Include phone detection library
- [x] Include svg sprite library

### Svg icons setup guide:

    - Install vue-svg-loader
    - Modify vue.config.js file
    - In main.js file require all icons and register global vue components regarding their name
    - Put all svg icons /src/assets/svg-icons folder
    - Icons can be used by passing their name to the Icon component e.g. <icon name="file-zip" />
    NOTE: Remove width and height attributes so icons dont loose apsect ratio while scaling
