import { defineType, defineField} from "sanity"

export const endereco = defineType({
    name: 'endereco',
    type: 'document',
    title: 'endereco',
    fields:[
        defineField({
            name:'rua',
            title: 'rua',
            type: 'string' 
        }),
        defineField({
            name:'numero',
            title: 'numero',
            type: 'string' 
        }),
        defineField({
            name:'bairro',
            title: 'bairro',
            type: 'string' 
        }),
        defineField({
            name:'cidade',
            title: 'cidade',
            type: 'string' 
        }),
        defineField({
            name:'estado',
            title: 'estado',
            type: 'string' 
        }),
        defineField({
            name:'pais',
            title: 'pais',
            type: 'string' 
        }),
        defineField({
            name:'cep',
            title: 'cep',
            type: 'string' 
        })
    ]
})