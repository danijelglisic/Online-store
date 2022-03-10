import { applySnapshot, cast, types } from 'mobx-state-tree'
import React from 'react'
import usePurchaseQuery from '../hooks/usePurchaseQuery';

const Category = types.model({
    id: types.optional(types.string, ''),
    name: types.optional(types.string, ''),
    imageUrl: types.optional(types.string, '')
}).actions(self => ({
    setId(id: string) {
        self.id = id;
    },
    setName(name: string) {
        self.name = name;
    },
    setImageUrl(name: string) {
        self.name = name;
    }
}))

export const Article = types.model({
    id: types.optional(types.string, ''),
    name: types.optional(types.string, ''),
    price: types.optional(types.number, 0.00),
    imageUrl: types.optional(types.string, ''),
    category: Category
}).actions(self => ({
    setId(id: string) {
        self.id = id;
    },
    setName(name: string) {
        self.name = name;
    },
    setPrice(price: number) {
        self.price = price;
    },
    setImageUrl(name: string) {
        self.name = name;
    },
    setCategory(category: typeof self.category) {
        self.category = category;
    }
}
))

export const PurchaseState = types.model({
    id: types.optional(types.string, ''),
    articles: types.array(Article)
})
    .actions(self => ({
        useFetchPurchase(orderId: string) {
            self.articles.clear()
            const result = usePurchaseQuery(orderId)
            console.log("res je:>>", result)
            if (result.loading) return result
            if (result.error) return result
            const array = result.data.purchase
            self.id = orderId;
            console.log("arrej je: ", array)
            for (let i = 0; i < array.length; i++) {
                console.log("ID JE: ", array[i].id)
                console.log("ID JE: ", self)
                self.articles.push({
                    id: array[i].id, name: array[i].name, price: array[i].price, imageUrl: array[i].image_url,
                    category: { id: array[i].category.id, name: array[i].category.name, imageUrl: array[i].category.image_url }
                })
            }
        }
    })).create()
