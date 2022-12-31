import {Profile} from "../component/profile";
import {ProfileDetail} from "../component/profile/detail";
import {Product} from "../component/product";
import {ProductDetail} from "../component/product/detail";

export const routes = [
    {
        path: 'profile',
        template: Profile,
        children: [
            {
                path: '$id',
                template: ProfileDetail
            }
        ]
    },
    {
        path: 'product',
        template: Product,
        children: [
            {
                path: '$id',
                template: ProductDetail
            }
        ]
    },
]