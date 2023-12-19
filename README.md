
# Trilha para aprendizado

A ideia inicial do projeto não é muito boa mas foi apenas para praticar um projeto fullstack e praticar mais React, mas a ideia consistia em uma aplicação onde a pessoa poderia anotar o que sabe/o que está estudando e o quanto acha que sabe sobre o assunto


## Screenshots

![App Screenshot](https://prnt.sc/ZE83UjKAqu2Y)


## Stack utilizada

**Front-end:** React, Bootstrap

**Back-end:** Django, Next.js


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Eletrinho/trilhaAprendizado
```

Entre no diretório do projeto

```bash
  cd trilhaAprendizado
```

Crie um ambiente virtual do python e ative

```bash
  python -m venv env
  source env/Scripts/activate
```

Instale as dependências do backend

```bash
  pip install -r requirements.txt
```

Entre no diretório do backend 

```bash
  cd backend
```

Faça a primeira migração para inicializar o banco de dados

```bash
  python manage.py migrate
  python manage.py makemigrations
```

Inicie o servidor da API 

```bash
  py manage.py runserver
```

Em outro terminal entre no diretório do frontend

```bash
  cd trilhaAprendizado
  cd frontend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor frontend

```bash
  npm run dev
```


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

