import {createRouter, createWebHistory} from 'vue-router'
import HomePageOne from '../views/home/HomePageOne'
import CreateProduct from '../views/CreateProduct'
import ProductDetails from '../views/ProductDetails'
import Connect from '../views/Connect'
import Collection from '../views/Collection'
import Creators from '../views/Creators'
import AuthorDetails from '../views/AuthorDetails'
import EditProfilePage from '../views/EditProfilePage'
import About from '../views/About'
import Contact from '../views/Contact'
import BlogDetails from '../views/blog/BlogDetails'
import BlogCategoryPosts from '../views/blog/BlogCategoryPosts'
import BlogTagPosts from '../views/blog/BlogTagPosts'
import BlogSingleColumn from '../views/blog/BlogSingleColumn'
import BlogTwoColumn from '../views/blog/BlogTwoColumn'
import BlogThreeColumn from '../views/blog/BlogThreeColumn'
import BlogFourColumn from '../views/blog/BlogFourColumn'
import ExploreOne from '../views/ExploreOne'
import UploadVariants from '../views/UploadVariants'
import Activity from '../views/Activity'
import UpcomingProjects from '../views/UpcomingProjects'
import Login from '../views/Login'
import Signup from '../views/Signup'
import ForgetPassword from '../views/ForgetPassword'
import PrivacyPolicy from '../views/PrivacyPolicy'
import Products from '../views/Products'
import Ranking from '../views/Ranking'
import NotFound from '../views/NotFound'
import Support from '../views/Support'
import TermsCondition from '../views/TermsCondition'
import ComingSoon from '../views/ComingSoon'
import Maintenance from '../views/Maintenance'

const routes = [
    {
        path: '/',
        name: 'HomePageOne',
        component: HomePageOne,
        meta: {
            title: 'SWELLS - Coins Gems Marketplace',
        },
    },
    {
        path: '/create',
        name: 'CreateProduct',
        component: CreateProduct,
        meta: {
            title: 'Create || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetails,
        meta: {
            title: 'Product Details || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/connect',
        name: 'Connect',
        component: Connect,
        meta: {
            title: 'Connect || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/collection',
        name: 'Collection',
        component: Collection,
        meta: {
            title: 'Author || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/creator',
        name: 'Creators',
        component: Creators,
        meta: {
            title: 'Collection || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/author/:id',
        name: 'AuthorDetails',
        component: AuthorDetails,
        meta: {
            title: 'Author Details || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/edit-profile',
        name: 'EditProfilePage',
        component: EditProfilePage,
        meta: {
            title: 'Edit Profile || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: 'Contact || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/category/:slug',
        name: 'BlogCategoryPosts',
        component: BlogCategoryPosts,
        meta: {
            title: 'Blog Category List || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/tag/:slug',
        name: 'BlogTagPosts',
        component: BlogTagPosts,
        meta: {
            title: 'Blog Tag List || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/blog-details/:id',
        name: 'BlogDetails',
        component: BlogDetails,
        meta: {
            title: 'Blog Details || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/blog-single-column',
        name: 'BlogSingleColumn',
        component: BlogSingleColumn,
        meta: {
            title: 'Blog Single Column || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/blog-col-two',
        name: 'BlogTwoColumn',
        component: BlogTwoColumn,
        meta: {
            title: 'Blog Two Column || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/blog-col-three',
        name: 'BlogThreeColumn',
        component: BlogThreeColumn,
        meta: {
            title: 'Blog Three Column || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/blog',
        name: 'BlogFourColumn',
        component: BlogFourColumn,
        meta: {
            title: 'Blog Four Column || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/explore-01',
        name: 'ExploreOne',
        component: ExploreOne,
        meta: {
            title: 'Explore Filter || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/upload-variants',
        name: 'UploadVariants',
        component: UploadVariants,
        meta: {
            title: 'Upload Variants || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/activity',
        name: 'Activity',
        component: Activity,
        meta: {
            title: 'Activity || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/upcoming-projects',
        name: 'UpcomingProjects',
        component: UpcomingProjects,
        meta: {
            title: 'Upcoming Projects || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/sign-up',
        name: 'Signup',
        component: Signup,
        meta: {
            title: 'Signup || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/forget',
        name: 'ForgetPassword',
        component: ForgetPassword,
        meta: {
            title: 'Forget Password || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
        meta: {
            title: 'Privacy Policy || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/product',
        name: 'Products',
        component: Products,
        meta: {
            title: 'Product || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: Ranking,
        meta: {
            title: 'Ranking || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/support',
        name: 'Support',
        component: Support,
        meta: {
            title: 'Ranking || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/terms-condition',
        name: 'TermsCondition',
        component: TermsCondition,
        meta: {
            title: 'Terms & Condition || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/coming-soon',
        name: 'ComingSoon',
        component: ComingSoon,
        meta: {
            title: 'Coming Soon || Nuron - NFT Marketplace Template',
        },
    },
    {
        path: '/maintenance',
        name: 'Maintenance',
        component: Maintenance,
        meta: {
            title: 'Maintenance || Nuron - NFT Marketplace Template',
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
