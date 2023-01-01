import {Profile} from "../component/profile";
import {ProfileDetail} from "../component/profile/detail";
import {Product} from "../component/product";
import {ProductDetail} from "../component/product/detail";
import {Home} from "../component/home";

export const routes = [
    {
        path: '/',
        template: Home
    },
    {
        path: '/profile',
        template: Profile,
        children: [
            {
                path: '$id',
                template: ProfileDetail
            }
        ]
    },
    {
        path: '/product',
        template: Product,
        children: [
            {
                path: '$id',
                template: ProductDetail
            }
        ]
    },
]