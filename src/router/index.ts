import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPageVue from '@/views/LandingPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LandingPageVue,
    meta: {
      title: 'Home Page',
      metaTags: [
        {
          name: 'description',
          content: 'Chop URL Shortener home page.'
        },
        {
          property: 'og:description',
          content: 'Chop URL Shortener home page.'
        }
      ]
    }
  },
  {
    path: '/shortener',
    name: 'url-shortener',
    component: () => import('@/views/URLComponent.vue'),
    meta: {
      title: 'URL Shortener',
      metaTags: [
        {
          name: 'description',
          content: 'URL Shortener page.'
        },
        {
          property: 'og:description',
          content: 'URL Shortener page.'
        }
      ]
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginComponent.vue'),
    meta: {
      title: 'Login',
      metaTags: [
        {
          name: 'description',
          content: 'Login page.'
        },
        {
          property: 'og:description',
          content: 'Login page.'
        }
      ]
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterComponent.vue'),
    meta: {
      title: 'Sign up',
      metaTags: [
        {
          name: 'description',
          content: 'Sign up page.'
        },
        {
          property: 'og:description',
          content: 'Sign up page.'
        }
      ]
    }
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('@/views/ToolsComponent.vue'),
    meta: {
      title: 'Tools',
      metaTags: [
        {
          name: 'description',
          content: 'Tools page.'
        },
        {
          property: 'og:description',
          content: 'Tools page.'
        }
      ]
    }
  },
  {
    path: '/qr-code',
    name: 'qr-code',
    component: () => import('@/views/QRCodeComponent.vue'),
    meta: {
      title: 'QR Code Generator',
      metaTags: [
        {
          name: 'description',
          content: 'QR code generator page.'
        },
        {
          property: 'og:description',
          content: 'QR code generator page.'
        }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
        title: 'Sorry, Page Not Found',
        metaTags: [
            {
                name: 'description',
                content: 'Route not found.'
            },
            {
                property: 'og:description',
                content: 'Route not found.'
            }
        ]
    }
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
