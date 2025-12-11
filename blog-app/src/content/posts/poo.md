---
title: "Programação Oritentada à Objetos"
description: "A Programação Orientada a Objetos surgiu para organizar a crescente complexidade dos sistemas, aproximando o código do mundo real. Ela se tornou popular por tornar o desenvolvimento mais modular, reutilizável e fácil de manter."
pubDate: 2025-12-01
updatedDate: 2025-12-11
tags:
  - paradigma
  - funcional
  - funçoes puras
  - imutabilidade
draft: false
heroImage: "/blog/images/poo.png"
---

# Programação Orientada a Objetos: que problema ela veio resolver?

Antes de falar de classes, objetos, herança e polimorfismo, vale responder a pergunta essencial:

**Que problema a Programação Orientada a Objetos (POO) tentou resolver?**

A resposta: **organizar a complexidade crescente do software**, aproximando o código do mundo real e reduzindo o caos dos sistemas procedurais.

---

## Antes da POO: o caos dos procedimentos

Antigos sistemas eram escritos de forma puramente procedural, com:

- Funções espalhadas
- Dados separados da lógica
- Uso excessivo de variáveis globais
- Baixa modularidade

Funcionava bem para programas pequenos.

Mas quando o projeto crescia, surgiam problemas:

1. Alto acoplamento entre partes do sistema
2. Dificuldade de localizar regras de negócio
3. Muito código duplicado
4. Alterações quebravam partes inesperadas do sistema

A pergunta que guiou a criação da POO foi:

> Como organizar software para ele acompanhar o mundo real e ser mais fácil de manter?

---

## A solução: modelar o mundo real em objetos

A POO propôs juntar **dados + comportamentos** dentro de estruturas chamadas classes.

Exemplo simples:

```java
public class Cliente {
    private String nome;
    private double limite;

    public Cliente(String nome, double limite) {
        this.nome = nome;
        this.limite = limite;
    }

    public boolean podeComprar(double valor) {
        return valor <= limite;
    }
}
```

Agora:

- A lógica do cliente está dentro do próprio objeto
- Reduzimos duplicações
- A regra de negócio tem um lugar claro para existir

---

## Problemas que a POO resolveu

### 1. **Desorganização do código**

A lógica deixa de ser espalhada em funções soltas e passa a viver nos objetos certos.

### 2. **Baixa coesão e alto acoplamento**

Cada classe cuida de uma responsabilidade clara.

### 3. **Dificuldade de manutenção**

Sistemas ficam mais fáceis de evoluir sem quebrar tudo.

### 4. **Pouco reuso**

Objetos, interfaces e composição favoreceram modularidade.

---

## Conceitos fundamentais da POO

### **Encapsulamento**

Protege o estado interno e expõe apenas o essencial.

### **Herança**

Permite reaproveitar comportamento, mas deve ser usada com cuidado.

### **Polimorfismo**

Permite que diferentes objetos respondam à mesma mensagem de formas distintas.

---

## É perfeita? Não — mas é valiosa

Apesar de poderosa, a POO também recebe críticas:

- Excesso de classes
- Abuso de herança
- Objetos anêmicos
- Complexidade desnecessária quando usada de forma equivocada

Hoje, ela convive com princípios do paradigma funcional, criando um estilo híbrido moderno muito comum em linguagens atuais.

---

## Conclusão

A Programação Orientada a Objetos surgiu para resolver um problema real:

> **Como organizar sistemas grandes de forma compreensível, modular e evolutiva.**

E ainda hoje é uma das formas mais eficazes de estruturar software, especialmente quando combinada com boas práticas e conceitos funcionais modernos.
