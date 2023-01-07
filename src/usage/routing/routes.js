import {Profile} from "@logic/usage/component/profile";
import {ProfileDetail} from "@logic/usage/component/profile/detail";
import {Product} from "@logic/usage/component/product";
import {ProductDetail} from "@logic/usage/component/product/detail";
import {Home} from "@logic/usage/component/home";
import {ProductList} from "@logic/usage/component/product/list";
import {ProductSlug} from "@logic/usage/component/product/slug";

export const routes = [
    {
        path: '/',
        template: Home,
        name: 'home'
    },
    {
        path: '/profile',
        template: Profile,
        name: 'profile',
        children: [
            {
                path: '/purchases',
                template: ProfileDetail,
                name: 'profilePurchases'
            }
        ]
    },
    {
        path: '/product',
        template: Product,
        name: 'product',
        children: [
            {
                path: '/:id',
                template: ProductDetail,
                name: 'productDetail',
                children: [
                    {
                        path: '/:slug',
                        template: ProductSlug,
                        name: 'productSlug'
                    }
                ]
            },
            {
                path: '/list',
                template: ProductList,
                name: 'productList'
            }
        ]
    },
]