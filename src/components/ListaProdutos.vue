<template>
    <span v-if="produtos.length == 0"> Não há produtos </span>
    <ul v-else-if="produtos.length > 0">
        <li v-for="(produto, i) in produtos">
            {{ produto.nome }}
            ( {{ produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}) : {{
                produto.quant
            }} =
            <button @click="inc(produto)">+</button>
            <button @click="dec(produto)">-</button>
            {{ totalParcial[i].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
        </li>
    </ul>
    Total: {{ total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
</template>

<script lang="ts" setup>

import { computed, reactive } from 'vue';
import { Produto } from './Produto.vue';
const props = defineProps<{ produtos: Produto[] }>();

const produtos = reactive(props.produtos);

const totalParcial = computed(() => {
    return produtos.map(produto => produto.quant * produto.preco)
})

const total = computed(() => {
    return produtos.reduce((acc, produto) => acc + (produto.quant * produto.preco), 0)
})


const inc = (produto: Produto) => {
    if (produto.quant >= 10) {
        produto.quant = 10;
    } else {
        produto.quant++;
    }
}

const dec = (produto: Produto) => {
    if (produto.quant <= 1) {
        produto.quant = 1;
    } else {
        produto.quant--;
    }
}

</script>