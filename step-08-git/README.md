# Step 08: further
Wenn man Tests schreibt, kann man diese sehr gut in seine Infrastruktur aufnehmen.
Hier sind einige Beispiele dafür:

## Git Anbindung
Um die Tests zu automatisieren, kann man z.B. das GIT CI System nutzen.
Wir nutzen in diesem Beispiel das [zentrale INFORM Git](https://git.inform-software.com/), da es dort bereits eine bestehende Runner Struktur gibt.

Zunächst legen wir uns ein neues Git Projekt an und klonen es in SourceTree.
Jetzt kopieren wir uns eines der letzten Projekte in den Ordner hinein und commiten+pushen die neuen Dateien.
Ich nutze dafür Step 05: Mocks.
Außerdem sollten wir noch die gitignore aus diesem projekt auch in das neue kopieren.

Jetzt wählen wir in der Projektoberfläche die Option: Set up CI.
Daraufhin öffnet sich ein Dialog, in dem wir den Inhalt einer yml Datei anlegen können.
Dafür nutzen wir folgenden Code:
```yml
# This file is a template, and might need editing before it works on your project.
# Official framework image. Look for the different tagged releases at:
# https://hub.docker.com/r/library/node/tags/
image: node:latest

# This folder is cached between builds
# http://docs.gitlab.com/ce/ci/yaml/README.html#cache
cache:
  paths:
  - node_modules/

test:
  script:
   - npm config set registry https://dev-nexus.inform-software.com/repository/npmjs-proxy
   - npm install
   - npm run test
  tags: 
   - docker

```
Unter Commits sollten wir nun sehen können, dass eine pipeline angestoßen wurde. Schon sind wir fertig! :)

## Code Coverage
Um einen Überblick über die Code Coverage, also die Testabdeckung zu kriegen, kann jest mit dem coverage-Parameter aufgerufen werden:
```
jest --coverage
```