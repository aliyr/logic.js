import {Profile} from "@logic/usage/component/profile";
import {ProfileDetail} from "@logic/usage/component/profile/detail";
import {Product} from "@logic/usage/component/product";
import {ProductDetail} from "@logic/usage/component/product/detail";
import {Home} from "@logic/usage/component/home";

export const routes = [
    {
        path: '/',
        template: Home,
    },
    {
        path: '/profile',
        template: Profile,
        children: [
            {
                path: '/purchases',
                template: ProfileDetail
            }
        ]
    },
    {
        path: '/product',
        template: Product,
        name: '',
        children: [
            {
                path: '/details/:id',
                template: ProductDetail
            },
            {
                path: '/list',
                template: ProductDetail
            }
        ]
    },
]