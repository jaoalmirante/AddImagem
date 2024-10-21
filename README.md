# Criação de uma Página HTML Interativa

## Descrição:
Crie uma página HTML interativa onde o usuário pode inserir um **título**, um **link de imagem** e uma **descrição**. Ao clicar no botão **"Cadastrar"**, esses dados são exibidos dinamicamente na página.

---

### **Componentes:**

#### 1. HTML:
A estrutura básica da página inclui três campos de entrada de texto (`input`):
- **Título**: (`id="titulo"`)
- **Link da Imagem**: (`id="link"`)
- **Descrição**: (`id="descricao"`)

Além disso, há um botão **"Cadastrar"**, que chama a função `cadastrar()` ao ser clicado, e uma **div** com o id `"container"` onde os dados serão exibidos.

#### 2. JavaScript (main.js):
A função `cadastrar()`:
- Captura os valores dos três campos: **título**, **link da imagem** e **descrição**.
- Cria novos elementos HTML: 
  - Um **h1** para o título,
  - Um **img** para a imagem (usando o link fornecido),
  - Um **p** para a descrição.
- Aplica classes para estilizar esses elementos.
- Adiciona os elementos dentro de uma nova **div**, que é anexada ao contêiner com `id="container"`.

#### 3. CSS:
O CSS define a aparência da página:
- **Inputs** e **botões** são formatados para uma melhor usabilidade.
- O botão **"Cadastrar"** possui um estilo moderno com bordas arredondadas e efeitos de **hover** e **click**.
- O contêiner de imagens (`#container`) está estilizado para alinhar os elementos de forma agradável, com **sombras** e **bordas arredondadas**.

---

### **Funcionamento Geral:**
1. O usuário insere o título, o link da imagem e a descrição nos campos de entrada.
2. Ao clicar em **"Cadastrar"**, esses dados são capturados e exibidos na página.
3. Os elementos exibidos seguem o estilo definido pelo CSS, proporcionando uma interface visualmente agradável.
