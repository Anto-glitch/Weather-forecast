#TECH STACK 
In the table below there are all technologies used in Weather forecast project

##1.Core 
* **Language:** TypeScript (v6.x)
* **Framework:** React Native (Expo SDK 57)
* **Enviroment:** Node.js (v20+ LTS)
* **Package menager:** npm
* **Router:** expo-router
* **CI:** github-workflows

##2.Crucial dependecies  
| Plugin/Library | Usage | Where used |
|---|---|---|
| `expo/ui` | import basic components | `src/components` |
| `expo-file-system` | access and edit local files |  |
| `axios` | download weather data | `src/api ` |
| `expo-location ` | download user geolocation | `src/services` |
| `nativewind `| UI styling | |
| `zod` | weather data validation | |
| `eslint ` + `prettier` + `tanstack/eslint-plugin-query`| code validation | |
| `tanstack/react-query` | data fetching | |
