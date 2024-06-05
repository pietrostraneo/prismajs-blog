# PrismaJS Blog

## Esercizio

L'esercizio consiste nel creare un nuovo progetto Node.js (senza Express), installare la Prisma CLI e il Prisma Client, e definire i modelli `Post`, `Category` e `Tag` nel file `schema.prisma`.

### Modelli

#### Post
Il modello `Post` deve contenere le seguenti proprietà:
- `title`
- `slug` (deve essere univoco)
- `image` (non obbligatoria)
- `content`
- `published` (boolean)
- `createdAt`
- `updatedAt`

#### Category
Il modello `Category` deve contenere la proprietà `name`.

#### Tag
Il modello `Tag` deve contenere la proprietà `name`.

### Relazioni tra i modelli

#### Category (one-to-many)
Ogni `Post` deve avere una categoria associata, e una categoria può avere più `Post` associati.

#### Tag (many-to-many)
Ogni `Post` può avere uno o più `Tag` associati, e ogni `Tag` può avere uno o più `Post` associati.

## Funzionalità

Dopo aver definito i modelli, implementare le seguenti funzionalità:

### Categorie e Tag
- Funzione per creare una `Categoria`.
- Funzione per creare un `Tag`.

### Post
- **C**reate: Funzione che consente di creare un `Post`.
- **R**ead: 
  - Funzione che permette di leggere un `Post` usando lo `slug`.
  - Funzione che restituisce l'elenco di tutti i `Post`.
- **U**pdate: Funzione che consente di modificare un `Post`.
- **D**elete: Funzione che elimina un `Post`.

### BONUS

- Funzione che restituisce solo i `Post` pubblicati.
- Funzione che restituisce solo i `Post` che contengono una determinata stringa nel contenuto.


Buon lavoro!