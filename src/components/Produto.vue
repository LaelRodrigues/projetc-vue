<template>
    <ListaProdutos :produtos="list">
    </ListaProdutos>
</template>

<script lang="ts" setup>

import ListaProdutos from './ListaProdutos.vue';

export type Produto = {
    nome: string,
    descricao: string
    preco: number
    quant: number
}

const list: Produto[] = [
    { nome: "pizza da mãe", descricao: "Saborosa pizza caseira", preco: 79.9, quant: 1 },
    { nome: "Churrasquinho", descricao: "Delicioso espetinho", preco: 29.9, quant: 1 },
    { nome: "Espaguete   ", descricao: "Apetitoso macarrão", preco: 59.9, quant: 1 },
]

</script>