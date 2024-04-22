import { Meta, StoryObj } from "@storybook/vue3"
import ListaProdutos from "../components/ListaProdutos.vue"
import { Produto } from "../components/Produto.vue"

const meta = {
    title: 'lib/ListraProdutos',
    component: ListaProdutos
} satisfies Meta<typeof ListaProdutos>

export default meta

type Story = StoryObj<typeof meta>

const list: Produto[] = [
    { nome: "Pizza da mãe", descricao: "Saborosa pizza caseira", preco: 79.9, quant: 1},
    { nome: "Churrasquinho", descricao: "Delicioso espetinho", preco: 29.9, quant: 1},
    { nome: "Espaguete   ", descricao: "Apetitoso macarrão", preco: 59.9, quant: 1},
]

export const ListaVazia: Story = {
    args: {
        produtos: []
    }
}

export const ListaPreenchida: Story = {
    args: {
        produtos: list
    }
}